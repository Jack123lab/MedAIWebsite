import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const networkPath = path.join(root, "network.html");
const outputPath = path.join(root, "assets", "data", "network-org-logos.json");

function getAttr(source, name) {
  const match = source.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return match ? match[1] : "";
}

function resolveUrl(url, base) {
  try {
    return new URL(url, base).toString();
  } catch {
    return "";
  }
}

async function probeImage(url) {
  if (!url) return false;
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    const type = response.headers.get("content-type") || "";
    return response.ok && type.startsWith("image/");
  } catch {
    return false;
  }
}

async function findOfficialLogo(site) {
  const home = resolveUrl(site, site);
  if (!home) return "";

  let html = "";
  try {
    const response = await fetch(home, { redirect: "follow" });
    if (response.ok) html = await response.text();
  } catch {
    html = "";
  }

  const candidates = [];
  const relIconPattern = /<link\b[^>]*rel=["'][^"']*(?:icon|apple-touch-icon)[^"']*["'][^>]*>/gi;
  for (const tag of html.matchAll(relIconPattern)) {
    candidates.push(resolveUrl(getAttr(tag[0], "href"), home));
  }

  const metaImagePattern = /<meta\b[^>]*(?:property|name)=["'](?:og:image|twitter:image)["'][^>]*>/gi;
  for (const tag of html.matchAll(metaImagePattern)) {
    candidates.push(resolveUrl(getAttr(tag[0], "content"), home));
  }

  const logoImagePattern = /<img\b[^>]*(?:logo|brand)[^>]*>/gi;
  for (const tag of html.matchAll(logoImagePattern)) {
    candidates.push(resolveUrl(getAttr(tag[0], "src"), home));
  }

  candidates.push(
    resolveUrl("/favicon.ico", home),
    resolveUrl("/favicon.png", home),
    resolveUrl("/apple-touch-icon.png", home),
    resolveUrl("/logo.png", home),
  );

  for (const candidate of [...new Set(candidates.filter(Boolean))]) {
    if (await probeImage(candidate)) return candidate;
  }
  return "";
}

const html = await readFile(networkPath, "utf8");
const logoPattern = /<span\b[^>]*class="[^"]*\bnetwork-org-logo\b[^"]*"[^>]*>/gi;
const organizations = [...html.matchAll(logoPattern)].map((match) => ({
  name: getAttr(match[0], "data-org-name"),
  type: getAttr(match[0], "data-logo-type"),
  officialSite: getAttr(match[0], "data-official-site"),
})).filter((item, index, all) => item.name && all.findIndex((candidate) => candidate.name === item.name) === index);

const results = [];
for (const organization of organizations) {
  const logo = organization.officialSite ? await findOfficialLogo(organization.officialSite) : "";
  results.push({ ...organization, logo, source: logo ? "official-site" : "fallback" });
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(results, null, 2)}\n`, "utf8");
console.log(`Wrote ${results.length} organization logo records to ${outputPath}`);

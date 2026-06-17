const pageKey = document.querySelector("[data-page]")?.dataset.page || "index";

const navItems = [
  ["index.html", "Overview"],
  ["home.html", "Experts"],
  ["tutorials.html", "Courses"],
  ["community.html", "Community"],
  ["doctor.html", "Clinicians"],
  ["research.html", "Evidence"],
  ["demos.html", "Tools"],
  ["datasets-tools.html", "Data and Tools"],
  ["contribute.html", "Submit"],
  ["auth.html", "Access"],
  ["profile.html", "Profile"],
];

const pageData = {
  index: {
    title: "Medical AI Intelligence and Collaboration Hub",
    eyebrow: "Medical AI Intelligence",
    lead: "Track trusted medical AI sources, compare assistant workflows, and enter the expert collaboration areas from one clean hub.",
    cta: [["Explore experts", "home.html"], ["Review tools", "demos.html"]],
    sections: [
      {
        title: "Trusted Source Watch",
        text: "The portal keeps journal, clinical community, policy, and product signals separated so readers can scan trends without mixing evidence levels.",
        cards: [
          ["Nature Medicine", "Translational medical AI, multimodal models, validation, and safety."],
          ["The Lancet", "Global health, specialty care, equity, and system level impact."],
          ["JAMA Network", "Quality, policy, audit, and deployment boundaries."],
          ["NEJM", "Clinical trials, patient safety, and evidence updates."],
        ],
      },
      {
        title: "Assistant Matrix",
        text: "Clinical, literature, guideline, imaging, research, and governance assistants can be matched with GPT, Claude, Gemini, DeepSeek, Qwen, GLM, Llama, Mistral, MedGemma, BioGPT, and PubMedBERT.",
        cards: [
          ["Clinical Assistant", "Structured notes, care questions, and clinician review workflows."],
          ["Literature Assistant", "Study design, outcomes, limitations, and citation aware summaries."],
          ["Guideline Assistant", "RAG workflows for source grounded recommendations and update tracking."],
          ["Governance Assistant", "Privacy checks, risk labels, audit logs, and human confirmation."],
        ],
      },
    ],
  },
  home: {
    title: "Expert Collaboration Platform",
    eyebrow: "Medical AI Expert Network",
    lead: "Bring clinicians, researchers, AI engineers, governance specialists, educators, and product partners into one evidence minded collaboration platform.",
    cta: [["Apply for access", "auth.html"], ["Join discussion", "community.html"]],
    sections: [
      {
        title: "Expert Roles",
        text: "Each role owns a clear part of the workflow, from clinical problem framing to model evaluation and product transfer.",
        cards: [
          ["Clinical Specialists", "Define real clinical questions and review AI output boundaries."],
          ["AI Engineers", "Build RAG, structuring, evaluation, and knowledge base prototypes."],
          ["Research Methodologists", "Refine PICO, evidence grading, reproducibility, and study plans."],
          ["Data Governance Experts", "Shape de-identification, consent, audit, and risk controls."],
        ],
      },
      {
        title: "Core Modules",
        text: "Courses, community discussions, tools, and evidence records form the operating loop for expert collaboration.",
        cards: [
          ["Courses", "Medical AI foundations, RAG, literature review, research design, and compliance."],
          ["Community", "De-identified clinical and research discussions with professional boundaries."],
          ["Tools", "Prototype validation for literature, guidelines, notes, and research workflows."],
          ["Evidence", "Traceable cases, methods, limitations, and collaboration records."],
        ],
      },
    ],
  },
  tutorials: {
    title: "Courses",
    eyebrow: "Learning Path",
    lead: "Courses are organized around clinical and research workflows, with clear goals, audiences, examples, and review boundaries.",
    cta: [["Open tools", "demos.html"], ["Submit material", "contribute.html"]],
    sections: [
      {
        title: "Course Tracks",
        text: "Each track starts with practical tasks and ends with human review expectations.",
        cards: [
          ["Medical AI Foundations", "Capabilities, risks, privacy, and clinician oversight."],
          ["Structured Literature Reading", "PICO, study design, outcomes, findings, and limitations."],
          ["Medical RAG", "Chunking, retrieval, source citation, and hallucination control for guidelines."],
          ["AI Assisted Research", "Topic framing, search strategies, research questions, and manuscript support."],
        ],
      },
    ],
  },
  community: {
    title: "Verified Medical Community",
    eyebrow: "Professional Discussion",
    lead: "A verified community for clinicians and medical students to discuss de-identified cases, guidelines, tools, research design, and governance.",
    cta: [["Access review", "auth.html"], ["Submit a topic", "contribute.html"]],
    sections: [
      {
        title: "Discussion Areas",
        text: "Specialty first navigation keeps clinical context visible before a post enters broader discussion.",
        cards: [
          ["Internal Medicine", "Cardiology, respiratory, gastroenterology, nephrology, endocrine, and neurology topics."],
          ["Surgery and Perioperative Care", "Operative pathways, complications, recovery, and multidisciplinary review."],
          ["Emergency and ICU", "Triage, time critical care, monitoring, and severity scoring."],
          ["Imaging and Pathology", "Reports, annotations, quality control, and multimodal validation."],
        ],
      },
      {
        title: "Posting Rules",
        text: "Do not include names, identifiers, contact details, exact timelines, or unreviewed diagnostic claims.",
        cards: [
          ["Clinical Text", "De-identified summaries, problem lists, and care pathway questions."],
          ["Guidelines", "Recommendation level, applicable population, evidence source, and update notes."],
          ["Tool Experience", "RAG, summarization, structuring, quality control, and workflow lessons."],
          ["Governance", "Privacy, consent, audit, accountability, and publication risk."],
        ],
      },
    ],
  },
  doctor: {
    title: "Clinician Workspace",
    eyebrow: "Clinical Material Workflow",
    lead: "A workspace concept for verified clinicians to turn raw material into de-identified, reviewable, and discussable collaboration records.",
    cta: [["Open community", "community.html"], ["Access review", "auth.html"]],
    sections: [
      {
        title: "Workflow",
        text: "The workspace focuses on preparation and governance before any material enters discussion.",
        cards: [
          ["Upload Material", "Choose specialty, material type, de-identified case code, and authorization notes."],
          ["De-identification Check", "Review names, medical record numbers, barcodes, screens, and exact timelines."],
          ["AI Extraction", "Draft case summaries, key questions, PICO items, and evidence lists."],
          ["Start Discussion", "Publish a public version only after clinician review."],
        ],
      },
      {
        title: "Safety Checklist",
        text: "Real deployment requires backend permissions, encrypted storage, audit logs, and deletion policies.",
        cards: [
          ["Minimum Necessary Data", "Keep only fields needed for teaching or research discussion."],
          ["Image Review", "Crop wristbands, bed cards, screen corners, and report identifiers."],
          ["Human Confirmation", "Mark AI assisted text as reviewed before sharing."],
          ["Audit Trail", "Record access, edits, approvals, and deletion decisions."],
        ],
      },
    ],
  },
  research: {
    title: "Evidence and Product Updates",
    eyebrow: "Weekly Medical AI Watch",
    lead: "Track papers, products, regulatory signals, and methods that deserve expert discussion in medical AI.",
    cta: [["Review tools", "demos.html"], ["Submit evidence", "contribute.html"]],
    sections: [
      {
        title: "Editorial Standard",
        text: "Each item should have a traceable source and a clear reason why it matters to medical AI practice.",
        cards: [
          ["Clinical Impact", "Does it change care, documentation, triage, risk, or collaboration?"],
          ["Evidence Quality", "Study design, validation setting, reporting transparency, and limitations."],
          ["Workflow Fit", "How the method enters real clinical or research processes."],
          ["Governance", "Regulatory status, intended use, data protection, and monitoring."],
        ],
      },
      {
        title: "Watch Areas",
        text: "The page separates research updates from product and regulatory movement.",
        cards: [
          ["AI Scribes", "Documentation support, communication effects, accuracy, and review cost."],
          ["Emergency Decision Support", "Clinical trials and workflow validation for acute care."],
          ["Oncology Governance", "Assurance frameworks, staging complexity, and care coordination."],
          ["Medical Device AI", "Approval state, intended use, update control, and real world monitoring."],
        ],
      },
    ],
  },
  demos: {
    title: "Tools",
    eyebrow: "Prototype Gallery",
    lead: "Medical AI prototypes for teaching and research exchange, using public or de-identified material only.",
    cta: [["Submit a tool", "contribute.html"], ["Open courses", "tutorials.html"]],
    sections: [
      {
        title: "Tool Examples",
        text: "Each tool description states the input boundary, output structure, and review requirement.",
        cards: [
          ["Literature Summarizer", "Summarize study question, methods, results, and limitations."],
          ["Clinical Guideline QA", "Source grounded answers with recommendation scope and citation context."],
          ["Clinical Note Structuring", "Convert de-identified text into complaint, history, tests, and problem list."],
          ["Research Topic Assistant", "Draft research questions, keywords, and search strategy candidates."],
        ],
      },
    ],
  },
  "datasets-tools": {
    title: "Data and Tool Directory",
    eyebrow: "Data and Tool Market",
    lead: "A unified entry for medical AI datasets, MCP tools, paid toolkits, and compliant listing workflows.",
    cta: [["Browse tools", "#tool-directory"], ["Submit resource", "contribute.html"]],
    sections: [
      {
        title: "Hot Tool Radar",
        text: "Daily highlights can later connect to an editorial backend, RSS feed, or ranked tool API.",
        cards: [
          ["HuatuoGPT", "Medical question answering and Chinese medical model research entry."],
          ["MedGemma", "Open medical text and multimodal model resources."],
          ["MONAI", "Medical imaging AI framework for annotation, training, and evaluation."],
          ["PhysioNet", "Open medical data resources for research and benchmarking."],
        ],
      },
      {
        title: "Directory Types",
        text: "Every listing should include an external link, use case, authorization boundary, and quality note.",
        cards: [
          ["MCP Gateway", "Literature search, guideline QA, de-identification, and report reading tools."],
          ["Datasets", "Public data, de-identified samples, annotations, and benchmark sets."],
          ["Toolkits", "RAG, report summarization, benchmark testing, and teaching item banks."],
          ["Listing Workflow", "Collect, review, publish, and update resources with audit notes."],
        ],
      },
    ],
  },
  contribute: {
    title: "Submit and Curate",
    eyebrow: "Submission",
    lead: "Submit tutorials, case discussion methods, tool descriptions, prompt templates, reproduction notes, and application cases.",
    cta: [["Open community", "community.html"], ["Review evidence", "research.html"]],
    sections: [
      {
        title: "Accepted Content",
        text: "Each submission should state source, intended use, limits, and review method.",
        cards: [
          ["Courses and Tutorials", "Medical AI foundations, literature reading, RAG, research writing, and compliance."],
          ["Discussion Records", "Clinical or research questions organized into traceable notes."],
          ["Tools and Workflows", "Demos, repositories, examples, risk notes, and human review steps."],
          ["Prompt Templates", "Use case, input sample, output format, limitations, and counterexamples."],
        ],
      },
      {
        title: "Before Submitting",
        text: "Do not include patient names, identification numbers, contact details, record numbers, image numbers, or addresses.",
        cards: [
          ["Source", "Name the public source or explain why the material is de-identified."],
          ["Scope", "Define what the content can and cannot support."],
          ["Review", "State who reviewed the output and how errors were checked."],
          ["Links", "Attach repository, demo, paper, or issue references when available."],
        ],
      },
    ],
  },
  auth: {
    title: "Access and Credential Review",
    eyebrow: "Identity Review",
    lead: "The medical community is intended for verified physicians and medical students. Physicians submit licensure proof; students submit student or enrollment proof.",
    cta: [["Open community", "community.html"], ["View profile", "profile.html"]],
    sections: [
      {
        title: "Access Steps",
        text: "A production system should encrypt documents, restrict access, retain audit logs, and delete or de-identify review files by policy.",
        cards: [
          ["Sign In", "Save display name and contact details."],
          ["Submit Material", "Provide physician or student credential evidence."],
          ["Manual Review", "Open community browsing and posting after approval."],
          ["De-identification Check", "Screen posts for sensitive identifiers before publishing."],
        ],
      },
    ],
  },
  profile: {
    title: "Profile",
    eyebrow: "Member Workspace",
    lead: "A profile area for access status, saved discussions, review state, and contribution records.",
    cta: [["Access review", "auth.html"], ["Open community", "community.html"]],
    sections: [
      {
        title: "Profile Summary",
        text: "The static prototype keeps profile state local to the browser. A production version should use account permissions and audit records.",
        cards: [
          ["Access State", "Guest, signed in, pending, or verified."],
          ["Credential", "Physician or student review status."],
          ["Saved Posts", "Collected discussion threads and tool notes."],
          ["Contributions", "Submitted courses, prompts, tools, or evidence records."],
        ],
      },
    ],
  },
};

function currentChineseHref() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  return `../${file}`;
}

function injectPageLanguageFilter() {
  if (document.querySelector(".page-language-filter")) return;
  const file = window.location.pathname.split("/").pop() || "index.html";
  const filter = document.createElement("nav");
  filter.className = "page-language-filter";
  filter.setAttribute("aria-label", "Language filter");
  filter.innerHTML = `
    <a href="../${file}">Chinese</a>
    <a class="active" href="${file}" aria-current="page">English</a>
  `;
  document.body.prepend(filter);
}

function renderNav() {
  return `
    <header class="site-header">
      <nav class="nav" aria-label="Primary navigation">
        <a class="brand" href="index.html">
          <span class="brand-mark">H</span>
          <span class="brand-text"><strong>Happy medical AI</strong><span>Medical AI Expert Network</span></span>
        </a>
        <div class="nav-links">
          ${navItems.map(([href, label]) => `<a class="${href === `${pageKey}.html` ? "active" : ""}" href="${href}">${label}</a>`).join("")}
          <span class="language-switch" aria-label="Language switch">
            <span aria-current="page">English</span>
            <a href="${currentChineseHref()}">Chinese</a>
          </span>
        </div>
      </nav>
    </header>`;
}

function renderCards(cards) {
  return cards.map(([title, text]) => `
    <article class="clinical-card">
      <span>${title}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>`).join("");
}

function renderSection(section, index) {
  return `
    <section class="section compact ${index % 2 ? "alt-band" : ""}">
      <div class="container">
        <div class="section-head clean">
          <div>
            <p class="eyebrow">${section.title}</p>
            <h2>${section.title}</h2>
            <p>${section.text}</p>
          </div>
        </div>
        <div class="clinical-cards two-up">${renderCards(section.cards)}</div>
      </div>
    </section>`;
}

function renderPage() {
  const data = pageData[pageKey] || pageData.index;
  document.title = `${data.title} | Happy medical AI`;
  document.body.className = `en-page en-${pageKey}`;
  document.querySelector("#enApp").innerHTML = `
    ${renderNav()}
    <main>
      <section class="page-title">
        <div class="container">
          <p class="eyebrow">${data.eyebrow}</p>
          <h1>${data.title}</h1>
          <p>${data.lead}</p>
          <div class="hero-actions">
            ${data.cta.map(([label, href], index) => `<a class="btn ${index === 0 ? "primary" : ""}" href="${href}">${label}</a>`).join("")}
          </div>
        </div>
      </section>
      ${data.sections.map(renderSection).join("")}
    </main>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div><h3>Happy medical AI</h3><p>Evidence minded medical AI collaboration for clinical, research, governance, and product work.</p></div>
        <div><h4>Platform</h4><a href="home.html">Experts</a><a href="community.html">Community</a></div>
        <div><h4>Knowledge</h4><a href="tutorials.html">Courses</a><a href="research.html">Evidence</a></div>
        <div><h4>Build</h4><a href="demos.html">Tools</a><a href="contribute.html">Submit</a></div>
      </div>
    </footer>`;
}

renderPage();
injectPageLanguageFilter();

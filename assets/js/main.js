const authKey = "hmaiAuthState";
const postStorageKey = "hmaiForumPosts";
const reactionStorageKey = "hmaiPostReactions";
const profileAvatarStorageKey = "hmaiProfileAvatar";
const apiBase = (window.HMAI_API_BASE || "").replace(/\/$/, "");

const categoryLabels = {
  clinical: "临床文本",
  guideline: "指南问答",
  research: "科研设计",
  tool: "工具经验",
  ethics: "合规伦理",
};

const forumTagLabels = {
  all: "All",
  clinical: "Clinical",
  guideline: "Guidelines",
  tool: "Tools",
  research: "Research",
  ethics: "Governance",
  clinician: "医生/医学生",
  medicalLLM: "Medical LLMs",
  agent: "Agent",
  aiHealthcare: "AI for Healthcare",
  multimodal: "Multi-modal",
};

const siteNavItems = [
  { href: "index.html", label: "首页", active: ["index.html", "gmai-license.html", ""] },
  { href: "learning.html", label: "内容", active: ["learning.html", "learning-item.html", "tutorials.html", "learning-videos.html", "learning-tutorial.html", "learning-question-bank.html", "learning-standardized-patient.html", "teaching-open-tutorials.html", "teaching-question-bank.html", "teaching-videos.html", "teaching-virtual-patient.html"] },
  { href: "network.html", label: "社区", active: ["network.html", "network-yu-guangjun.html"] },
  { href: "community.html", label: "讨论区", active: ["community.html", "clinician-discussion.html"] },
  { href: "datasets.html", label: "数据集", active: ["datasets.html"] },
  { href: "tools.html", label: "工具库", active: ["tools.html", "demos.html", "datasets-tools.html"] },
  { href: "benchmark.html", label: "Benchmark", active: ["benchmark.html", "benchmark-gdb.html", "benchmark-liveclin.html", "benchmark-healthbench-tcm.html", "benchmark-doctors-last-exam.html", "benchmark-cmb.html"] },
  { href: "crowdsourcing.html", label: "众包平台", active: ["crowdsourcing.html"] },
  { href: "profile.html", label: "用户", active: ["profile.html", "auth.html", "doctor.html"] },
];

function normalizeSiteHeader() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-header .nav").forEach((nav) => {
    const brand = nav.querySelector(".brand");
    if (brand) {
      brand.setAttribute("href", "index.html");
      brand.innerHTML = '<span class="brand-mark">F</span><span class="brand-text"><strong>Freedom AI</strong><span>医学 AI 社区</span></span>';
    }

    const search = nav.querySelector(".site-search");
    if (search) {
      search.setAttribute("action", "search.html");
      search.setAttribute("method", "get");
      search.setAttribute("role", "search");
      search.setAttribute("aria-label", "站内搜索");
      search.innerHTML = '<label class="sr-only" for="siteSearchInput">搜索</label><input id="siteSearchInput" name="q" type="search" placeholder="搜索" autocomplete="off" /><button type="submit">搜索</button>';
    }

    const links = nav.querySelector(".nav-links");
    if (!links) return;
    links.innerHTML = siteNavItems.map((item) => {
      const active = item.active.includes(currentPath) ? ' class="active"' : "";
      return `<a${active} href="${item.href}">${item.label}</a>`;
    }).join("");
  });
}

const siteSearchIndex = [
  {
    title: "首页",
    url: "index.html",
    category: "入口",
    text: "Freedom AI 医学 AI 新闻 Agent 对话框 热点 期刊 临床验证 安全性评估",
  },
  {
    title: "课程",
    url: "learning.html",
    category: "学习",
    text: "课程 教学 视频 Tutorial 题库 标准病人 医学 AI 入门 RAG 多模态 数据治理 临床科研",
  },
  {
    title: "开放教程",
    url: "tutorials.html",
    category: "学习",
    text: "教程 课程 medical ai intro clinical guidelines rag ai for medical research",
  },
  {
    title: "科普",
    url: "popular-science.html",
    category: "公众",
    text: "科普 医学 AI 是什么 不能替代医生 医疗数据脱敏 普通人 如何看 AI 回答 风险提示",
  },
  {
    title: "GMAI License",
    url: "gmai-license.html",
    category: "协议",
    text: "GMAI License Generalist Medical AI 协议 医学 AI 许可 模型 数据 工具 评测 隐私 安全 人工监督 合规",
  },
  {
    title: "社区",
    url: "network.html",
    category: "社区",
    text: "社区 医生 医院 研究者 个人主页 论文 获奖 任职 治疗专长 专家网络",
  },
  {
    title: "于广军",
    url: "network-yu-guangjun.html",
    category: "医生",
    text: "于广军 Guangjun Yu 医生 教授 医疗大数据 互联网医疗 智慧医院 高危儿管理 多动症 医教结合 论文 奖项 会议 认领主页",
  },
  {
    title: "讨论区",
    url: "community.html",
    category: "社区",
    text: "讨论区 病例 指南 问答 临床文本 科研设计 工具经验 合规伦理 医生 医学生 认证",
  },
  {
    title: "数据集",
    url: "datasets.html",
    category: "数据",
    text: "数据集 dataset 医疗数据 脱敏 标注 下载 市场 状态 benchmark 任务",
  },
  {
    title: "工具库",
    url: "tools.html",
    category: "工具",
    text: "工具库 医学 AI 工具 MCP 文献 检索 指南 问答 报告 结构化 免费开放",
  },
  {
    title: "工具示例",
    url: "demos.html",
    category: "工具",
    text: "工具 示例 科研选题 文献总结 指南问答 临床记录结构化 prototype demo",
  },
  {
    title: "Benchmark",
    url: "benchmark.html",
    category: "评测",
    text: "benchmark 模型评测 医学问答 虚拟病人 影像报告 工具调用 准确性 鲁棒性 安全边界",
  },
  {
    title: "GDB / GlobalDentBench",
    url: "benchmark-gdb.html",
    category: "评测",
    text: "GDB GlobalDentBench dental benchmark dentistry clinical reasoning 牙科 临床推理 多国家 专家校准 安全风险",
  },
  {
    title: "LIVECLIN",
    url: "benchmark-liveclin.html",
    category: "评测",
    text: "LIVECLIN LiveClin live clinical benchmark leakage case reports questions 多模态 病例 临床路径 半年更新",
  },
  {
    title: "HealthBench-TCM",
    url: "benchmark-healthbench-tcm.html",
    category: "评测",
    text: "HealthBench TCM 中医 健康咨询 rubric 医生评分 安全性 语义一致性 风险提示",
  },
  {
    title: "Doctors Last Exam",
    url: "benchmark-doctors-last-exam.html",
    category: "评测",
    text: "Doctors Last Exam expert exam medical benchmark 高难度 医生基线 专家审核 题库 临床综合推理",
  },
  {
    title: "CMB",
    url: "benchmark-cmb.html",
    category: "评测",
    text: "CMB Comprehensive Medical Benchmark Chinese 中文医学 benchmark 医学考试 临床咨询 本土语境 中医",
  },
  {
    title: "众包平台",
    url: "crowdsourcing.html",
    category: "协作",
    text: "众包 标注 评测 题库 资料治理 医生 学生 机构 任务 合作",
  },
  {
    title: "成果",
    url: "research.html",
    category: "研究",
    text: "成果 论文讨论 产品发布 研究更新 证据 方法路径 来源 局限性",
  },
  {
    title: "投稿",
    url: "contribute.html",
    category: "共建",
    text: "投稿 提交 教程 病例讨论 工具说明 Prompt 模板 论文复现 科普稿 benchmark",
  },
  {
    title: "个人与认证",
    url: "profile.html",
    category: "账号",
    text: "用户 个人 登录 认证 资格审核 医师资格 学生证 访问权限",
  },
];

const seedPosts = [
  {
    id: "seed-privacy-note",
    title: "临床文本如何脱敏后再交给 AI 处理？",
    category: "clinical",
    dept: "全科 / 医务管理",
    body: "建议从字段删除、规则替换、院内工具、结构化输出和人工复核流程几个层面建立最小必要信息表。",
    author: "社区编辑部",
    createdAt: "2026-06-15T08:30:00+08:00",
    replies: 18,
    views: 426,
    likes: 32,
    favorites: 21,
    pinned: true,
    tags: ["clinical", "medicalLLM", "aiHealthcare", "ethics"],
  },
  {
    id: "seed-guideline-rag",
    title: "指南推荐意见更新后，如何整理变化点？",
    category: "guideline",
    dept: "心血管 / 肿瘤 / 药学",
    body: "建议输出推荐意见、证据等级、变化原因、适用人群和引用来源，避免只给结论。",
    author: "指南共读小组",
    createdAt: "2026-06-14T17:40:00+08:00",
    replies: 12,
    views: 318,
    likes: 27,
    favorites: 18,
    pinned: false,
    tags: ["guideline", "medicalLLM", "aiHealthcare"],
  },
  {
    id: "seed-pico-screening",
    title: "AI 生成的 PICO 问题如何人工筛选？",
    category: "research",
    dept: "临床科研",
    body: "AI 可以生成候选问题，但创新性、伦理边界、数据可得性和可实施性仍需人工判断。",
    author: "科研方法组",
    createdAt: "2026-06-13T20:10:00+08:00",
    replies: 9,
    views: 275,
    likes: 19,
    favorites: 15,
    pinned: false,
    tags: ["research", "agent", "aiHealthcare"],
  },
  {
    id: "seed-tool-eval",
    title: "医学文献总结工具应该如何做质量评估？",
    category: "tool",
    dept: "文献阅读",
    body: "可以从关键信息遗漏、错误推断、结论夸大、引用来源和人工复核成本几个角度建立评估表。",
    author: "工具评测组",
    createdAt: "2026-06-12T11:25:00+08:00",
    replies: 7,
    views: 198,
    likes: 16,
    favorites: 10,
    pinned: false,
    tags: ["tool", "medicalLLM", "agent"],
  },
  {
    id: "seed-ethics-review",
    title: "哪些医学 AI 使用场景需要额外审核？",
    category: "ethics",
    dept: "合规伦理",
    body: "涉及真实患者资料、诊疗建议、自动化决策、外部平台上传和科研发表时，应优先考虑伦理、隐私和责任边界。",
    author: "合规工作组",
    createdAt: "2026-06-11T09:00:00+08:00",
    replies: 15,
    views: 361,
    likes: 24,
    favorites: 19,
    pinned: false,
    tags: ["ethics", "aiHealthcare"],
  },
];

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getAuthState() {
  return readJson(authKey, { status: "guest", name: "访客", role: "guest", roleLabel: "访客" });
}

function setAuthState(state) {
  writeJson(authKey, { ...getAuthState(), ...state });
}

function getSafeNextUrl() {
  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") || "";
  return /^[\w.-]+\.html(?:#[\w-]+)?$/.test(next) ? next : "";
}

function redirectGuestProfile() {
  if (!document.body.classList.contains("profile-page")) return false;
  const state = getAuthState();
  if (state.status && state.status !== "guest") return false;
  window.location.replace("auth.html?next=profile.html&reason=profile");
  return true;
}

function hasCommunityCredential(auth = getAuthState()) {
  if (auth.status !== "verified") return false;
  if (auth.role === "doctor") return auth.proofType === "license";
  if (auth.role === "student") return auth.proofType === "student_card";
  return false;
}

function communityCredentialText(auth = getAuthState()) {
  if (auth.role === "doctor") return "已核验医师资格或执业证明";
  if (auth.role === "student") return "已核验学生证或在读证明";
  return "需提交医师资格或在读证明";
}

function getForumPosts() {
  const localPosts = readJson(postStorageKey, []);
  const usedIds = new Set(localPosts.map((post) => post.id));
  return [...localPosts, ...seedPosts.filter((post) => !usedIds.has(post.id))];
}

function getReactions() {
  return readJson(reactionStorageKey, {});
}

function renderProfileAvatar() {
  const image = document.querySelector("#profileAvatarImage");
  if (!image) return;

  const savedAvatar = localStorage.getItem(profileAvatarStorageKey);
  if (savedAvatar) image.src = savedAvatar;
}

function wireProfileAvatarEditor() {
  const button = document.querySelector("#profileAvatarButton");
  const input = document.querySelector("#profileAvatarInput");
  const image = document.querySelector("#profileAvatarImage");
  if (!button || !input || !image) return;

  renderProfileAvatar();

  button.addEventListener("click", () => input.click());
  input.addEventListener("change", () => {
    const file = input.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("请选择图片文件。");
      input.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("头像图片不能超过 2MB。");
      input.value = "";
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const result = reader.result;
      if (typeof result !== "string") return;
      image.src = result;
      try {
        localStorage.setItem(profileAvatarStorageKey, result);
      } catch {
        alert("浏览器本地存储空间不足，头像仅在当前页面预览。");
      }
    });
    reader.readAsDataURL(file);
  });
}

function hasSensitivePattern(text) {
  const patterns = [
    /\b\d{17}[\dXx]\b/,
    /\b1[3-9]\d{9}\b/,
    /(住院号|门诊号|病案号|身份证|手机号|电话|姓名)[:：]?\s*[\w\u4e00-\u9fa5-]{2,}/,
  ];
  return patterns.some((pattern) => pattern.test(text));
}

function updateAuthCard() {
  const card = document.querySelector("#authStateCard");
  if (!card) return;

  const state = getAuthState();
  const statusText = {
    guest: "未登录",
    logged_in: "已登录",
    pending: "审核中",
    verified: "已认证",
  }[state.status || "guest"];

  card.innerHTML = `
    <span>${statusText}</span>
    <strong>${state.name || "访客"}</strong>
    <p>${state.roleLabel || "完成身份信息后，可进入社区、投稿和医生工作区演示。"}</p>
  `;
}

function renderProfile() {
  const profileCard = document.querySelector("#profileCard");
  if (!profileCard) return;

  const state = getAuthState();
  const statusText = {
    guest: "未登录",
    logged_in: "已登录",
    pending: "资格审核中",
    verified: "资格已通过",
  }[state.status] || "未登录";

  profileCard.innerHTML = `
    <span class="tag ${state.status === "verified" ? "green" : "blue"}">${escapeHtml(statusText)}</span>
    <h2>${escapeHtml(state.name || "访客用户")}</h2>
    <p>${escapeHtml(state.roleLabel || "普通访问者")}</p>
    <dl class="profile-meta">
      <dt>联系方式</dt><dd>${escapeHtml(state.contact || "待填写")}</dd>
      <dt>机构/学校</dt><dd>${escapeHtml(state.institution || "待补充")}</dd>
      <dt>科室/专业</dt><dd>${escapeHtml(state.specialty || "待补充")}</dd>
      <dt>社区凭证</dt><dd>${escapeHtml(communityCredentialText(state))}</dd>
    </dl>
  `;
}

function profileReactionPosts(type) {
  const reactions = getReactions();
  return getForumPosts().filter((post) => reactions[post.id]?.[type]);
}

function profileListItem(post, metaLabel) {
  return `
    <a class="profile-feed-item" href="community.html">
      <span class="tag blue">${escapeHtml(categoryLabels[post.category] || "讨论")}</span>
      <strong>${escapeHtml(post.title)}</strong>
      <p>${escapeHtml(post.body)}</p>
      <small>${escapeHtml(post.dept || "未标注领域")} · ${escapeHtml(metaLabel)}</small>
    </a>`;
}

function renderProfileList(selector, posts, emptyText, metaBuilder) {
  const list = document.querySelector(selector);
  if (!list) return;
  list.innerHTML = posts.length
    ? posts.map((post) => profileListItem(post, metaBuilder(post))).join("")
    : `<div class="empty-state">${escapeHtml(emptyText)}</div>`;
}

function renderProfileStats({ submissions, likes, dislikes, comments }) {
  const stats = document.querySelector("#profileStats");
  if (!stats) return;
  const items = [
    ["投稿", submissions.length],
    ["点赞", likes.length],
    ["踩", dislikes.length],
    ["评论", comments.length],
  ];
  stats.innerHTML = items.map(([label, value]) => `<span><strong>${value}</strong>${label}</span>`).join("");
}

function renderProfileDesign() {
  const list = document.querySelector("#profileDesignList");
  if (!list) return;
  const designItems = [
    ["医学资料名片", "展示机构、科室、认证状态和社区凭证。"],
    ["投稿模板", "病例、指南、工具、科研设计四类内容模板。"],
    ["AI Agent 方案", "把个人常用 Prompt 和审核流程沉淀为方案卡。"],
  ];
  list.innerHTML = designItems.map(([title, text]) => `
    <a class="profile-design-item" href="community.html#postForm">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(text)}</span>
    </a>`).join("");
}

function renderLikedPosts() {
  const state = getAuthState();
  const posts = getForumPosts();
  const reactions = getReactions();
  const submissions = posts.filter((post) => state.name && post.author === state.name);
  const likes = posts.filter((post) => reactions[post.id]?.liked || reactions[post.id]?.favorited);
  const dislikes = profileReactionPosts("disliked");
  const comments = submissions.filter((post) => `${post.title} ${post.body}`.includes("评论"));

  renderProfileStats({ submissions, likes, dislikes, comments });
  renderProfileDesign();
  renderProfileList("#profileSubmissionList", submissions, "还没有投稿。发布讨论、资料或复现笔记后会出现在这里。", (post) => `${post.views || 0} 浏览 · ${post.replies || 0} 回复`);
  renderProfileList("#profileLikesList", likes, "还没有点赞记录。点赞、收藏过的讨论会汇总到这里。", (post) => `${(post.likes || 0) + (reactions[post.id]?.liked ? 1 : 0)} 赞`);
  renderProfileList("#profileDislikesList", dislikes, "还没有踩过的内容。对不适合的讨论点踩后会出现在这里。", (post) => `${(post.dislikes || 0) + (reactions[post.id]?.disliked ? 1 : 0)} 踩`);
  renderProfileList("#profileCommentsList", comments, "还没有评论动态。评论式投稿会沉淀到这里。", (post) => new Date(post.createdAt).toLocaleDateString("zh-CN"));
}

function toggleReaction(postId, type) {
  const reactions = getReactions();
  reactions[postId] = reactions[postId] || { liked: false, disliked: false, favorited: false };
  if (type === "like") {
    reactions[postId].liked = !reactions[postId].liked;
    if (reactions[postId].liked) reactions[postId].disliked = false;
  }
  if (type === "dislike") {
    reactions[postId].disliked = !reactions[postId].disliked;
    if (reactions[postId].disliked) reactions[postId].liked = false;
  }
  if (type === "favorite") reactions[postId].favorited = !reactions[postId].favorited;
  writeJson(reactionStorageKey, reactions);
  renderLikedPosts();
}

function wireFilters() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      const group = button.closest(".filter-group");
      const cards = document.querySelectorAll("[data-category]");
      group?.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
      cards.forEach((card) => {
        card.hidden = filter !== "all" && !card.dataset.category.includes(filter);
      });
    });
  });
}

function wireAuthForms() {
  const loginForm = document.querySelector("#loginForm");
  if (loginForm) {
    updateAuthCard();
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      setAuthState({
        name: document.querySelector("#loginName").value.trim(),
        contact: document.querySelector("#loginContact").value.trim(),
        status: "logged_in",
        roleLabel: "已登录用户",
        loggedInAt: new Date().toISOString(),
      });
      const nextUrl = getSafeNextUrl();
      document.querySelector("#loginStatus").textContent = nextUrl ? "登录状态已保存，正在返回个人页面。" : "登录状态已保存，可继续提交资格审核。";
      updateAuthCard();
      if (nextUrl) window.setTimeout(() => { window.location.href = nextUrl; }, 320);
    });
  }

  const reviewForm = document.querySelector("#reviewForm");
  if (reviewForm) {
    const roleLabels = { doctor: "执业医生", student: "医学生/研究生" };
    reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const role = document.querySelector("#credentialRole").value;
      const proofType = document.querySelector("#proofType").value;
      setAuthState({
        status: "pending",
        role,
        roleLabel: roleLabels[role],
        proofType,
        realName: document.querySelector("#realName").value.trim(),
        institution: document.querySelector("#institution").value.trim(),
        specialty: document.querySelector("#specialty").value.trim(),
        submittedAt: new Date().toISOString(),
      });
      document.querySelector("#reviewStatus").textContent = "资格材料已进入演示审核队列。正式环境应加密上传，并由人工核验医师资格或在读证明。";
      updateAuthCard();
    });

    document.querySelector("#approveDemo")?.addEventListener("click", () => {
      const role = document.querySelector("#credentialRole").value || "doctor";
      const proofType = role === "doctor" ? "license" : "student_card";
      setAuthState({ status: "verified", role, proofType, roleLabel: roleLabels[role] });
      document.querySelector("#reviewStatus").textContent = "演示状态已设为已认证，可进入社区。";
      updateAuthCard();
    });
  }

  document.querySelector("#logoutDemo")?.addEventListener("click", () => {
    localStorage.removeItem(authKey);
    document.querySelector("#reviewStatus").textContent = "已退出登录并清除本机认证状态。";
    updateAuthCard();
  });

  document.querySelector("#profileLogout")?.addEventListener("click", () => {
    localStorage.removeItem(authKey);
    window.location.href = "auth.html?next=profile.html&reason=profile";
  });
}

function wireCommunityGate() {
  const gate = document.querySelector("#communityGate");
  if (!gate) return;

  document.body.classList.remove("community-locked");
  document.body.classList.add("community-unlocked");
  gate.remove();
}

function wireClinicianForumAccess() {
  const tag = document.querySelector("#clinicianForumTag");
  const auth = getAuthState();
  const verified = hasCommunityCredential(auth);
  if (tag) {
    tag.href = verified ? "clinician-discussion.html" : "doctor-verification.html";
    tag.classList.toggle("verified", verified);
    tag.innerHTML = verified
      ? `<strong>医生/医学生专区</strong><span>${escapeHtml(auth.roleLabel || "已认证用户")}可进入专业讨论区</span>`
      : `<strong>医生/医学生认证</strong><span>认证成功后替换为专业讨论区入口</span>`;
  }

  const legacyLink = document.querySelector(".dept-verify-link");
  if (legacyLink && !verified) {
    legacyLink.href = "doctor-verification.html";
    legacyLink.textContent = "医生/医学生认证";
  }

  const gate = document.querySelector("#clinicianForumGate");
  if (!gate) return;

  document.body.classList.toggle("clinician-forum-locked", !verified);
  document.body.classList.toggle("clinician-forum-unlocked", verified);
  gate.innerHTML = verified
    ? `<div class="container"><div class="community-gate-card verified clinician-access-card"><span class="tag green">已通过认证</span><h2>欢迎进入医生/医学生讨论区</h2><p>${escapeHtml(auth.name || "认证用户")}，请继续遵守脱敏、授权和人工复核规则。</p></div></div>`
    : `<div class="container"><div class="community-gate-card clinician-access-card"><span class="tag red">需要认证</span><h1>医生/医学生讨论区仅认证后开放</h1><p>请先完成医生资格或医学生在读证明验证。认证成功后，社区页上方的“医生/医学生认证”tag 会替换为本页面入口。</p><div class="button-row"><a class="btn primary" href="doctor-verification.html">前往认证</a><a class="btn" href="community.html">返回公开问答区</a></div></div></div>`;
}

function wireForum() {
  const postList = document.querySelector("#postList");
  if (!postList) return;
  if (document.body.classList.contains("clinician-forum-page") && !hasCommunityCredential()) return;
  if (document.querySelector("#communityGate") && !hasCommunityCredential()) return;

  const state = { filter: "all", tag: "all", search: "", sort: "new", page: 1, pageSize: 5 };
  const modeStatus = document.querySelector("#publishModeStatus");
  if (modeStatus) {
    modeStatus.textContent = apiBase ? "在线发布模式" : "本地演示模式";
    modeStatus.classList.toggle("online", Boolean(apiBase));
  }

  function postScore(post, type) {
    const reaction = getReactions()[post.id] || {};
    if (type === "like") return post.likes + (reaction.liked ? 1 : 0);
    if (type === "dislike") return (post.dislikes || 0) + (reaction.disliked ? 1 : 0);
    if (type === "favorite") return post.favorites + (reaction.favorited ? 1 : 0);
    return 0;
  }

  function updateCounts() {
    const counts = getForumPosts().reduce((acc, post) => {
      acc.all += 1;
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, { all: 0 });
    const ids = { all: "countAll", clinical: "countClinical", guideline: "countGuideline", research: "countResearch", tool: "countTool", ethics: "countEthics" };
    Object.entries(ids).forEach(([key, id]) => {
      const node = document.querySelector(`#${id}`);
      if (node) node.textContent = counts[key] || 0;
    });
  }

  function filteredPosts() {
    const search = state.search.trim().toLowerCase();
    const posts = getForumPosts().filter((post) => {
      const matchesFilter = state.filter === "all" || post.category === state.filter;
      const tags = post.tags || [post.category];
      const matchesTag = state.tag === "all" || tags.includes(state.tag);
      const tagText = tags.map((tag) => forumTagLabels[tag] || tag).join(" ");
      const text = `${post.title} ${post.body} ${post.dept} ${post.author} ${tagText}`.toLowerCase();
      return matchesFilter && matchesTag && (!search || text.includes(search));
    });
    posts.sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      if (state.sort === "reply") return b.replies - a.replies;
      if (state.sort === "view") return b.views - a.views;
      if (state.sort === "like") return postScore(b, "like") - postScore(a, "like");
      if (state.sort === "favorite") return postScore(b, "favorite") - postScore(a, "favorite");
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return posts;
  }

  function reactionIcon(type, active) {
    const fill = active ? "currentColor" : "none";
    const icons = {
      like: `<svg class="post-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 21H5.1A2.1 2.1 0 0 1 3 18.9v-7.1c0-1.2.9-2.1 2.1-2.1h2.7m0 11.3h8.9c.9 0 1.7-.6 2-1.5l2.1-7.1c.4-1.4-.6-2.8-2-2.8h-5.5l.8-3.8c.2-1-.1-2-.8-2.7L12.6 2 7.8 9.7V21Z" fill="${fill}" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
      dislike: `<svg class="post-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.2 3h2.7A2.1 2.1 0 0 1 21 5.1v7.1c0 1.2-.9 2.1-2.1 2.1h-2.7M16.2 3H7.3c-.9 0-1.7.6-2 1.5l-2.1 7.1c-.4 1.4.6 2.8 2 2.8h5.5l-.8 3.8c-.2 1 .1 2 .8 2.7l.7 1.1 4.8-7.7V3Z" fill="${fill}" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
      favorite: `<svg class="post-action-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.6s-7.5-4.4-9.2-9.5C1.7 7.6 3.8 4.5 7.1 4.5c1.9 0 3.6 1.1 4.5 2.7.9-1.6 2.6-2.7 4.5-2.7 3.3 0 5.4 3.1 4.3 6.6C19.5 16.2 12 20.6 12 20.6Z" fill="${fill}" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
    };
    return icons[type] || "";
  }

  function renderPosts() {
    updateCounts();
    const posts = filteredPosts();
    const tagStatus = document.querySelector("#forumTagStatus");
    if (tagStatus) {
      const label = forumTagLabels[state.tag] || state.tag;
      tagStatus.textContent = state.tag === "all" ? `All topics · ${posts.length} 条讨论` : `${label} · ${posts.length} 条讨论`;
    }
    const totalPages = Math.max(1, Math.ceil(posts.length / state.pageSize));
    state.page = Math.min(state.page, totalPages);
    const pagePosts = posts.slice((state.page - 1) * state.pageSize, state.page * state.pageSize);
    const reactions = getReactions();
    postList.innerHTML = pagePosts.length
      ? pagePosts.map((post) => {
        const reaction = reactions[post.id] || {};
        const liked = Boolean(reaction.liked);
        const disliked = Boolean(reaction.disliked);
        const favorited = Boolean(reaction.favorited);
        const postTags = (post.tags || [post.category]).slice(0, 4).map((tag) => `<span>${escapeHtml(forumTagLabels[tag] || tag)}</span>`).join("");
        return `
          <article class="post-card" id="${escapeHtml(post.id)}" data-post-id="${escapeHtml(post.id)}">
            <div class="post-main">
              <div class="post-meta"><span class="tag blue">${categoryLabels[post.category]}</span>${post.pinned ? '<span class="tag gold">置顶</span>' : ""}<span>${post.dept || "未标注领域"}</span></div>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
              <div class="post-tag-list">${postTags}</div>
              <div class="post-foot"><span>${post.author}</span><span>${new Date(post.createdAt).toLocaleDateString("zh-CN")}</span><span>${post.replies} 回复</span><span>${post.views} 浏览</span></div>
            </div>
            <div class="post-actions" aria-label="帖子操作">
              <button class="post-action ${liked ? "active" : ""}" type="button" data-action="like" data-post-id="${post.id}" aria-pressed="${liked}" aria-label="赞" title="赞">${reactionIcon("like", liked)}<strong>${post.likes + (liked ? 1 : 0)}</strong></button>
              <button class="post-action ${disliked ? "active negative" : ""}" type="button" data-action="dislike" data-post-id="${post.id}" aria-pressed="${disliked}" aria-label="踩" title="踩">${reactionIcon("dislike", disliked)}<strong>${(post.dislikes || 0) + (disliked ? 1 : 0)}</strong></button>
              <button class="post-action ${favorited ? "active favorite" : ""}" type="button" data-action="favorite" data-post-id="${post.id}" aria-pressed="${favorited}" aria-label="收藏" title="收藏">${reactionIcon("favorite", favorited)}<strong>${post.favorites + (favorited ? 1 : 0)}</strong></button>
            </div>
          </article>`;
      }).join("")
      : '<div class="empty-state">暂无匹配讨论</div>';
    document.querySelector("#pageInfo").textContent = `第 ${state.page} / ${totalPages} 页`;
    document.querySelector("#prevPage").disabled = state.page <= 1;
    document.querySelector("#nextPage").disabled = state.page >= totalPages;
  }

  document.querySelectorAll("[data-forum-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.forumFilter;
      state.page = 1;
      document.querySelectorAll("[data-forum-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderPosts();
    });
  });
  document.querySelectorAll("[data-forum-tag]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tag = button.dataset.forumTag || "all";
      state.page = 1;
      document.querySelectorAll("[data-forum-tag]").forEach((item) => item.classList.toggle("active", item === button));
      renderPosts();
    });
  });
  document.querySelector("#forumSearch")?.addEventListener("input", (event) => {
    state.search = event.target.value;
    state.page = 1;
    renderPosts();
  });
  document.querySelector("#forumSort")?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    state.page = 1;
    renderPosts();
  });
  document.querySelector("#prevPage")?.addEventListener("click", () => {
    state.page = Math.max(1, state.page - 1);
    renderPosts();
  });
  document.querySelector("#nextPage")?.addEventListener("click", () => {
    state.page += 1;
    renderPosts();
  });
  postList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    toggleReaction(button.dataset.postId, button.dataset.action);
    renderPosts();
  });

  document.querySelector("#newPostForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.querySelector("#postStatus");
    if (!hasCommunityCredential()) {
      status.textContent = "请先通过医生或医学生认证，再发布社区讨论。";
      return;
    }
    const body = document.querySelector("#postBody").value.trim();
    if (hasSensitivePattern(body)) {
      status.textContent = "检测到可能的身份信息，请先脱敏后再发布。";
      return;
    }
    const auth = getAuthState();
    const post = {
      id: `local-${Date.now()}`,
      title: document.querySelector("#postTitle").value.trim(),
      category: document.querySelector("#postCategory").value,
      dept: document.querySelector("#postDept").value.trim() || "未标注领域",
      body,
      author: auth.name || "本地用户",
      createdAt: new Date().toISOString(),
      replies: 0,
      views: 1,
      likes: 0,
      dislikes: 0,
      favorites: 0,
      pinned: false,
      tags: [document.querySelector("#postCategory").value, "aiHealthcare"],
    };
    writeJson(postStorageKey, [post, ...readJson(postStorageKey, [])]);
    status.textContent = "已保存到本地演示讨论列表。";
    event.target.reset();
    state.filter = "all";
    state.sort = "new";
    state.page = 1;
    renderPosts();
  });

  document.querySelector("#postBody")?.addEventListener("input", (event) => {
    const status = document.querySelector("#postStatus");
    status.textContent = hasSensitivePattern(event.target.value) ? "检测到可能的身份信息，请先脱敏。" : "";
  });

  renderPosts();
}

function wireDoctorWorkspace() {
  const doctorGate = document.querySelector("#doctorGate");
  if (doctorGate) {
    const auth = getAuthState();
    const locked = auth.status !== "verified" || auth.role !== "doctor";
    document.body.classList.toggle("doctor-locked", locked);
    document.body.classList.toggle("doctor-unlocked", !locked);
    doctorGate.innerHTML = locked
      ? `<div class="gate-card"><span class="tag red">需要医生认证</span><h1>医生专属工作区</h1><p>该页面面向已通过资格审核的执业医生开放。请先完成登录与医生资格审核，再上传或管理手术照片、检查结果等医学资料。</p><div class="button-row"><a class="btn primary" href="auth.html">前往认证</a><a class="btn" href="home.html">返回首页</a></div></div>`
      : `<div class="gate-card verified"><span class="tag green">已通过医生认证</span><h1>医生专属工作区</h1><p>${auth.name || "医生"}，请仅上传已获授权并完成脱敏的医学资料。静态演示不会把文件上传到服务器。</p></div>`;
  }

  const form = document.querySelector("#clinicalUploadForm");
  if (!form) return;
  const photoInput = document.querySelector("#surgeryPhotos");
  const reportInput = document.querySelector("#examReports");
  const photoGrid = document.querySelector("#photoPreviewGrid");
  const reportList = document.querySelector("#reportPreviewList");
  const status = document.querySelector("#uploadStatus");

  photoInput.addEventListener("change", () => {
    photoGrid.innerHTML = "";
    Array.from(photoInput.files || []).slice(0, 12).forEach((file) => {
      const item = document.createElement("figure");
      item.className = "media-thumb";
      item.innerHTML = `<img alt="手术照片预览" src="${URL.createObjectURL(file)}"><figcaption>${file.name}</figcaption>`;
      photoGrid.appendChild(item);
    });
  });

  reportInput.addEventListener("change", () => {
    reportList.innerHTML = "";
    Array.from(reportInput.files || []).slice(0, 12).forEach((file) => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${file.name}</strong><span>${Math.ceil(file.size / 1024)} KB</span>`;
      reportList.appendChild(item);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = ["#caseCode", "#caseSummary", "#deidNote"].map((selector) => document.querySelector(selector).value).join(" ");
    status.textContent = hasSensitivePattern(text)
      ? "检测到可能的姓名、电话、身份证号或病案标识，请进一步脱敏。"
      : "资料已保存为本地演示记录。正式环境需上传至加密对象存储，并写入访问审计。";
  });
}

const fallbackHotTools = [
  {
    rank: "第 1 名",
    name: "华佗 GPT",
    summary: "中文医学问答与医疗大模型研究入口，适合作为医学 AI 工具体验区首个示例。",
    url: "https://www.huatuogpt.cn/",
    action: "官网链接",
  },
  {
    rank: "第 2 名",
    name: "MedGemma",
    summary: "面向医学文本和多模态任务的开放模型资源，可放入模型池和工具评测清单。",
    url: "https://github.com/google-health/medgemma",
    action: "项目链接",
  },
  {
    rank: "第 3 名",
    name: "MONAI",
    summary: "医学影像深度学习框架，适合影像标注、模型训练和临床科研演示。",
    url: "https://www.monai.io/",
    action: "官网链接",
  },
];

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getSiteSearchQuery() {
  return (new URLSearchParams(window.location.search).get("q") || "").trim();
}

function wireSiteSearchForms() {
  const query = getSiteSearchQuery();
  document.querySelectorAll(".site-search").forEach((form) => {
    const input = form.querySelector('input[name="q"]');
    if (input && query) input.value = query;
    form.addEventListener("submit", (event) => {
      const value = input?.value.trim() || "";
      if (value) return;
      event.preventDefault();
      input?.focus();
    });
  });
}

function getSiteSearchScore(entry, terms) {
  const title = entry.title.toLowerCase();
  const category = entry.category.toLowerCase();
  const text = `${entry.title} ${entry.category} ${entry.text}`.toLowerCase();
  return terms.reduce((score, term) => {
    if (!term) return score;
    if (title.includes(term)) return score + 8;
    if (category.includes(term)) return score + 5;
    if (text.includes(term)) return score + 2;
    return score;
  }, 0);
}

function renderSiteSearchResults() {
  const resultsRoot = document.querySelector("#siteSearchResults");
  if (!resultsRoot) return;

  const summary = document.querySelector("#siteSearchSummary");
  const query = getSiteSearchQuery();
  if (!query) {
    if (summary) summary.textContent = "输入关键词后查看站内栏目结果。";
    resultsRoot.innerHTML = '<div class="empty-state">请输入搜索关键词。</div>';
    return;
  }

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const results = siteSearchIndex
    .map((entry) => ({ ...entry, score: getSiteSearchScore(entry, terms) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, "zh-CN"));

  if (summary) {
    summary.textContent = results.length
      ? `找到 ${results.length} 个相关入口。`
      : "没有找到匹配入口，可以换一个关键词。";
  }

  resultsRoot.innerHTML = results.length
    ? results.map((entry) => `
      <a class="site-search-result" href="${entry.url}">
        <span>${escapeHtml(entry.category)}</span>
        <strong>${escapeHtml(entry.title)}</strong>
        <p>${escapeHtml(entry.text)}</p>
      </a>`).join("")
    : '<div class="empty-state">没有找到匹配入口。</div>';
}

function renderHotTools(tools) {
  const container = document.querySelector("#hotToolCards");
  if (!container) return;
  container.innerHTML = tools.slice(0, 6).map((tool, index) => `
    <article class="hot-tool-card">
      <span>${escapeHtml(tool.rank || `第 ${index + 1} 名`)}</span>
      <strong>${escapeHtml(tool.name)}</strong>
      <p>${escapeHtml(tool.summary)}</p>
      <a href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer">${escapeHtml(tool.action || "官网链接")}</a>
    </article>`).join("");
}

async function wireHotToolFeed() {
  const section = document.querySelector("[data-hot-tool-feed]");
  if (!section) return;

  const date = document.querySelector("#hotToolDate");
  if (date) {
    date.textContent = new Intl.DateTimeFormat("zh-CN", {
      timeZone: "Asia/Shanghai",
      month: "long",
      day: "numeric",
      weekday: "short",
    }).format(new Date());
  }

  renderHotTools(fallbackHotTools);
  const feedUrl = (window.HMAI_TOOL_FEED_URL || "").trim();
  if (!feedUrl) return;

  try {
    const response = await fetch(feedUrl, { cache: "no-store" });
    if (!response.ok) throw new Error("tool feed unavailable");
    const payload = await response.json();
    const tools = Array.isArray(payload) ? payload : payload.items;
    const validTools = (tools || []).filter((tool) => tool?.name && tool?.url);
    if (validTools.length) renderHotTools(validTools);
  } catch {
    section.dataset.feedState = "fallback";
  }
}

function wireHomeNewsScroll() {
  document.querySelectorAll("[data-news-carousel]").forEach((frame) => {
    if (frame.dataset.scrollReady === "true") return;

    const row = frame.querySelector(".news-scroll-row");
    const slides = [...(row?.querySelectorAll(".news-source-card") || [])];
    const dots = [...frame.querySelectorAll("[data-news-dot]")];
    const buttons = [...frame.querySelectorAll("[data-news-scroll]")];
    if (!row || !slides.length) return;

    let activeIndex = 0;
    let timer = 0;

    const setActiveDot = (index) => {
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === index;
        dot.classList.toggle("active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    };

    const scrollToIndex = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      row.scrollTo({ left: slides[activeIndex].offsetLeft - row.offsetLeft, behavior: "smooth" });
      setActiveDot(activeIndex);
    };

    const restartAutoScroll = () => {
      window.clearInterval(timer);
      if (slides.length > 1) {
        timer = window.setInterval(() => scrollToIndex(activeIndex + 1), 5500);
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.newsScroll === "prev" ? -1 : 1;
        scrollToIndex(activeIndex + direction);
        restartAutoScroll();
      });
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        scrollToIndex(Number(dot.dataset.newsDot || 0));
        restartAutoScroll();
      });
    });

    row.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => {
        const nextIndex = Math.round(row.scrollLeft / Math.max(1, row.clientWidth));
        if (nextIndex !== activeIndex && slides[nextIndex]) {
          activeIndex = nextIndex;
          setActiveDot(activeIndex);
        }
      });
    });

    frame.addEventListener("mouseenter", () => window.clearInterval(timer));
    frame.addEventListener("mouseleave", restartAutoScroll);
    frame.addEventListener("focusin", () => window.clearInterval(timer));
    frame.addEventListener("focusout", restartAutoScroll);

    setActiveDot(0);
    restartAutoScroll();
    frame.dataset.scrollReady = "true";
  });
}

function wireHomeAgent() {
  const shell = document.querySelector("#agentWorkbench");
  if (!shell || shell.dataset.agentReady === "true") return;

  const picker = shell.querySelector("[data-model-picker]");
  const trigger = picker?.querySelector(".agent-model-trigger");
  const menu = picker?.querySelector(".agent-model-menu");
  const options = picker?.querySelectorAll("[data-model]");
  const selectedModel = picker?.querySelector("[data-selected-model]");
  const modelInput = shell.querySelector("#agentModel");
  const form = shell.querySelector("#agentQuestionForm");
  const input = shell.querySelector("#agentQuestion");
  const output = shell.querySelector("#agentAnswer");
  const newsSection = document.querySelector("#hot-news");
  const caseDialog = document.querySelector("#casePublishDialog");
  const caseForm = document.querySelector("#casePublishForm");
  const casePreview = document.querySelector("#caseTemplatePreview");
  const caseStatus = document.querySelector("#casePublishStatus");
  const caseFiles = document.querySelector("#caseFiles");
  const caseDept = document.querySelector("#caseDept");
  const caseCategory = document.querySelector("#caseCategory");
  const caseNote = document.querySelector("#caseNote");
  let latestAgentCase = { model: modelInput?.value || "GPT-5.5", question: "", answer: "" };
  let casePreviousFocus = null;

  const setMenuOpen = (open) => {
    if (!trigger || !menu) return;
    trigger.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
    picker?.classList.toggle("is-open", open);
  };

  const selectModel = (model) => {
    if (!model) return;
    if (modelInput) modelInput.value = model;
    if (selectedModel) selectedModel.textContent = model;
    options?.forEach((item) => {
      const active = item.dataset.model === model;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    if (output?.dataset.submitted === "true") output.querySelector("span").textContent = model;
  };

  const buildAgentReply = (question, model) => {
    const trimmedQuestion = question.trim();
    return [
      "已收到。我先按脱敏病例讨论的方式整理：",
      "1. 先确认资料不含患者姓名、电话、身份证号、住院号、门诊号等可识别信息。",
      "2. 建议补充背景、关键检查/文本、已尝试方法和希望社区判断的问题。",
      `3. 可用 ${model} 生成讨论区模板，再由你确认后发布。`,
      `问题摘要：${trimmedQuestion}`,
    ].join("\n");
  };

  const getUploadedFileSummary = () => {
    const files = Array.from(caseFiles?.files || []);
    if (!files.length) return "未上传附件";
    return files.slice(0, 6).map((file) => `${file.name}（${Math.ceil(file.size / 1024)} KB）`).join("；");
  };

  const buildCaseTemplate = () => {
    const dept = caseDept?.value.trim() || "未标注领域";
    const note = caseNote?.value.trim() || "暂无补充说明";
    const categoryText = categoryLabels[caseCategory?.value || "clinical"] || "临床文本";
    return [
      `【脱敏病例讨论】${latestAgentCase.question || "医学 AI 辅助病例讨论"}`,
      "",
      `版块：${categoryText}`,
      `科室/领域：${dept}`,
      "是否脱敏：是，用户确认不包含患者可识别信息",
      `涉及资料：${getUploadedFileSummary()}`,
      "",
      "问题背景：",
      latestAgentCase.question || "用户希望围绕该案例整理讨论问题。",
      "",
      "AI 初步整理：",
      latestAgentCase.answer || "已生成静态演示回复，等待人工确认。",
      "",
      "补充说明：",
      note,
      "",
      "希望社区帮助：",
      "请从资料完整性、风险边界、下一步信息整理和人工复核角度给出建议。",
    ].join("\n");
  };

  const refreshCasePreview = () => {
    if (casePreview) casePreview.value = buildCaseTemplate();
  };

  const setCaseDialogOpen = (open) => {
    if (!caseDialog) return;
    if (open) {
      casePreviousFocus = document.activeElement;
      caseDialog.hidden = false;
      document.body.classList.add("case-publish-open");
      refreshCasePreview();
      caseDialog.querySelector(".case-publish-close")?.focus();
      return;
    }
    caseDialog.hidden = true;
    document.body.classList.remove("case-publish-open");
    casePreviousFocus?.focus?.();
  };

  trigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    setMenuOpen(menu?.hidden ?? true);
  });

  options?.forEach((option) => {
    option.addEventListener("click", () => {
      selectModel(option.dataset.model || "");
      setMenuOpen(false);
      trigger?.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!picker || picker.contains(event.target)) return;
    setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setMenuOpen(false);
  });

  if (modelInput?.value) selectModel(modelInput.value);

  input?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    form?.requestSubmit();
  });

  input?.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const model = modelInput?.value || "GPT-5.5";
    const question = input?.value.trim() || "请总结今天医学 AI 领域值得关注的方向。";
    const reply = buildAgentReply(question, model);
    latestAgentCase = { model, question, answer: reply };
    newsSection?.classList.add("is-hidden");
    if (output) {
      output.hidden = false;
      output.dataset.submitted = "true";
      output.innerHTML = `
        <span>${escapeHtml(model)}</span>
        <strong>${escapeHtml(question)}</strong>
        <p>${escapeHtml(reply).replace(/\n/g, "<br>")}</p>
        <div class="agent-answer-actions">
          <button class="btn primary" type="button" data-case-publish-open>发布这个案例到讨论区</button>
        </div>`;
    }
  });

  output?.addEventListener("click", (event) => {
    if (!event.target.closest("[data-case-publish-open]")) return;
    setCaseDialogOpen(true);
  });

  document.querySelectorAll("[data-case-publish-close]").forEach((button) => {
    button.addEventListener("click", () => setCaseDialogOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && caseDialog && !caseDialog.hidden) {
      setCaseDialogOpen(false);
    }
  });

  document.querySelector("#casePreviewButton")?.addEventListener("click", refreshCasePreview);
  [caseFiles, caseDept, caseCategory, caseNote].forEach((field) => {
    field?.addEventListener("input", refreshCasePreview);
    field?.addEventListener("change", refreshCasePreview);
  });

  caseForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const template = casePreview?.value.trim() || buildCaseTemplate();
    if (hasSensitivePattern(template)) {
      if (caseStatus) caseStatus.textContent = "检测到可能的姓名、电话、身份证号或病案标识，请进一步脱敏后再发布。";
      return;
    }
    const auth = getAuthState();
    const category = caseCategory?.value || "clinical";
    const title = template.split("\n").find(Boolean)?.replace(/^【脱敏病例讨论】/, "").slice(0, 80) || "脱敏病例讨论";
    const post = {
      id: `agent-case-${Date.now()}`,
      title,
      category,
      dept: caseDept?.value.trim() || "未标注领域",
      body: template,
      author: auth.name && auth.name !== "访客" ? auth.name : "Agent 案例助手",
      createdAt: new Date().toISOString(),
      replies: 0,
      views: 1,
      likes: 0,
      favorites: 0,
      pinned: false,
      tags: [category, "agent", "aiHealthcare"],
    };
    writeJson(postStorageKey, [post, ...readJson(postStorageKey, [])]);
    if (caseStatus) caseStatus.textContent = "已发布到讨论区，正在跳转。";
    window.setTimeout(() => {
      window.location.href = `community.html?from=agent-case#${post.id}`;
    }, 450);
  });

  shell.dataset.agentReady = "true";
}

function wireDatasetBrowser() {
  const uploadDialog = document.querySelector("#dataset-upload");
  const uploadOpenButtons = Array.from(document.querySelectorAll("[data-upload-roadmap-open]"));
  const uploadCloseButtons = Array.from(document.querySelectorAll("[data-upload-roadmap-close]"));
  const uploadHashes = new Set(["#dataset-upload", "#market-overview"]);
  let uploadPreviousFocus = null;

  function setUploadRoadmapOpen(isOpen, syncHash = true) {
    if (!uploadDialog) return;
    if (isOpen) {
      uploadPreviousFocus = document.activeElement;
      uploadDialog.hidden = false;
      document.body.classList.add("upload-roadmap-open");
      if (syncHash && !uploadHashes.has(window.location.hash)) {
        history.pushState(null, "", "#dataset-upload");
      }
      uploadDialog.querySelector(".dataset-upload-close")?.focus();
      return;
    }

    uploadDialog.hidden = true;
    document.body.classList.remove("upload-roadmap-open");
    if (syncHash && uploadHashes.has(window.location.hash)) {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    uploadPreviousFocus?.focus?.();
  }

  uploadOpenButtons.forEach((button) => {
    button.addEventListener("click", () => setUploadRoadmapOpen(true));
  });

  uploadCloseButtons.forEach((button) => {
    button.addEventListener("click", () => setUploadRoadmapOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && uploadDialog && !uploadDialog.hidden) {
      setUploadRoadmapOpen(false);
    }
  });

  window.addEventListener("hashchange", () => {
    if (!uploadDialog) return;
    setUploadRoadmapOpen(uploadHashes.has(window.location.hash), false);
  });

  if (uploadHashes.has(window.location.hash)) {
    setUploadRoadmapOpen(true, false);
  }

  const cards = Array.from(document.querySelectorAll("[data-dataset-card]"));
  if (!cards.length) return;

  const searchInput = document.querySelector("#datasetSearch");
  const filterButtons = Array.from(document.querySelectorAll("[data-dataset-filter]"));
  const pageList = document.querySelector("#datasetPageList");
  const prevButton = document.querySelector("[data-dataset-page='prev']");
  const nextButton = document.querySelector("[data-dataset-page='next']");
  const emptyNote = document.querySelector("#datasetEmptyNote");
  const state = { filter: "all", search: "", page: 1, pageSize: 4 };

  cards.forEach((card) => {
    const link = card.querySelector("a[href]");
    if (!link) return;

    const title = card.querySelector(".dataset-card-head strong")?.textContent?.trim() || "数据集详情";
    card.dataset.cardLinkReady = "true";
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `${title}，打开详情页`);

    const openDatasetLink = () => {
      if (link.target === "_blank") {
        window.open(link.href, "_blank", "noopener");
        return;
      }
      window.location.href = link.href;
    };

    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button, input, select, textarea")) return;
      openDatasetLink();
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("a, button, input, select, textarea")) return;
      event.preventDefault();
      openDatasetLink();
    });
  });

  function renderDatasetCards() {
    const query = state.search.trim().toLowerCase();
    const matches = cards.filter((card) => {
      const tags = card.dataset.tags || "";
      const text = `${card.textContent} ${tags}`.toLowerCase();
      const matchesTag = state.filter === "all" || tags.includes(state.filter);
      const matchesQuery = !query || text.includes(query);
      return matchesTag && matchesQuery;
    });

    const hasPagination = Boolean(pageList || prevButton || nextButton);
    const totalPages = hasPagination ? Math.max(1, Math.ceil(matches.length / state.pageSize)) : 1;
    state.page = Math.min(state.page, totalPages);
    const pageStart = (state.page - 1) * state.pageSize;
    const visible = new Set(hasPagination ? matches.slice(pageStart, pageStart + state.pageSize) : matches);

    cards.forEach((card) => {
      card.hidden = !visible.has(card);
    });

    if (emptyNote) {
      emptyNote.classList.toggle("is-visible", matches.length === 0);
    }

    if (pageList) {
      pageList.innerHTML = Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return `<button class="filter-btn ${page === state.page ? "active" : ""}" type="button" data-dataset-page-number="${page}" aria-current="${page === state.page ? "page" : "false"}">第${page}页</button>`;
      }).join("");
    }

    if (prevButton) prevButton.disabled = state.page <= 1;
    if (nextButton) nextButton.disabled = state.page >= totalPages;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.datasetFilter || "all";
      state.page = 1;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderDatasetCards();
    });
  });

  searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value;
    state.page = 1;
    renderDatasetCards();
  });

  pageList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dataset-page-number]");
    if (!button) return;
    state.page = Number(button.dataset.datasetPageNumber) || 1;
    renderDatasetCards();
  });

  prevButton?.addEventListener("click", () => {
    state.page = Math.max(1, state.page - 1);
    renderDatasetCards();
  });

  nextButton?.addEventListener("click", () => {
    state.page += 1;
    renderDatasetCards();
  });

  renderDatasetCards();
}

function wireCourseContentFilters() {
  const root = document.querySelector("[data-course-filters]");
  const items = Array.from(document.querySelectorAll("[data-course-item]"));
  if (!root || !items.length) return;

  const state = { dept: "all", type: "all", query: "" };
  const searchInput = root.querySelector("[data-course-search]");
  const emptyState = document.querySelector(".course-empty-state");

  function renderCourseItems() {
    const query = state.query.trim().toLowerCase();
    let visibleCount = 0;
    items.forEach((item) => {
      const depts = item.dataset.dept || "";
      const types = item.dataset.type || "";
      const text = `${item.textContent} ${depts} ${types}`.toLowerCase();
      const matchesDept = state.dept === "all" || depts.split(" ").includes(state.dept);
      const matchesType = state.type === "all" || types.split(" ").includes(state.type);
      const matchesQuery = !query || text.includes(query);
      const visible = matchesDept && matchesType && matchesQuery;
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  root.querySelectorAll("[data-course-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.courseFilter;
      if (!group) return;
      state[group] = button.dataset.filterValue || "all";
      root
        .querySelectorAll(`[data-course-filter="${group}"]`)
        .forEach((item) => item.classList.toggle("active", item === button));
      renderCourseItems();
    });
  });

  searchInput?.addEventListener("input", (event) => {
    state.query = event.target.value || "";
    renderCourseItems();
  });

  renderCourseItems();
}

function wireNetworkOrgLogos() {
  const logos = Array.from(document.querySelectorAll(".network-org-logo[data-org-name]"));
  if (!logos.length) return;

  const loaded = new Map();

  function resolveUrl(url, base) {
    try {
      return new URL(url, base).toString();
    } catch {
      return "";
    }
  }

  function canLoadImage(url) {
    if (!url) return Promise.resolve(false);
    if (loaded.has(url)) return loaded.get(url);
    const promise = new Promise((resolve) => {
      const image = new Image();
      image.referrerPolicy = "no-referrer";
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = url;
    });
    loaded.set(url, promise);
    return promise;
  }

  function applyLogo(node, url, source) {
    node.classList.add("has-logo-image");
    node.dataset.logoSource = source;
    node.style.backgroundImage = `url("${url}")`;
  }

  async function setLogo(node) {
    const uploaded = node.dataset.uploadLogo || "";
    const crawled = node.dataset.crawledLogo || "";
    const officialSite = node.dataset.officialSite || "";
    const directCandidates = [uploaded, crawled].filter(Boolean);

    for (const candidate of directCandidates) {
      const absolute = resolveUrl(candidate, window.location.href);
      if (await canLoadImage(absolute)) {
        applyLogo(node, absolute, uploaded === candidate ? "upload" : "crawler");
        return;
      }
    }

    if (!officialSite) {
      node.dataset.logoSource = "fallback";
      return;
    }

    const officialCandidates = [
      "/favicon.ico",
      "/favicon.png",
      "/apple-touch-icon.png",
      "/apple-touch-icon-precomposed.png",
      "/logo.png",
    ].map((path) => resolveUrl(path, officialSite));

    for (const candidate of officialCandidates) {
      if (await canLoadImage(candidate)) {
        applyLogo(node, candidate, "official-site");
        return;
      }
    }

    node.dataset.logoSource = "fallback";
  }

  async function hydrateCrawlerResults() {
    try {
      const response = await fetch("assets/data/network-org-logos.json", { cache: "no-store" });
      if (!response.ok) return;
      const records = await response.json();
      const byName = new Map(records.map((record) => [record.name, record.logo]).filter((entry) => entry[0] && entry[1]));
      logos.forEach((node) => {
        if (!node.dataset.uploadLogo && !node.dataset.crawledLogo) {
          node.dataset.crawledLogo = byName.get(node.dataset.orgName) || "";
        }
      });
    } catch {
      return;
    }
  }

  hydrateCrawlerResults().finally(() => logos.forEach((node) => setLogo(node)));
}

function wireNetworkSearch() {
  const root = document.querySelector("[data-network-search-root]");
  const results = Array.from(document.querySelectorAll("[data-network-result]"));
  const searchInput = document.querySelector("[data-network-search]");
  const filterButtons = Array.from(document.querySelectorAll("[data-network-filter]"));
  const emptyState = document.querySelector(".network-empty-state");
  if (!root || !results.length) return;

  const state = { filter: "all", search: "" };

  function renderNetworkResults() {
    const query = state.search.trim().toLowerCase();
    let visibleCount = 0;
    results.forEach((item) => {
      const type = item.dataset.type || "";
      const haystack = `${item.textContent} ${item.dataset.keywords || ""}`.toLowerCase();
      const matchesType = state.filter === "all" || type === state.filter;
      const matchesQuery = !query || haystack.includes(query);
      const visible = matchesType && matchesQuery;
      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;
  }

  function setNetworkFilter(filter) {
    state.filter = filter || "all";
    filterButtons.forEach((button) => button.classList.toggle("active", button.dataset.networkFilter === state.filter));
    renderNetworkResults();
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setNetworkFilter(button.dataset.networkFilter || "all"));
  });

  document.querySelectorAll("[data-network-filter-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", () => setNetworkFilter(trigger.dataset.networkFilterTrigger || "all"));
  });

  searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderNetworkResults();
  });

  renderNetworkResults();
}

const isProfileRedirecting = redirectGuestProfile();

if (!isProfileRedirecting) {
  normalizeSiteHeader();
  wireFilters();
  wireSiteSearchForms();
  renderSiteSearchResults();
  wireAuthForms();
  wireProfileAvatarEditor();
  renderProfile();
  renderLikedPosts();
  wireCommunityGate();
  wireClinicianForumAccess();
  wireForum();
  wireDoctorWorkspace();
  wireDatasetBrowser();
  wireCourseContentFilters();
  wireNetworkOrgLogos();
  wireNetworkSearch();
  wireHotToolFeed();
  wireHomeNewsScroll();
  wireHomeAgent();
}

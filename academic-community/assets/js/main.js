const authKey = "hmaiAuthState";
const postStorageKey = "hmaiForumPosts";
const reactionStorageKey = "hmaiPostReactions";
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
  medicalLLM: "Medical LLMs",
  agent: "Agent",
  aiHealthcare: "AI for Healthcare",
  multimodal: "Multi-modal",
};

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
  {
    title: "About（collaborator）",
    url: "about.html",
    category: "项目",
    text: "About collaborator 项目介绍 共建者 社群 招募 联系 平台结构",
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
    <span class="tag ${state.status === "verified" ? "green" : "blue"}">${statusText}</span>
    <h2>${state.name || "访客用户"}</h2>
    <p>${state.roleLabel || "普通访问者"}</p>
    <dl class="profile-meta">
      <dt>联系方式</dt><dd>${state.contact || "待填写"}</dd>
      <dt>机构/学校</dt><dd>${state.institution || "待补充"}</dd>
      <dt>科室/专业</dt><dd>${state.specialty || "待补充"}</dd>
      <dt>社区凭证</dt><dd>${communityCredentialText(state)}</dd>
    </dl>
  `;
}

function renderLikedPosts() {
  const list = document.querySelector("#likedPostsList");
  if (!list) return;

  const reactions = getReactions();
  const likedPosts = getForumPosts().filter((post) => reactions[post.id]?.favorited);
  list.innerHTML = likedPosts.length
    ? likedPosts.map((post) => `
      <a class="liked-post-item" href="community.html">
        <span class="tag blue">${categoryLabels[post.category]}</span>
        <strong>${post.title}</strong>
        <p>${post.body}</p>
        <small>${post.dept || "未标注领域"} · ${post.favorites + 1} 收藏</small>
      </a>`).join("")
    : '<div class="empty-state">还没有收藏的讨论。进入讨论区后点击“收藏”，会汇总到这里。</div>';
}

function toggleReaction(postId, type) {
  const reactions = getReactions();
  reactions[postId] = reactions[postId] || { liked: false, favorited: false };
  if (type === "like") reactions[postId].liked = !reactions[postId].liked;
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
      document.querySelector("#loginStatus").textContent = "登录状态已保存，可继续提交资格审核。";
      updateAuthCard();
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
    window.location.href = "home.html";
  });
}

function wireCommunityGate() {
  const gate = document.querySelector("#communityGate");
  if (!gate) return;

  document.body.classList.remove("community-locked");
  document.body.classList.add("community-unlocked");
  gate.remove();
}

function wireForum() {
  const postList = document.querySelector("#postList");
  if (!postList) return;
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
              <button class="post-action ${liked ? "active" : ""}" type="button" data-action="like" data-post-id="${post.id}" aria-pressed="${liked}"><span>赞</span><strong>${post.likes + (liked ? 1 : 0)}</strong></button>
              <button class="post-action ${favorited ? "active favorite" : ""}" type="button" data-action="favorite" data-post-id="${post.id}" aria-pressed="${favorited}"><span>收藏</span><strong>${post.favorites + (favorited ? 1 : 0)}</strong></button>
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
  const row = document.querySelector(".news-scroll-row");
  if (!row || row.dataset.scrollReady === "true") return;

  const frame = row.closest("[data-news-carousel]");
  const slides = [...row.querySelectorAll(".news-source-card")];
  const dots = [...(frame?.querySelectorAll("[data-news-dot]") || [])];
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
    if (!slides.length) return;
    activeIndex = (index + slides.length) % slides.length;
    row.scrollTo({ left: slides[activeIndex].offsetLeft - row.offsetLeft, behavior: "smooth" });
    setActiveDot(activeIndex);
  };

  const restartAutoScroll = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => scrollToIndex(activeIndex + 1), 5500);
  };

  document.querySelectorAll("[data-news-scroll]").forEach((button) => {
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

  frame?.addEventListener("mouseenter", () => window.clearInterval(timer));
  frame?.addEventListener("mouseleave", restartAutoScroll);
  frame?.addEventListener("focusin", () => window.clearInterval(timer));
  frame?.addEventListener("focusout", restartAutoScroll);

  setActiveDot(0);
  restartAutoScroll();
  row.dataset.scrollReady = "true";
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
  const state = { filter: "all", search: "" };

  function renderDatasetCards() {
    const query = state.search.trim().toLowerCase();
    cards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const text = card.textContent.toLowerCase();
      const matchesTag = state.filter === "all" || tags.includes(state.filter);
      const matchesQuery = !query || text.includes(query);
      card.hidden = !matchesTag || !matchesQuery;
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.datasetFilter || "all";
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderDatasetCards();
    });
  });

  searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderDatasetCards();
  });

  renderDatasetCards();
}

function wireCourseContentFilters() {
  const root = document.querySelector("[data-course-filters]");
  const items = Array.from(document.querySelectorAll("[data-course-item]"));
  if (!root || !items.length) return;

  const state = { dept: "all", type: "all" };
  const emptyState = document.querySelector(".course-empty-state");

  function renderCourseItems() {
    let visibleCount = 0;
    items.forEach((item) => {
      const depts = item.dataset.dept || "";
      const types = item.dataset.type || "";
      const matchesDept = state.dept === "all" || depts.split(" ").includes(state.dept);
      const matchesType = state.type === "all" || types.split(" ").includes(state.type);
      const visible = matchesDept && matchesType;
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

  renderCourseItems();
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

wireFilters();
wireSiteSearchForms();
renderSiteSearchResults();
wireAuthForms();
renderProfile();
renderLikedPosts();
wireCommunityGate();
wireForum();
wireDoctorWorkspace();
wireDatasetBrowser();
wireCourseContentFilters();
wireNetworkSearch();
wireHotToolFeed();
wireHomeNewsScroll();
wireHomeAgent();

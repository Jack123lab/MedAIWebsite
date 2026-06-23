(() => {
  const page = document.querySelector(".ahamed-tools-page");
  if (!page) return;

  const form = document.getElementById("ahamedForm");
  const promptInput = document.getElementById("ahamedPrompt");
  const thread = document.getElementById("ahamedThread");
  const skillsToggle = document.getElementById("skillsToggle");
  const pingButton = document.getElementById("ahamedPing");
  const endpointInput = document.getElementById("ahamedEndpoint");
  const pingResult = document.getElementById("ahamedPingResult");
  const sendButton = form?.querySelector(".ahamed-send");
  const communitySection = document.getElementById("tools-community");
  const communityGrid = document.getElementById("communityToolGrid");
  const communityStatus = document.getElementById("communitySyncStatus");
  const communitySearch = document.getElementById("communitySearch");

  let chatMode = "direct";
  let skillsEnabled = true;
  let isGenerating = false;
  let communityItems = [];
  let communityFilter = "all";

  const responses = {
    direct: [
      "我会先把问题拆成临床任务、证据检索和输出格式三部分。",
      "在 AhaMed 的直接对话模式里，建议固定一个医学模型，保留上下文，并把症状、体征、检查结果和禁忌证写清楚。",
      "如果这是工具验证任务，可以把输出约束为：鉴别诊断、需要补充的信息、危险信号、下一步建议、证据来源。",
      "请注意，页面演示回答用于本地交互预览，不替代真实 AhaMed 后端和临床判断。"
    ],
    battle: [
      "已切换到模型对战思路。相同问题会发送给两个模型，并比较医学准确性、证据质量、完整性和安全边界。",
      "建议把评分标准设为四项：诊断推理、遗漏风险、指南依据、患者沟通。",
      "AhaMed 的优势是把用户反馈沉淀为评测信号，适合持续比较医疗模型在真实问题上的表现。"
    ],
    skills: [
      "Skills 已启用。理想链路是先检索指南和文献，再解析上传材料，最后生成结构化医学回答。",
      "可接入的能力包括搜索、OCR、文档解析、表格处理、医学报告结构化和证据摘要。",
      "在同源部署中，可把这里的模拟调用替换为 AhaMed 的 /api/chat/generate 流式接口。"
    ]
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function thinkingMarkup() {
    return '<span class="ahamed-thinking"><span></span><span></span><span></span></span>';
  }

  function addMessage(role, title, content, streaming = false) {
    const article = document.createElement("article");
    article.className = `ahamed-message ${role}`;
    article.innerHTML = `
      <div class="ahamed-avatar">${role === "user" ? "U" : "A"}</div>
      <div class="ahamed-bubble">
        <strong>${escapeHtml(title)}</strong>
        <p>${streaming ? thinkingMarkup() : escapeHtml(content)}</p>
      </div>
    `;
    thread.appendChild(article);
    thread.scrollTop = thread.scrollHeight;
    return article.querySelector("p");
  }

  function buildResponse(prompt) {
    const source = skillsEnabled ? responses.skills : responses[chatMode];
    const modeLabel = chatMode === "battle" ? "模型对战" : "直接对话";
    return [
      `收到：${prompt}`,
      `当前模式：${modeLabel}；Skills：${skillsEnabled ? "已启用" : "未启用"}。`,
      ...source
    ].join("\n\n");
  }

  async function streamText(node, text) {
    node.textContent = "";
    const chunks = text.split("");
    for (let i = 0; i < chunks.length; i += 1) {
      node.textContent += chunks[i];
      if (i % 3 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }
  }

  function setGenerating(value) {
    isGenerating = value;
    if (sendButton) sendButton.disabled = value;
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (isGenerating) return;
    const prompt = promptInput.value.trim();
    if (!prompt) {
      promptInput.focus();
      return;
    }

    addMessage("user", "You", prompt);
    promptInput.value = "";
    promptInput.style.height = "auto";
    setGenerating(true);

    const responseNode = addMessage("assistant", "AhaMed Assistant", "", true);
    await new Promise((resolve) => setTimeout(resolve, 420));
    await streamText(responseNode, buildResponse(prompt));
    setGenerating(false);
  });

  promptInput?.addEventListener("input", () => {
    promptInput.style.height = "auto";
    promptInput.style.height = `${Math.min(promptInput.scrollHeight, 180)}px`;
  });

  document.querySelectorAll(".ahamed-suggestions button").forEach((button) => {
    button.addEventListener("click", () => {
      promptInput.value = button.textContent.trim();
      promptInput.focus();
      promptInput.dispatchEvent(new Event("input"));
    });
  });

  document.querySelectorAll("[data-chat-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-chat-mode]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      chatMode = button.dataset.chatMode || "direct";
      document.querySelectorAll(".ahamed-status").forEach((item) => item.classList.remove("active"));
      document.querySelector(`.ahamed-status[data-mode="${chatMode}"]`)?.classList.add("active");
    });
  });

  document.querySelectorAll(".ahamed-status").forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.mode;
      document.querySelectorAll(".ahamed-status").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      if (mode === "skills") {
        skillsEnabled = true;
        skillsToggle?.setAttribute("aria-pressed", "true");
      } else if (mode) {
        chatMode = mode === "battle" ? "battle" : "direct";
        document.querySelectorAll("[data-chat-mode]").forEach((item) => {
          item.classList.toggle("active", item.dataset.chatMode === chatMode);
        });
      }
    });
  });

  skillsToggle?.addEventListener("click", () => {
    skillsEnabled = !skillsEnabled;
    skillsToggle.setAttribute("aria-pressed", String(skillsEnabled));
    document.querySelector('.ahamed-status[data-mode="skills"]')?.classList.toggle("active", skillsEnabled);
  });

  pingButton?.addEventListener("click", async () => {
    const baseUrl = endpointInput.value.replace(/\/$/, "");
    pingResult.textContent = "正在检测 AhaMed models 接口...";
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);
      const response = await fetch(`${baseUrl}/api/models`, {
        method: "GET",
        mode: "cors",
        signal: controller.signal
      });
      clearTimeout(timeout);
      pingResult.textContent = response.ok
        ? "接口可访问。真实聊天还需要同源部署、登录态和会话创建。"
        : `接口返回 ${response.status}。当前页面继续使用本地模拟流。`;
    } catch (error) {
      pingResult.textContent = "浏览器无法直接访问该接口，可能受 CORS、登录态或网络限制影响。当前页面继续使用本地模拟流。";
    }
  });

  const fallbackTools = [
    {
      id: "fallback-evidence-api",
      title: "循证医疗 API 工具链",
      summary: "把指南检索、文献摘要和结构化证据表组合成医生 Copilot 的基础能力。",
      category: "evidence",
      views: 286,
      pinned: true,
      createdAt: "2026-06-23",
      href: "tools-scenario-evidence-api.html"
    },
    {
      id: "fallback-agentic-hospital",
      title: "Agentic Hospital 工作流",
      summary: "多代理协同处理分诊、病历摘要、检查解释和照护协调，适合医院内部 AI 原型。",
      category: "workflow",
      views: 241,
      pinned: false,
      createdAt: "2026-06-20",
      href: "tools-scenario-agentic-hospital.html"
    },
    {
      id: "fallback-doc-tools",
      title: "医学文档解析与报告问答",
      summary: "围绕病历、PDF、表格和检查报告，组合 OCR、文档解析和问答能力。",
      category: "document",
      views: 198,
      pinned: false,
      createdAt: "2026-06-18",
      href: "tools-skill.html"
    },
    {
      id: "fallback-registration-api",
      title: "挂号网站 Mock API",
      summary: "用于演示医院检索、科室选择、医生排班、号源查询和预约草稿创建。",
      category: "workflow",
      views: 164,
      pinned: false,
      createdAt: "2026-06-16",
      href: "tools-mock-registration.html"
    },
    {
      id: "fallback-med-agent",
      title: "医学 Skill Agent 组合",
      summary: "把搜索、Python、表格、PPT、PDF 和医学专用 Skill 编排成可复用工具栏。",
      category: "agent",
      views: 143,
      pinned: false,
      createdAt: "2026-06-14",
      href: "tools-skill.html"
    },
    {
      id: "fallback-up2date",
      title: "AI-native Up2date 知识库",
      summary: "将指南、研究和临床路径组织为持续更新的医学知识服务。",
      category: "evidence",
      views: 121,
      pinned: false,
      createdAt: "2026-06-12",
      href: "tools-scenario-ai-native-up2date.html"
    }
  ];

  function categoryLabel(category) {
    const labels = {
      agent: "Agent",
      evidence: "循证",
      document: "文档",
      workflow: "工作流",
      tools: "工具分享",
      all: "全部"
    };
    return labels[category] || category || "工具";
  }

  function normalizeCommunityPost(post) {
    return {
      id: post.id || post.slug || post.title,
      title: post.title || "未命名工具分享",
      summary: post.summary || post.content?.slice?.(0, 110) || "来自本地 AhaMed 工具分享社区。",
      category: post.category || "tools",
      views: Number(post.views || 0),
      pinned: Boolean(post.pinned),
      createdAt: post.createdAt || new Date().toISOString(),
      href: post.id ? `http://localhost:3010/community/${post.id}` : "http://localhost:3010/community?category=tools"
    };
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString("zh-CN", { month: "short", day: "numeric" });
  }

  function renderCommunity(items) {
    if (!communityGrid) return;
    const query = (communitySearch?.value || "").trim().toLowerCase();
    const filtered = items.filter((item) => {
      const matchesFilter = communityFilter === "all" || item.category === communityFilter || item.category === "tools";
      const haystack = `${item.title} ${item.summary} ${item.category}`.toLowerCase();
      return matchesFilter && (!query || haystack.includes(query));
    });

    if (filtered.length === 0) {
      communityGrid.innerHTML = `
        <div class="ahamed-community-card">
          <div class="ahamed-community-cover"></div>
          <div class="ahamed-community-body">
            <div class="ahamed-community-meta"><span>Empty</span></div>
            <h3>没有匹配的工具分享</h3>
            <p>换一个关键词，或打开本地社区页面继续浏览。</p>
          </div>
        </div>
      `;
      return;
    }

    communityGrid.innerHTML = filtered.map((item) => `
      <a class="ahamed-community-card" href="${escapeHtml(item.href)}" target="${item.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">
        <div class="ahamed-community-cover"></div>
        <div class="ahamed-community-body">
          <div class="ahamed-community-meta">
            ${item.pinned ? "<span>置顶</span>" : ""}
            <span>${escapeHtml(categoryLabel(item.category))}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.summary)}</p>
          <div class="ahamed-community-foot">
            <span>${escapeHtml(formatDate(item.createdAt))}</span>
            <span>${item.views} views</span>
          </div>
        </div>
      </a>
    `).join("");
  }

  async function loadCommunityTools() {
    if (!communitySection || !communityGrid) return;
    const api = communitySection.dataset.communityApi;
    communityItems = fallbackTools;
    renderCommunity(communityItems);

    if (!api) return;
    try {
      const response = await fetch(api, { mode: "cors", cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      const posts = Array.isArray(payload.posts) ? payload.posts : [];
      if (posts.length > 0) {
        communityItems = posts.map(normalizeCommunityPost);
        communityStatus.textContent = `已同步 ${communityItems.length} 条本地工具分享`;
      } else {
        communityStatus.textContent = "本地社区暂无工具分享，已展示精选工具";
      }
    } catch (error) {
      communityStatus.textContent = "本地社区接口暂不可用，已展示精选工具";
    }
    renderCommunity(communityItems);
  }

  document.querySelectorAll("[data-community-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-community-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      communityFilter = button.dataset.communityFilter || "all";
      renderCommunity(communityItems);
    });
  });

  communitySearch?.addEventListener("input", () => renderCommunity(communityItems));
  loadCommunityTools();
})();

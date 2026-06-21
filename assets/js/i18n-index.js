(() => {
  const storageKey = "medaiHomeLanguage";
  const supportedLanguages = ["zh", "en", "ar"];

  const translations = {
    zh: {
      htmlLang: "zh-CN",
      dir: "ltr",
      title: "Freedom AI | 医学 AI 新闻与 Agent",
      description: "Freedom AI 首页仅保留医学 AI 新闻滚动图片栏和 Agent 对话框，方便快速查看热点并进入模型问答。",
      navLabel: "主导航",
      brandSubtitle: "医学 AI 社区",
      searchLabel: "站内搜索",
      searchPlaceholder: "搜索",
      searchButton: "搜索",
      nav: {
        "index.html": "首页",
        "learning.html": "内容",
        "network.html": "社区",
        "community.html": "讨论区",
        "datasets.html": "数据集",
        "tools.html": "工具库",
        "benchmark.html": "Benchmark",
        "crowdsourcing.html": "众包平台",
        "profile.html": "用户",
      },
      newsSectionLabel: "新闻滚动图片栏",
      newsRowLabel: "新闻栏目",
      previousNews: "上一条新闻",
      nextNews: "下一条新闻",
      newsPosition: "新闻位置",
      newsDot: (index) => `第 ${index + 1} 条新闻`,
      detail: "查看详情 →",
      newsCards: [
        {
          alt: "Nature Medicine 医学 AI 热点视觉摘要",
          source: "Nature Medicine",
          title: "多模态医学 AI、临床验证与安全性评估",
          summary: "关注医学基础模型、影像文本融合、真实世界评估、透明报告和医生复核流程。",
        },
        {
          alt: "丁香园临床热点视觉摘要",
          source: "丁香园",
          title: "医生社区、指南变化与用药安全",
          summary: "追踪临床一线问题、病例讨论和医生真实工作流。",
        },
        {
          alt: "The Lancet 全球健康热点视觉摘要",
          source: "The Lancet",
          title: "全球健康、专科前沿与系统转化",
          summary: "关注公共卫生、临床公平性和大规模医疗影响。",
        },
        {
          alt: "JAMA 医学证据热点视觉摘要",
          source: "JAMA Network",
          title: "医疗质量、政策监管与使用边界",
          summary: "观察 AI 进入真实医疗系统后的规范、审计和风险。",
        },
        {
          alt: "NEJM 临床证据热点视觉摘要",
          source: "NEJM",
          title: "临床试验、患者安全与证据更新",
          summary: "用于筛选医学 AI 评价框架和临床验证主题。",
        },
      ],
      agentSectionLabel: "Agent 对话框",
      agentInputLabel: "输入问题",
      agentPlaceholder: "给 Freedom AI 发送消息",
      modelMenuLabel: "选择模型",
      sendLabel: "发送",
      answerHint: "输入问题后按 Enter 开始。",
      publishCase: "发布这个案例到讨论区",
      reply(question, model) {
        return [
          "已收到。我会先按脱敏病例讨论的方式整理：",
          "1. 先确认资料不包含患者姓名、电话、身份证号、住院号、门诊号等可识别信息。",
          "2. 建议补充背景、关键检查文本、已尝试方法和希望社区判断的问题。",
          `3. 可用 ${model} 生成讨论区模板，再由你确认后发布。`,
          `问题摘要：${question}`,
        ].join("\n");
      },
      caseDialog: {
        close: "关闭发布窗口",
        eyebrow: "Case to Forum",
        title: "发布这个案例到讨论区",
        intro: "系统会按脱敏病例讨论模板整理内容。请确认不包含姓名、电话、身份证号、住院号、门诊号等可识别信息。",
        privacy: "我确认案例已经脱敏，可用于社区讨论",
        privacyNote: "上传资料仅用于本地演示生成模板，不会发送到服务器。",
        dept: "科室/领域",
        deptPlaceholder: "如心内科、肿瘤、影像",
        category: "资料类型",
        categories: {
          clinical: "临床文本",
          guideline: "指南问答",
          research: "科研设计",
          tool: "工具经验",
          ethics: "合规伦理",
        },
        files: "补充资料",
        note: "补充说明",
        notePlaceholder: "请补充病例背景、已尝试处理方式、希望社区帮助判断的问题。",
        previewTitle: "待确认模板",
        previewButton: "整理模板",
        cancel: "取消",
        submit: "确认并发布到讨论区",
      },
      footer: {
        title: "Freedom AI",
        intro: "医学 AI 新闻、工具和社区入口。",
        institutions: "机构",
        institutionRail: "机构 Logo 滚动列表",
        license: "协议",
        licenseLink: "GMAI License v0.1",
        contact: "联系",
        contactLink: "联系人：ydexiang1@gmail.com",
        subscribe: "邮件订阅",
        logos: ["国健院", "SRIBD", "CUHKSZ", "SLAI", "CUHK Medicine", "Clinical Center", "MedAI Lab", "Hospital Network"],
      },
    },
    en: {
      htmlLang: "en",
      dir: "ltr",
      title: "Freedom AI | Medical AI News and Agent",
      description: "Freedom AI home keeps a focused medical AI news carousel and an Agent composer for quick updates and model questions.",
      navLabel: "Primary navigation",
      brandSubtitle: "Medical AI Community",
      searchLabel: "Site search",
      searchPlaceholder: "Search",
      searchButton: "Search",
      nav: {
        "index.html": "Home",
        "learning.html": "Content",
        "network.html": "Community",
        "community.html": "Forum",
        "datasets.html": "Datasets",
        "tools.html": "Tools",
        "benchmark.html": "Benchmark",
        "crowdsourcing.html": "Crowdsourcing",
        "profile.html": "Profile",
      },
      newsSectionLabel: "News carousel",
      newsRowLabel: "News sources",
      previousNews: "Previous story",
      nextNews: "Next story",
      newsPosition: "News position",
      newsDot: (index) => `News item ${index + 1}`,
      detail: "View details →",
      newsCards: [
        {
          alt: "Nature Medicine medical AI highlight visual summary",
          source: "Nature Medicine",
          title: "Multimodal medical AI, clinical validation, and safety evaluation",
          summary: "Track medical foundation models, image-text fusion, real-world evaluation, transparent reporting, and clinician review workflows.",
        },
        {
          alt: "DXY clinical news visual summary",
          source: "DXY",
          title: "Clinician communities, guideline updates, and medication safety",
          summary: "Follow front-line clinical questions, case discussion, and real physician workflows.",
        },
        {
          alt: "The Lancet global health highlight visual summary",
          source: "The Lancet",
          title: "Global health, specialty frontiers, and system translation",
          summary: "Focus on public health, clinical equity, and large-scale healthcare impact.",
        },
        {
          alt: "JAMA medical evidence visual summary",
          source: "JAMA Network",
          title: "Care quality, policy oversight, and deployment boundaries",
          summary: "Observe governance, audit, and risk as AI enters real healthcare systems.",
        },
        {
          alt: "NEJM clinical evidence visual summary",
          source: "NEJM",
          title: "Clinical trials, patient safety, and evidence updates",
          summary: "Use as a lens for medical AI evaluation frameworks and clinical validation topics.",
        },
      ],
      agentSectionLabel: "Agent composer",
      agentInputLabel: "Enter a question",
      agentPlaceholder: "Message Freedom AI",
      modelMenuLabel: "Choose a model",
      sendLabel: "Send",
      answerHint: "Type a question and press Enter to begin.",
      publishCase: "Publish this case to the forum",
      reply(question, model) {
        return [
          "Received. I will first structure this as a de-identified clinical discussion:",
          "1. Confirm that the material contains no patient name, phone number, ID, admission number, clinic number, or other identifiable information.",
          "2. Add the background, key findings, attempted approach, and the question you want the community to judge.",
          `3. ${model} can draft a forum template for your review before posting.`,
          `Question summary: ${question}`,
        ].join("\n");
      },
      caseDialog: {
        close: "Close publishing window",
        eyebrow: "Case to Forum",
        title: "Publish this case to the forum",
        intro: "The system will organize the content as a de-identified case discussion template. Confirm that it contains no patient names, phone numbers, IDs, admission numbers, or clinic numbers.",
        privacy: "I confirm this case is de-identified and can be used for community discussion",
        privacyNote: "Uploaded files are only used for the local demo template and are not sent to a server.",
        dept: "Department / field",
        deptPlaceholder: "e.g. cardiology, oncology, imaging",
        category: "Material type",
        categories: {
          clinical: "Clinical text",
          guideline: "Guideline Q&A",
          research: "Research design",
          tool: "Tool experience",
          ethics: "Governance and ethics",
        },
        files: "Supplementary files",
        note: "Additional notes",
        notePlaceholder: "Add case background, attempted handling, and what you want the community to help judge.",
        previewTitle: "Template to confirm",
        previewButton: "Prepare template",
        cancel: "Cancel",
        submit: "Confirm and publish",
      },
      footer: {
        title: "Freedom AI",
        intro: "Medical AI news, tools, and community entry points.",
        institutions: "Institutions",
        institutionRail: "Institution logo carousel",
        license: "License",
        licenseLink: "GMAI License v0.1",
        contact: "Contact",
        contactLink: "Contact: ydexiang1@gmail.com",
        subscribe: "Email updates",
        logos: ["NHI", "SRIBD", "CUHKSZ", "SLAI", "CUHK Medicine", "Clinical Center", "MedAI Lab", "Hospital Network"],
      },
    },
    ar: {
      htmlLang: "ar",
      dir: "rtl",
      title: "Freedom AI | أخبار الذكاء الاصطناعي الطبي والوكيل",
      description: "توفر صفحة Freedom AI الرئيسية شريط أخبار طبية بالذكاء الاصطناعي ومربع محادثة للوكيل لمتابعة المستجدات وطرح الأسئلة بسرعة.",
      navLabel: "التنقل الرئيسي",
      brandSubtitle: "مجتمع الذكاء الاصطناعي الطبي",
      searchLabel: "بحث في الموقع",
      searchPlaceholder: "بحث",
      searchButton: "بحث",
      nav: {
        "index.html": "الرئيسية",
        "learning.html": "المحتوى",
        "network.html": "المجتمع",
        "community.html": "المنتدى",
        "datasets.html": "مجموعات البيانات",
        "tools.html": "الأدوات",
        "benchmark.html": "Benchmark",
        "crowdsourcing.html": "التعهيد الجماعي",
        "profile.html": "الملف الشخصي",
      },
      newsSectionLabel: "شريط الأخبار",
      newsRowLabel: "مصادر الأخبار",
      previousNews: "الخبر السابق",
      nextNews: "الخبر التالي",
      newsPosition: "موضع الخبر",
      newsDot: (index) => `الخبر ${index + 1}`,
      detail: "عرض التفاصيل ←",
      newsCards: [
        {
          alt: "ملخص بصري لأخبار الذكاء الاصطناعي الطبي في Nature Medicine",
          source: "Nature Medicine",
          title: "الذكاء الاصطناعي الطبي متعدد الوسائط، التحقق السريري، وتقييم السلامة",
          summary: "متابعة النماذج الطبية الأساسية، دمج الصور والنصوص، التقييم الواقعي، التقارير الشفافة، ومراجعة الأطباء.",
        },
        {
          alt: "ملخص بصري لأخبار DXY السريرية",
          source: "DXY",
          title: "مجتمعات الأطباء، تحديثات الإرشادات، وسلامة الدواء",
          summary: "رصد أسئلة الخط الأول السريري، نقاشات الحالات، وسير عمل الأطباء الفعلي.",
        },
        {
          alt: "ملخص بصري للصحة العالمية في The Lancet",
          source: "The Lancet",
          title: "الصحة العالمية، حدود التخصصات، والتحول داخل الأنظمة",
          summary: "التركيز على الصحة العامة، العدالة السريرية، والأثر الواسع في الرعاية الصحية.",
        },
        {
          alt: "ملخص بصري للأدلة الطبية في JAMA",
          source: "JAMA Network",
          title: "جودة الرعاية، الرقابة التنظيمية، وحدود الاستخدام",
          summary: "متابعة الحوكمة والتدقيق والمخاطر عند دخول الذكاء الاصطناعي إلى الأنظمة الصحية الواقعية.",
        },
        {
          alt: "ملخص بصري للأدلة السريرية في NEJM",
          source: "NEJM",
          title: "التجارب السريرية، سلامة المرضى، وتحديث الأدلة",
          summary: "مرجع لاختيار أطر تقييم الذكاء الاصطناعي الطبي وموضوعات التحقق السريري.",
        },
      ],
      agentSectionLabel: "مربع محادثة الوكيل",
      agentInputLabel: "أدخل سؤالا",
      agentPlaceholder: "أرسل رسالة إلى Freedom AI",
      modelMenuLabel: "اختر النموذج",
      sendLabel: "إرسال",
      answerHint: "اكتب سؤالا واضغط Enter للبدء.",
      publishCase: "نشر هذه الحالة في المنتدى",
      reply(question, model) {
        return [
          "تم الاستلام. سأرتبها أولا كمناقشة سريرية منزوعة الهوية:",
          "1. التأكد من عدم وجود اسم المريض أو الهاتف أو رقم الهوية أو رقم الدخول أو رقم العيادة أو أي معلومات تعريفية.",
          "2. إضافة الخلفية والنتائج الرئيسية والطريقة المجربة والسؤال الذي تريد من المجتمع مناقشته.",
          `3. يمكن استخدام ${model} لصياغة قالب للمنتدى قبل أن تراجعه وتنشره.`,
          `ملخص السؤال: ${question}`,
        ].join("\n");
      },
      caseDialog: {
        close: "إغلاق نافذة النشر",
        eyebrow: "Case to Forum",
        title: "نشر هذه الحالة في المنتدى",
        intro: "سينظم النظام المحتوى كقالب نقاش لحالة منزوعة الهوية. يرجى التأكد من عدم وجود أسماء مرضى أو أرقام هواتف أو هويات أو أرقام دخول أو أرقام عيادة.",
        privacy: "أؤكد أن الحالة منزوعة الهوية ويمكن استخدامها للنقاش المجتمعي",
        privacyNote: "تستخدم الملفات المرفوعة فقط لإنشاء قالب محلي تجريبي ولا ترسل إلى الخادم.",
        dept: "القسم / المجال",
        deptPlaceholder: "مثال: القلب، الأورام، التصوير",
        category: "نوع المادة",
        categories: {
          clinical: "نص سريري",
          guideline: "أسئلة الإرشادات",
          research: "تصميم بحثي",
          tool: "تجربة أداة",
          ethics: "الحوكمة والأخلاقيات",
        },
        files: "مواد إضافية",
        note: "ملاحظات إضافية",
        notePlaceholder: "أضف خلفية الحالة، ما تمت تجربته، وما تريد من المجتمع المساعدة في الحكم عليه.",
        previewTitle: "قالب للمراجعة",
        previewButton: "تنظيم القالب",
        cancel: "إلغاء",
        submit: "تأكيد ونشر",
      },
      footer: {
        title: "Freedom AI",
        intro: "أخبار وأدوات ومداخل مجتمع الذكاء الاصطناعي الطبي.",
        institutions: "المؤسسات",
        institutionRail: "شريط شعارات المؤسسات",
        license: "الرخصة",
        licenseLink: "GMAI License v0.1",
        contact: "التواصل",
        contactLink: "البريد: ydexiang1@gmail.com",
        subscribe: "تحديثات البريد",
        logos: ["NHI", "SRIBD", "CUHKSZ", "SLAI", "CUHK Medicine", "Clinical Center", "MedAI Lab", "Hospital Network"],
      },
    },
  };

  function getLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (supportedLanguages.includes(requested)) return requested;
    const saved = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(saved)) return saved;
    return "zh";
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setAttr(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  }

  function setLabelText(selector, value) {
    const label = document.querySelector(selector);
    if (!label) return;
    const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (textNode) {
      textNode.nodeValue = value;
    } else {
      label.prepend(document.createTextNode(value));
    }
  }

  function replaceCheckLabel(value) {
    const label = document.querySelector(".case-privacy-panel .check-line");
    const input = label?.querySelector("input");
    if (!label || !input) return;
    label.textContent = "";
    label.append(input, ` ${value}`);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[char]));
  }

  function localizeSubmittedAnswer(language) {
    const dict = translations[language];
    const output = document.querySelector("#agentAnswer");
    if (!output || output.hidden || output.dataset.submitted !== "true") return;

    const model = document.querySelector("#agentModel")?.value || "GPT-5.5";
    const question = document.querySelector("#agentQuestion")?.value.trim()
      || output.querySelector("strong")?.textContent?.trim()
      || dict.agentPlaceholder;
    const reply = dict.reply(question, model);
    output.innerHTML = `
      <span>${escapeHtml(model)}</span>
      <strong>${escapeHtml(question)}</strong>
      <p>${escapeHtml(reply).replace(/\n/g, "<br>")}</p>
      <div class="agent-answer-actions">
        <button class="btn primary" type="button" data-case-publish-open>${escapeHtml(dict.publishCase)}</button>
      </div>`;
  }

  function applyLanguage(language) {
    const dict = translations[language] || translations.zh;
    localStorage.setItem(storageKey, language);

    document.documentElement.lang = dict.htmlLang;
    document.documentElement.dir = dict.dir;
    document.body.classList.toggle("is-rtl", dict.dir === "rtl");
    document.title = dict.title;

    setAttr('meta[name="description"]', "content", dict.description);
    setAttr(".site-header .nav", "aria-label", dict.navLabel);
    setText(".brand-text span", dict.brandSubtitle);
    setAttr(".site-search", "aria-label", dict.searchLabel);
    setText(".site-search label", dict.searchLabel);
    setAttr("#siteSearchInput", "placeholder", dict.searchPlaceholder);
    setText(".site-search button", dict.searchButton);

    Object.entries(dict.nav).forEach(([href, label]) => {
      setText(`.nav-links a[href="${href}"]`, label);
    });

    setAttr("#hot-news", "aria-label", dict.newsSectionLabel);
    setAttr(".news-row-grid", "aria-label", dict.newsRowLabel);
    setAttr('[data-news-scroll="prev"]', "aria-label", dict.previousNews);
    setAttr('[data-news-scroll="next"]', "aria-label", dict.nextNews);
    setAttr(".news-carousel-dots", "aria-label", dict.newsPosition);

    document.querySelectorAll("[data-news-dot]").forEach((dot, index) => {
      dot.setAttribute("aria-label", dict.newsDot(index));
    });

    document.querySelectorAll(".news-source-card").forEach((card, index) => {
      const item = dict.newsCards[index];
      if (!item) return;
      card.querySelector("img")?.setAttribute("alt", item.alt);
      const source = card.querySelector("span");
      const title = card.querySelector("strong");
      const summary = card.querySelector("p");
      const detail = card.querySelector("small");
      if (source) source.textContent = item.source;
      if (title) title.textContent = item.title;
      if (summary) summary.textContent = item.summary;
      if (detail) detail.textContent = dict.detail;
    });

    setAttr("#agentWorkbench", "aria-label", dict.agentSectionLabel);
    setText('label[for="agentQuestion"]', dict.agentInputLabel);
    setAttr("#agentQuestion", "placeholder", dict.agentPlaceholder);
    setAttr(".agent-model-menu", "aria-label", dict.modelMenuLabel);
    setAttr(".agent-send", "aria-label", dict.sendLabel);
    const answer = document.querySelector("#agentAnswer");
    if (answer && answer.dataset.submitted !== "true") {
      const answerText = answer.querySelector("p");
      if (answerText) answerText.textContent = dict.answerHint;
    }

    setAttr(".case-publish-close", "aria-label", dict.caseDialog.close);
    setText(".case-publish-panel .eyebrow", dict.caseDialog.eyebrow);
    setText("#casePublishTitle", dict.caseDialog.title);
    setText(".case-publish-panel .section-head.clean p:not(.eyebrow)", dict.caseDialog.intro);
    replaceCheckLabel(dict.caseDialog.privacy);
    setText(".case-privacy-panel span", dict.caseDialog.privacyNote);
    setLabelText('label:has(#caseDept)', dict.caseDialog.dept);
    setAttr("#caseDept", "placeholder", dict.caseDialog.deptPlaceholder);
    setLabelText('label:has(#caseCategory)', dict.caseDialog.category);
    Object.entries(dict.caseDialog.categories).forEach(([value, label]) => {
      setText(`#caseCategory option[value="${value}"]`, label);
    });
    setLabelText('label:has(#caseFiles)', dict.caseDialog.files);
    setLabelText('label:has(#caseNote)', dict.caseDialog.note);
    setAttr("#caseNote", "placeholder", dict.caseDialog.notePlaceholder);
    setText(".case-template-head strong", dict.caseDialog.previewTitle);
    setText("#casePreviewButton", dict.caseDialog.previewButton);
    setText(".case-publish-actions [data-case-publish-close]", dict.caseDialog.cancel);
    setText('.case-publish-actions button[type="submit"]', dict.caseDialog.submit);

    setText(".site-footer h3", dict.footer.title);
    setText(".site-footer h3 + p", dict.footer.intro);
    setText(".footer-institutions h4", dict.footer.institutions);
    setAttr(".institution-logo-rail", "aria-label", dict.footer.institutionRail);
    setText(".footer-license h4", dict.footer.license);
    setText(".footer-license a", dict.footer.licenseLink);
    setText(".home-footer-grid > div:last-child h4", dict.footer.contact);
    setText(".home-footer-grid > div:last-child a", dict.footer.contactLink);
    setText(".footer-subscribe-button", dict.footer.subscribe);
    document.querySelectorAll(".institution-logo").forEach((logo, index) => {
      const label = dict.footer.logos[index % dict.footer.logos.length];
      logo.setAttribute("aria-label", label);
      const text = logo.querySelector("em");
      if (text) text.textContent = label;
    });

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const active = button.dataset.languageOption === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    localizeSubmittedAnswer(language);
  }

  function wireLanguageSwitch() {
    document.querySelector("[data-language-switch]")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-language-option]");
      if (!button) return;
      const language = button.dataset.languageOption || "zh";
      if (supportedLanguages.includes(language)) applyLanguage(language);
    });

    document.querySelector("#agentQuestionForm")?.addEventListener("submit", () => {
      window.setTimeout(() => localizeSubmittedAnswer(getLanguage()), 0);
    });
  }

  function boot() {
    wireLanguageSwitch();
    applyLanguage(getLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

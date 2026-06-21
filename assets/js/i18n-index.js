(() => {
  const storageKey = "medaiHomeLanguage";
  const languageOptions = [
    { code: "zh", short: "中文", native: "中文", english: "Chinese", htmlLang: "zh-CN", dir: "ltr" },
    { code: "en", short: "EN", native: "English", english: "English", htmlLang: "en", dir: "ltr" },
    { code: "ar", short: "AR", native: "العربية", english: "Arabic", htmlLang: "ar", dir: "rtl" },
    { code: "es", short: "ES", native: "Español", english: "Spanish", htmlLang: "es", dir: "ltr" },
    { code: "fr", short: "FR", native: "Français", english: "French", htmlLang: "fr", dir: "ltr" },
    { code: "de", short: "DE", native: "Deutsch", english: "German", htmlLang: "de", dir: "ltr" },
    { code: "ja", short: "日本語", native: "日本語", english: "Japanese", htmlLang: "ja", dir: "ltr" },
    { code: "ko", short: "한국어", native: "한국어", english: "Korean", htmlLang: "ko", dir: "ltr" },
    { code: "ru", short: "RU", native: "Русский", english: "Russian", htmlLang: "ru", dir: "ltr" },
    { code: "pt", short: "PT", native: "Português", english: "Portuguese", htmlLang: "pt", dir: "ltr" },
    { code: "hi", short: "HI", native: "हिन्दी", english: "Hindi", htmlLang: "hi", dir: "ltr" },
    { code: "id", short: "ID", native: "Bahasa Indonesia", english: "Indonesian", htmlLang: "id", dir: "ltr" },
    { code: "vi", short: "VI", native: "Tiếng Việt", english: "Vietnamese", htmlLang: "vi", dir: "ltr" },
    { code: "th", short: "TH", native: "ไทย", english: "Thai", htmlLang: "th", dir: "ltr" },
    { code: "tr", short: "TR", native: "Türkçe", english: "Turkish", htmlLang: "tr", dir: "ltr" },
    { code: "fa", short: "FA", native: "فارسی", english: "Persian", htmlLang: "fa", dir: "rtl" },
    { code: "it", short: "IT", native: "Italiano", english: "Italian", htmlLang: "it", dir: "ltr" },
    { code: "nl", short: "NL", native: "Nederlands", english: "Dutch", htmlLang: "nl", dir: "ltr" },
  ];
  const supportedLanguages = languageOptions.map((language) => language.code);
  const languageMeta = Object.fromEntries(languageOptions.map((language) => [language.code, language]));

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
        "benchmark.html": "评测",
        "crowdsourcing.html": "众包",
        "blog.html": "博客",
        "https://ahamed.top/chat": "AI 问诊",
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
        "blog.html": "Blog",
        "https://ahamed.top/chat": "AI Chat",
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
        "blog.html": "المدونة",
        "https://ahamed.top/chat": "AI Chat",
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

  function mergeTranslation(base, override) {
    if (!override || typeof override !== "object" || Array.isArray(override)) return override ?? base;
    const merged = { ...base };
    Object.entries(override).forEach(([key, value]) => {
      if (value && typeof value === "object" && !Array.isArray(value) && typeof value !== "function") {
        merged[key] = mergeTranslation(base?.[key] || {}, value);
        return;
      }
      merged[key] = value;
    });
    return merged;
  }

  const compactTranslations = {
    es: {
      title: "Freedom AI | Noticias de IA médica y agente",
      description: "La página de Freedom AI reúne noticias de IA médica y un compositor de Agent para consultar novedades y hacer preguntas rápidamente.",
      navLabel: "Navegación principal",
      brandSubtitle: "Comunidad de IA médica",
      searchLabel: "Buscar en el sitio",
      searchPlaceholder: "Buscar",
      searchButton: "Buscar",
      nav: { "index.html": "Inicio", "learning.html": "Contenido", "network.html": "Comunidad", "community.html": "Foro", "datasets.html": "Datos", "tools.html": "Herramientas", "benchmark.html": "Benchmark", "crowdsourcing.html": "Colaboración", "blog.html": "Blog", "profile.html": "Perfil" },
      previousNews: "Noticia anterior",
      nextNews: "Noticia siguiente",
      newsPosition: "Posición de noticias",
      newsDot: (index) => `Noticia ${index + 1}`,
      detail: "Ver detalles →",
      agentSectionLabel: "Compositor del agente",
      agentInputLabel: "Escribe una pregunta",
      agentPlaceholder: "Enviar mensaje a Freedom AI",
      modelMenuLabel: "Elegir modelo",
      sendLabel: "Enviar",
      answerHint: "Escribe una pregunta y pulsa Enter para empezar.",
      publishCase: "Publicar este caso en el foro",
      caseDialog: { close: "Cerrar ventana de publicación", title: "Publicar este caso en el foro", intro: "El sistema organizará el contenido como una plantilla de caso desidentificado.", privacy: "Confirmo que el caso está desidentificado y puede usarse para discusión comunitaria", dept: "Departamento / campo", category: "Tipo de material", files: "Archivos complementarios", note: "Notas adicionales", previewTitle: "Plantilla para confirmar", previewButton: "Preparar plantilla", cancel: "Cancelar", submit: "Confirmar y publicar" },
      footer: { intro: "Noticias, herramientas y comunidad de IA médica.", institutions: "Instituciones", institutionRail: "Carrusel de logos institucionales", license: "Licencia", contact: "Contacto", contactLink: "Contacto: ydexiang1@gmail.com", subscribe: "Actualizaciones por correo" },
    },
    fr: {
      title: "Freedom AI | Actualités IA médicale et agent",
      description: "La page Freedom AI regroupe un carrousel d'actualités en IA médicale et un agent pour poser rapidement des questions.",
      navLabel: "Navigation principale",
      brandSubtitle: "Communauté d'IA médicale",
      searchLabel: "Recherche sur le site",
      searchPlaceholder: "Rechercher",
      searchButton: "Rechercher",
      nav: { "index.html": "Accueil", "learning.html": "Contenu", "network.html": "Communauté", "community.html": "Forum", "datasets.html": "Jeux de données", "tools.html": "Outils", "benchmark.html": "Benchmark", "crowdsourcing.html": "Contribution", "blog.html": "Blog", "profile.html": "Profil" },
      previousNews: "Actualité précédente",
      nextNews: "Actualité suivante",
      newsPosition: "Position des actualités",
      newsDot: (index) => `Actualité ${index + 1}`,
      detail: "Voir les détails →",
      agentSectionLabel: "Agent",
      agentInputLabel: "Saisir une question",
      agentPlaceholder: "Envoyer un message à Freedom AI",
      modelMenuLabel: "Choisir un modèle",
      sendLabel: "Envoyer",
      answerHint: "Tapez une question puis appuyez sur Entrée.",
      publishCase: "Publier ce cas dans le forum",
      caseDialog: { close: "Fermer la fenêtre de publication", title: "Publier ce cas dans le forum", intro: "Le système préparera le contenu sous forme de cas désidentifié.", privacy: "Je confirme que ce cas est désidentifié et peut être discuté par la communauté", dept: "Service / domaine", category: "Type de contenu", files: "Fichiers complémentaires", note: "Notes supplémentaires", previewTitle: "Modèle à confirmer", previewButton: "Préparer le modèle", cancel: "Annuler", submit: "Confirmer et publier" },
      footer: { intro: "Actualités, outils et communauté pour l'IA médicale.", institutions: "Institutions", institutionRail: "Carrousel de logos institutionnels", license: "Licence", contact: "Contact", contactLink: "Contact : ydexiang1@gmail.com", subscribe: "Mises à jour par e-mail" },
    },
    de: {
      title: "Freedom AI | Medizinische KI-News und Agent",
      description: "Freedom AI bündelt medizinische KI-News und einen Agent-Komponisten für schnelle Fragen und Updates.",
      navLabel: "Hauptnavigation",
      brandSubtitle: "Community für medizinische KI",
      searchLabel: "Seitensuche",
      searchPlaceholder: "Suchen",
      searchButton: "Suchen",
      nav: { "index.html": "Start", "learning.html": "Inhalte", "network.html": "Community", "community.html": "Forum", "datasets.html": "Datensätze", "tools.html": "Tools", "benchmark.html": "Benchmark", "crowdsourcing.html": "Crowdsourcing", "blog.html": "Blog", "profile.html": "Profil" },
      previousNews: "Vorherige Meldung",
      nextNews: "Nächste Meldung",
      newsPosition: "Nachrichtenposition",
      newsDot: (index) => `Meldung ${index + 1}`,
      detail: "Details ansehen →",
      agentSectionLabel: "Agent-Eingabe",
      agentInputLabel: "Frage eingeben",
      agentPlaceholder: "Nachricht an Freedom AI",
      modelMenuLabel: "Modell auswählen",
      sendLabel: "Senden",
      answerHint: "Frage eingeben und Enter drücken.",
      publishCase: "Diesen Fall im Forum veröffentlichen",
      caseDialog: { close: "Veröffentlichungsfenster schließen", title: "Diesen Fall im Forum veröffentlichen", intro: "Das System bereitet den Inhalt als de-identifizierte Falldiskussion vor.", privacy: "Ich bestätige, dass der Fall de-identifiziert ist", dept: "Abteilung / Fachgebiet", category: "Materialtyp", files: "Zusatzdateien", note: "Zusätzliche Notizen", previewTitle: "Vorlage prüfen", previewButton: "Vorlage vorbereiten", cancel: "Abbrechen", submit: "Bestätigen und veröffentlichen" },
      footer: { intro: "Medizinische KI-News, Tools und Community-Zugänge.", institutions: "Institutionen", institutionRail: "Logo-Karussell der Institutionen", license: "Lizenz", contact: "Kontakt", contactLink: "Kontakt: ydexiang1@gmail.com", subscribe: "E-Mail-Updates" },
    },
    ja: {
      title: "Freedom AI | 医療AIニュースとエージェント",
      description: "Freedom AI は医療AIニュースのカルーセルと Agent 入力欄をまとめ、最新情報と質問にすばやくアクセスできます。",
      navLabel: "メインナビゲーション",
      brandSubtitle: "医療AIコミュニティ",
      searchLabel: "サイト内検索",
      searchPlaceholder: "検索",
      searchButton: "検索",
      nav: { "index.html": "ホーム", "learning.html": "コンテンツ", "network.html": "コミュニティ", "community.html": "フォーラム", "datasets.html": "データセット", "tools.html": "ツール", "benchmark.html": "Benchmark", "crowdsourcing.html": "クラウド協力", "blog.html": "ブログ", "profile.html": "プロフィール" },
      previousNews: "前のニュース",
      nextNews: "次のニュース",
      newsPosition: "ニュース位置",
      newsDot: (index) => `ニュース ${index + 1}`,
      detail: "詳細を見る →",
      agentSectionLabel: "Agent 入力欄",
      agentInputLabel: "質問を入力",
      agentPlaceholder: "Freedom AI にメッセージ",
      modelMenuLabel: "モデルを選択",
      sendLabel: "送信",
      answerHint: "質問を入力して Enter を押してください。",
      publishCase: "このケースをフォーラムに投稿",
      caseDialog: { close: "投稿ウィンドウを閉じる", title: "このケースをフォーラムに投稿", intro: "内容は匿名化されたケース討論テンプレートとして整理されます。", privacy: "このケースが匿名化され、コミュニティ討論に使えることを確認します", dept: "診療科 / 分野", category: "資料タイプ", files: "補足資料", note: "補足メモ", previewTitle: "確認用テンプレート", previewButton: "テンプレート作成", cancel: "キャンセル", submit: "確認して投稿" },
      footer: { intro: "医療AIニュース、ツール、コミュニティ入口。", institutions: "機関", institutionRail: "機関ロゴ一覧", license: "ライセンス", contact: "連絡先", contactLink: "連絡先: ydexiang1@gmail.com", subscribe: "メール更新" },
    },
    ko: {
      title: "Freedom AI | 의료 AI 뉴스와 에이전트",
      description: "Freedom AI는 의료 AI 뉴스와 Agent 입력창을 제공해 최신 소식과 모델 질문을 빠르게 확인할 수 있습니다.",
      navLabel: "기본 내비게이션",
      brandSubtitle: "의료 AI 커뮤니티",
      searchLabel: "사이트 검색",
      searchPlaceholder: "검색",
      searchButton: "검색",
      nav: { "index.html": "홈", "learning.html": "콘텐츠", "network.html": "커뮤니티", "community.html": "포럼", "datasets.html": "데이터셋", "tools.html": "도구", "benchmark.html": "Benchmark", "crowdsourcing.html": "크라우드소싱", "blog.html": "블로그", "profile.html": "프로필" },
      previousNews: "이전 뉴스",
      nextNews: "다음 뉴스",
      newsPosition: "뉴스 위치",
      newsDot: (index) => `뉴스 ${index + 1}`,
      detail: "자세히 보기 →",
      agentSectionLabel: "Agent 입력창",
      agentInputLabel: "질문 입력",
      agentPlaceholder: "Freedom AI에 메시지 보내기",
      modelMenuLabel: "모델 선택",
      sendLabel: "보내기",
      answerHint: "질문을 입력하고 Enter를 누르세요.",
      publishCase: "이 사례를 포럼에 게시",
      caseDialog: { close: "게시 창 닫기", title: "이 사례를 포럼에 게시", intro: "시스템은 내용을 비식별 사례 토론 템플릿으로 정리합니다.", privacy: "이 사례가 비식별 처리되어 커뮤니티 토론에 사용할 수 있음을 확인합니다", dept: "부서 / 분야", category: "자료 유형", files: "추가 자료", note: "추가 설명", previewTitle: "확인할 템플릿", previewButton: "템플릿 정리", cancel: "취소", submit: "확인 후 게시" },
      footer: { intro: "의료 AI 뉴스, 도구, 커뮤니티 입구.", institutions: "기관", institutionRail: "기관 로고 목록", license: "라이선스", contact: "연락처", contactLink: "연락처: ydexiang1@gmail.com", subscribe: "이메일 업데이트" },
    },
    ru: {
      title: "Freedom AI | Новости медицинского ИИ и агент",
      description: "Freedom AI объединяет новости медицинского ИИ и поле Agent для быстрых вопросов и обновлений.",
      navLabel: "Основная навигация",
      brandSubtitle: "Сообщество медицинского ИИ",
      searchLabel: "Поиск по сайту",
      searchPlaceholder: "Поиск",
      searchButton: "Поиск",
      nav: { "index.html": "Главная", "learning.html": "Контент", "network.html": "Сообщество", "community.html": "Форум", "datasets.html": "Данные", "tools.html": "Инструменты", "benchmark.html": "Benchmark", "crowdsourcing.html": "Краудсорсинг", "blog.html": "Блог", "profile.html": "Профиль" },
      previousNews: "Предыдущая новость",
      nextNews: "Следующая новость",
      newsPosition: "Позиция новости",
      newsDot: (index) => `Новость ${index + 1}`,
      detail: "Подробнее →",
      agentSectionLabel: "Окно Agent",
      agentInputLabel: "Введите вопрос",
      agentPlaceholder: "Написать Freedom AI",
      modelMenuLabel: "Выбрать модель",
      sendLabel: "Отправить",
      answerHint: "Введите вопрос и нажмите Enter.",
      publishCase: "Опубликовать случай на форуме",
      caseDialog: { close: "Закрыть окно публикации", title: "Опубликовать случай на форуме", intro: "Система оформит материал как деидентифицированный клинический случай.", privacy: "Подтверждаю, что случай деидентифицирован", dept: "Отделение / область", category: "Тип материала", files: "Дополнительные файлы", note: "Дополнительные заметки", previewTitle: "Шаблон для проверки", previewButton: "Подготовить шаблон", cancel: "Отмена", submit: "Подтвердить и опубликовать" },
      footer: { intro: "Новости, инструменты и сообщество медицинского ИИ.", institutions: "Институции", institutionRail: "Карусель логотипов институций", license: "Лицензия", contact: "Контакт", contactLink: "Контакт: ydexiang1@gmail.com", subscribe: "E-mail обновления" },
    },
    pt: {
      title: "Freedom AI | Notícias de IA médica e agente",
      description: "A página Freedom AI reúne notícias de IA médica e um compositor Agent para atualizações e perguntas rápidas.",
      navLabel: "Navegação principal",
      brandSubtitle: "Comunidade de IA médica",
      searchLabel: "Pesquisar no site",
      searchPlaceholder: "Pesquisar",
      searchButton: "Pesquisar",
      nav: { "index.html": "Início", "learning.html": "Conteúdo", "network.html": "Comunidade", "community.html": "Fórum", "datasets.html": "Dados", "tools.html": "Ferramentas", "benchmark.html": "Benchmark", "crowdsourcing.html": "Colaboração", "blog.html": "Blog", "profile.html": "Perfil" },
      previousNews: "Notícia anterior",
      nextNews: "Próxima notícia",
      newsPosition: "Posição da notícia",
      newsDot: (index) => `Notícia ${index + 1}`,
      detail: "Ver detalhes →",
      agentSectionLabel: "Compositor do agente",
      agentInputLabel: "Digite uma pergunta",
      agentPlaceholder: "Enviar mensagem para Freedom AI",
      modelMenuLabel: "Escolher modelo",
      sendLabel: "Enviar",
      answerHint: "Digite uma pergunta e pressione Enter.",
      publishCase: "Publicar este caso no fórum",
      caseDialog: { close: "Fechar janela de publicação", title: "Publicar este caso no fórum", intro: "O sistema organizará o conteúdo como um caso desidentificado.", privacy: "Confirmo que o caso está desidentificado", dept: "Departamento / área", category: "Tipo de material", files: "Arquivos complementares", note: "Notas adicionais", previewTitle: "Modelo para confirmar", previewButton: "Preparar modelo", cancel: "Cancelar", submit: "Confirmar e publicar" },
      footer: { intro: "Notícias, ferramentas e comunidade de IA médica.", institutions: "Instituições", institutionRail: "Carrossel de logotipos institucionais", license: "Licença", contact: "Contato", contactLink: "Contato: ydexiang1@gmail.com", subscribe: "Atualizações por e-mail" },
    },
    hi: {
      title: "Freedom AI | मेडिकल AI समाचार और एजेंट",
      description: "Freedom AI मेडिकल AI समाचार और Agent कंपोजर को एक जगह रखता है ताकि अपडेट और प्रश्न जल्दी देखे जा सकें।",
      navLabel: "मुख्य नेविगेशन",
      brandSubtitle: "मेडिकल AI समुदाय",
      searchLabel: "साइट खोज",
      searchPlaceholder: "खोजें",
      searchButton: "खोजें",
      nav: { "index.html": "होम", "learning.html": "सामग्री", "network.html": "समुदाय", "community.html": "फोरम", "datasets.html": "डेटासेट", "tools.html": "टूल", "benchmark.html": "Benchmark", "crowdsourcing.html": "क्राउडसोर्सिंग", "blog.html": "ब्लॉग", "profile.html": "प्रोफाइल" },
      previousNews: "पिछला समाचार",
      nextNews: "अगला समाचार",
      newsPosition: "समाचार स्थिति",
      newsDot: (index) => `समाचार ${index + 1}`,
      detail: "विवरण देखें →",
      agentSectionLabel: "Agent कंपोजर",
      agentInputLabel: "प्रश्न लिखें",
      agentPlaceholder: "Freedom AI को संदेश भेजें",
      modelMenuLabel: "मॉडल चुनें",
      sendLabel: "भेजें",
      answerHint: "प्रश्न लिखें और Enter दबाएं।",
      publishCase: "इस केस को फोरम में प्रकाशित करें",
      caseDialog: { close: "प्रकाशन विंडो बंद करें", title: "इस केस को फोरम में प्रकाशित करें", intro: "सिस्टम सामग्री को पहचान-रहित केस चर्चा टेम्पलेट के रूप में व्यवस्थित करेगा।", privacy: "मैं पुष्टि करता/करती हूं कि केस पहचान-रहित है", dept: "विभाग / क्षेत्र", category: "सामग्री प्रकार", files: "पूरक फाइलें", note: "अतिरिक्त नोट्स", previewTitle: "पुष्टि हेतु टेम्पलेट", previewButton: "टेम्पलेट तैयार करें", cancel: "रद्द करें", submit: "पुष्टि कर प्रकाशित करें" },
      footer: { intro: "मेडिकल AI समाचार, टूल और समुदाय।", institutions: "संस्थान", institutionRail: "संस्थान लोगो सूची", license: "लाइसेंस", contact: "संपर्क", contactLink: "संपर्क: ydexiang1@gmail.com", subscribe: "ईमेल अपडेट" },
    },
    id: {
      title: "Freedom AI | Berita AI medis dan agen",
      description: "Freedom AI menyatukan berita AI medis dan komposer Agent untuk pembaruan serta pertanyaan cepat.",
      navLabel: "Navigasi utama",
      brandSubtitle: "Komunitas AI medis",
      searchLabel: "Cari situs",
      searchPlaceholder: "Cari",
      searchButton: "Cari",
      nav: { "index.html": "Beranda", "learning.html": "Konten", "network.html": "Komunitas", "community.html": "Forum", "datasets.html": "Dataset", "tools.html": "Alat", "benchmark.html": "Benchmark", "crowdsourcing.html": "Crowdsourcing", "blog.html": "Blog", "profile.html": "Profil" },
      previousNews: "Berita sebelumnya",
      nextNews: "Berita berikutnya",
      newsPosition: "Posisi berita",
      newsDot: (index) => `Berita ${index + 1}`,
      detail: "Lihat detail →",
      agentSectionLabel: "Komposer Agent",
      agentInputLabel: "Masukkan pertanyaan",
      agentPlaceholder: "Kirim pesan ke Freedom AI",
      modelMenuLabel: "Pilih model",
      sendLabel: "Kirim",
      answerHint: "Ketik pertanyaan lalu tekan Enter.",
      publishCase: "Publikasikan kasus ini ke forum",
      caseDialog: { close: "Tutup jendela publikasi", title: "Publikasikan kasus ini ke forum", intro: "Sistem akan menyusun konten sebagai kasus yang telah dideidentifikasi.", privacy: "Saya mengonfirmasi kasus ini telah dideidentifikasi", dept: "Departemen / bidang", category: "Jenis materi", files: "File tambahan", note: "Catatan tambahan", previewTitle: "Template untuk dikonfirmasi", previewButton: "Siapkan template", cancel: "Batal", submit: "Konfirmasi dan publikasikan" },
      footer: { intro: "Berita, alat, dan komunitas AI medis.", institutions: "Institusi", institutionRail: "Carousel logo institusi", license: "Lisensi", contact: "Kontak", contactLink: "Kontak: ydexiang1@gmail.com", subscribe: "Pembaruan email" },
    },
    vi: {
      title: "Freedom AI | Tin tức AI y tế và tác nhân",
      description: "Freedom AI gom tin tức AI y tế và hộp Agent để xem cập nhật và đặt câu hỏi nhanh.",
      navLabel: "Điều hướng chính",
      brandSubtitle: "Cộng đồng AI y tế",
      searchLabel: "Tìm kiếm trang",
      searchPlaceholder: "Tìm kiếm",
      searchButton: "Tìm",
      nav: { "index.html": "Trang chủ", "learning.html": "Nội dung", "network.html": "Cộng đồng", "community.html": "Diễn đàn", "datasets.html": "Dữ liệu", "tools.html": "Công cụ", "benchmark.html": "Benchmark", "crowdsourcing.html": "Cộng tác", "blog.html": "Blog", "profile.html": "Hồ sơ" },
      previousNews: "Tin trước",
      nextNews: "Tin tiếp theo",
      newsPosition: "Vị trí tin",
      newsDot: (index) => `Tin ${index + 1}`,
      detail: "Xem chi tiết →",
      agentSectionLabel: "Hộp Agent",
      agentInputLabel: "Nhập câu hỏi",
      agentPlaceholder: "Gửi tin nhắn tới Freedom AI",
      modelMenuLabel: "Chọn mô hình",
      sendLabel: "Gửi",
      answerHint: "Nhập câu hỏi rồi nhấn Enter.",
      publishCase: "Đăng ca này lên diễn đàn",
      caseDialog: { close: "Đóng cửa sổ đăng", title: "Đăng ca này lên diễn đàn", intro: "Hệ thống sẽ sắp xếp nội dung thành mẫu thảo luận ca đã khử định danh.", privacy: "Tôi xác nhận ca này đã khử định danh", dept: "Khoa / lĩnh vực", category: "Loại tài liệu", files: "Tệp bổ sung", note: "Ghi chú bổ sung", previewTitle: "Mẫu cần xác nhận", previewButton: "Chuẩn bị mẫu", cancel: "Hủy", submit: "Xác nhận và đăng" },
      footer: { intro: "Tin tức, công cụ và cộng đồng AI y tế.", institutions: "Tổ chức", institutionRail: "Băng chuyền logo tổ chức", license: "Giấy phép", contact: "Liên hệ", contactLink: "Liên hệ: ydexiang1@gmail.com", subscribe: "Cập nhật qua email" },
    },
    th: {
      title: "Freedom AI | ข่าว AI การแพทย์และเอเจนต์",
      description: "Freedom AI รวมข่าว AI การแพทย์และกล่อง Agent สำหรับติดตามอัปเดตและถามคำถามอย่างรวดเร็ว",
      navLabel: "การนำทางหลัก",
      brandSubtitle: "ชุมชน AI การแพทย์",
      searchLabel: "ค้นหาในเว็บไซต์",
      searchPlaceholder: "ค้นหา",
      searchButton: "ค้นหา",
      nav: { "index.html": "หน้าแรก", "learning.html": "เนื้อหา", "network.html": "ชุมชน", "community.html": "ฟอรัม", "datasets.html": "ชุดข้อมูล", "tools.html": "เครื่องมือ", "benchmark.html": "Benchmark", "crowdsourcing.html": "ระดมความร่วมมือ", "blog.html": "บล็อก", "profile.html": "โปรไฟล์" },
      previousNews: "ข่าวก่อนหน้า",
      nextNews: "ข่าวถัดไป",
      newsPosition: "ตำแหน่งข่าว",
      newsDot: (index) => `ข่าว ${index + 1}`,
      detail: "ดูรายละเอียด →",
      agentSectionLabel: "กล่อง Agent",
      agentInputLabel: "ป้อนคำถาม",
      agentPlaceholder: "ส่งข้อความถึง Freedom AI",
      modelMenuLabel: "เลือกโมเดล",
      sendLabel: "ส่ง",
      answerHint: "พิมพ์คำถามแล้วกด Enter",
      publishCase: "เผยแพร่เคสนี้ไปยังฟอรัม",
      caseDialog: { close: "ปิดหน้าต่างเผยแพร่", title: "เผยแพร่เคสนี้ไปยังฟอรัม", intro: "ระบบจะจัดเนื้อหาเป็นเทมเพลตเคสที่ลบข้อมูลระบุตัวตนแล้ว", privacy: "ฉันยืนยันว่าเคสนี้ลบข้อมูลระบุตัวตนแล้ว", dept: "แผนก / สาขา", category: "ประเภทข้อมูล", files: "ไฟล์เพิ่มเติม", note: "บันทึกเพิ่มเติม", previewTitle: "เทมเพลตสำหรับยืนยัน", previewButton: "เตรียมเทมเพลต", cancel: "ยกเลิก", submit: "ยืนยันและเผยแพร่" },
      footer: { intro: "ข่าว เครื่องมือ และชุมชน AI การแพทย์", institutions: "สถาบัน", institutionRail: "แถบโลโก้สถาบัน", license: "สัญญาอนุญาต", contact: "ติดต่อ", contactLink: "ติดต่อ: ydexiang1@gmail.com", subscribe: "อัปเดตทางอีเมล" },
    },
    tr: {
      title: "Freedom AI | Tıbbi AI haberleri ve ajan",
      description: "Freedom AI, tıbbi AI haberleri ve hızlı sorular için Agent kutusunu bir araya getirir.",
      navLabel: "Ana gezinme",
      brandSubtitle: "Tıbbi AI topluluğu",
      searchLabel: "Sitede ara",
      searchPlaceholder: "Ara",
      searchButton: "Ara",
      nav: { "index.html": "Ana sayfa", "learning.html": "İçerik", "network.html": "Topluluk", "community.html": "Forum", "datasets.html": "Veri setleri", "tools.html": "Araçlar", "benchmark.html": "Benchmark", "crowdsourcing.html": "Kitle katkısı", "blog.html": "Blog", "profile.html": "Profil" },
      previousNews: "Önceki haber",
      nextNews: "Sonraki haber",
      newsPosition: "Haber konumu",
      newsDot: (index) => `Haber ${index + 1}`,
      detail: "Ayrıntıları gör →",
      agentSectionLabel: "Agent kutusu",
      agentInputLabel: "Soru gir",
      agentPlaceholder: "Freedom AI'ye mesaj gönder",
      modelMenuLabel: "Model seç",
      sendLabel: "Gönder",
      answerHint: "Bir soru yazıp Enter'a basın.",
      publishCase: "Bu vakayı forumda yayınla",
      caseDialog: { close: "Yayın penceresini kapat", title: "Bu vakayı forumda yayınla", intro: "Sistem içeriği kimliksizleştirilmiş vaka tartışması olarak düzenler.", privacy: "Bu vakanın kimliksizleştirildiğini onaylıyorum", dept: "Bölüm / alan", category: "Materyal türü", files: "Ek dosyalar", note: "Ek notlar", previewTitle: "Onaylanacak şablon", previewButton: "Şablonu hazırla", cancel: "İptal", submit: "Onayla ve yayınla" },
      footer: { intro: "Tıbbi AI haberleri, araçları ve topluluğu.", institutions: "Kurumlar", institutionRail: "Kurum logo listesi", license: "Lisans", contact: "İletişim", contactLink: "İletişim: ydexiang1@gmail.com", subscribe: "E-posta güncellemeleri" },
    },
    fa: {
      title: "Freedom AI | اخبار هوش مصنوعی پزشکی و عامل",
      description: "Freedom AI اخبار هوش مصنوعی پزشکی و کادر Agent را برای پیگیری سریع و پرسش از مدل‌ها فراهم می‌کند.",
      navLabel: "ناوبری اصلی",
      brandSubtitle: "جامعه هوش مصنوعی پزشکی",
      searchLabel: "جستجوی سایت",
      searchPlaceholder: "جستجو",
      searchButton: "جستجو",
      nav: { "index.html": "خانه", "learning.html": "محتوا", "network.html": "جامعه", "community.html": "انجمن", "datasets.html": "داده‌ها", "tools.html": "ابزارها", "benchmark.html": "Benchmark", "crowdsourcing.html": "همکاری جمعی", "blog.html": "وبلاگ", "profile.html": "پروفایل" },
      previousNews: "خبر قبلی",
      nextNews: "خبر بعدی",
      newsPosition: "جایگاه خبر",
      newsDot: (index) => `خبر ${index + 1}`,
      detail: "مشاهده جزئیات ←",
      agentSectionLabel: "کادر Agent",
      agentInputLabel: "پرسش را وارد کنید",
      agentPlaceholder: "پیام به Freedom AI",
      modelMenuLabel: "انتخاب مدل",
      sendLabel: "ارسال",
      answerHint: "پرسش را بنویسید و Enter را بزنید.",
      publishCase: "انتشار این مورد در انجمن",
      caseDialog: { close: "بستن پنجره انتشار", title: "انتشار این مورد در انجمن", intro: "سامانه محتوا را به صورت قالب بحث مورد ناشناس‌سازی‌شده تنظیم می‌کند.", privacy: "تایید می‌کنم این مورد ناشناس‌سازی شده است", dept: "بخش / حوزه", category: "نوع محتوا", files: "فایل‌های تکمیلی", note: "یادداشت‌های تکمیلی", previewTitle: "قالب برای تایید", previewButton: "آماده‌سازی قالب", cancel: "لغو", submit: "تایید و انتشار" },
      footer: { intro: "اخبار، ابزارها و جامعه هوش مصنوعی پزشکی.", institutions: "موسسات", institutionRail: "فهرست لوگوهای موسسات", license: "مجوز", contact: "تماس", contactLink: "تماس: ydexiang1@gmail.com", subscribe: "به‌روزرسانی ایمیلی" },
    },
    it: {
      title: "Freedom AI | Notizie di IA medica e agente",
      description: "Freedom AI raccoglie notizie di IA medica e un composer Agent per aggiornamenti e domande rapide.",
      navLabel: "Navigazione principale",
      brandSubtitle: "Comunità di IA medica",
      searchLabel: "Cerca nel sito",
      searchPlaceholder: "Cerca",
      searchButton: "Cerca",
      nav: { "index.html": "Home", "learning.html": "Contenuti", "network.html": "Comunità", "community.html": "Forum", "datasets.html": "Dataset", "tools.html": "Strumenti", "benchmark.html": "Benchmark", "crowdsourcing.html": "Crowdsourcing", "blog.html": "Blog", "profile.html": "Profilo" },
      previousNews: "Notizia precedente",
      nextNews: "Notizia successiva",
      newsPosition: "Posizione notizie",
      newsDot: (index) => `Notizia ${index + 1}`,
      detail: "Vedi dettagli →",
      agentSectionLabel: "Composer Agent",
      agentInputLabel: "Inserisci una domanda",
      agentPlaceholder: "Invia un messaggio a Freedom AI",
      modelMenuLabel: "Scegli modello",
      sendLabel: "Invia",
      answerHint: "Scrivi una domanda e premi Enter.",
      publishCase: "Pubblica questo caso nel forum",
      caseDialog: { close: "Chiudi finestra di pubblicazione", title: "Pubblica questo caso nel forum", intro: "Il sistema organizzerà il contenuto come caso de-identificato.", privacy: "Confermo che il caso è de-identificato", dept: "Reparto / campo", category: "Tipo di materiale", files: "File supplementari", note: "Note aggiuntive", previewTitle: "Template da confermare", previewButton: "Prepara template", cancel: "Annulla", submit: "Conferma e pubblica" },
      footer: { intro: "Notizie, strumenti e comunità di IA medica.", institutions: "Istituzioni", institutionRail: "Carosello loghi istituzionali", license: "Licenza", contact: "Contatto", contactLink: "Contatto: ydexiang1@gmail.com", subscribe: "Aggiornamenti email" },
    },
    nl: {
      title: "Freedom AI | Medische AI-nieuws en agent",
      description: "Freedom AI brengt medisch AI-nieuws en een Agent-composer samen voor snelle updates en vragen.",
      navLabel: "Hoofdnavigatie",
      brandSubtitle: "Medische AI-community",
      searchLabel: "Zoeken op site",
      searchPlaceholder: "Zoeken",
      searchButton: "Zoeken",
      nav: { "index.html": "Home", "learning.html": "Content", "network.html": "Community", "community.html": "Forum", "datasets.html": "Datasets", "tools.html": "Tools", "benchmark.html": "Benchmark", "crowdsourcing.html": "Crowdsourcing", "blog.html": "Blog", "profile.html": "Profiel" },
      previousNews: "Vorig nieuws",
      nextNews: "Volgend nieuws",
      newsPosition: "Nieuwspositie",
      newsDot: (index) => `Nieuws ${index + 1}`,
      detail: "Details bekijken →",
      agentSectionLabel: "Agent-composer",
      agentInputLabel: "Voer een vraag in",
      agentPlaceholder: "Stuur een bericht naar Freedom AI",
      modelMenuLabel: "Kies model",
      sendLabel: "Verzenden",
      answerHint: "Typ een vraag en druk op Enter.",
      publishCase: "Publiceer deze casus op het forum",
      caseDialog: { close: "Publicatievenster sluiten", title: "Publiceer deze casus op het forum", intro: "Het systeem ordent de inhoud als een gede-identificeerde casus.", privacy: "Ik bevestig dat deze casus gede-identificeerd is", dept: "Afdeling / veld", category: "Materiaaltype", files: "Aanvullende bestanden", note: "Aanvullende notities", previewTitle: "Template om te bevestigen", previewButton: "Template voorbereiden", cancel: "Annuleren", submit: "Bevestigen en publiceren" },
      footer: { intro: "Medische AI-nieuws, tools en community.", institutions: "Instellingen", institutionRail: "Logo-carrousel van instellingen", license: "Licentie", contact: "Contact", contactLink: "Contact: ydexiang1@gmail.com", subscribe: "E-mailupdates" },
    },
  };

  Object.entries(compactTranslations).forEach(([code, override]) => {
    const meta = languageMeta[code];
    translations[code] = mergeTranslation(translations.en, {
      htmlLang: meta.htmlLang,
      dir: meta.dir,
      ...override,
    });
  });

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

  function renderLanguageMenu() {
    const menu = document.querySelector("[data-language-menu]");
    if (!menu) return;
    menu.innerHTML = languageOptions.map((language) => `
      <button class="language-option" type="button" role="option" data-language-option="${escapeHtml(language.code)}" aria-selected="false">
        <span class="language-option-text">
          <span class="language-option-native">${escapeHtml(language.native)}</span>
          <span class="language-option-english">${escapeHtml(language.english)}</span>
        </span>
        <span class="language-option-code">${escapeHtml(language.short)}</span>
      </button>
    `).join("");
  }

  function setLanguageMenuOpen(open) {
    const root = document.querySelector("[data-language-switch]");
    const trigger = document.querySelector("[data-language-trigger]");
    const menu = document.querySelector("[data-language-menu]");
    if (!root || !trigger || !menu) return;
    root.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
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
    const meta = languageMeta[language] || languageMeta.zh;
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

    setText("[data-language-current]", meta.short);
    setAttr("[data-language-menu]", "aria-label", dict.languageMenuLabel || "Language list");
    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const active = button.dataset.languageOption === language;
      button.classList.toggle("active", active);
      button.setAttribute("aria-selected", String(active));
    });

    localizeSubmittedAnswer(language);
  }

  function wireLanguageSwitch() {
    const root = document.querySelector("[data-language-switch]");
    root?.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-language-trigger]");
      if (trigger) {
        setLanguageMenuOpen(trigger.getAttribute("aria-expanded") !== "true");
        return;
      }

      const button = event.target.closest("[data-language-option]");
      if (!button) return;
      const language = button.dataset.languageOption || "zh";
      if (supportedLanguages.includes(language)) {
        applyLanguage(language);
        setLanguageMenuOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (root?.contains(event.target)) return;
      setLanguageMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setLanguageMenuOpen(false);
    });

    document.querySelector("#agentQuestionForm")?.addEventListener("submit", () => {
      window.setTimeout(() => localizeSubmittedAnswer(getLanguage()), 0);
    });
  }

  function boot() {
    renderLanguageMenu();
    wireLanguageSwitch();
    applyLanguage(getLanguage());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

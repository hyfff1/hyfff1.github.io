(function () {
  const i18n = {
    zh: {
      "nav.about": "关于",
      "nav.skills": "技能",
      "nav.experience": "经历",
      "nav.projects": "项目",
      "nav.education": "教育",
      "nav.contact": "联系",
      "hero.eyebrow": "个人主页",
      "hero.role": "Data Analytics · Agent Engineer",
      "hero.tagline": "把数据变成决策，把重复工作交给 Agent。",
      "hero.status": "香港 · 数据分析 · Agent",
      "hero.view": "查看项目",
      "hero.contact": "联系我",
      "about.kicker": "01 · 关于",
      "about.title": "关于我",
      "about.lead": "我是 lamwanfung，一名数据分析学习者，也是正在成长的 Agent 工程师。我喜欢把杂乱的数据整理成清晰的结论，也喜欢用 AI Agent 让重复工作更高效。目前是香港科技大学工业工程与决策分析本科的大二学生。",
      "about.locationLabel": "地点",
      "about.location": "香港",
      "about.languagesLabel": "语言",
      "about.languages": "粤语 · 普通话 · English",
      "about.interestsLabel": "兴趣",
      "about.interests": "健身",
      "skills.kicker": "03 · 技能",
      "skills.title": "技能",
      "skills.subtitle": "数据分析与 Agent 工作流方向",
      "skills.group1": "编程与数据",
      "skills.group2": "分析能力",
      "skills.group3": "Agent 与 AI",
      "skills.group4": "通用能力",
      "skills.analytics": "数据分析",
      "skills.research": "研究能力",
      "skills.problem": "复杂问题解决",
      "skills.agent": "Agent 工作流",
      "skills.prompting": "提示工程",
      "skills.aitools": "AI 工具应用",
      "skills.present": "演示表达",
      "skills.fast": "快速学习",
      "skills.lead": "团队领导",
      "experience.kicker": "04 · 经历",
      "experience.title": "经历",
      "experience.p1.date": "2025 年 2 月",
      "experience.p1.type": "虚拟实习 · 远程",
      "experience.p1.company": "汇丰银行 · 财富管理及个人银行",
      "experience.p1.b1": "参与高净值客户服务与投资建议的模拟项目。",
      "experience.p1.b2": "收集客户的投资目标、风险承受能力、投资限制等关键信息，据此推荐投资方案。",
      "experience.p1.b3": "根据客户画像提供定制化投资建议。",
      "experience.p2.date": "2026 年 8 月",
      "experience.p2.type": "公司内部工具 · 升学建议",
      "experience.p2.company": "Non-JUPAS 升学数据库 · 独立开发",
      "experience.p2.b1": "独立开发公司内部 Non-JUPAS 升学数据库，清洗并标准化 Telegram 频道数据，导入 SQLite，提取大学、学科、CGPA、Offer 状态等结构化字段。",
      "experience.p2.b2": "用 FastAPI 搭建后端和带邀请码权限的网页查询系统，支持中文自然语言转 SQL 与数据查询。",
      "experience.p2.b3": "设计学科 CGPA 参考和学生匹配逻辑，用样本量、中位数、范围和趋势等统计口径辅助升学建议，并规划置信区间与可解释录取概率模型。",
      "experience.p2.b4": "通过 Cloudflare 隧道发布试用版，覆盖数据整合、查询分析、决策建议和报告导出的完整流程。",
      "experience.p3.date": "2026 年 9 月",
      "experience.p3.type": "公司自动化 · 视频生产",
      "experience.p3.company": "鼎熙官号每日短视频自动化",
      "experience.p3.b1": "把原始素材自动处理成品牌短视频，支持竖屏转换、人脸马赛克、静音、BGM 混音、掐头尾和水印。",
      "experience.p3.b2": "自动生成片头片尾、封面、预览和发布文案，并做黑屏、模糊、音轨自检，每天一键出片。",
      "experience.p3.b3": "用 Python 和 FFmpeg 搭建可复用流水线，减少重复人工剪辑，保证成片风格统一。",
      "projects.kicker": "05 · 项目",
      "projects.title": "项目",
      "projects.subtitle": "用数据解决问题",
      "projects.p1.tag": "社团项目",
      "projects.p1.badge": "已完成",
      "projects.p1.title": "校园社团数据库系统",
      "projects.p1.desc": "带领 5 人团队为学校社团设计并搭建数据库，负责核心表设计与 SQL 编写，实现增删改查、关联查询和批量导入导出，把每项统计工作从 2 小时缩短到 10 分钟。",
      "projects.p1.tech1": "数据库设计",
      "projects.p1.tech2": "团队协作",
      "projects.agent": "Agent 项目",
      "projects.demo": "在线演示",
      "projects.p2.title": "SQL 自然语言查询助手",
      "projects.p2.desc": "用中文或英文提问，自动生成 SQL 并在示例数据上运行，展示自然语言到查询结果的完整链路。",
      "projects.p3.title": "自动分析报告 Agent",
      "projects.p3.desc": "粘贴 CSV 数据，自动生成字段统计、分布图和分析结论，并可下载 HTML 报告。",
      "projects.p4.title": "知识库问答 Agent",
      "projects.p4.desc": "上传文档后用自然语言提问，通过 TF-IDF 检索返回最相关的原文片段。",
      "projects.p5.tag": "量化研究",
      "projects.p5.title": "美股因子研究流水线",
      "projects.p5.desc": "每周自动下载美股数据，计算基于金融逻辑的因子，统计 IC/IR，做含成本的周度回测并与 VOO 对比，包含样本外验证和滚动选因子。",
      "projects.p5.link": "GitHub 仓库",
      "projects.more": "更多 Agent 项目正在构建中",
      "education.kicker": "02 · 教育",
      "education.title": "教育",
      "education.date": "大二在读",
      "education.school": "香港科技大学",
      "education.degree": "工业工程与决策分析（本科）",
      "contact.kicker": "06 · 联系",
      "contact.title": "联系",
      "contact.lead": "想聊数据分析、Agent 或合作机会，欢迎邮件联系。",
      "contact.emailLabel": "邮箱",
      "contact.resumeCn": "下载中文简历",
      "contact.resumeEn": "下载英文简历",
      "contact.note": "仅通过邮箱联系",
      "footer.rights": "© lamwanfung"
    },
    en: {
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.eyebrow": "Portfolio",
      "hero.role": "Data Analytics · Agent Engineer",
      "hero.tagline": "Turning data into decisions and routine work into agent automations.",
      "hero.status": "Hong Kong · Data Analytics · Agents",
      "hero.view": "View projects",
      "hero.contact": "Get in touch",
      "about.kicker": "01 · About",
      "about.title": "About",
      "about.lead": "I am lamwanfung, a data analytics learner and an aspiring agent engineer. I enjoy turning messy data into clear insights and using AI agents to make routine work faster. I am currently a second-year undergraduate student in Industrial Engineering and Decision Analytics at the Hong Kong University of Science and Technology.",
      "about.locationLabel": "Location",
      "about.location": "Hong Kong",
      "about.languagesLabel": "Languages",
      "about.languages": "Cantonese · Mandarin · English",
      "about.interestsLabel": "Interests",
      "about.interests": "Fitness",
      "skills.kicker": "03 · Skills",
      "skills.title": "Skills",
      "skills.subtitle": "Data analytics and agent workflows",
      "skills.group1": "Programming & Data",
      "skills.group2": "Analysis",
      "skills.group3": "Agent & AI",
      "skills.group4": "General",
      "skills.analytics": "Data analytics",
      "skills.research": "Research",
      "skills.problem": "Complex problem-solving",
      "skills.agent": "Agent workflows",
      "skills.prompting": "Prompt engineering",
      "skills.aitools": "AI tooling",
      "skills.present": "Presentations",
      "skills.fast": "Fast learner",
      "skills.lead": "Team leadership",
      "experience.kicker": "04 · Experience",
      "experience.title": "Experience",
      "experience.p1.date": "Feb 2025",
      "experience.p1.type": "Virtual internship · Remote",
      "experience.p1.company": "HSBC · Wealth and Personal Banking",
      "experience.p1.b1": "Completed a simulation focused on working with and advising high-net-worth clients.",
      "experience.p1.b2": "Gathered each client's investment objectives, risk appetite, and investment restrictions to recommend suitable solutions.",
      "experience.p1.b3": "Offered bespoke investment recommendations based on each client's unique investor profile.",
      "experience.p2.date": "Aug 2026",
      "experience.p2.type": "Internal tool · Admissions advising",
      "experience.p2.company": "Non-JUPAS Admissions Database · Independent Developer",
      "experience.p2.b1": "Independently developed an internal Non-JUPAS admissions database, cleaning and standardizing Telegram channel data into SQLite with structured fields such as university, subject, CGPA, and offer status.",
      "experience.p2.b2": "Built a FastAPI backend and an invite-gated web query system with Chinese natural-language-to-SQL support.",
      "experience.p2.b3": "Designed subject CGPA references and student-matching logic, using sample size, median, range, and trend statistics to support admissions advice, with planned confidence intervals and an interpretable acceptance-probability model.",
      "experience.p2.b4": "Released a trial version via Cloudflare Tunnel, covering data integration, query, analysis, decision support, and report export.",
      "experience.p3.date": "Sep 2026",
      "experience.p3.type": "Company automation · Video production",
      "experience.p3.company": "Dingxi Daily Short-Video Automation",
      "experience.p3.b1": "Automated raw clips into branded short videos with vertical conversion, face blur, audio removal, BGM mixing, trimming, and watermarking.",
      "experience.p3.b2": "Auto-generated intros/outros, covers, previews, and publishing captions with black-frame and audio self-checks, producing a daily ready-to-post video in one click.",
      "experience.p3.b3": "Built a reusable Python + FFmpeg pipeline to reduce manual editing and keep output style consistent.",
      "projects.kicker": "05 · Projects",
      "projects.title": "Projects",
      "projects.subtitle": "Solving problems with data",
      "projects.p1.tag": "Club project",
      "projects.p1.badge": "Completed",
      "projects.p1.title": "School Club Database System",
      "projects.p1.desc": "Led a 5-person team to design and build a database for a school club. Designed core tables and wrote SQL for create, read, update, delete, joins, and batch import/export, reducing each statistical task from 2 hours to 10 minutes.",
      "projects.p1.tech1": "Database design",
      "projects.p1.tech2": "Teamwork",
      "projects.agent": "Agent projects",
      "projects.demo": "Live demo",
      "projects.p2.title": "SQL Natural Language Query Assistant",
      "projects.p2.desc": "Ask questions in Chinese or English, generate SQL, and run it on sample data to show the natural-language-to-query pipeline.",
      "projects.p3.title": "Automated Analysis Report Agent",
      "projects.p3.desc": "Paste CSV data to auto-generate field statistics, charts, and insights, with downloadable HTML reports.",
      "projects.p4.title": "Knowledge Base Q&A Agent",
      "projects.p4.desc": "Upload documents and ask questions in natural language; retrieves the most relevant passages using TF-IDF.",
      "projects.p5.tag": "Quant research",
      "projects.p5.title": "US Equity Factor Research Pipeline",
      "projects.p5.desc": "Weekly automated US-equity factor research: computes financially motivated factors, measures IC/IR, runs a cost-aware backtest against VOO, with out-of-sample validation and rolling factor selection.",
      "projects.p5.link": "GitHub repo",
      "projects.more": "More agent projects in progress",
      "education.kicker": "02 · Education",
      "education.title": "Education",
      "education.date": "Second-year student",
      "education.school": "The Hong Kong University of Science and Technology",
      "education.degree": "Bachelor's in Industrial Engineering and Decision Analytics",
      "contact.kicker": "06 · Contact",
      "contact.title": "Contact",
      "contact.lead": "Interested in data analytics, agents, or collaboration? Email me.",
      "contact.emailLabel": "Email",
      "contact.resumeCn": "Download Chinese resume",
      "contact.resumeEn": "Download English resume",
      "contact.note": "Email only",
      "footer.rights": "© lamwanfung"
    }
  };

  const root = document.documentElement;
  const buttons = document.querySelectorAll(".lang-switch button");

  function setLang(lang) {
    const dict = i18n[lang] || i18n.zh;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });
    root.lang = lang;
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    try {
      localStorage.setItem("lamwanfung-lang", lang);
    } catch (err) {
      /* localStorage may be unavailable when opened from a file in some setups */
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const headerInner = document.querySelector(".header-inner");
  if (menuToggle && headerInner) {
    menuToggle.addEventListener("click", () => {
      const open = headerInner.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => {
        headerInner.classList.remove("nav-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let initial = "en";
  try {
    initial = localStorage.getItem("lamwanfung-lang") || "en";
  } catch (err) {
    /* ignore */
  }
  setLang(initial);
})();

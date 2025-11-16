module.exports = [
  {
    id: "unit0",
    order: 0,
    title: {
      zh: "Unit 0: 经济机器是如何运行的",
      en: "Unit 0: How the Economic Machine Works"
    },
    description: {
      zh: "这是2008年美国金融危机之后，Ray Dalio在Youtube上分享的30分钟视频《How The Economic Machine Works》《经济机器是如何运行的》，目前已经播放了五百多万次。",
      en: "This is a 30-minute video shared by Ray Dalio on YouTube after the 2008 US financial crisis, 'How The Economic Machine Works', which has been viewed over 5 million times."
    },
    icon: "⚙️",
    tags: ["economics", "finance", "debt-cycle", "economic-machine"],
    chapters: []
  },
  {
    id: "unit1",
    order: 1,
    title: {
      zh: "Unit 1: 挑选一家好公司",
      en: "Unit 1: How to Pick a Good Company"
    },
    description: {
      zh: "学会如何像巴菲特一样筛选优质公司。掌握财务报表解读、估值方法、护城河分析。",
      en: "Learn how to screen quality companies like Buffett. Master financial statement analysis, valuation methods, and moat analysis."
    },
    icon: "🏬",
    tags: ["investment", "value-investing", "fundamental-analysis", "valuation"],
    chapters: [
      {
        id: "chapter1",
        order: 1,
        title: {
          zh: "基本面分析（Fundamental Analysis）",
          en: "Fundamental Analysis"
        },
        icon: "📊",
        tags: ["fundamental-analysis", "financial-analysis"],
        slug: "fundamental-analysis"
      },
      {
        id: "chapter2",
        order: 2,
        title: {
          zh: "财务报表与核心指标",
          en: "Financial Statements and Key Metrics"
        },
        icon: "📑",
        tags: ["financial-statements", "metrics", "accounting"],
        slug: "financial-statements"
      },
      {
        id: "chapter3",
        order: 3,
        title: {
          zh: "估值方法（Valuation）",
          en: "Valuation Methods"
        },
        icon: "💵",
        tags: ["valuation", "dcf", "pe-ratio"],
        slug: "valuation"
      },
      {
        id: "chapter4",
        order: 4,
        title: {
          zh: "护城河与行业壁垒",
          en: "Economic Moats and Industry Barriers"
        },
        icon: "🏰",
        tags: ["competitive-advantage", "moat", "barriers"],
        slug: "economic-moats"
      },
      {
        id: "chapter5",
        order: 5,
        title: {
          zh: "投资方法论",
          en: "Investment Methodology"
        },
        icon: "📈",
        tags: ["investment-strategy", "methodology"],
        slug: "investment-methodology"
      },
      {
        id: "chapter6",
        order: 6,
        title: {
          zh: "世界主要指数与历史回报",
          en: "Major World Indices and Historical Returns"
        },
        icon: "🌍",
        tags: ["indices", "returns", "market-history"],
        slug: "indices-returns"
      },
      {
        id: "chapter7",
        order: 7,
        title: {
          zh: "创业与投资的结合",
          en: "Combining Entrepreneurship and Investment"
        },
        icon: "🏭",
        tags: ["entrepreneurship", "startup", "investment"],
        slug: "entrepreneurship-investment"
      },
      {
        id: "chapter8",
        order: 8,
        title: {
          zh: "历史案例与启发",
          en: "Historical Cases and Insights"
        },
        icon: "📘",
        tags: ["case-studies", "history", "lessons"],
        slug: "case-studies"
      }
    ]
  }
];


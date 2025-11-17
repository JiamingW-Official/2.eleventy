// Quiz questions organized by topics
module.exports = [
  // Topic: Fundamental Analysis
  {
    id: 1,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的市盈率（P/E ratio）为25，而同行业平均市盈率为15。以下哪个解释最合理？",
      en: "A company has a P/E ratio of 25, while the industry average is 15. Which explanation is most reasonable?"
    },
    options: {
      zh: [
        "该公司被高估了，应该卖出",
        "该公司可能具有更高的增长潜力或更强的竞争优势",
        "市盈率越高越好，应该买入"
      ],
      en: [
        "The company is overvalued and should be sold",
        "The company may have higher growth potential or stronger competitive advantages",
        "Higher P/E ratio is always better, should buy"
      ]
    },
    correct: 1,
    explanation: {
      zh: "高市盈率不一定意味着被高估。如果公司有更高的增长潜力、更强的竞争优势（如经济护城河），或者处于快速增长的行业，高市盈率可能是合理的。关键是要结合公司的基本面、增长前景和行业特点来分析。",
      en: "A high P/E ratio doesn't necessarily mean overvaluation. If a company has higher growth potential, stronger competitive advantages (economic moats), or operates in a fast-growing industry, a high P/E ratio may be justified. The key is to analyze it in conjunction with the company's fundamentals, growth prospects, and industry characteristics."
    }
  },
  {
    id: 2,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司财务报表时，以下哪个指标最能反映公司的真实盈利能力？",
      en: "When analyzing a company's financial statements, which metric best reflects the company's true profitability?"
    },
    options: {
      zh: [
        "净利润（Net Income）",
        "自由现金流（Free Cash Flow）",
        "营业收入（Revenue）"
      ],
      en: [
        "Net Income",
        "Free Cash Flow",
        "Revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "自由现金流（FCF）最能反映公司的真实盈利能力，因为它代表公司实际可以自由支配的现金。净利润可能受到会计处理、非现金项目（如折旧）的影响，而营业收入只反映销售额，不反映成本。自由现金流 = 经营性现金流 - 资本支出，是投资者最关心的指标之一。",
      en: "Free Cash Flow (FCF) best reflects a company's true profitability because it represents the actual cash the company can freely use. Net income can be affected by accounting treatments and non-cash items (such as depreciation), while revenue only reflects sales, not costs. Free Cash Flow = Operating Cash Flow - Capital Expenditures, and is one of the most important metrics for investors."
    }
  },
  {
    id: 3,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的毛利率（Gross Margin）从30%下降到25%，但净利率（Net Margin）从5%上升到7%。这可能说明什么？",
      en: "A company's Gross Margin decreased from 30% to 25%, but Net Margin increased from 5% to 7%. What might this indicate?"
    },
    options: {
      zh: [
        "公司经营状况恶化",
        "公司可能通过提高运营效率或减少费用来抵消毛利率下降的影响",
        "数据有误，毛利率和净利率应该同向变化"
      ],
      en: [
        "The company's operations are deteriorating",
        "The company may have offset the gross margin decline by improving operational efficiency or reducing expenses",
        "The data is incorrect; gross margin and net margin should move in the same direction"
      ]
    },
    correct: 1,
    explanation: {
      zh: "毛利率下降但净利率上升，说明公司虽然生产成本或原材料成本上升（导致毛利率下降），但通过提高运营效率、减少销售费用、管理费用或财务费用，最终提升了整体盈利能力。这反映了公司良好的成本控制能力。",
      en: "A decrease in gross margin but an increase in net margin indicates that while production costs or raw material costs have increased (causing gross margin to decline), the company has improved overall profitability by enhancing operational efficiency, reducing sales expenses, administrative expenses, or financial expenses. This reflects the company's strong cost control capabilities."
    }
  },
  // Topic: Financial Statements
  {
    id: 4,
    topic: "financial-statements",
    question: {
      zh: "在资产负债表中，以下哪个项目属于资产但不代表公司实际拥有的现金？",
      en: "In the balance sheet, which item is an asset but does not represent actual cash owned by the company?"
    },
    options: {
      zh: [
        "现金及现金等价物",
        "应收账款（Accounts Receivable）",
        "股东权益"
      ],
      en: [
        "Cash and cash equivalents",
        "Accounts Receivable",
        "Shareholders' Equity"
      ]
    },
    correct: 1,
    explanation: {
      zh: "应收账款是资产，但它是公司尚未收到的现金，代表客户欠公司的钱。虽然它在资产负债表上被列为资产，但存在坏账风险，可能无法全部收回。股东权益不是资产，而是资产减去负债后的余额。",
      en: "Accounts Receivable is an asset, but it represents cash not yet received by the company - money owed by customers. Although it's listed as an asset on the balance sheet, there's a risk of bad debts, and it may not all be collected. Shareholders' Equity is not an asset, but rather the balance after subtracting liabilities from assets."
    }
  },
  {
    id: 5,
    topic: "financial-statements",
    question: {
      zh: "一家公司的经营活动现金流为正，但净利润为负。以下哪个情况最可能导致这种现象？",
      en: "A company has positive operating cash flow but negative net income. Which situation is most likely to cause this phenomenon?"
    },
    options: {
      zh: [
        "公司经营不善，即将破产",
        "公司可能有大量非现金费用（如折旧、摊销）或递延收入",
        "数据计算错误"
      ],
      en: [
        "The company is poorly managed and about to go bankrupt",
        "The company may have significant non-cash expenses (such as depreciation, amortization) or deferred revenue",
        "Calculation error in the data"
      ]
    },
    correct: 1,
    explanation: {
      zh: "经营活动现金流为正但净利润为负，通常是因为利润表中包含了大量非现金费用（如折旧、摊销），这些费用减少了净利润但不影响现金流。或者公司收到了大量预付款（递延收入），增加了现金流但尚未确认为收入。这种情况在成长型公司或重资产公司中很常见。",
      en: "Positive operating cash flow but negative net income usually occurs because the income statement includes significant non-cash expenses (such as depreciation and amortization), which reduce net income but don't affect cash flow. Alternatively, the company may have received substantial prepayments (deferred revenue), increasing cash flow but not yet recognized as revenue. This is common in growth companies or capital-intensive companies."
    }
  },
  {
    id: 6,
    topic: "financial-statements",
    question: {
      zh: "流动比率（Current Ratio）为2.0通常被认为是健康的，但如果一家公司的流动比率为3.5，这可能意味着什么？",
      en: "A Current Ratio of 2.0 is generally considered healthy, but if a company has a Current Ratio of 3.5, what might this indicate?"
    },
    options: {
      zh: [
        "公司财务状况非常好，流动性极强",
        "公司可能持有过多现金或存货，资金利用效率不高",
        "流动比率越高越好，没有上限"
      ],
      en: [
        "The company's financial condition is excellent with very strong liquidity",
        "The company may be holding too much cash or inventory, indicating inefficient capital utilization",
        "Higher current ratio is always better, there's no upper limit"
      ]
    },
    correct: 1,
    explanation: {
      zh: "过高的流动比率（如3.5）可能表明公司持有过多现金或存货，这些资产没有产生足够的回报。现金应该用于投资、分红或回购股票，而不是闲置。过高的流动比率可能意味着公司缺乏投资机会或管理效率低下。理想的流动比率通常在1.5-2.5之间。",
      en: "An excessively high current ratio (such as 3.5) may indicate that the company is holding too much cash or inventory, assets that aren't generating sufficient returns. Cash should be used for investment, dividends, or stock buybacks, not left idle. An excessively high current ratio may suggest a lack of investment opportunities or poor management efficiency. An ideal current ratio is typically between 1.5-2.5."
    }
  },
  // Topic: Valuation
  {
    id: 7,
    topic: "valuation",
    question: {
      zh: "使用DCF（折现现金流）模型估值时，如果提高折现率（Discount Rate），估值结果会如何变化？",
      en: "When using a DCF (Discounted Cash Flow) model for valuation, if the discount rate is increased, how will the valuation result change?"
    },
    options: {
      zh: [
        "估值会上升",
        "估值会下降",
        "估值不变"
      ],
      en: [
        "Valuation will increase",
        "Valuation will decrease",
        "Valuation remains unchanged"
      ]
    },
    correct: 1,
    explanation: {
      zh: "折现率越高，未来现金流的现值越低，因此估值会下降。折现率反映了投资的风险和机会成本。风险越高，折现率越高，未来现金流的现值就越低。这是DCF模型的核心原理：PV = FV / (1+r)^n，其中r是折现率。",
      en: "The higher the discount rate, the lower the present value of future cash flows, so the valuation decreases. The discount rate reflects the risk and opportunity cost of the investment. Higher risk means a higher discount rate, which results in a lower present value of future cash flows. This is the core principle of the DCF model: PV = FV / (1+r)^n, where r is the discount rate."
    }
  },
  {
    id: 8,
    topic: "valuation",
    question: {
      zh: "一家公司的PEG比率（市盈率相对盈利增长比率）为0.8，而同行业平均PEG为1.2。这意味着什么？",
      en: "A company has a PEG ratio (Price/Earnings to Growth) of 0.8, while the industry average PEG is 1.2. What does this mean?"
    },
    options: {
      zh: [
        "该公司被高估了",
        "相对于其增长潜力，该公司可能被低估了",
        "PEG比率越低越差"
      ],
      en: [
        "The company is overvalued",
        "Relative to its growth potential, the company may be undervalued",
        "Lower PEG ratio is worse"
      ]
    },
    correct: 1,
    explanation: {
      zh: "PEG比率 = 市盈率 / 盈利增长率。PEG为0.8意味着公司的市盈率低于其盈利增长率，表明相对于增长潜力，股价可能被低估。通常PEG < 1被认为是低估，PEG = 1被认为是合理估值，PEG > 1可能被高估。该公司PEG（0.8）低于行业平均（1.2），说明相对于行业，它可能更具投资价值。",
      en: "PEG Ratio = P/E Ratio / Earnings Growth Rate. A PEG of 0.8 means the company's P/E ratio is lower than its earnings growth rate, suggesting the stock price may be undervalued relative to growth potential. Generally, PEG < 1 is considered undervalued, PEG = 1 is fair value, and PEG > 1 may be overvalued. The company's PEG (0.8) is lower than the industry average (1.2), indicating it may be more attractive as an investment relative to the industry."
    }
  },
  {
    id: 9,
    topic: "valuation",
    question: {
      zh: "在使用相对估值法（如P/E、P/B）时，以下哪个做法是错误的？",
      en: "When using relative valuation methods (such as P/E, P/B), which of the following practices is incorrect?"
    },
    options: {
      zh: [
        "与同行业公司进行比较",
        "只比较市盈率，不考虑其他因素",
        "考虑公司的增长率和盈利能力差异"
      ],
      en: [
        "Compare with companies in the same industry",
        "Only compare P/E ratios without considering other factors",
        "Consider differences in growth rates and profitability"
      ]
    },
    correct: 1,
    explanation: {
      zh: "相对估值法不能只看单一指标（如P/E），必须综合考虑多个因素：公司的增长率、盈利能力、竞争优势、行业地位、财务健康状况等。不同公司即使在同一行业，也可能因为增长前景、盈利质量、风险水平不同而有不同的合理估值倍数。",
      en: "Relative valuation methods cannot rely solely on a single metric (such as P/E). Multiple factors must be considered: the company's growth rate, profitability, competitive advantages, industry position, financial health, etc. Even within the same industry, different companies may have different reasonable valuation multiples due to differences in growth prospects, earnings quality, and risk levels."
    }
  },
  // Topic: Economic Moats
  {
    id: 10,
    topic: "economic-moats",
    question: {
      zh: "以下哪个最可能构成强大的经济护城河？",
      en: "Which of the following is most likely to constitute a strong economic moat?"
    },
    options: {
      zh: [
        "拥有大量现金",
        "拥有强大的品牌、网络效应或成本优势",
        "股价持续上涨"
      ],
      en: [
        "Having a large amount of cash",
        "Having a strong brand, network effects, or cost advantages",
        "Continuously rising stock price"
      ]
    },
    correct: 1,
    explanation: {
      zh: "经济护城河是指公司能够长期保持竞争优势、抵御竞争的能力。强大的品牌（如可口可乐）、网络效应（如Facebook、微信）、成本优势（如规模经济）、转换成本（如软件系统）等都是真正的护城河。现金只是资源，不是护城河；股价上涨是结果，不是原因。",
      en: "An economic moat refers to a company's ability to maintain competitive advantages and resist competition over the long term. Strong brands (like Coca-Cola), network effects (like Facebook, WeChat), cost advantages (such as economies of scale), switching costs (like software systems) are all true moats. Cash is just a resource, not a moat; rising stock prices are a result, not a cause."
    }
  },
  {
    id: 11,
    topic: "economic-moats",
    question: {
      zh: "网络效应（Network Effects）作为经济护城河，其核心特征是什么？",
      en: "What is the core characteristic of Network Effects as an economic moat?"
    },
    options: {
      zh: [
        "用户越多，产品价值越高，形成正向循环",
        "产品价格越高，质量越好",
        "公司规模越大，利润越高"
      ],
      en: [
        "The more users, the higher the product value, creating a positive feedback loop",
        "The higher the product price, the better the quality",
        "The larger the company, the higher the profits"
      ]
    },
    correct: 0,
    explanation: {
      zh: "网络效应的核心是：随着用户数量的增加，产品或服务对每个用户的价值也增加，形成正向反馈循环。例如，社交网络、支付平台、市场平台等都受益于网络效应。用户越多，平台越有价值，吸引更多用户，形成强大的竞争壁垒。",
      en: "The core of network effects is: as the number of users increases, the value of the product or service to each user also increases, creating a positive feedback loop. For example, social networks, payment platforms, and marketplace platforms all benefit from network effects. The more users, the more valuable the platform becomes, attracting more users and creating a strong competitive barrier."
    }
  },
  {
    id: 12,
    topic: "economic-moats",
    question: {
      zh: "一家公司声称拥有'技术护城河'，但该技术每两年就会被新技术取代。这是真正的护城河吗？",
      en: "A company claims to have a 'technological moat,' but the technology is replaced by new technology every two years. Is this a true moat?"
    },
    options: {
      zh: [
        "是的，技术就是护城河",
        "不是，真正的护城河应该是可持续的竞争优势",
        "取决于技术的复杂程度"
      ],
      en: [
        "Yes, technology is the moat",
        "No, a true moat should be a sustainable competitive advantage",
        "Depends on the complexity of the technology"
      ]
    },
    correct: 1,
    explanation: {
      zh: "真正的经济护城河必须是可持续的、难以复制的竞争优势。如果技术每两年就被取代，这只是暂时的优势，不是真正的护城河。真正的技术护城河应该是：持续的创新能力、强大的研发能力、专利保护、或者将技术转化为品牌、网络效应等更持久的优势。",
      en: "A true economic moat must be a sustainable, difficult-to-replicate competitive advantage. If technology is replaced every two years, this is only a temporary advantage, not a true moat. A true technological moat should be: sustained innovation capability, strong R&D capabilities, patent protection, or transforming technology into more enduring advantages like brands or network effects."
    }
  },
  // Topic: Investment Strategy
  {
    id: 13,
    topic: "investment-strategy",
    question: {
      zh: "价值投资（Value Investing）的核心原则是什么？",
      en: "What is the core principle of Value Investing?"
    },
    options: {
      zh: [
        "买入价格持续上涨的股票",
        "以低于内在价值的价格买入优质公司",
        "只投资科技股"
      ],
      en: [
        "Buy stocks with continuously rising prices",
        "Buy quality companies at prices below their intrinsic value",
        "Only invest in technology stocks"
      ]
    },
    correct: 1,
    explanation: {
      zh: "价值投资的核心是'安全边际'（Margin of Safety）：以低于公司内在价值的价格买入优质公司的股票。价值投资者关注公司的基本面、财务状况、竞争优势，寻找被市场低估的机会。这与追涨杀跌的投机行为不同，价值投资强调长期持有、理性分析。",
      en: "The core of value investing is the 'Margin of Safety': buying stocks of quality companies at prices below their intrinsic value. Value investors focus on a company's fundamentals, financial condition, and competitive advantages, seeking opportunities undervalued by the market. This differs from speculative behavior of chasing rising prices, as value investing emphasizes long-term holding and rational analysis."
    }
  },
  {
    id: 14,
    topic: "investment-strategy",
    question: {
      zh: "在构建投资组合时，以下哪个策略最能降低风险？",
      en: "When constructing an investment portfolio, which strategy best reduces risk?"
    },
    options: {
      zh: [
        "将所有资金投入一只表现最好的股票",
        "分散投资于不同行业、不同地区的优质公司",
        "频繁买卖，追逐市场热点"
      ],
      en: [
        "Invest all funds in the best-performing stock",
        "Diversify investments across quality companies in different industries and regions",
        "Frequently trade, chasing market trends"
      ]
    },
    correct: 1,
    explanation: {
      zh: "分散投资（Diversification）是降低投资风险的核心策略。通过投资不同行业、不同地区、不同资产类别的优质公司，可以降低单一公司或行业风险对整体投资组合的影响。'不要把所有鸡蛋放在一个篮子里'。但分散也要适度，过度分散可能降低收益。",
      en: "Diversification is the core strategy for reducing investment risk. By investing in quality companies across different industries, regions, and asset classes, you can reduce the impact of single company or industry risks on the overall portfolio. 'Don't put all your eggs in one basket.' However, diversification should be moderate, as over-diversification may reduce returns."
    }
  },
  {
    id: 15,
    topic: "investment-strategy",
    question: {
      zh: "一家公司的股价在短期内大幅波动，但长期基本面没有变化。价值投资者应该怎么做？",
      en: "A company's stock price fluctuates significantly in the short term, but its long-term fundamentals haven't changed. What should a value investor do?"
    },
    options: {
      zh: [
        "立即卖出，避免进一步损失",
        "如果价格低于内在价值，可能是买入或加仓的机会",
        "跟随市场情绪，频繁交易"
      ],
      en: [
        "Sell immediately to avoid further losses",
        "If the price is below intrinsic value, it may be an opportunity to buy or add to positions",
        "Follow market sentiment and trade frequently"
      ]
    },
    correct: 1,
    explanation: {
      zh: "价值投资者应该关注公司的长期基本面，而不是短期股价波动。如果公司的内在价值没有变化，但股价因市场情绪、短期事件而下跌，这可能提供了以更低价格买入优质公司的机会。'在别人恐惧时贪婪，在别人贪婪时恐惧'。",
      en: "Value investors should focus on a company's long-term fundamentals, not short-term stock price fluctuations. If the company's intrinsic value hasn't changed, but the stock price has fallen due to market sentiment or short-term events, this may provide an opportunity to buy quality companies at lower prices. 'Be greedy when others are fearful, and fearful when others are greedy.'"
    }
  },
  // Topic: Market & Indices
  {
    id: 16,
    topic: "market-indices",
    question: {
      zh: "市场指数（如S&P 500）上涨10%，是否意味着所有成分股都上涨了10%？",
      en: "If a market index (such as S&P 500) rises by 10%, does this mean all constituent stocks rose by 10%?"
    },
    options: {
      zh: [
        "是的，所有股票都上涨10%",
        "不是，指数是加权平均，不同股票对指数的影响不同",
        "取决于指数的计算方法"
      ],
      en: [
        "Yes, all stocks rose by 10%",
        "No, the index is a weighted average, and different stocks have different impacts on the index",
        "Depends on how the index is calculated"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场指数通常是市值加权平均，大市值公司对指数的影响更大。例如，S&P 500中，苹果、微软等大公司对指数的影响远大于小公司。因此，指数上涨10%可能意味着：大公司上涨较多，小公司可能上涨较少甚至下跌。指数的表现不等于个股的平均表现。",
      en: "Market indices are typically market-capitalization weighted averages, where larger companies have a greater impact on the index. For example, in the S&P 500, large companies like Apple and Microsoft have far greater influence on the index than smaller companies. Therefore, a 10% index rise may mean: large companies rose more, while smaller companies may have risen less or even fallen. Index performance does not equal the average performance of individual stocks."
    }
  },
  {
    id: 17,
    topic: "market-indices",
    question: {
      zh: "以下哪个因素最可能影响股票市场的长期回报？",
      en: "Which factor is most likely to affect long-term stock market returns?"
    },
    options: {
      zh: [
        "每日的新闻头条",
        "经济的长期增长、企业盈利能力和估值水平",
        "技术分析图表"
      ],
      en: [
        "Daily news headlines",
        "Long-term economic growth, corporate profitability, and valuation levels",
        "Technical analysis charts"
      ]
    },
    correct: 1,
    explanation: {
      zh: "股票市场的长期回报主要由基本面因素驱动：经济的长期增长、企业盈利能力的提升、以及估值水平的变化。短期新闻、技术分析可能影响短期波动，但长期回报取决于企业创造价值的能力。历史数据显示，长期持有优质公司的股票，能够获得与经济增长和企业盈利增长相匹配的回报。",
      en: "Long-term stock market returns are primarily driven by fundamental factors: long-term economic growth, improvements in corporate profitability, and changes in valuation levels. Short-term news and technical analysis may affect short-term volatility, but long-term returns depend on companies' ability to create value. Historical data shows that long-term holding of quality company stocks can generate returns that match economic growth and corporate profit growth."
    }
  },
  {
    id: 18,
    topic: "market-indices",
    question: {
      zh: "市场处于'牛市'（Bull Market）时，以下哪个做法最危险？",
      en: "When the market is in a 'Bull Market,' which of the following practices is most dangerous?"
    },
    options: {
      zh: [
        "保持理性，坚持价值投资原则",
        "过度杠杆，追涨杀跌，忽视风险",
        "定期重新平衡投资组合"
      ],
      en: [
        "Stay rational and adhere to value investing principles",
        "Excessive leverage, chasing rising prices, ignoring risks",
        "Regularly rebalance the investment portfolio"
      ]
    },
    correct: 1,
    explanation: {
      zh: "在牛市中，市场情绪乐观，股价持续上涨，投资者容易过度自信，忽视风险。过度杠杆、追涨杀跌、忽视基本面分析都是危险的做法。历史表明，牛市之后往往伴随着调整或熊市。理性投资者应该在牛市中保持谨慎，坚持价值投资原则，不要被市场情绪左右。",
      en: "In a bull market, market sentiment is optimistic, stock prices continue to rise, and investors tend to become overconfident and ignore risks. Excessive leverage, chasing rising prices, and ignoring fundamental analysis are all dangerous practices. History shows that bull markets are often followed by corrections or bear markets. Rational investors should remain cautious in bull markets, adhere to value investing principles, and not be swayed by market sentiment."
    }
  },
  // Topic: Economics
  {
    id: 19,
    topic: "economics",
    question: {
      zh: "央行提高利率，对股票市场最可能产生什么影响？",
      en: "If the central bank raises interest rates, what is the most likely impact on the stock market?"
    },
    options: {
      zh: [
        "股票市场一定会上涨",
        "股票市场可能会下跌，因为借贷成本上升，经济可能放缓",
        "利率变化对股票市场没有影响"
      ],
      en: [
        "The stock market will definitely rise",
        "The stock market may fall because borrowing costs increase and the economy may slow down",
        "Interest rate changes have no impact on the stock market"
      ]
    },
    correct: 1,
    explanation: {
      zh: "央行提高利率通常会导致：1) 借贷成本上升，企业投资和消费者支出可能减少；2) 债券等固定收益资产更具吸引力，资金可能从股市流向债市；3) 经济可能放缓，企业盈利可能下降。因此，利率上升通常对股市是负面因素，但具体影响取决于经济环境和市场预期。",
      en: "Central bank interest rate hikes typically lead to: 1) Increased borrowing costs, potentially reducing corporate investment and consumer spending; 2) Fixed-income assets like bonds become more attractive, funds may flow from stocks to bonds; 3) The economy may slow down, corporate profits may decline. Therefore, rising interest rates are generally negative for the stock market, though specific impacts depend on the economic environment and market expectations."
    }
  },
  {
    id: 20,
    topic: "economics",
    question: {
      zh: "通货膨胀（Inflation）上升，对不同类型的资产有什么影响？",
      en: "What is the impact of rising inflation on different types of assets?"
    },
    options: {
      zh: [
        "对所有资产都有负面影响",
        "可能对股票和房地产有正面影响（作为通胀对冲），但对现金和固定收益债券有负面影响",
        "只影响商品价格"
      ],
      en: [
        "Negative impact on all assets",
        "May have positive impacts on stocks and real estate (as inflation hedges), but negative impacts on cash and fixed-income bonds",
        "Only affects commodity prices"
      ]
    },
    correct: 1,
    explanation: {
      zh: "适度通胀对股票和房地产可能有正面影响，因为：1) 企业可以提高产品价格，收入增长；2) 资产价格可能随通胀上升。但现金的购买力下降，固定收益债券的实际回报下降（名义利率固定，但通胀侵蚀购买力）。不过，恶性通胀对所有资产都是灾难性的。",
      en: "Moderate inflation may have positive impacts on stocks and real estate because: 1) Companies can raise product prices, increasing revenue; 2) Asset prices may rise with inflation. However, cash purchasing power declines, and fixed-income bonds' real returns decrease (nominal rates are fixed, but inflation erodes purchasing power). However, hyperinflation is catastrophic for all assets."
    }
  },
  {
    id: 21,
    topic: "economics",
    question: {
      zh: "在经济衰退（Recession）期间，以下哪个行业通常表现相对较好？",
      en: "During an economic recession, which industry typically performs relatively well?"
    },
    options: {
      zh: [
        "奢侈品行业",
        "必需消费品行业（如食品、日用品）",
        "周期性行业（如汽车、房地产）"
      ],
      en: [
        "Luxury goods industry",
        "Consumer staples industry (such as food, daily necessities)",
        "Cyclical industries (such as automobiles, real estate)"
      ]
    },
    correct: 1,
    explanation: {
      zh: "在经济衰退期间，消费者会减少非必需支出，但必需消费品（食品、日用品、医疗等）的需求相对稳定，因为这些是生活必需品。因此，必需消费品行业通常在经济衰退中表现相对较好，具有防御性特征。而奢侈品和周期性行业（如汽车、房地产）通常受经济周期影响较大。",
      en: "During economic recessions, consumers reduce non-essential spending, but demand for consumer staples (food, daily necessities, healthcare, etc.) remains relatively stable as these are necessities of life. Therefore, the consumer staples industry typically performs relatively well during recessions, exhibiting defensive characteristics. Luxury goods and cyclical industries (such as automobiles, real estate) are usually more affected by economic cycles."
    }
  },
  // More questions to reach 30
  {
    id: 22,
    topic: "fundamental-analysis",
    question: {
      zh: "ROE（净资产收益率）为20%意味着什么？",
      en: "What does an ROE (Return on Equity) of 20% mean?"
    },
    options: {
      zh: [
        "公司股价上涨了20%",
        "公司每1元股东权益创造了0.2元的净利润",
        "公司收入增长了20%"
      ],
      en: [
        "The company's stock price rose by 20%",
        "The company generates 0.2 yuan of net profit for every 1 yuan of shareholders' equity",
        "The company's revenue grew by 20%"
      ]
    },
    correct: 1,
    explanation: {
      zh: "ROE = 净利润 / 股东权益，衡量公司使用股东资金创造利润的效率。ROE为20%意味着公司每1元股东权益创造了0.2元的净利润，这是衡量公司盈利能力和资本使用效率的重要指标。一般来说，ROE > 15%被认为是优秀的。",
      en: "ROE = Net Income / Shareholders' Equity, measuring the efficiency of a company's use of shareholders' funds to generate profits. An ROE of 20% means the company generates 0.2 yuan of net profit for every 1 yuan of shareholders' equity. This is an important metric for measuring a company's profitability and capital efficiency. Generally, ROE > 15% is considered excellent."
    }
  },
  {
    id: 23,
    topic: "financial-statements",
    question: {
      zh: "一家公司的存货周转率（Inventory Turnover）下降，可能说明什么？",
      en: "If a company's Inventory Turnover ratio decreases, what might this indicate?"
    },
    options: {
      zh: [
        "公司销售能力增强",
        "公司可能面临库存积压、销售放缓或产品过时的问题",
        "存货周转率越低越好"
      ],
      en: [
        "The company's sales capability has improved",
        "The company may be facing inventory buildup, slowing sales, or product obsolescence issues",
        "Lower inventory turnover is better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "存货周转率 = 销售成本 / 平均存货，衡量公司销售存货的速度。周转率下降意味着存货在仓库中停留时间变长，可能表明：1) 销售放缓；2) 产品过时或不受欢迎；3) 库存管理不善。这会导致资金占用增加、仓储成本上升、存货减值风险增加。",
      en: "Inventory Turnover = Cost of Goods Sold / Average Inventory, measuring how quickly a company sells its inventory. A decrease in turnover means inventory stays in the warehouse longer, possibly indicating: 1) Slowing sales; 2) Products becoming obsolete or unpopular; 3) Poor inventory management. This leads to increased capital tied up, higher storage costs, and increased risk of inventory write-downs."
    }
  },
  {
    id: 24,
    topic: "valuation",
    question: {
      zh: "在使用P/B比率（市净率）估值时，以下哪个情况可能导致P/B比率失效？",
      en: "When using the P/B ratio (Price-to-Book ratio) for valuation, which situation may cause the P/B ratio to be ineffective?"
    },
    options: {
      zh: [
        "公司有大量无形资产（如品牌、专利）",
        "公司资产都是实物资产",
        "公司没有负债"
      ],
      en: [
        "The company has significant intangible assets (such as brands, patents)",
        "All company assets are physical assets",
        "The company has no debt"
      ]
    },
    correct: 0,
    explanation: {
      zh: "P/B比率 = 市值 / 账面价值。对于拥有大量无形资产（如品牌价值、专利、技术、客户关系）的公司，账面价值可能严重低估公司的真实价值，因为这些无形资产在财务报表中可能没有被充分反映。因此，P/B比率对科技公司、品牌公司等可能不太适用。",
      en: "P/B Ratio = Market Value / Book Value. For companies with significant intangible assets (such as brand value, patents, technology, customer relationships), book value may severely underestimate the company's true value, as these intangible assets may not be fully reflected in financial statements. Therefore, the P/B ratio may not be very applicable to technology companies, brand companies, etc."
    }
  },
  {
    id: 25,
    topic: "economic-moats",
    question: {
      zh: "转换成本（Switching Costs）作为经济护城河，最典型的例子是什么？",
      en: "What is the most typical example of Switching Costs as an economic moat?"
    },
    options: {
      zh: [
        "消费者可以随时更换品牌",
        "企业软件系统，更换需要重新培训员工、迁移数据，成本很高",
        "商品价格"
      ],
      en: [
        "Consumers can change brands at any time",
        "Enterprise software systems, where switching requires retraining employees and migrating data, with high costs",
        "Product prices"
      ]
    },
    correct: 1,
    explanation: {
      zh: "转换成本是指客户从一家公司的产品或服务转换到竞争对手需要付出的成本。企业软件系统是典型例子：更换系统需要重新培训员工、迁移数据、可能影响业务流程，这些成本很高，因此客户不愿意轻易更换。这形成了强大的客户粘性和竞争壁垒。",
      en: "Switching costs refer to the costs customers must pay to switch from one company's products or services to a competitor. Enterprise software systems are a typical example: switching systems requires retraining employees, migrating data, and may affect business processes. These costs are high, so customers are reluctant to switch easily. This creates strong customer stickiness and competitive barriers."
    }
  },
  {
    id: 26,
    topic: "investment-strategy",
    question: {
      zh: "'能力圈'（Circle of Competence）在投资中的重要性是什么？",
      en: "What is the importance of the 'Circle of Competence' in investing?"
    },
    options: {
      zh: [
        "限制投资机会，应该忽略",
        "帮助投资者专注于自己理解的行业和公司，避免投资不了解的领域",
        "只适用于专业投资者"
      ],
      en: [
        "Limits investment opportunities and should be ignored",
        "Helps investors focus on industries and companies they understand, avoiding investments in unfamiliar areas",
        "Only applies to professional investors"
      ]
    },
    correct: 1,
    explanation: {
      zh: "能力圈是指投资者真正理解和熟悉的领域。在能力圈内投资，投资者能够更好地评估公司的价值、识别风险、做出理性决策。投资不了解的领域，容易做出错误判断。巴菲特强调'只投资自己理解的业务'。能力圈可以逐步扩大，但需要持续学习和研究。",
      en: "The Circle of Competence refers to areas that investors truly understand and are familiar with. Investing within the circle of competence allows investors to better assess company value, identify risks, and make rational decisions. Investing in unfamiliar areas makes it easy to make wrong judgments. Buffett emphasizes 'only invest in businesses you understand.' The circle of competence can be gradually expanded, but requires continuous learning and research."
    }
  },
  {
    id: 27,
    topic: "market-indices",
    question: {
      zh: "市场波动性（Volatility）增加，对长期投资者意味着什么？",
      en: "What does increased market volatility mean for long-term investors?"
    },
    options: {
      zh: [
        "应该立即卖出所有股票",
        "可能提供以更低价格买入优质公司的机会",
        "波动性只影响短期交易者"
      ],
      en: [
        "Should immediately sell all stocks",
        "May provide opportunities to buy quality companies at lower prices",
        "Volatility only affects short-term traders"
      ]
    },
    correct: 1,
    explanation: {
      zh: "对于长期价值投资者，市场波动性增加可能带来机会而非威胁。如果公司的内在价值没有变化，但股价因市场情绪波动而下跌，这提供了以更低价格买入的机会。'市场是投票机，但长期是称重机'。长期投资者应该关注公司基本面，利用市场波动寻找买入机会。",
      en: "For long-term value investors, increased market volatility may present opportunities rather than threats. If a company's intrinsic value hasn't changed, but the stock price has fallen due to market sentiment fluctuations, this provides an opportunity to buy at lower prices. 'The market is a voting machine, but in the long run, it's a weighing machine.' Long-term investors should focus on company fundamentals and use market volatility to find buying opportunities."
    }
  },
  {
    id: 28,
    topic: "economics",
    question: {
      zh: "GDP（国内生产总值）增长，一定意味着股市会上涨吗？",
      en: "Does GDP (Gross Domestic Product) growth necessarily mean the stock market will rise?"
    },
    options: {
      zh: [
        "是的，GDP增长和股市上涨是正相关的",
        "不一定，还要看企业盈利能力、估值水平、市场预期等因素",
        "GDP和股市没有关系"
      ],
      en: [
        "Yes, GDP growth and stock market rises are positively correlated",
        "Not necessarily, it also depends on corporate profitability, valuation levels, market expectations, and other factors",
        "GDP and the stock market are unrelated"
      ]
    },
    correct: 1,
    explanation: {
      zh: "GDP增长和股市表现有关联，但不是简单的正相关。股市表现还取决于：1) 企业盈利能力是否同步增长；2) 估值水平是否合理；3) 市场预期是否已经反映在股价中；4) 经济增长的质量和可持续性。有时GDP增长但企业利润下降，或估值过高，股市可能不涨甚至下跌。",
      en: "GDP growth and stock market performance are related, but not simply positively correlated. Stock market performance also depends on: 1) Whether corporate profitability grows in sync; 2) Whether valuation levels are reasonable; 3) Whether market expectations are already reflected in stock prices; 4) The quality and sustainability of economic growth. Sometimes GDP grows but corporate profits decline, or valuations are too high, and the stock market may not rise or even fall."
    }
  },
  {
    id: 29,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的债务股权比（Debt-to-Equity Ratio）为2.0，这意味着什么？",
      en: "If a company has a Debt-to-Equity Ratio of 2.0, what does this mean?"
    },
    options: {
      zh: [
        "公司的债务是股东权益的2倍，财务杠杆较高",
        "公司的股东权益是债务的2倍",
        "这个比率没有意义"
      ],
      en: [
        "The company's debt is twice its shareholders' equity, indicating high financial leverage",
        "The company's shareholders' equity is twice its debt",
        "This ratio is meaningless"
      ]
    },
    correct: 0,
    explanation: {
      zh: "债务股权比 = 总债务 / 股东权益。比率为2.0意味着公司的债务是股东权益的2倍，财务杠杆较高。这可能是好事（如果公司能有效利用债务创造更高回报），也可能是风险（如果盈利能力不足，可能面临偿债压力）。需要结合行业特点、盈利能力、现金流状况来评估。",
      en: "Debt-to-Equity Ratio = Total Debt / Shareholders' Equity. A ratio of 2.0 means the company's debt is twice its shareholders' equity, indicating high financial leverage. This can be good (if the company can effectively use debt to create higher returns) or risky (if profitability is insufficient, it may face debt repayment pressure). It needs to be evaluated in conjunction with industry characteristics, profitability, and cash flow conditions."
    }
  },
  {
    id: 30,
    topic: "investment-strategy",
    question: {
      zh: "'市场先生'（Mr. Market）这个概念说明了什么？",
      en: "What does the concept of 'Mr. Market' illustrate?"
    },
    options: {
      zh: [
        "市场总是理性的，价格总是合理的",
        "市场情绪波动很大，价格可能偏离价值，投资者应该利用这种波动",
        "应该完全跟随市场情绪"
      ],
      en: [
        "The market is always rational, prices are always reasonable",
        "Market sentiment fluctuates greatly, prices may deviate from value, investors should take advantage of these fluctuations",
        "Should completely follow market sentiment"
      ]
    },
    correct: 1,
    explanation: {
      zh: "'市场先生'是格雷厄姆提出的比喻，说明市场情绪波动很大，每天都会给出不同的报价，有时乐观（价格高），有时悲观（价格低）。聪明的投资者不应该被市场情绪左右，而应该利用市场先生的情绪波动，在价格低于价值时买入，在价格高于价值时卖出或持有。",
      en: "'Mr. Market' is a metaphor proposed by Graham, illustrating that market sentiment fluctuates greatly, offering different prices every day, sometimes optimistic (high prices), sometimes pessimistic (low prices). Smart investors should not be swayed by market sentiment, but should take advantage of Mr. Market's emotional fluctuations, buying when prices are below value, and selling or holding when prices are above value."
    }
  },
  // Additional questions to reach 20 per topic
  // Fundamental Analysis - Questions 6-20
  {
    id: 31,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的营业利润率（Operating Margin）持续下降，但净利润率（Net Margin）保持稳定。最可能的原因是什么？",
      en: "A company's Operating Margin continues to decline, but Net Margin remains stable. What is the most likely reason?"
    },
    options: {
      zh: [
        "公司运营效率提高",
        "公司可能通过非经营性收入（如投资收益、资产出售）来弥补运营利润的下降",
        "数据计算错误"
      ],
      en: [
        "The company's operational efficiency has improved",
        "The company may be offsetting declining operating profits through non-operating income (such as investment gains, asset sales)",
        "Calculation error in the data"
      ]
    },
    correct: 1,
    explanation: {
      zh: "营业利润率下降但净利润率稳定，说明公司的核心业务盈利能力在下降，但通过非经营性活动（如投资收益、资产出售、政府补贴等）维持了整体利润。这种情况需要警惕，因为非经营性收入通常不可持续，核心业务的恶化才是真正的问题。",
      en: "A decline in operating margin but stable net margin indicates that the company's core business profitability is declining, but overall profits are maintained through non-operating activities (such as investment gains, asset sales, government subsidies). This situation requires caution, as non-operating income is usually unsustainable, and the deterioration of core business is the real problem."
    }
  },
  {
    id: 32,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司时，以下哪个指标最能反映公司的盈利质量？",
      en: "When analyzing a company, which metric best reflects the quality of earnings?"
    },
    options: {
      zh: [
        "净利润增长率",
        "经营性现金流与净利润的比率",
        "每股收益（EPS）"
      ],
      en: [
        "Net income growth rate",
        "Operating cash flow to net income ratio",
        "Earnings per share (EPS)"
      ]
    },
    correct: 1,
    explanation: {
      zh: "经营性现金流与净利润的比率（CFO/NI）是衡量盈利质量的关键指标。如果这个比率接近或大于1，说明公司的利润有真实的现金支撑；如果远小于1，可能表明公司通过会计手段虚增利润，或者利润质量较差。高质量的盈利应该能够转化为现金流入。",
      en: "The operating cash flow to net income ratio (CFO/NI) is a key metric for measuring earnings quality. If this ratio is close to or greater than 1, it indicates the company's profits are supported by real cash; if it's much less than 1, it may indicate the company is inflating profits through accounting methods, or the earnings quality is poor. High-quality earnings should be able to convert into cash inflows."
    }
  },
  {
    id: 33,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的资产周转率（Asset Turnover）为0.5，这意味着什么？",
      en: "If a company has an Asset Turnover ratio of 0.5, what does this mean?"
    },
    options: {
      zh: [
        "公司每1元资产创造了0.5元收入，资产使用效率较低",
        "公司资产使用效率很高",
        "这个比率没有意义"
      ],
      en: [
        "The company generates 0.5 yuan of revenue for every 1 yuan of assets, indicating low asset utilization efficiency",
        "The company has very high asset utilization efficiency",
        "This ratio is meaningless"
      ]
    },
    correct: 0,
    explanation: {
      zh: "资产周转率 = 营业收入 / 平均总资产。比率为0.5意味着公司每1元资产只创造了0.5元收入，资产使用效率较低。这可能表明公司资产配置不当、产能过剩、或者处于重资产行业。通常资产周转率越高越好，但也要结合行业特点来看。",
      en: "Asset Turnover = Revenue / Average Total Assets. A ratio of 0.5 means the company generates only 0.5 yuan of revenue for every 1 yuan of assets, indicating low asset utilization efficiency. This may indicate poor asset allocation, overcapacity, or that the company is in a capital-intensive industry. Generally, higher asset turnover is better, but it should be considered in conjunction with industry characteristics."
    }
  },
  {
    id: 34,
    topic: "fundamental-analysis",
    question: {
      zh: "在比较两家公司的盈利能力时，以下哪个做法最合理？",
      en: "When comparing the profitability of two companies, which approach is most reasonable?"
    },
    options: {
      zh: [
        "只比较净利润",
        "综合考虑毛利率、净利率、ROE、ROA等多个指标，并结合行业特点",
        "只比较股价"
      ],
      en: [
        "Only compare net income",
        "Comprehensively consider multiple metrics such as gross margin, net margin, ROE, ROA, combined with industry characteristics",
        "Only compare stock prices"
      ]
    },
    correct: 1,
    explanation: {
      zh: "评估公司盈利能力需要多维度分析：毛利率反映产品定价能力，净利率反映整体盈利效率，ROE反映股东资金回报，ROA反映资产使用效率。不同行业有不同的合理水平，需要结合行业特点、公司规模、发展阶段等因素综合判断。单一指标容易产生误导。",
      en: "Evaluating a company's profitability requires multi-dimensional analysis: gross margin reflects pricing power, net margin reflects overall profit efficiency, ROE reflects shareholder return, ROA reflects asset utilization efficiency. Different industries have different reasonable levels, and need to be judged comprehensively in conjunction with industry characteristics, company size, development stage, and other factors. A single metric can be misleading."
    }
  },
  {
    id: 35,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的EBITDA（息税折旧摊销前利润）持续增长，但自由现金流下降。这可能说明什么？",
      en: "A company's EBITDA continues to grow, but free cash flow declines. What might this indicate?"
    },
    options: {
      zh: [
        "公司盈利能力增强",
        "公司可能面临资本支出大幅增加、营运资金需求增长，或者税收、利息支出增加",
        "EBITDA和自由现金流应该同向变化"
      ],
      en: [
        "The company's profitability has improved",
        "The company may be facing significant increases in capital expenditures, working capital requirements, or increases in taxes and interest expenses",
        "EBITDA and free cash flow should move in the same direction"
      ]
    },
    correct: 1,
    explanation: {
      zh: "EBITDA增长但自由现金流下降，说明虽然经营利润（EBITDA）在增长，但公司需要更多的资本支出、营运资金投入，或者税收、利息支出增加，导致实际可自由支配的现金减少。这种情况在快速扩张的公司中很常见，需要关注现金流的可持续性。",
      en: "EBITDA growth but declining free cash flow indicates that although operating profit (EBITDA) is growing, the company needs more capital expenditures, working capital investment, or faces increased taxes and interest expenses, resulting in less actual free cash. This is common in rapidly expanding companies and requires attention to cash flow sustainability."
    }
  },
  {
    id: 36,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析成长型公司时，以下哪个指标最重要？",
      en: "When analyzing growth companies, which metric is most important?"
    },
    options: {
      zh: [
        "当前的市盈率",
        "收入增长率、毛利率趋势、市场份额变化、以及现金消耗率",
        "股息率"
      ],
      en: [
        "Current P/E ratio",
        "Revenue growth rate, gross margin trends, market share changes, and cash burn rate",
        "Dividend yield"
      ]
    },
    correct: 1,
    explanation: {
      zh: "对于成长型公司，传统的估值指标（如P/E）可能不适用，因为公司可能还在亏损或盈利很少。更重要的是关注：收入增长率（是否持续高速增长）、毛利率趋势（是否改善）、市场份额（是否扩大）、以及现金消耗率（能否支撑到盈利）。这些指标更能反映公司的成长潜力和可持续性。",
      en: "For growth companies, traditional valuation metrics (such as P/E) may not be applicable, as the company may still be losing money or have minimal profits. More important is to focus on: revenue growth rate (whether it's consistently growing rapidly), gross margin trends (whether improving), market share (whether expanding), and cash burn rate (whether it can sustain until profitability). These metrics better reflect the company's growth potential and sustainability."
    }
  },
  {
    id: 37,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的应收账款周转天数（Days Sales Outstanding, DSO）从30天增加到60天，这可能意味着什么？",
      en: "If a company's Days Sales Outstanding (DSO) increases from 30 days to 60 days, what might this indicate?"
    },
    options: {
      zh: [
        "公司收款能力增强",
        "公司可能面临客户付款延迟、信用政策放宽，或者销售质量下降",
        "DSO增加是好事"
      ],
      en: [
        "The company's collection ability has improved",
        "The company may be facing delayed customer payments, relaxed credit policies, or declining sales quality",
        "Increasing DSO is a good thing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "DSO增加意味着公司收回应收账款的时间变长，可能表明：1) 客户付款能力下降或付款意愿降低；2) 公司为了促进销售放宽了信用政策；3) 销售质量下降（如向信用较差的客户销售）。这会导致资金占用增加、坏账风险上升，需要密切关注。",
      en: "An increase in DSO means it takes longer for the company to collect receivables, possibly indicating: 1) Declining customer payment ability or willingness; 2) The company has relaxed credit policies to promote sales; 3) Declining sales quality (such as selling to customers with poor credit). This leads to increased capital tied up and rising bad debt risk, requiring close attention."
    }
  },
  {
    id: 38,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析周期性行业（如钢铁、化工）的公司时，以下哪个做法最重要？",
      en: "When analyzing companies in cyclical industries (such as steel, chemicals), which approach is most important?"
    },
    options: {
      zh: [
        "只看当前季度的业绩",
        "分析公司在行业周期不同阶段的盈利能力、成本控制能力，以及行业地位",
        "忽略行业周期性"
      ],
      en: [
        "Only look at current quarter performance",
        "Analyze the company's profitability, cost control capabilities, and industry position at different stages of the industry cycle",
        "Ignore industry cyclicality"
      ]
    },
    correct: 1,
    explanation: {
      zh: "周期性行业的公司业绩会随经济周期大幅波动。在行业景气时，所有公司都可能盈利；在行业低迷时，只有成本控制能力强、行业地位稳固的公司才能生存。因此，需要分析公司在周期不同阶段的表现，关注其成本结构、竞争优势、财务健康状况，而不是只看当前时点的业绩。",
      en: "Companies in cyclical industries experience significant performance fluctuations with economic cycles. During industry booms, all companies may be profitable; during industry downturns, only companies with strong cost control and solid industry positions can survive. Therefore, it's necessary to analyze the company's performance at different stages of the cycle, focusing on cost structure, competitive advantages, and financial health, rather than just looking at current performance."
    }
  },
  {
    id: 39,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的研发费用（R&D）占收入的比例从5%下降到2%，这可能意味着什么？",
      en: "If a company's R&D expenses as a percentage of revenue decrease from 5% to 2%, what might this indicate?"
    },
    options: {
      zh: [
        "公司创新能力增强",
        "公司可能为了短期利润削减研发投入，这可能损害长期竞争力",
        "研发费用越低越好"
      ],
      en: [
        "The company's innovation capability has improved",
        "The company may be cutting R&D investment for short-term profits, which could harm long-term competitiveness",
        "Lower R&D expenses are better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "研发费用下降可能表明公司为了提升短期利润而削减研发投入。虽然这能在短期内改善利润表，但可能损害公司的长期创新能力、产品竞争力，特别是在科技、医药等依赖创新的行业。投资者需要平衡短期业绩和长期竞争力，关注研发投入的绝对值和相对比例。",
      en: "A decline in R&D expenses may indicate the company is cutting R&D investment to boost short-term profits. While this can improve the income statement in the short term, it may harm the company's long-term innovation capability and product competitiveness, especially in industries that rely on innovation like technology and pharmaceuticals. Investors need to balance short-term performance and long-term competitiveness, paying attention to both absolute and relative R&D investment."
    }
  },
  {
    id: 40,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司的竞争优势时，以下哪个指标最能反映公司的定价能力？",
      en: "When analyzing a company's competitive advantages, which metric best reflects the company's pricing power?"
    },
    options: {
      zh: [
        "市场份额",
        "毛利率及其稳定性、以及毛利率与行业平均水平的比较",
        "员工数量"
      ],
      en: [
        "Market share",
        "Gross margin and its stability, as well as comparison with industry average",
        "Number of employees"
      ]
    },
    correct: 1,
    explanation: {
      zh: "毛利率是反映公司定价能力的关键指标。高毛利率且稳定，说明公司能够以较高价格销售产品，可能拥有品牌优势、技术优势、或垄断地位。如果毛利率远高于行业平均，说明公司有更强的定价能力。毛利率的稳定性也很重要，波动大的毛利率可能表明竞争激烈、定价能力弱。",
      en: "Gross margin is a key metric reflecting a company's pricing power. High and stable gross margins indicate the company can sell products at higher prices, possibly due to brand advantages, technological advantages, or monopoly positions. If gross margin is much higher than the industry average, it indicates stronger pricing power. The stability of gross margin is also important, as volatile gross margins may indicate intense competition and weak pricing power."
    }
  },
  {
    id: 41,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的营业费用率（Operating Expense Ratio）持续上升，但收入增长率也在上升。这可能说明什么？",
      en: "A company's Operating Expense Ratio continues to rise, but revenue growth rate is also rising. What might this indicate?"
    },
    options: {
      zh: [
        "公司运营效率下降",
        "公司可能处于扩张期，增加营销、研发等投入以推动增长，这是正常的",
        "费用率上升总是坏事"
      ],
      en: [
        "The company's operational efficiency is declining",
        "The company may be in an expansion phase, increasing marketing, R&D, and other investments to drive growth, which is normal",
        "Rising expense ratio is always bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "在收入快速增长期，费用率上升可能是正常的，因为公司需要增加营销投入获取客户、增加研发投入开发产品、增加人员支持业务扩张。关键是要看：1) 收入增长是否能覆盖费用增长；2) 费用增长是否带来可持续的收入增长；3) 随着规模扩大，费用率是否能够下降（规模效应）。",
      en: "During rapid revenue growth, rising expense ratios may be normal, as the company needs to increase marketing investment to acquire customers, increase R&D investment to develop products, and add personnel to support business expansion. The key is to see: 1) Whether revenue growth can cover expense growth; 2) Whether expense growth leads to sustainable revenue growth; 3) Whether expense ratios can decline as scale increases (economies of scale)."
    }
  },
  {
    id: 42,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司的财务健康状况时，以下哪个组合最能全面反映公司状况？",
      en: "When analyzing a company's financial health, which combination best comprehensively reflects the company's condition?"
    },
    options: {
      zh: [
        "只看净利润",
        "综合分析盈利能力（ROE、ROA）、偿债能力（流动比率、债务股权比）、运营效率（资产周转率）、现金流状况（自由现金流）",
        "只看股价"
      ],
      en: [
        "Only look at net income",
        "Comprehensively analyze profitability (ROE, ROA), solvency (current ratio, debt-to-equity ratio), operational efficiency (asset turnover), cash flow conditions (free cash flow)",
        "Only look at stock price"
      ]
    },
    correct: 1,
    explanation: {
      zh: "全面评估公司财务健康需要多维度分析：盈利能力（ROE、ROA）反映公司赚钱能力；偿债能力（流动比率、债务股权比）反映公司财务风险；运营效率（资产周转率）反映资产使用效率；现金流状况（自由现金流）反映真实盈利质量和资金状况。单一指标无法全面反映公司状况。",
      en: "Comprehensive assessment of a company's financial health requires multi-dimensional analysis: profitability (ROE, ROA) reflects the company's ability to make money; solvency (current ratio, debt-to-equity ratio) reflects financial risk; operational efficiency (asset turnover) reflects asset utilization efficiency; cash flow conditions (free cash flow) reflect true earnings quality and capital status. A single metric cannot comprehensively reflect the company's condition."
    }
  },
  {
    id: 43,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的毛利率很高（50%），但净利率很低（3%）。这可能说明什么？",
      en: "A company has a high gross margin (50%) but low net margin (3%). What might this indicate?"
    },
    options: {
      zh: [
        "公司产品定价能力强，盈利能力优秀",
        "公司虽然产品有定价优势，但运营费用（销售、管理、研发等）过高，或者财务费用、税收负担重",
        "毛利率和净利率应该接近"
      ],
      en: [
        "The company has strong pricing power and excellent profitability",
        "Although the company's products have pricing advantages, operating expenses (sales, administration, R&D, etc.) are too high, or financial expenses and tax burdens are heavy",
        "Gross margin and net margin should be close"
      ]
    },
    correct: 1,
    explanation: {
      zh: "高毛利率但低净利率，说明公司产品有定价优势（毛利率高），但运营效率可能存在问题：销售费用、管理费用、研发费用过高，或者财务费用、税收负担重，侵蚀了利润。这种情况需要分析各项费用的合理性，看是否有优化空间。",
      en: "High gross margin but low net margin indicates the company's products have pricing advantages (high gross margin), but operational efficiency may be problematic: sales expenses, administrative expenses, R&D expenses are too high, or financial expenses and tax burdens are heavy, eroding profits. This situation requires analysis of the reasonableness of various expenses to see if there's room for optimization."
    }
  },
  {
    id: 44,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司时，'同店销售额增长'（Same-Store Sales Growth）这个指标主要用于哪个行业？",
      en: "When analyzing companies, the metric 'Same-Store Sales Growth' is mainly used for which industry?"
    },
    options: {
      zh: [
        "所有行业",
        "零售、餐饮等有实体门店的行业，用于区分内生增长和扩张增长",
        "科技行业"
      ],
      en: [
        "All industries",
        "Industries with physical stores such as retail and restaurants, used to distinguish organic growth from expansion growth",
        "Technology industry"
      ]
    },
    correct: 1,
    explanation: {
      zh: "同店销售额增长是指现有门店（开业一年以上）的销售额增长，排除了新开店的影响。这个指标主要用于零售、餐饮等有实体门店的行业，用于区分：1) 内生增长（同店增长）- 反映经营质量；2) 扩张增长（新开店）- 反映扩张速度。同店增长更能反映公司的真实经营能力和市场地位。",
      en: "Same-store sales growth refers to sales growth at existing stores (open for more than one year), excluding the impact of new store openings. This metric is mainly used in industries with physical stores such as retail and restaurants, to distinguish: 1) Organic growth (same-store growth) - reflects operational quality; 2) Expansion growth (new store openings) - reflects expansion speed. Same-store growth better reflects the company's true operational capability and market position."
    }
  },
  {
    id: 45,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的'客户获取成本'（Customer Acquisition Cost, CAC）持续上升，这可能意味着什么？",
      en: "If a company's Customer Acquisition Cost (CAC) continues to rise, what might this indicate?"
    },
    options: {
      zh: [
        "公司营销效率提高",
        "公司可能面临市场竞争加剧、获客难度增加，或者营销策略效率下降",
        "CAC上升总是好事"
      ],
      en: [
        "The company's marketing efficiency has improved",
        "The company may be facing intensified market competition, increased customer acquisition difficulty, or declining marketing strategy efficiency",
        "Rising CAC is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "CAC上升可能表明：1) 市场竞争加剧，需要更多投入才能获取客户；2) 目标市场饱和，获客难度增加；3) 营销策略效率下降。这会导致公司盈利能力下降，特别是对于依赖持续获客的订阅型、平台型公司。需要关注CAC与客户生命周期价值（LTV）的比率，确保LTV > CAC。",
      en: "Rising CAC may indicate: 1) Intensified market competition, requiring more investment to acquire customers; 2) Target market saturation, increased customer acquisition difficulty; 3) Declining marketing strategy efficiency. This leads to declining profitability, especially for subscription-based or platform companies that rely on continuous customer acquisition. It's important to pay attention to the ratio of CAC to Customer Lifetime Value (LTV), ensuring LTV > CAC."
    }
  },
  {
    id: 46,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析科技公司时，以下哪个指标最能反映公司的用户增长质量？",
      en: "When analyzing technology companies, which metric best reflects the quality of user growth?"
    },
    options: {
      zh: [
        "只看用户总数",
        "综合分析用户增长率、用户活跃度（DAU/MAU）、用户留存率、以及单位用户价值（ARPU）",
        "只看股价"
      ],
      en: [
        "Only look at total number of users",
        "Comprehensively analyze user growth rate, user activity (DAU/MAU), user retention rate, and average revenue per user (ARPU)",
        "Only look at stock price"
      ]
    },
    correct: 1,
    explanation: {
      zh: "对于科技公司，用户增长质量比数量更重要。需要关注：1) 用户增长率（是否持续）；2) 用户活跃度（DAU/MAU比率，反映用户粘性）；3) 用户留存率（反映产品价值）；4) ARPU（反映变现能力）。高质量的用户增长应该带来活跃度提升、留存率提高、ARPU增长，而不仅仅是用户数量增加。",
      en: "For technology companies, the quality of user growth is more important than quantity. Need to focus on: 1) User growth rate (whether sustained); 2) User activity (DAU/MAU ratio, reflecting user stickiness); 3) User retention rate (reflecting product value); 4) ARPU (reflecting monetization capability). High-quality user growth should bring increased activity, improved retention, and ARPU growth, not just an increase in user numbers."
    }
  },
  {
    id: 47,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的'递延收入'（Deferred Revenue）大幅增加，这可能意味着什么？",
      en: "If a company's Deferred Revenue increases significantly, what might this indicate?"
    },
    options: {
      zh: [
        "公司收入下降",
        "公司可能收到了大量预付款或订阅费，未来收入有保障，这是积极信号",
        "递延收入是负债，增加是坏事"
      ],
      en: [
        "The company's revenue is declining",
        "The company may have received substantial prepayments or subscription fees, ensuring future revenue, which is a positive signal",
        "Deferred revenue is a liability, so an increase is bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "递延收入增加通常意味着公司收到了客户预付款或订阅费，虽然这些收入尚未确认为当期收入，但表明：1) 客户对公司产品或服务有需求；2) 未来收入有保障；3) 现金流改善。这对于订阅型、软件服务型公司是积极的信号，反映了业务的可预测性和客户粘性。",
      en: "An increase in deferred revenue usually means the company has received customer prepayments or subscription fees. Although these revenues have not yet been recognized as current period revenue, it indicates: 1) Customer demand for the company's products or services; 2) Future revenue is secured; 3) Cash flow improvement. This is a positive signal for subscription-based and software service companies, reflecting business predictability and customer stickiness."
    }
  },
  {
    id: 48,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司的竞争优势时，'市场份额'这个指标应该如何使用？",
      en: "When analyzing a company's competitive advantages, how should the 'Market Share' metric be used?"
    },
    options: {
      zh: [
        "市场份额越高越好，应该只关注这个指标",
        "需要结合行业增长、市场份额变化趋势、以及获得市场份额的成本来分析，不能孤立看待",
        "市场份额没有意义"
      ],
      en: [
        "Higher market share is better, should only focus on this metric",
        "Need to analyze in conjunction with industry growth, market share change trends, and the cost of gaining market share, cannot be viewed in isolation",
        "Market share is meaningless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场份额需要结合多个因素分析：1) 行业增长：在增长行业中，即使市场份额不变，公司也能增长；在萎缩行业中，高市场份额可能意味着风险；2) 趋势：市场份额是上升还是下降；3) 成本：通过价格战、大量营销投入获得的市场份额可能不可持续。高质量的市场份额应该是在保持盈利能力的前提下获得的。",
      en: "Market share needs to be analyzed in conjunction with multiple factors: 1) Industry growth: In growing industries, companies can grow even if market share remains unchanged; in shrinking industries, high market share may mean risk; 2) Trends: Whether market share is rising or falling; 3) Cost: Market share gained through price wars or heavy marketing investment may be unsustainable. High-quality market share should be gained while maintaining profitability."
    }
  },
  {
    id: 49,
    topic: "fundamental-analysis",
    question: {
      zh: "一家公司的'商誉'（Goodwill）占总资产的比例很高（>30%），这可能意味着什么？",
      en: "If a company's Goodwill accounts for a high proportion of total assets (>30%), what might this indicate?"
    },
    options: {
      zh: [
        "公司品牌价值很高",
        "公司可能进行了大量并购，支付了较高溢价，存在商誉减值风险",
        "商誉越高越好"
      ],
      en: [
        "The company has very high brand value",
        "The company may have conducted many acquisitions, paid high premiums, and faces goodwill impairment risk",
        "Higher goodwill is better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "高商誉通常意味着公司进行了大量并购，支付了高于被收购公司净资产价值的溢价。这存在风险：1) 如果被收购业务表现不佳，可能面临商誉减值，大幅影响利润；2) 可能表明公司过度支付了收购价格；3) 商誉不是真实资产，减值后无法恢复。需要关注被收购业务的整合情况和业绩表现。",
      en: "High goodwill usually means the company has conducted many acquisitions, paying premiums above the net asset value of acquired companies. This poses risks: 1) If acquired businesses perform poorly, they may face goodwill impairment, significantly affecting profits; 2) May indicate the company overpaid for acquisitions; 3) Goodwill is not a real asset and cannot be recovered after impairment. Need to pay attention to the integration and performance of acquired businesses."
    }
  },
  {
    id: 50,
    topic: "fundamental-analysis",
    question: {
      zh: "在分析公司的盈利可持续性时，以下哪个因素最重要？",
      en: "When analyzing the sustainability of a company's profits, which factor is most important?"
    },
    options: {
      zh: [
        "当前的净利润",
        "公司的竞争优势（护城河）、行业地位、盈利来源的多样性，以及盈利转化为现金流的能力",
        "股价表现"
      ],
      en: [
        "Current net income",
        "The company's competitive advantages (moats), industry position, diversity of profit sources, and ability to convert profits into cash flow",
        "Stock price performance"
      ]
    },
    correct: 1,
    explanation: {
      zh: "评估盈利可持续性需要关注：1) 竞争优势（护城河）- 能否抵御竞争；2) 行业地位 - 是否处于有利位置；3) 盈利来源多样性 - 是否过度依赖单一业务；4) 现金流转化能力 - 利润是否有现金支撑。这些因素决定了公司能否长期保持盈利，而不仅仅是当前时点的利润水平。",
      en: "Assessing profit sustainability requires attention to: 1) Competitive advantages (moats) - ability to resist competition; 2) Industry position - whether in a favorable position; 3) Diversity of profit sources - whether overly dependent on a single business; 4) Cash flow conversion capability - whether profits are supported by cash. These factors determine whether the company can maintain profits long-term, not just the profit level at the current point in time."
    }
  }
];


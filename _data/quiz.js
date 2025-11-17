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
  },
  // Financial Statements - Additional questions to reach 20
  {
    id: 51,
    topic: "financial-statements",
    question: {
      zh: "在现金流量表中，以下哪个活动产生的现金流最能反映公司的核心经营能力？",
      en: "In the cash flow statement, which activity's cash flow best reflects the company's core operational capability?"
    },
    options: {
      zh: [
        "投资活动现金流",
        "经营活动现金流",
        "筹资活动现金流"
      ],
      en: [
        "Cash flow from investing activities",
        "Cash flow from operating activities",
        "Cash flow from financing activities"
      ]
    },
    correct: 1,
    explanation: {
      zh: "经营活动现金流最能反映公司的核心经营能力，因为它代表公司通过主营业务产生的现金流入和流出。健康的公司应该能够通过经营活动产生正现金流。投资活动现金流反映资本支出和投资，筹资活动现金流反映借款、还款、分红等，这些都不能直接反映核心经营能力。",
      en: "Cash flow from operating activities best reflects the company's core operational capability, as it represents cash inflows and outflows generated through main business operations. Healthy companies should be able to generate positive cash flow from operating activities. Cash flow from investing activities reflects capital expenditures and investments, while cash flow from financing activities reflects borrowing, repayment, dividends, etc. These do not directly reflect core operational capability."
    }
  },
  {
    id: 52,
    topic: "financial-statements",
    question: {
      zh: "一家公司的资产负债表显示'长期负债'大幅增加，但'固定资产'也大幅增加。这可能说明什么？",
      en: "A company's balance sheet shows a significant increase in 'Long-term Debt' and also a significant increase in 'Fixed Assets'. What might this indicate?"
    },
    options: {
      zh: [
        "公司财务状况恶化",
        "公司可能在进行资本扩张，通过长期借款投资于固定资产（如厂房、设备）",
        "负债增加总是坏事"
      ],
      en: [
        "The company's financial condition is deteriorating",
        "The company may be undergoing capital expansion, investing in fixed assets (such as factories, equipment) through long-term borrowing",
        "Increasing debt is always bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "长期负债和固定资产同时大幅增加，通常表明公司在进行资本扩张，通过长期借款投资于能够产生未来收益的固定资产。这可能是积极的信号（如果投资回报率高于借款成本），但也需要关注：1) 投资回报是否能够覆盖利息成本；2) 现金流能否支撑债务偿还；3) 投资是否合理。",
      en: "A simultaneous significant increase in long-term debt and fixed assets usually indicates the company is undergoing capital expansion, investing in fixed assets that can generate future returns through long-term borrowing. This may be a positive signal (if the return on investment exceeds the borrowing cost), but attention should also be paid to: 1) Whether investment returns can cover interest costs; 2) Whether cash flow can support debt repayment; 3) Whether the investment is reasonable."
    }
  },
  {
    id: 53,
    topic: "financial-statements",
    question: {
      zh: "在利润表中，'其他综合收益'（Other Comprehensive Income）与'净利润'（Net Income）的区别是什么？",
      en: "In the income statement, what is the difference between 'Other Comprehensive Income' and 'Net Income'?"
    },
    options: {
      zh: [
        "没有区别，都是利润",
        "净利润反映已实现的损益，其他综合收益反映未实现的损益（如可供出售金融资产公允价值变动）",
        "其他综合收益更重要"
      ],
      en: [
        "No difference, both are profits",
        "Net income reflects realized gains and losses, while other comprehensive income reflects unrealized gains and losses (such as fair value changes of available-for-sale financial assets)",
        "Other comprehensive income is more important"
      ]
    },
    correct: 1,
    explanation: {
      zh: "净利润反映已实现的、已确认的损益，直接影响股东权益。其他综合收益反映未实现的损益，如可供出售金融资产的公允价值变动、外币折算差额等，这些项目虽然影响股东权益，但不计入当期净利润。其他综合收益在特定条件下可能转为净利润（如资产出售时）。",
      en: "Net income reflects realized and recognized gains and losses, directly affecting shareholders' equity. Other comprehensive income reflects unrealized gains and losses, such as fair value changes of available-for-sale financial assets, foreign currency translation differences, etc. Although these items affect shareholders' equity, they are not included in current period net income. Other comprehensive income may be converted to net income under certain conditions (such as when assets are sold)."
    }
  },
  {
    id: 54,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'预付款项'（Prepaid Expenses）大幅增加，这可能意味着什么？",
      en: "If a company's 'Prepaid Expenses' increase significantly, what might this indicate?"
    },
    options: {
      zh: [
        "公司收入增加",
        "公司可能提前支付了未来的费用（如租金、保险费），或者业务扩张导致预付款增加",
        "预付款项是收入"
      ],
      en: [
        "The company's revenue has increased",
        "The company may have prepaid future expenses (such as rent, insurance), or business expansion has led to increased prepayments",
        "Prepaid expenses are revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "预付款项增加通常意味着公司提前支付了未来的费用，这会导致当期现金流减少，但未来期间的费用会减少。也可能是业务扩张导致需要提前支付更多费用（如新办公室租金、新设备保险等）。预付款项是资产，不是收入，它会在未来期间转为费用。",
      en: "An increase in prepaid expenses usually means the company has prepaid future expenses, which reduces current period cash flow but will reduce future period expenses. It may also be due to business expansion requiring prepayment of more expenses (such as new office rent, new equipment insurance, etc.). Prepaid expenses are assets, not revenue, and will be converted to expenses in future periods."
    }
  },
  {
    id: 55,
    topic: "financial-statements",
    question: {
      zh: "在分析公司的偿债能力时，以下哪个指标组合最全面？",
      en: "When analyzing a company's solvency, which combination of metrics is most comprehensive?"
    },
    options: {
      zh: [
        "只看流动比率",
        "综合分析流动比率、速动比率、债务股权比、利息覆盖倍数，以及现金流与债务的比率",
        "只看总资产"
      ],
      en: [
        "Only look at current ratio",
        "Comprehensively analyze current ratio, quick ratio, debt-to-equity ratio, interest coverage ratio, and cash flow to debt ratio",
        "Only look at total assets"
      ]
    },
    correct: 1,
    explanation: {
      zh: "全面评估偿债能力需要多维度分析：流动比率和速动比率反映短期偿债能力；债务股权比反映财务杠杆和长期偿债压力；利息覆盖倍数反映支付利息的能力；现金流与债务的比率反映用现金流偿还债务的能力。单一指标可能产生误导，需要综合判断。",
      en: "Comprehensive assessment of solvency requires multi-dimensional analysis: current ratio and quick ratio reflect short-term solvency; debt-to-equity ratio reflects financial leverage and long-term debt pressure; interest coverage ratio reflects the ability to pay interest; cash flow to debt ratio reflects the ability to repay debt with cash flow. A single metric may be misleading and requires comprehensive judgment."
    }
  },
  {
    id: 56,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'应付账款周转天数'（Days Payable Outstanding, DPO）从30天增加到60天，这可能意味着什么？",
      en: "If a company's Days Payable Outstanding (DPO) increases from 30 days to 60 days, what might this indicate?"
    },
    options: {
      zh: [
        "公司付款能力增强",
        "公司可能延长了付款周期以改善现金流，或者与供应商的议价能力增强",
        "DPO增加总是坏事"
      ],
      en: [
        "The company's payment ability has improved",
        "The company may have extended payment terms to improve cash flow, or its bargaining power with suppliers has increased",
        "Increasing DPO is always bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "DPO增加意味着公司付款给供应商的时间变长，这可能表明：1) 公司为了改善现金流延长了付款周期；2) 公司与供应商的议价能力增强；3) 公司可能面临现金流压力。适度的DPO增加可以改善现金流，但过度延长可能损害供应商关系。",
      en: "An increase in DPO means it takes longer for the company to pay suppliers, possibly indicating: 1) The company has extended payment terms to improve cash flow; 2) The company's bargaining power with suppliers has increased; 3) The company may be facing cash flow pressure. Moderate DPO increase can improve cash flow, but excessive extension may damage supplier relationships."
    }
  },
  {
    id: 57,
    topic: "financial-statements",
    question: {
      zh: "在现金流量表中，'资本支出'（Capital Expenditures, CapEx）通常出现在哪个部分？",
      en: "In the cash flow statement, in which section does 'Capital Expenditures (CapEx)' typically appear?"
    },
    options: {
      zh: [
        "经营活动现金流",
        "投资活动现金流",
        "筹资活动现金流"
      ],
      en: [
        "Cash flow from operating activities",
        "Cash flow from investing activities",
        "Cash flow from financing activities"
      ]
    },
    correct: 1,
    explanation: {
      zh: "资本支出（CapEx）出现在投资活动现金流中，因为它是公司为了获得长期资产（如厂房、设备、无形资产）而进行的投资。资本支出是负数（现金流出），反映公司对未来的投资。自由现金流 = 经营活动现金流 - 资本支出，是评估公司价值的重要指标。",
      en: "Capital expenditures (CapEx) appear in cash flow from investing activities, as they represent investments made by the company to acquire long-term assets (such as factories, equipment, intangible assets). Capital expenditures are negative (cash outflow), reflecting the company's investment in the future. Free cash flow = Operating cash flow - Capital expenditures, which is an important metric for evaluating company value."
    }
  },
  {
    id: 58,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'库存商品'（Finished Goods Inventory）大幅增加，但'原材料库存'（Raw Materials Inventory）减少。这可能说明什么？",
      en: "A company's 'Finished Goods Inventory' increases significantly, but 'Raw Materials Inventory' decreases. What might this indicate?"
    },
    options: {
      zh: [
        "公司生产能力强",
        "公司可能面临销售放缓，产品积压，同时减少原材料采购以控制库存",
        "库存增加总是好事"
      ],
      en: [
        "The company has strong production capability",
        "The company may be facing slowing sales, product buildup, while reducing raw material purchases to control inventory",
        "Increasing inventory is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "成品库存增加但原材料库存减少，可能表明：1) 销售放缓，产品积压；2) 公司减少原材料采购以应对销售下降；3) 生产与销售不匹配。这需要关注销售趋势、库存周转率，以及是否存在产品过时或市场需求下降的风险。",
      en: "An increase in finished goods inventory but a decrease in raw materials inventory may indicate: 1) Slowing sales, product buildup; 2) The company is reducing raw material purchases in response to declining sales; 3) Mismatch between production and sales. This requires attention to sales trends, inventory turnover ratio, and whether there are risks of product obsolescence or declining market demand."
    }
  },
  {
    id: 59,
    topic: "financial-statements",
    question: {
      zh: "在分析公司的盈利质量时，'每股收益'（EPS）和'稀释每股收益'（Diluted EPS）的区别是什么？",
      en: "When analyzing a company's earnings quality, what is the difference between 'Earnings Per Share (EPS)' and 'Diluted Earnings Per Share (Diluted EPS)'?"
    },
    options: {
      zh: [
        "没有区别",
        "EPS基于当前流通股数，稀释EPS考虑了可能转换为股票的证券（如期权、可转债）对股本的稀释效应",
        "稀释EPS总是更高"
      ],
      en: [
        "No difference",
        "EPS is based on current outstanding shares, while diluted EPS considers the dilutive effect on share capital of securities that may be converted to shares (such as options, convertible bonds)",
        "Diluted EPS is always higher"
      ]
    },
    correct: 1,
    explanation: {
      zh: "EPS = 净利润 / 当前流通股数。稀释EPS考虑了可能转换为股票的证券（如股票期权、可转换债券、认股权证）对股本的稀释效应，使用假设转换后的总股数计算。稀释EPS通常低于或等于EPS，更能反映潜在的每股收益，是更保守的指标。",
      en: "EPS = Net Income / Current Outstanding Shares. Diluted EPS considers the dilutive effect on share capital of securities that may be converted to shares (such as stock options, convertible bonds, warrants), calculated using the total shares assuming conversion. Diluted EPS is usually lower than or equal to EPS, better reflecting potential earnings per share and is a more conservative metric."
    }
  },
  {
    id: 60,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'累计折旧'（Accumulated Depreciation）持续增加，这可能意味着什么？",
      en: "If a company's 'Accumulated Depreciation' continues to increase, what might this indicate?"
    },
    options: {
      zh: [
        "公司资产价值下降",
        "公司可能持续进行资本支出，新增固定资产，导致累计折旧增加",
        "累计折旧增加是坏事"
      ],
      en: [
        "The company's asset value is declining",
        "The company may be continuously making capital expenditures, adding new fixed assets, leading to increased accumulated depreciation",
        "Increasing accumulated depreciation is bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "累计折旧增加通常意味着公司持续进行资本支出，新增固定资产，这些资产按会计政策计提折旧，导致累计折旧增加。这是正常的会计处理，反映资产的使用和消耗。累计折旧是固定资产的备抵账户，固定资产净值 = 原值 - 累计折旧。",
      en: "An increase in accumulated depreciation usually means the company is continuously making capital expenditures, adding new fixed assets, and these assets are depreciated according to accounting policies, leading to increased accumulated depreciation. This is normal accounting treatment, reflecting asset usage and consumption. Accumulated depreciation is a contra account to fixed assets, and net fixed assets = original value - accumulated depreciation."
    }
  },
  {
    id: 61,
    topic: "financial-statements",
    question: {
      zh: "在利润表中，'营业外收入'（Non-operating Income）大幅增加，这可能意味着什么？",
      en: "If a company's 'Non-operating Income' increases significantly in the income statement, what might this indicate?"
    },
    options: {
      zh: [
        "公司主营业务盈利能力增强",
        "公司可能通过非经营性活动（如资产出售、投资收益）增加利润，但这些收入通常不可持续",
        "营业外收入比主营业务收入更重要"
      ],
      en: [
        "The company's main business profitability has improved",
        "The company may be increasing profits through non-operating activities (such as asset sales, investment gains), but these revenues are usually unsustainable",
        "Non-operating income is more important than main business revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "营业外收入大幅增加可能表明公司通过非经营性活动（如出售资产、投资收益、政府补贴）增加利润。虽然这能提升当期利润，但这些收入通常不可持续，不能反映公司的核心经营能力。分析时应该关注扣除非经常性损益后的净利润，更能反映公司的真实盈利能力。",
      en: "A significant increase in non-operating income may indicate the company is increasing profits through non-operating activities (such as asset sales, investment gains, government subsidies). Although this can boost current period profits, these revenues are usually unsustainable and do not reflect the company's core operational capability. Analysis should focus on net income excluding non-recurring items, which better reflects the company's true profitability."
    }
  },
  {
    id: 62,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'短期借款'大幅增加，但'长期借款'减少。这可能说明什么？",
      en: "A company's 'Short-term Debt' increases significantly, but 'Long-term Debt' decreases. What might this indicate?"
    },
    options: {
      zh: [
        "公司财务状况改善",
        "公司可能将长期债务转为短期债务，或者用短期借款偿还长期债务，这可能增加短期偿债压力",
        "短期借款比长期借款更好"
      ],
      en: [
        "The company's financial condition has improved",
        "The company may have converted long-term debt to short-term debt, or used short-term borrowing to repay long-term debt, which may increase short-term debt repayment pressure",
        "Short-term debt is better than long-term debt"
      ]
    },
    correct: 1,
    explanation: {
      zh: "短期借款增加但长期借款减少，可能表明：1) 公司将长期债务转为短期债务；2) 用短期借款偿还长期债务；3) 短期借款成本可能更低。但这会增加短期偿债压力，如果公司现金流不足，可能面临流动性风险。需要关注公司的现金流状况和短期偿债能力。",
      en: "An increase in short-term debt but a decrease in long-term debt may indicate: 1) The company has converted long-term debt to short-term debt; 2) Used short-term borrowing to repay long-term debt; 3) Short-term borrowing costs may be lower. However, this increases short-term debt repayment pressure, and if the company has insufficient cash flow, it may face liquidity risk. Attention should be paid to the company's cash flow condition and short-term solvency."
    }
  },
  {
    id: 63,
    topic: "financial-statements",
    question: {
      zh: "在分析公司的资产质量时，以下哪个指标最能反映资产的实际价值？",
      en: "When analyzing a company's asset quality, which metric best reflects the actual value of assets?"
    },
    options: {
      zh: [
        "总资产",
        "净资产（股东权益）、以及资产减值准备、坏账准备等，反映资产的实际可回收价值",
        "固定资产原值"
      ],
      en: [
        "Total assets",
        "Net assets (shareholders' equity), as well as asset impairment provisions, bad debt provisions, etc., reflecting the actual recoverable value of assets",
        "Original value of fixed assets"
      ]
    },
    correct: 1,
    explanation: {
      zh: "评估资产质量需要关注资产的实际可回收价值，而不仅仅是账面价值。净资产（股东权益）反映了资产减去负债后的净值。资产减值准备、坏账准备等反映了资产可能存在的损失。需要关注：1) 资产是否存在减值风险；2) 应收账款的质量；3) 存货是否过时；4) 商誉是否合理。",
      en: "Assessing asset quality requires attention to the actual recoverable value of assets, not just book value. Net assets (shareholders' equity) reflect the net value after subtracting liabilities from assets. Asset impairment provisions, bad debt provisions, etc. reflect potential losses in assets. Need to pay attention to: 1) Whether assets have impairment risks; 2) Quality of accounts receivable; 3) Whether inventory is obsolete; 4) Whether goodwill is reasonable."
    }
  },
  {
    id: 64,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'研发费用资本化'（R&D Capitalization）比例很高，这可能意味着什么？",
      en: "If a company has a high proportion of 'R&D Capitalization', what might this indicate?"
    },
    options: {
      zh: [
        "公司研发能力强",
        "公司可能通过将研发费用资本化来提升当期利润，但这可能高估资产、低估费用，需要关注资本化的合理性",
        "研发费用资本化总是好事"
      ],
      en: [
        "The company has strong R&D capability",
        "The company may be boosting current period profits by capitalizing R&D expenses, but this may overestimate assets and underestimate expenses, requiring attention to the reasonableness of capitalization",
        "R&D capitalization is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "研发费用资本化可以将当期费用转为资产，提升当期利润。但需要关注：1) 资本化是否符合会计准则（通常只有满足特定条件的研发支出才能资本化）；2) 资本化的研发资产是否能够产生未来收益；3) 是否存在过度资本化以美化利润的情况。过度资本化可能高估资产、低估费用，影响财务数据的真实性。",
      en: "R&D capitalization can convert current period expenses into assets, boosting current period profits. However, attention should be paid to: 1) Whether capitalization complies with accounting standards (usually only R&D expenditures meeting specific conditions can be capitalized); 2) Whether capitalized R&D assets can generate future returns; 3) Whether there is excessive capitalization to beautify profits. Excessive capitalization may overestimate assets and underestimate expenses, affecting the authenticity of financial data."
    }
  },
  {
    id: 65,
    topic: "financial-statements",
    question: {
      zh: "在现金流量表中，'折旧和摊销'（Depreciation & Amortization）为什么会被加回到经营活动现金流中？",
      en: "In the cash flow statement, why is 'Depreciation & Amortization' added back to operating cash flow?"
    },
    options: {
      zh: [
        "因为折旧是收入",
        "因为折旧和摊销是非现金费用，在计算净利润时被扣除了，但实际没有现金流出，所以需要加回",
        "因为折旧增加了现金流"
      ],
      en: [
        "Because depreciation is revenue",
        "Because depreciation and amortization are non-cash expenses that were deducted when calculating net income, but there was no actual cash outflow, so they need to be added back",
        "Because depreciation increases cash flow"
      ]
    },
    correct: 1,
    explanation: {
      zh: "折旧和摊销是非现金费用，在利润表中减少了净利润，但实际上没有现金流出。在计算经营活动现金流时，需要将净利润调整为现金基础，因此需要将非现金费用（如折旧、摊销）加回。这样经营活动现金流 = 净利润 + 非现金费用 - 非现金收入 + 营运资金变化。",
      en: "Depreciation and amortization are non-cash expenses that reduce net income in the income statement, but there is no actual cash outflow. When calculating operating cash flow, net income needs to be adjusted to a cash basis, so non-cash expenses (such as depreciation, amortization) need to be added back. Thus, operating cash flow = net income + non-cash expenses - non-cash income + working capital changes."
    }
  },
  {
    id: 66,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'少数股东权益'（Minority Interest）大幅增加，这可能意味着什么？",
      en: "If a company's 'Minority Interest' increases significantly, what might this indicate?"
    },
    options: {
      zh: [
        "公司控制权下降",
        "公司可能进行了更多非全资子公司的收购或投资，导致少数股东权益增加",
        "少数股东权益增加总是坏事"
      ],
      en: [
        "The company's control has declined",
        "The company may have conducted more acquisitions or investments in non-wholly-owned subsidiaries, leading to increased minority interest",
        "Increasing minority interest is always bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "少数股东权益增加通常意味着公司进行了更多非全资子公司的收购或投资，这些子公司的部分股权由其他股东持有。在合并报表中，子公司的全部资产和负债都纳入合并范围，但归属于少数股东的部分计入少数股东权益。需要关注这些子公司的盈利能力和对公司整体业绩的贡献。",
      en: "An increase in minority interest usually means the company has conducted more acquisitions or investments in non-wholly-owned subsidiaries, where part of these subsidiaries' equity is held by other shareholders. In consolidated financial statements, all assets and liabilities of subsidiaries are included in the consolidation scope, but the portion attributable to minority shareholders is recorded as minority interest. Attention should be paid to the profitability of these subsidiaries and their contribution to the company's overall performance."
    }
  },
  {
    id: 67,
    topic: "financial-statements",
    question: {
      zh: "在分析公司的财务健康状况时，'营运资金'（Working Capital）的变化趋势能说明什么？",
      en: "When analyzing a company's financial health, what can the trend of 'Working Capital' changes indicate?"
    },
    options: {
      zh: [
        "营运资金变化没有意义",
        "营运资金增加可能表明公司业务扩张、库存增加、应收账款增加，但也可能意味着资金占用增加、效率下降",
        "营运资金越多越好"
      ],
      en: [
        "Working capital changes are meaningless",
        "An increase in working capital may indicate business expansion, inventory increase, accounts receivable increase, but may also mean increased capital tied up and declining efficiency",
        "More working capital is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "营运资金 = 流动资产 - 流动负债。营运资金增加可能表明：1) 业务扩张，需要更多营运资金支持；2) 库存或应收账款增加，资金占用增加；3) 营运效率可能下降。需要结合业务增长、库存周转率、应收账款周转率等指标分析，判断营运资金变化是否合理。",
      en: "Working Capital = Current Assets - Current Liabilities. An increase in working capital may indicate: 1) Business expansion requiring more working capital support; 2) Inventory or accounts receivable increase, increased capital tied up; 3) Operational efficiency may be declining. Need to analyze in conjunction with business growth, inventory turnover ratio, accounts receivable turnover ratio, etc., to determine whether working capital changes are reasonable."
    }
  },
  {
    id: 68,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'资产减值损失'（Asset Impairment Loss）大幅增加，这可能意味着什么？",
      en: "If a company's 'Asset Impairment Loss' increases significantly, what might this indicate?"
    },
    options: {
      zh: [
        "公司资产增加",
        "公司可能面临资产价值下降（如商誉减值、存货减值、固定资产减值），反映资产质量下降或业务表现不佳",
        "资产减值损失是好事"
      ],
      en: [
        "The company's assets have increased",
        "The company may be facing asset value decline (such as goodwill impairment, inventory impairment, fixed asset impairment), reflecting declining asset quality or poor business performance",
        "Asset impairment loss is a good thing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "资产减值损失大幅增加通常意味着公司资产的实际价值低于账面价值，可能的原因包括：1) 商誉减值（被收购业务表现不佳）；2) 存货减值（产品过时、价格下跌）；3) 固定资产减值（资产使用价值下降）。这反映资产质量下降或业务表现不佳，需要关注减值的原因和持续性。",
      en: "A significant increase in asset impairment loss usually means the actual value of company assets is lower than book value, possible reasons include: 1) Goodwill impairment (acquired business performing poorly); 2) Inventory impairment (products obsolete, price decline); 3) Fixed asset impairment (asset usage value decline). This reflects declining asset quality or poor business performance, and attention should be paid to the reasons and sustainability of impairment."
    }
  },
  {
    id: 69,
    topic: "financial-statements",
    question: {
      zh: "在利润表中，'营业收入'和'营业成本'的差额是什么？",
      en: "In the income statement, what is the difference between 'Operating Revenue' and 'Operating Cost'?"
    },
    options: {
      zh: [
        "净利润",
        "毛利润（Gross Profit），反映公司产品的定价能力和成本控制能力",
        "营业利润"
      ],
      en: [
        "Net income",
        "Gross Profit, reflecting the company's product pricing power and cost control capability",
        "Operating profit"
      ]
    },
    correct: 1,
    explanation: {
      zh: "营业收入 - 营业成本 = 毛利润。毛利润反映公司产品的定价能力和成本控制能力。毛利率 = 毛利润 / 营业收入，是评估公司盈利能力的重要指标。高毛利率通常表明公司有较强的定价能力或成本优势。毛利润还需要扣除营业费用、管理费用、财务费用等才能得到营业利润和净利润。",
      en: "Operating Revenue - Operating Cost = Gross Profit. Gross profit reflects the company's product pricing power and cost control capability. Gross margin = Gross Profit / Operating Revenue, which is an important metric for assessing company profitability. High gross margin usually indicates the company has strong pricing power or cost advantages. Gross profit still needs to deduct operating expenses, administrative expenses, financial expenses, etc. to get operating profit and net income."
    }
  },
  {
    id: 70,
    topic: "financial-statements",
    question: {
      zh: "一家公司的'递延所得税资产'（Deferred Tax Assets）大幅增加，这可能意味着什么？",
      en: "If a company's 'Deferred Tax Assets' increases significantly, what might this indicate?"
    },
    options: {
      zh: [
        "公司需要缴纳更多税",
        "公司可能出现了可抵扣暂时性差异（如亏损、资产减值），未来可以减少所得税支出",
        "递延所得税资产是负债"
      ],
      en: [
        "The company needs to pay more taxes",
        "The company may have deductible temporary differences (such as losses, asset impairment), which can reduce future income tax expenses",
        "Deferred tax assets are liabilities"
      ]
    },
    correct: 1,
    explanation: {
      zh: "递延所得税资产增加通常意味着公司出现了可抵扣暂时性差异，如：1) 税务亏损，未来可以抵扣盈利；2) 资产减值，未来可以抵扣；3) 费用确认时间差异。这些差异在未来可以减少所得税支出。递延所得税资产是资产，代表未来可以节省的税款。",
      en: "An increase in deferred tax assets usually means the company has deductible temporary differences, such as: 1) Tax losses that can offset future profits; 2) Asset impairment that can be deducted in the future; 3) Timing differences in expense recognition. These differences can reduce future income tax expenses. Deferred tax assets are assets, representing future tax savings."
    }
  },
  // Valuation - Additional questions to reach 20
  {
    id: 71,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型估值时，'终值'（Terminal Value）的计算方法主要有哪两种？",
      en: "When using a DCF model for valuation, what are the two main methods for calculating 'Terminal Value'?"
    },
    options: {
      zh: [
        "只有一种方法",
        "永续增长模型（Gordon Growth Model）和退出倍数法（Exit Multiple Method）",
        "只有市盈率法"
      ],
      en: [
        "There is only one method",
        "Perpetuity Growth Model (Gordon Growth Model) and Exit Multiple Method",
        "Only P/E ratio method"
      ]
    },
    correct: 1,
    explanation: {
      zh: "终值计算主要有两种方法：1) 永续增长模型：假设公司以固定增长率永续增长，终值 = FCF(n+1) / (WACC - g)；2) 退出倍数法：假设公司在预测期末以某个倍数（如EV/EBITDA）出售，终值 = 预测期最后一年的EBITDA × 退出倍数。两种方法各有优缺点，通常需要同时使用并比较。",
      en: "There are two main methods for calculating terminal value: 1) Perpetuity Growth Model: Assumes the company grows at a constant rate in perpetuity, Terminal Value = FCF(n+1) / (WACC - g); 2) Exit Multiple Method: Assumes the company is sold at a certain multiple (such as EV/EBITDA) at the end of the forecast period, Terminal Value = EBITDA in the last year of forecast period × Exit Multiple. Both methods have advantages and disadvantages, and usually need to be used together and compared."
    }
  },
  {
    id: 72,
    topic: "valuation",
    question: {
      zh: "在使用P/E比率估值时，以下哪个因素最不应该被忽略？",
      en: "When using P/E ratio for valuation, which factor should not be ignored?"
    },
    options: {
      zh: [
        "当前股价",
        "公司的增长率、盈利质量、行业特点、以及P/E比率的历史水平",
        "只看P/E比率本身"
      ],
      en: [
        "Current stock price",
        "The company's growth rate, earnings quality, industry characteristics, and historical levels of P/E ratio",
        "Only look at the P/E ratio itself"
      ]
    },
    correct: 1,
    explanation: {
      zh: "使用P/E比率估值时，必须考虑：1) 增长率：高增长公司可以有更高的P/E；2) 盈利质量：盈利是否可持续、是否有现金支撑；3) 行业特点：不同行业有不同的合理P/E水平；4) 历史水平：当前P/E与历史平均水平的比较。孤立地看P/E比率容易产生误导，需要结合这些因素综合判断。",
      en: "When using P/E ratio for valuation, must consider: 1) Growth rate: High-growth companies can have higher P/E; 2) Earnings quality: Whether earnings are sustainable and supported by cash; 3) Industry characteristics: Different industries have different reasonable P/E levels; 4) Historical levels: Comparison of current P/E with historical average. Looking at P/E ratio in isolation can be misleading and requires comprehensive judgment combining these factors."
    }
  },
  {
    id: 73,
    topic: "valuation",
    question: {
      zh: "一家公司的EV/EBITDA比率为8，而同行业平均为12。这意味着什么？",
      en: "A company has an EV/EBITDA ratio of 8, while the industry average is 12. What does this mean?"
    },
    options: {
      zh: [
        "该公司被高估了",
        "相对于行业平均，该公司可能被低估了，或者其EBITDA质量、增长前景不如行业平均",
        "EV/EBITDA比率越低越差"
      ],
      en: [
        "The company is overvalued",
        "Relative to the industry average, the company may be undervalued, or its EBITDA quality and growth prospects are inferior to the industry average",
        "Lower EV/EBITDA ratio is worse"
      ]
    },
    correct: 1,
    explanation: {
      zh: "EV/EBITDA比率低于行业平均，可能表明：1) 公司被低估，存在投资机会；2) 公司的EBITDA质量较差（如资本支出需求高、盈利质量差）；3) 公司增长前景不如行业平均；4) 公司面临特定风险。需要结合公司的基本面、增长前景、盈利质量等因素综合分析，不能仅凭比率高低判断。",
      en: "An EV/EBITDA ratio lower than the industry average may indicate: 1) The company is undervalued, presenting investment opportunities; 2) The company's EBITDA quality is poor (such as high capital expenditure requirements, poor earnings quality); 3) The company's growth prospects are inferior to the industry average; 4) The company faces specific risks. Need to comprehensively analyze in conjunction with the company's fundamentals, growth prospects, earnings quality, and other factors, cannot judge solely based on the ratio level."
    }
  },
  {
    id: 74,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，'加权平均资本成本'（WACC）的作用是什么？",
      en: "When using a DCF model, what is the role of 'Weighted Average Cost of Capital (WACC)'?"
    },
    options: {
      zh: [
        "WACC没有作用",
        "WACC是折现率，用于将未来现金流折现到现值，反映投资的风险和机会成本",
        "WACC只用于计算债务成本"
      ],
      en: [
        "WACC has no role",
        "WACC is the discount rate used to discount future cash flows to present value, reflecting the risk and opportunity cost of the investment",
        "WACC is only used to calculate debt cost"
      ]
    },
    correct: 1,
    explanation: {
      zh: "WACC是加权平均资本成本，代表公司所有资本来源（债务和股权）的平均成本。在DCF模型中，WACC作为折现率，用于将未来现金流折现到现值。WACC越高，未来现金流的现值越低，估值越低。WACC反映了投资的风险：风险越高，WACC越高。WACC = (E/V × Re) + (D/V × Rd × (1-Tc))，其中E是股权价值，D是债务价值，V是总价值。",
      en: "WACC is the weighted average cost of capital, representing the average cost of all capital sources (debt and equity) of the company. In the DCF model, WACC is used as the discount rate to discount future cash flows to present value. The higher the WACC, the lower the present value of future cash flows, and the lower the valuation. WACC reflects investment risk: higher risk means higher WACC. WACC = (E/V × Re) + (D/V × Rd × (1-Tc)), where E is equity value, D is debt value, and V is total value."
    }
  },
  {
    id: 75,
    topic: "valuation",
    question: {
      zh: "在使用相对估值法时，以下哪个做法是错误的？",
      en: "When using relative valuation methods, which of the following practices is incorrect?"
    },
    options: {
      zh: [
        "与同行业、相似规模的公司进行比较",
        "只比较单一指标，不考虑公司的增长前景、盈利质量、竞争优势等因素",
        "考虑公司的生命周期阶段"
      ],
      en: [
        "Compare with companies in the same industry and similar size",
        "Only compare a single metric without considering the company's growth prospects, earnings quality, competitive advantages, and other factors",
        "Consider the company's life cycle stage"
      ]
    },
    correct: 1,
    explanation: {
      zh: "相对估值法不能只看单一指标，必须综合考虑：1) 公司的增长前景：高增长公司可以有更高的估值倍数；2) 盈利质量：盈利是否可持续；3) 竞争优势：是否有护城河；4) 生命周期阶段：成长型、成熟型、衰退型公司有不同的合理倍数；5) 财务健康状况。单一指标比较容易产生误导。",
      en: "Relative valuation methods cannot rely solely on a single metric, must comprehensively consider: 1) Company's growth prospects: High-growth companies can have higher valuation multiples; 2) Earnings quality: Whether earnings are sustainable; 3) Competitive advantages: Whether there are moats; 4) Life cycle stage: Growth, mature, and declining companies have different reasonable multiples; 5) Financial health. Single metric comparison can be misleading."
    }
  },
  {
    id: 76,
    topic: "valuation",
    question: {
      zh: "在使用P/B比率估值时，以下哪种类型的公司P/B比率可能不太适用？",
      en: "When using P/B ratio for valuation, for which type of company might the P/B ratio be less applicable?"
    },
    options: {
      zh: [
        "所有公司都适用",
        "拥有大量无形资产（如品牌、技术、客户关系）的公司，因为账面价值可能严重低估公司价值",
        "只有制造业公司"
      ],
      en: [
        "Applicable to all companies",
        "Companies with significant intangible assets (such as brands, technology, customer relationships), as book value may severely underestimate company value",
        "Only manufacturing companies"
      ]
    },
    correct: 1,
    explanation: {
      zh: "P/B比率对拥有大量无形资产的公司可能不太适用，因为：1) 无形资产（如品牌价值、专利、技术、客户关系）在财务报表中可能没有被充分反映；2) 账面价值可能严重低估公司的真实价值；3) 这类公司的价值主要来自无形资产，而不是有形资产。P/B比率更适合重资产、有形资产较多的行业（如银行、房地产）。",
      en: "P/B ratio may be less applicable to companies with significant intangible assets because: 1) Intangible assets (such as brand value, patents, technology, customer relationships) may not be fully reflected in financial statements; 2) Book value may severely underestimate the company's true value; 3) The value of such companies mainly comes from intangible assets rather than tangible assets. P/B ratio is more suitable for asset-heavy industries with more tangible assets (such as banks, real estate)."
    }
  },
  {
    id: 77,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，如果提高'永续增长率'（Terminal Growth Rate），估值结果会如何变化？",
      en: "When using a DCF model, if the 'Terminal Growth Rate' is increased, how will the valuation result change?"
    },
    options: {
      zh: [
        "估值会下降",
        "估值会上升，因为假设公司未来以更高速度增长，终值增加",
        "估值不变"
      ],
      en: [
        "Valuation will decrease",
        "Valuation will increase, because assuming the company grows at a higher rate in the future, terminal value increases",
        "Valuation remains unchanged"
      ]
    },
    correct: 1,
    explanation: {
      zh: "永续增长率提高，终值会增加，因为假设公司未来以更高速度永续增长。终值 = FCF(n+1) / (WACC - g)，其中g是永续增长率。g越大，分母越小，终值越大。但永续增长率通常应该接近长期GDP增长率或通胀率（通常2-3%），过高的永续增长率可能不现实。",
      en: "An increase in terminal growth rate will increase terminal value, as it assumes the company will grow at a higher rate in perpetuity. Terminal Value = FCF(n+1) / (WACC - g), where g is the terminal growth rate. The larger g is, the smaller the denominator, and the larger the terminal value. However, terminal growth rate should usually be close to long-term GDP growth rate or inflation rate (usually 2-3%), and excessively high terminal growth rates may be unrealistic."
    }
  },
  {
    id: 78,
    topic: "valuation",
    question: {
      zh: "在使用EV/Sales（企业价值/销售收入）比率估值时，以下哪个因素最重要？",
      en: "When using EV/Sales (Enterprise Value/Sales) ratio for valuation, which factor is most important?"
    },
    options: {
      zh: [
        "只看EV/Sales比率本身",
        "公司的盈利能力（毛利率、净利率）、增长前景，以及何时能够实现盈利",
        "只关注销售收入"
      ],
      en: [
        "Only look at the EV/Sales ratio itself",
        "The company's profitability (gross margin, net margin), growth prospects, and when it can achieve profitability",
        "Only focus on sales revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "EV/Sales比率主要用于尚未盈利或盈利很少的公司（如成长型科技公司）。使用这个比率时，必须关注：1) 盈利能力：毛利率、净利率趋势，能否实现盈利；2) 增长前景：收入增长率是否可持续；3) 何时盈利：需要多长时间才能实现盈利。EV/Sales比率本身没有意义，必须结合这些因素判断。",
      en: "EV/Sales ratio is mainly used for companies that are not yet profitable or have minimal profits (such as growth technology companies). When using this ratio, must pay attention to: 1) Profitability: Gross margin, net margin trends, whether profitability can be achieved; 2) Growth prospects: Whether revenue growth rate is sustainable; 3) When to profit: How long it will take to achieve profitability. The EV/Sales ratio itself is meaningless and must be judged in conjunction with these factors."
    }
  },
  {
    id: 79,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，'敏感性分析'（Sensitivity Analysis）的作用是什么？",
      en: "When using a DCF model, what is the role of 'Sensitivity Analysis'?"
    },
    options: {
      zh: [
        "没有作用",
        "分析关键假设（如增长率、折现率）变化对估值结果的影响，评估估值的可靠性和风险",
        "只用于计算终值"
      ],
      en: [
        "No role",
        "Analyze the impact of changes in key assumptions (such as growth rate, discount rate) on valuation results, assess the reliability and risk of valuation",
        "Only used to calculate terminal value"
      ]
    },
    correct: 1,
    explanation: {
      zh: "敏感性分析是DCF估值中的重要工具，用于：1) 分析关键假设（如增长率、折现率、终值增长率）变化对估值结果的影响；2) 识别对估值影响最大的假设；3) 评估估值的可靠性和风险范围；4) 提供估值的合理区间而非单一数值。这有助于投资者理解估值的不确定性和风险。",
      en: "Sensitivity analysis is an important tool in DCF valuation, used to: 1) Analyze the impact of changes in key assumptions (such as growth rate, discount rate, terminal growth rate) on valuation results; 2) Identify assumptions that have the greatest impact on valuation; 3) Assess the reliability and risk range of valuation; 4) Provide a reasonable range of valuation rather than a single value. This helps investors understand the uncertainty and risk of valuation."
    }
  },
  {
    id: 80,
    topic: "valuation",
    question: {
      zh: "在使用P/E比率估值时，'前瞻性P/E'（Forward P/E）和'历史P/E'（Trailing P/E）的区别是什么？",
      en: "When using P/E ratio for valuation, what is the difference between 'Forward P/E' and 'Trailing P/E'?"
    },
    options: {
      zh: [
        "没有区别",
        "前瞻性P/E使用未来12个月的预期盈利，历史P/E使用过去12个月的实际盈利。前瞻性P/E更能反映未来预期",
        "只有历史P/E有用"
      ],
      en: [
        "No difference",
        "Forward P/E uses expected earnings for the next 12 months, while trailing P/E uses actual earnings for the past 12 months. Forward P/E better reflects future expectations",
        "Only trailing P/E is useful"
      ]
    },
    correct: 1,
    explanation: {
      zh: "前瞻性P/E = 当前股价 / 未来12个月预期盈利，反映市场对公司未来盈利的预期。历史P/E = 当前股价 / 过去12个月实际盈利，反映基于历史业绩的估值。前瞻性P/E更能反映投资价值，因为它基于未来预期，但依赖于盈利预测的准确性。通常两者都需要关注，结合使用。",
      en: "Forward P/E = Current Stock Price / Expected Earnings for Next 12 Months, reflecting market expectations for the company's future earnings. Trailing P/E = Current Stock Price / Actual Earnings for Past 12 Months, reflecting valuation based on historical performance. Forward P/E better reflects investment value as it is based on future expectations, but depends on the accuracy of earnings forecasts. Usually both need to be considered and used together."
    }
  },
  {
    id: 81,
    topic: "valuation",
    question: {
      zh: "在使用相对估值法时，为什么需要选择'可比公司'（Comparable Companies）？",
      en: "When using relative valuation methods, why is it necessary to select 'Comparable Companies'?"
    },
    options: {
      zh: [
        "不需要选择，可以随意比较",
        "可比公司应该具有相似的业务模式、行业、规模、增长前景、盈利能力，这样才能进行有意义的比较",
        "任何公司都可以比较"
      ],
      en: [
        "No need to select, can compare randomly",
        "Comparable companies should have similar business models, industries, size, growth prospects, and profitability, so that meaningful comparisons can be made",
        "Any company can be compared"
      ]
    },
    correct: 1,
    explanation: {
      zh: "选择可比公司是相对估值法的关键。可比公司应该具有：1) 相似的业务模式；2) 同一行业或相关行业；3) 相似的规模；4) 相似的增长前景；5) 相似的盈利能力。只有选择真正可比的公司，估值倍数比较才有意义。选择不当的可比公司会导致估值错误。",
      en: "Selecting comparable companies is key to relative valuation methods. Comparable companies should have: 1) Similar business models; 2) Same industry or related industries; 3) Similar size; 4) Similar growth prospects; 5) Similar profitability. Only by selecting truly comparable companies can valuation multiple comparisons be meaningful. Selecting inappropriate comparable companies will lead to valuation errors."
    }
  },
  {
    id: 82,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，'自由现金流'（Free Cash Flow）应该如何计算？",
      en: "When using a DCF model, how should 'Free Cash Flow' be calculated?"
    },
    options: {
      zh: [
        "自由现金流 = 净利润",
        "自由现金流 = 经营活动现金流 - 资本支出（CapEx）",
        "自由现金流 = 营业收入"
      ],
      en: [
        "Free cash flow = Net income",
        "Free cash flow = Operating cash flow - Capital expenditures (CapEx)",
        "Free cash flow = Operating revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "自由现金流（FCF）= 经营活动现金流 - 资本支出（CapEx）。自由现金流代表公司可以自由支配的现金，用于偿还债务、支付股息、回购股票或进行新投资。这是DCF模型的核心输入，因为DCF模型估值的是公司未来自由现金流的现值。净利润不是现金流，不能直接用于DCF模型。",
      en: "Free Cash Flow (FCF) = Operating Cash Flow - Capital Expenditures (CapEx). Free cash flow represents cash that the company can freely use to repay debt, pay dividends, repurchase shares, or make new investments. This is the core input of the DCF model, as the DCF model values the present value of the company's future free cash flows. Net income is not cash flow and cannot be directly used in the DCF model."
    }
  },
  {
    id: 83,
    topic: "valuation",
    question: {
      zh: "在使用P/E比率估值时，如果一家公司的P/E比率远高于行业平均，以下哪个解释最合理？",
      en: "When using P/E ratio for valuation, if a company's P/E ratio is much higher than the industry average, which explanation is most reasonable?"
    },
    options: {
      zh: [
        "公司一定被高估了",
        "公司可能具有更高的增长潜力、更强的竞争优势、或更好的盈利质量，但也可能确实被高估",
        "P/E比率高总是好事"
      ],
      en: [
        "The company must be overvalued",
        "The company may have higher growth potential, stronger competitive advantages, or better earnings quality, but may also be overvalued",
        "High P/E ratio is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "P/E比率远高于行业平均可能表明：1) 公司有更高的增长潜力，市场预期未来盈利大幅增长；2) 公司有更强的竞争优势（护城河），能够维持高盈利；3) 公司盈利质量更好；4) 公司确实被高估。需要结合公司的基本面、增长前景、盈利质量等因素综合分析，不能仅凭P/E比率高低判断。",
      en: "A P/E ratio much higher than the industry average may indicate: 1) The company has higher growth potential, and the market expects significant future earnings growth; 2) The company has stronger competitive advantages (moats) and can maintain high profitability; 3) The company has better earnings quality; 4) The company is indeed overvalued. Need to comprehensively analyze in conjunction with the company's fundamentals, growth prospects, earnings quality, and other factors, cannot judge solely based on P/E ratio level."
    }
  },
  {
    id: 84,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，'预测期'（Forecast Period）通常应该设置为多长？",
      en: "When using a DCF model, how long should the 'Forecast Period' typically be set?"
    },
    options: {
      zh: [
        "1年",
        "通常5-10年，取决于公司的业务特点和可预测性，需要能够合理预测公司的发展阶段",
        "20年"
      ],
      en: [
        "1 year",
        "Usually 5-10 years, depending on the company's business characteristics and predictability, need to be able to reasonably predict the company's development stage",
        "20 years"
      ]
    },
    correct: 1,
    explanation: {
      zh: "预测期通常设置为5-10年，原因包括：1) 这个时间段内可以对公司的发展进行相对合理的预测；2) 能够覆盖公司的主要发展阶段（如快速增长期、成熟期）；3) 超过10年的预测通常不可靠。预测期的选择取决于公司的业务特点、行业稳定性、可预测性等因素。预测期结束后，使用终值来代表后续所有现金流。",
      en: "The forecast period is usually set at 5-10 years, reasons include: 1) Within this time frame, relatively reasonable predictions can be made about the company's development; 2) Can cover the company's main development stages (such as rapid growth period, maturity period); 3) Forecasts beyond 10 years are usually unreliable. The choice of forecast period depends on the company's business characteristics, industry stability, predictability, and other factors. After the forecast period ends, terminal value is used to represent all subsequent cash flows."
    }
  },
  {
    id: 85,
    topic: "valuation",
    question: {
      zh: "在使用EV/EBITDA比率估值时，为什么EBITDA比净利润更适合？",
      en: "When using EV/EBITDA ratio for valuation, why is EBITDA more suitable than net income?"
    },
    options: {
      zh: [
        "没有区别",
        "EBITDA排除了资本结构、税收、折旧摊销的影响，更能反映公司的核心经营盈利能力，便于不同公司之间的比较",
        "EBITDA总是更高"
      ],
      en: [
        "No difference",
        "EBITDA excludes the impact of capital structure, taxes, and depreciation/amortization, better reflecting the company's core operational profitability and facilitating comparisons between different companies",
        "EBITDA is always higher"
      ]
    },
    correct: 1,
    explanation: {
      zh: "EBITDA（息税折旧摊销前利润）排除了：1) 资本结构的影响（利息费用）；2) 税收的影响；3) 折旧和摊销（非现金费用，受会计政策影响）。这使得EBITDA更能反映公司的核心经营盈利能力，不受资本结构、税收政策、会计政策的影响，便于不同公司、不同行业之间的比较。但需要注意，EBITDA忽略了资本支出需求。",
      en: "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) excludes: 1) The impact of capital structure (interest expenses); 2) The impact of taxes; 3) Depreciation and amortization (non-cash expenses, affected by accounting policies). This makes EBITDA better reflect the company's core operational profitability, unaffected by capital structure, tax policies, or accounting policies, facilitating comparisons between different companies and industries. However, note that EBITDA ignores capital expenditure requirements."
    }
  },
  {
    id: 86,
    topic: "valuation",
    question: {
      zh: "在使用相对估值法时，'中位数'（Median）和'平均值'（Mean）哪个更适合作为参考？",
      en: "When using relative valuation methods, which is more suitable as a reference: 'Median' or 'Mean'?"
    },
    options: {
      zh: [
        "没有区别",
        "中位数通常更适合，因为它不受极端值影响，更能反映可比公司的典型估值水平",
        "平均值总是更好"
      ],
      en: [
        "No difference",
        "Median is usually more suitable because it is not affected by extreme values and better reflects the typical valuation level of comparable companies",
        "Mean is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "在使用相对估值法时，中位数通常比平均值更适合作为参考，因为：1) 中位数不受极端值影响，更能反映可比公司的典型估值水平；2) 如果可比公司中有个别公司估值异常高或低，平均值会被扭曲，而中位数不受影响；3) 中位数更能代表'中间水平'。但通常应该同时关注中位数、平均值、以及估值范围，综合判断。",
      en: "When using relative valuation methods, median is usually more suitable than mean as a reference because: 1) Median is not affected by extreme values and better reflects the typical valuation level of comparable companies; 2) If there are individual companies with abnormally high or low valuations among comparable companies, the mean will be distorted, while the median is unaffected; 3) Median better represents the 'middle level'. However, usually should pay attention to both median, mean, and valuation range, and make comprehensive judgment."
    }
  },
  {
    id: 87,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，如果公司的'资本支出'（CapEx）预测不准确，会对估值产生什么影响？",
      en: "When using a DCF model, if the company's 'Capital Expenditure (CapEx)' forecast is inaccurate, what impact will it have on valuation?"
    },
    options: {
      zh: [
        "没有影响",
        "会直接影响自由现金流的计算，从而影响估值。高估CapEx会低估自由现金流和估值，低估CapEx会高估自由现金流和估值",
        "只影响终值"
      ],
      en: [
        "No impact",
        "Will directly affect the calculation of free cash flow, thereby affecting valuation. Overestimating CapEx will underestimate free cash flow and valuation, underestimating CapEx will overestimate free cash flow and valuation",
        "Only affects terminal value"
      ]
    },
    correct: 1,
    explanation: {
      zh: "资本支出（CapEx）是计算自由现金流的关键输入：FCF = 经营现金流 - CapEx。如果CapEx预测不准确：1) 高估CapEx：会低估自由现金流，从而低估公司估值；2) 低估CapEx：会高估自由现金流，从而高估公司估值。CapEx预测需要基于公司的历史资本支出、业务扩张计划、行业特点等因素，是DCF模型中的重要假设。",
      en: "Capital expenditure (CapEx) is a key input for calculating free cash flow: FCF = Operating Cash Flow - CapEx. If CapEx forecast is inaccurate: 1) Overestimating CapEx: Will underestimate free cash flow, thereby underestimating company valuation; 2) Underestimating CapEx: Will overestimate free cash flow, thereby overestimating company valuation. CapEx forecasting needs to be based on the company's historical capital expenditures, business expansion plans, industry characteristics, and other factors, and is an important assumption in the DCF model."
    }
  },
  {
    id: 88,
    topic: "valuation",
    question: {
      zh: "在使用P/S比率（市销率）估值时，以下哪个因素最重要？",
      en: "When using P/S ratio (Price-to-Sales) for valuation, which factor is most important?"
    },
    options: {
      zh: [
        "只看P/S比率本身",
        "公司的盈利能力（毛利率、净利率）、增长前景，以及收入质量（是否可持续、是否有现金支撑）",
        "只关注销售收入"
      ],
      en: [
        "Only look at the P/S ratio itself",
        "The company's profitability (gross margin, net margin), growth prospects, and revenue quality (whether sustainable, whether supported by cash)",
        "Only focus on sales revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "P/S比率主要用于尚未盈利或盈利很少的公司。使用这个比率时，必须关注：1) 盈利能力：毛利率、净利率趋势，能否实现盈利；2) 增长前景：收入增长率是否可持续；3) 收入质量：收入是否可持续、是否有现金支撑、是否存在大量应收账款。P/S比率本身没有意义，必须结合这些因素判断。高P/S比率只有在高增长、高盈利潜力的情况下才合理。",
      en: "P/S ratio is mainly used for companies that are not yet profitable or have minimal profits. When using this ratio, must pay attention to: 1) Profitability: Gross margin, net margin trends, whether profitability can be achieved; 2) Growth prospects: Whether revenue growth rate is sustainable; 3) Revenue quality: Whether revenue is sustainable, whether supported by cash, whether there are large amounts of accounts receivable. The P/S ratio itself is meaningless and must be judged in conjunction with these factors. High P/S ratio is only reasonable with high growth and high profit potential."
    }
  },
  {
    id: 89,
    topic: "valuation",
    question: {
      zh: "在使用DCF模型时，'股权价值'（Equity Value）和'企业价值'（Enterprise Value）的关系是什么？",
      en: "When using a DCF model, what is the relationship between 'Equity Value' and 'Enterprise Value'?"
    },
    options: {
      zh: [
        "没有关系",
        "企业价值 = 股权价值 + 净债务（总债务 - 现金）。DCF模型通常先计算企业价值，然后减去净债务得到股权价值",
        "股权价值总是大于企业价值"
      ],
      en: [
        "No relationship",
        "Enterprise Value = Equity Value + Net Debt (Total Debt - Cash). DCF model usually first calculates enterprise value, then subtracts net debt to get equity value",
        "Equity value is always greater than enterprise value"
      ]
    },
    correct: 1,
    explanation: {
      zh: "企业价值（EV）代表整个公司的价值（包括债务和股权），股权价值代表股东权益的价值。关系是：EV = 股权价值 + 净债务（总债务 - 现金及现金等价物）。在DCF模型中，通常先计算企业价值（使用WACC折现自由现金流），然后减去净债务得到股权价值。股权价值除以流通股数得到每股价值。",
      en: "Enterprise Value (EV) represents the value of the entire company (including debt and equity), while equity value represents the value of shareholders' equity. The relationship is: EV = Equity Value + Net Debt (Total Debt - Cash and Cash Equivalents). In the DCF model, enterprise value is usually calculated first (using WACC to discount free cash flows), then net debt is subtracted to get equity value. Equity value divided by outstanding shares gives value per share."
    }
  },
  {
    id: 90,
    topic: "valuation",
    question: {
      zh: "在使用相对估值法时，为什么需要同时使用多个估值倍数？",
      en: "When using relative valuation methods, why is it necessary to use multiple valuation multiples simultaneously?"
    },
    options: {
      zh: [
        "不需要，一个倍数就够了",
        "不同倍数反映不同的价值驱动因素，综合使用可以提供更全面的估值视角，减少单一指标的局限性",
        "只是为了复杂化"
      ],
      en: [
        "Not necessary, one multiple is enough",
        "Different multiples reflect different value drivers, and comprehensive use can provide a more comprehensive valuation perspective and reduce the limitations of a single metric",
        "Just to complicate things"
      ]
    },
    correct: 1,
    explanation: {
      zh: "使用多个估值倍数（如P/E、EV/EBITDA、P/B、P/S）的原因：1) 不同倍数反映不同的价值驱动因素：P/E反映盈利，EV/EBITDA反映经营利润，P/B反映资产，P/S反映收入；2) 单一倍数可能有局限性，综合使用可以提供更全面的视角；3) 不同倍数可以相互验证，提高估值的可靠性；4) 对于不同类型的公司，不同倍数的适用性不同。",
      en: "Reasons for using multiple valuation multiples (such as P/E, EV/EBITDA, P/B, P/S): 1) Different multiples reflect different value drivers: P/E reflects earnings, EV/EBITDA reflects operating profit, P/B reflects assets, P/S reflects revenue; 2) A single multiple may have limitations, and comprehensive use can provide a more comprehensive perspective; 3) Different multiples can verify each other, improving valuation reliability; 4) For different types of companies, the applicability of different multiples varies."
    }
  },
  // Economic Moats - Additional questions to reach 20
  {
    id: 91,
    topic: "economic-moats",
    question: {
      zh: "以下哪个是'规模经济'（Economies of Scale）作为经济护城河的核心特征？",
      en: "What is the core characteristic of 'Economies of Scale' as an economic moat?"
    },
    options: {
      zh: [
        "公司规模越大越好",
        "随着产量增加，单位成本下降，形成成本优势，新进入者难以竞争",
        "规模经济没有作用"
      ],
      en: [
        "Larger company size is always better",
        "As production volume increases, unit costs decrease, creating cost advantages that make it difficult for new entrants to compete",
        "Economies of scale have no effect"
      ]
    },
    correct: 1,
    explanation: {
      zh: "规模经济的核心是：随着产量增加，固定成本被分摊到更多产品上，单位成本下降。这使得大公司能够以更低的价格销售产品，新进入者由于规模小、成本高，难以竞争。规模经济在制造业、零售业等行业中特别重要。但规模过大也可能导致效率下降（规模不经济）。",
      en: "The core of economies of scale is: as production volume increases, fixed costs are spread over more products, reducing unit costs. This allows large companies to sell products at lower prices, making it difficult for new entrants with small scale and high costs to compete. Economies of scale are particularly important in industries such as manufacturing and retail. However, excessive scale may also lead to efficiency decline (diseconomies of scale)."
    }
  },
  {
    id: 92,
    topic: "economic-moats",
    question: {
      zh: "'品牌护城河'（Brand Moat）最强大的特征是什么？",
      en: "What is the strongest characteristic of a 'Brand Moat'?"
    },
    options: {
      zh: [
        "品牌知名度高",
        "品牌能够影响消费者购买决策，让消费者愿意支付溢价，并且难以被替代",
        "品牌名称好听"
      ],
      en: [
        "High brand awareness",
        "The brand can influence consumer purchasing decisions, make consumers willing to pay a premium, and is difficult to replace",
        "The brand name sounds good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "强大的品牌护城河不仅仅是知名度，而是：1) 能够影响消费者购买决策；2) 消费者愿意为品牌支付溢价；3) 品牌难以被替代，具有情感连接和信任；4) 品牌代表质量和一致性。例如，可口可乐、苹果等品牌不仅知名度高，更重要的是消费者对品牌的信任和忠诚度。",
      en: "A strong brand moat is not just awareness, but: 1) Can influence consumer purchasing decisions; 2) Consumers are willing to pay a premium for the brand; 3) The brand is difficult to replace, with emotional connection and trust; 4) The brand represents quality and consistency. For example, brands like Coca-Cola and Apple not only have high awareness, but more importantly, consumer trust and loyalty to the brand."
    }
  },
  {
    id: 93,
    topic: "economic-moats",
    question: {
      zh: "在评估公司的经济护城河时，以下哪个指标最能反映护城河的强度？",
      en: "When evaluating a company's economic moat, which metric best reflects the strength of the moat?"
    },
    options: {
      zh: [
        "市场份额",
        "长期维持高ROE、高毛利率的能力，以及抵御竞争、保持定价能力的时间长度",
        "股价表现"
      ],
      en: [
        "Market share",
        "The ability to maintain high ROE and high gross margins over the long term, and the duration of resisting competition and maintaining pricing power",
        "Stock price performance"
      ]
    },
    correct: 1,
    explanation: {
      zh: "评估护城河强度需要关注：1) 长期维持高ROE的能力（反映盈利能力和竞争优势的持续性）；2) 高毛利率的稳定性（反映定价能力）；3) 抵御竞争的时间长度（护城河是否可持续）；4) 保持定价能力（能否持续提价而不失去客户）。这些指标比市场份额更能反映护城河的真实强度。",
      en: "Assessing moat strength requires attention to: 1) The ability to maintain high ROE over the long term (reflecting profitability and sustainability of competitive advantages); 2) Stability of high gross margins (reflecting pricing power); 3) Duration of resisting competition (whether the moat is sustainable); 4) Maintaining pricing power (whether prices can be raised continuously without losing customers). These metrics better reflect the true strength of the moat than market share."
    }
  },
  {
    id: 94,
    topic: "economic-moats",
    question: {
      zh: "'监管护城河'（Regulatory Moat）作为经济护城河，其特点是什么？",
      en: "What are the characteristics of 'Regulatory Moat' as an economic moat?"
    },
    options: {
      zh: [
        "监管总是坏事",
        "通过政府许可、牌照、专利等监管壁垒，限制新进入者，形成垄断或寡头竞争",
        "监管护城河不持久"
      ],
      en: [
        "Regulation is always bad",
        "Through regulatory barriers such as government licenses, permits, patents, etc., restrict new entrants, creating monopoly or oligopoly competition",
        "Regulatory moats are not durable"
      ]
    },
    correct: 1,
    explanation: {
      zh: "监管护城河通过政府监管、许可、牌照、专利等形成进入壁垒，限制新进入者。例如，银行需要银行牌照、电信需要频谱许可、医药需要FDA批准。这种护城河通常很强大，因为新进入者需要获得监管批准，但风险是监管政策可能变化。监管护城河在金融、公用事业、医药等行业中常见。",
      en: "Regulatory moats create entry barriers through government regulation, licenses, permits, patents, etc., restricting new entrants. For example, banks need banking licenses, telecommunications need spectrum permits, pharmaceuticals need FDA approval. This type of moat is usually very strong because new entrants need regulatory approval, but the risk is that regulatory policies may change. Regulatory moats are common in industries such as finance, utilities, and pharmaceuticals."
    }
  },
  {
    id: 95,
    topic: "economic-moats",
    question: {
      zh: "一家公司的护城河正在被削弱，以下哪个信号最能说明这一点？",
      en: "A company's moat is being eroded. Which signal best indicates this?"
    },
    options: {
      zh: [
        "股价下跌",
        "毛利率持续下降、市场份额流失、新竞争对手进入、客户流失率增加",
        "收入增长放缓"
      ],
      en: [
        "Stock price decline",
        "Gross margins continuously declining, market share loss, new competitors entering, increasing customer churn rate",
        "Revenue growth slowing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "护城河被削弱的信号包括：1) 毛利率持续下降（定价能力减弱）；2) 市场份额流失（竞争优势减弱）；3) 新竞争对手进入（进入壁垒降低）；4) 客户流失率增加（客户粘性下降）。这些信号比股价下跌更能直接反映护城河的变化，因为股价可能受多种因素影响。",
      en: "Signs of moat erosion include: 1) Continuously declining gross margins (weakening pricing power); 2) Market share loss (weakening competitive advantages); 3) New competitors entering (lower entry barriers); 4) Increasing customer churn rate (declining customer stickiness). These signals more directly reflect changes in the moat than stock price decline, as stock prices may be affected by various factors."
    }
  },
  {
    id: 96,
    topic: "economic-moats",
    question: {
      zh: "'成本优势护城河'（Cost Advantage Moat）最可能来自哪里？",
      en: "Where is 'Cost Advantage Moat' most likely to come from?"
    },
    options: {
      zh: [
        "降低员工工资",
        "规模经济、专有技术、地理位置优势、或独特的资源获取渠道",
        "减少研发投入"
      ],
      en: [
        "Reducing employee wages",
        "Economies of scale, proprietary technology, geographic advantages, or unique resource access channels",
        "Reducing R&D investment"
      ]
    },
    correct: 1,
    explanation: {
      zh: "成本优势护城河通常来自：1) 规模经济（大产量降低单位成本）；2) 专有技术（更高效的生产工艺）；3) 地理位置优势（接近原材料或市场）；4) 独特的资源获取渠道（如低成本原材料）。这些优势难以被竞争对手复制，形成持久的成本优势。单纯降低工资通常不可持续，且可能影响产品质量。",
      en: "Cost advantage moats usually come from: 1) Economies of scale (large production volume reduces unit costs); 2) Proprietary technology (more efficient production processes); 3) Geographic advantages (proximity to raw materials or markets); 4) Unique resource access channels (such as low-cost raw materials). These advantages are difficult for competitors to replicate, creating lasting cost advantages. Simply reducing wages is usually unsustainable and may affect product quality."
    }
  },
  {
    id: 97,
    topic: "economic-moats",
    question: {
      zh: "在评估网络效应护城河时，以下哪个因素最重要？",
      en: "When evaluating network effect moats, which factor is most important?"
    },
    options: {
      zh: [
        "用户总数",
        "网络效应的强度（用户增加对价值提升的影响）、用户粘性、以及竞争对手建立替代网络的难度",
        "平台收入"
      ],
      en: [
        "Total number of users",
        "The strength of network effects (impact of user growth on value increase), user stickiness, and the difficulty for competitors to build alternative networks",
        "Platform revenue"
      ]
    },
    correct: 1,
    explanation: {
      zh: "评估网络效应护城河需要关注：1) 网络效应强度：用户增加对每个用户价值提升的影响有多大；2) 用户粘性：用户是否难以离开平台；3) 替代难度：竞争对手建立替代网络的难度。用户总数只是表面指标，更重要的是网络效应的质量和可持续性。",
      en: "Evaluating network effect moats requires attention to: 1) Network effect strength: How much does user growth impact the value for each user; 2) User stickiness: Whether users find it difficult to leave the platform; 3) Substitution difficulty: The difficulty for competitors to build alternative networks. Total number of users is only a surface metric; more important is the quality and sustainability of network effects."
    }
  },
  {
    id: 98,
    topic: "economic-moats",
    question: {
      zh: "'数据护城河'（Data Moat）作为新型护城河，其核心价值是什么？",
      en: "What is the core value of 'Data Moat' as a new type of moat?"
    },
    options: {
      zh: [
        "拥有大量数据",
        "通过数据积累形成更好的产品和服务，数据越多产品越好，形成正向循环，竞争对手难以复制",
        "数据可以出售"
      ],
      en: [
        "Having a large amount of data",
        "Through data accumulation, form better products and services. The more data, the better the product, creating a positive feedback loop that competitors find difficult to replicate",
        "Data can be sold"
      ]
    },
    correct: 1,
    explanation: {
      zh: "数据护城河的核心是：1) 数据积累能够改善产品和服务（如推荐算法、个性化服务）；2) 更好的产品吸引更多用户，产生更多数据；3) 形成正向循环，数据优势不断强化；4) 竞争对手难以获得相同质量和数量的数据。例如，Google的搜索算法、Netflix的推荐系统都受益于数据护城河。",
      en: "The core of data moats is: 1) Data accumulation can improve products and services (such as recommendation algorithms, personalized services); 2) Better products attract more users, generating more data; 3) Creating a positive feedback loop where data advantages continuously strengthen; 4) Competitors find it difficult to obtain data of the same quality and quantity. For example, Google's search algorithms and Netflix's recommendation systems benefit from data moats."
    }
  },
  {
    id: 99,
    topic: "economic-moats",
    question: {
      zh: "一家公司声称拥有'渠道护城河'，这意味着什么？",
      en: "A company claims to have a 'Distribution Channel Moat'. What does this mean?"
    },
    options: {
      zh: [
        "公司有很多销售渠道",
        "公司控制了关键的分销渠道，新进入者难以获得相同的渠道资源，形成进入壁垒",
        "渠道越多越好"
      ],
      en: [
        "The company has many sales channels",
        "The company controls key distribution channels, making it difficult for new entrants to obtain the same channel resources, creating entry barriers",
        "More channels are always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "渠道护城河是指公司控制了关键的分销渠道（如零售网络、供应链、合作伙伴关系），新进入者难以获得相同的渠道资源。例如，可口可乐的全球分销网络、苹果的零售店和授权经销商网络。这种护城河的价值在于：1) 确保产品能够到达消费者；2) 形成规模优势；3) 限制竞争对手的渠道选择。",
      en: "Distribution channel moat refers to the company controlling key distribution channels (such as retail networks, supply chains, partner relationships), making it difficult for new entrants to obtain the same channel resources. For example, Coca-Cola's global distribution network, Apple's retail stores and authorized dealer networks. The value of this moat lies in: 1) Ensuring products can reach consumers; 2) Creating scale advantages; 3) Limiting competitors' channel choices."
    }
  },
  {
    id: 100,
    topic: "economic-moats",
    question: {
      zh: "在评估护城河的可持续性时，以下哪个因素最重要？",
      en: "When evaluating the sustainability of a moat, which factor is most important?"
    },
    options: {
      zh: [
        "当前的盈利能力",
        "护城河是否能够抵御技术变革、监管变化、消费者偏好变化等外部冲击，以及是否能够自我强化",
        "市场份额大小"
      ],
      en: [
        "Current profitability",
        "Whether the moat can resist external shocks such as technological changes, regulatory changes, consumer preference changes, and whether it can self-reinforce",
        "Market share size"
      ]
    },
    correct: 1,
    explanation: {
      zh: "评估护城河可持续性需要关注：1) 能否抵御外部冲击：技术变革、监管变化、消费者偏好变化；2) 是否能够自我强化：护城河是否随着时间推移变得更强大（如网络效应、品牌）；3) 竞争对手复制的难度。可持续的护城河应该能够适应变化并持续提供竞争优势，而不仅仅是当前的优势。",
      en: "Assessing moat sustainability requires attention to: 1) Ability to resist external shocks: technological changes, regulatory changes, consumer preference changes; 2) Whether it can self-reinforce: Whether the moat becomes stronger over time (such as network effects, brands); 3) Difficulty for competitors to replicate. A sustainable moat should be able to adapt to changes and continuously provide competitive advantages, not just current advantages."
    }
  },
  {
    id: 101,
    topic: "economic-moats",
    question: {
      zh: "'平台护城河'（Platform Moat）的核心特征是什么？",
      en: "What is the core characteristic of a 'Platform Moat'?"
    },
    options: {
      zh: [
        "平台用户多",
        "平台连接多方（如买家和卖家、开发者和用户），形成多边网络效应，各方相互依赖，难以被替代",
        "平台功能多"
      ],
      en: [
        "The platform has many users",
        "The platform connects multiple parties (such as buyers and sellers, developers and users), creating multi-sided network effects where parties depend on each other and are difficult to replace",
        "The platform has many features"
      ]
    },
    correct: 1,
    explanation: {
      zh: "平台护城河的核心是多边网络效应：平台连接多方参与者（如Uber连接司机和乘客、App Store连接开发者和用户），各方相互依赖。更多买家吸引更多卖家，更多卖家吸引更多买家，形成正向循环。这种多边网络效应使得平台难以被替代，因为任何一方离开都会影响其他方。",
      en: "The core of platform moats is multi-sided network effects: the platform connects multiple parties (such as Uber connecting drivers and passengers, App Store connecting developers and users), where parties depend on each other. More buyers attract more sellers, more sellers attract more buyers, creating a positive feedback loop. This multi-sided network effect makes the platform difficult to replace, as any party leaving would affect others."
    }
  },
  {
    id: 102,
    topic: "economic-moats",
    question: {
      zh: "在比较两家公司的护城河时，以下哪个做法最合理？",
      en: "When comparing the moats of two companies, which approach is most reasonable?"
    },
    options: {
      zh: [
        "只比较市场份额",
        "综合分析护城河的类型、强度、可持续性，以及公司在行业中的竞争地位",
        "只比较股价"
      ],
      en: [
        "Only compare market share",
        "Comprehensively analyze the type, strength, and sustainability of moats, as well as the company's competitive position in the industry",
        "Only compare stock prices"
      ]
    },
    correct: 1,
    explanation: {
      zh: "比较护城河需要多维度分析：1) 护城河类型：品牌、网络效应、成本优势、转换成本等；2) 强度：能否维持高ROE、高毛利率；3) 可持续性：能否抵御外部冲击；4) 竞争地位：在行业中的相对位置。不同类型、不同行业的护城河难以直接比较，需要结合具体情况分析。",
      en: "Comparing moats requires multi-dimensional analysis: 1) Moat type: Brand, network effects, cost advantages, switching costs, etc.; 2) Strength: Whether it can maintain high ROE and high gross margins; 3) Sustainability: Whether it can resist external shocks; 4) Competitive position: Relative position in the industry. Moats of different types and industries are difficult to compare directly and need to be analyzed in conjunction with specific circumstances."
    }
  },
  {
    id: 103,
    topic: "economic-moats",
    question: {
      zh: "一家公司的护城河从'强'变为'中等'，这可能意味着什么？",
      en: "A company's moat has changed from 'strong' to 'moderate'. What might this indicate?"
    },
    options: {
      zh: [
        "公司盈利能力下降",
        "公司可能面临竞争加剧、技术变革、或消费者偏好变化，护城河正在被削弱，需要关注竞争优势的可持续性",
        "这是正常现象，无需关注"
      ],
      en: [
        "The company's profitability has declined",
        "The company may be facing intensified competition, technological changes, or consumer preference changes. The moat is being eroded, and attention should be paid to the sustainability of competitive advantages",
        "This is normal and requires no attention"
      ]
    },
    correct: 1,
    explanation: {
      zh: "护城河从强变弱通常表明：1) 竞争加剧，新进入者或现有竞争对手正在削弱公司的竞争优势；2) 技术变革，新技术可能使现有护城河失效；3) 消费者偏好变化，品牌或产品可能不再受欢迎；4) 监管变化，监管壁垒可能降低。这需要密切关注，因为护城河是长期投资价值的重要基础。",
      en: "A moat weakening from strong usually indicates: 1) Intensified competition, new entrants or existing competitors are eroding the company's competitive advantages; 2) Technological changes, new technologies may render existing moats ineffective; 3) Consumer preference changes, brands or products may no longer be popular; 4) Regulatory changes, regulatory barriers may be lowered. This requires close attention, as moats are an important foundation for long-term investment value."
    }
  },
  {
    id: 104,
    topic: "economic-moats",
    question: {
      zh: "'生态系统护城河'（Ecosystem Moat）的特点是什么？",
      en: "What are the characteristics of an 'Ecosystem Moat'?"
    },
    options: {
      zh: [
        "公司业务多元化",
        "公司构建了相互关联的产品和服务生态系统，用户一旦进入生态系统，转换成本很高，形成强大的锁定效应",
        "生态系统越大越好"
      ],
      en: [
        "The company has diversified businesses",
        "The company has built an interconnected ecosystem of products and services. Once users enter the ecosystem, switching costs are high, creating strong lock-in effects",
        "Larger ecosystems are always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "生态系统护城河是指公司构建了相互关联的产品和服务生态系统（如苹果的硬件、软件、服务生态系统），用户一旦进入，转换成本很高。例如，使用iPhone的用户可能使用iCloud、App Store、Apple Music等，这些服务相互关联，离开生态系统的成本很高。这种护城河通过提高转换成本形成强大的客户锁定。",
      en: "Ecosystem moat refers to the company building an interconnected ecosystem of products and services (such as Apple's hardware, software, and services ecosystem). Once users enter, switching costs are high. For example, iPhone users may use iCloud, App Store, Apple Music, etc. These services are interconnected, making it costly to leave the ecosystem. This moat creates strong customer lock-in by increasing switching costs."
    }
  },
  {
    id: 105,
    topic: "economic-moats",
    question: {
      zh: "在评估护城河时，'无形资产'（Intangible Assets）作为护城河，主要包括哪些？",
      en: "When evaluating moats, what do 'Intangible Assets' as moats mainly include?"
    },
    options: {
      zh: [
        "只有品牌",
        "品牌、专利、专有技术、客户关系、数据等，这些资产难以复制，形成竞争优势",
        "只有专利"
      ],
      en: [
        "Only brands",
        "Brands, patents, proprietary technology, customer relationships, data, etc. These assets are difficult to replicate and create competitive advantages",
        "Only patents"
      ]
    },
    correct: 1,
    explanation: {
      zh: "无形资产作为护城河包括：1) 品牌：消费者信任和忠诚度；2) 专利：技术保护；3) 专有技术：独特的生产工艺或技术；4) 客户关系：长期建立的信任和合作关系；5) 数据：积累的用户数据和行为数据。这些资产在财务报表中可能没有被充分反映，但它们是公司价值的重要组成部分，难以被竞争对手复制。",
      en: "Intangible assets as moats include: 1) Brands: Consumer trust and loyalty; 2) Patents: Technology protection; 3) Proprietary technology: Unique production processes or technologies; 4) Customer relationships: Long-established trust and cooperative relationships; 5) Data: Accumulated user data and behavioral data. These assets may not be fully reflected in financial statements, but they are important components of company value and difficult for competitors to replicate."
    }
  },
  {
    id: 106,
    topic: "economic-moats",
    question: {
      zh: "一家公司拥有强大的护城河，但ROE持续下降。这可能说明什么？",
      en: "A company has a strong moat, but ROE continues to decline. What might this indicate?"
    },
    options: {
      zh: [
        "护城河没有作用",
        "公司可能面临行业增长放缓、竞争加剧、或管理问题，即使有护城河，也需要关注盈利能力的可持续性",
        "ROE下降是正常的"
      ],
      en: [
        "The moat has no effect",
        "The company may be facing industry growth slowdown, intensified competition, or management issues. Even with a moat, attention should be paid to the sustainability of profitability",
        "ROE decline is normal"
      ]
    },
    correct: 1,
    explanation: {
      zh: "即使拥有强大的护城河，ROE持续下降可能表明：1) 行业增长放缓，整体盈利能力下降；2) 竞争加剧，即使有护城河，竞争压力也在增加；3) 管理问题，公司可能没有充分利用护城河；4) 护城河可能正在被削弱。护城河不是万能的，它只能提供相对优势，不能完全消除行业或管理风险。",
      en: "Even with a strong moat, continuously declining ROE may indicate: 1) Industry growth slowdown, overall profitability decline; 2) Intensified competition, even with a moat, competitive pressure is increasing; 3) Management issues, the company may not be fully utilizing the moat; 4) The moat may be eroding. Moats are not omnipotent; they can only provide relative advantages and cannot completely eliminate industry or management risks."
    }
  },
  {
    id: 107,
    topic: "economic-moats",
    question: {
      zh: "在评估护城河时，'先发优势'（First-Mover Advantage）是否总是有效的护城河？",
      en: "When evaluating moats, is 'First-Mover Advantage' always an effective moat?"
    },
    options: {
      zh: [
        "是的，先发优势总是有效的",
        "不一定，先发优势只有在能够转化为持续竞争优势（如网络效应、品牌、规模经济）时才有效，否则可能被后来者超越",
        "先发优势没有用"
      ],
      en: [
        "Yes, first-mover advantage is always effective",
        "Not necessarily. First-mover advantage is only effective when it can be transformed into sustainable competitive advantages (such as network effects, brands, economies of scale), otherwise it may be surpassed by latecomers",
        "First-mover advantage is useless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "先发优势本身不是护城河，只有当它能够转化为持续竞争优势时才有效。例如，如果先发优势能够转化为网络效应（如Facebook）、品牌优势（如可口可乐）、规模经济，那么它是有效的。但如果后来者能够通过更好的技术、更好的执行超越先发者，先发优势就会失效。历史上很多先发者都被后来者超越。",
      en: "First-mover advantage itself is not a moat; it is only effective when it can be transformed into sustainable competitive advantages. For example, if first-mover advantage can be transformed into network effects (like Facebook), brand advantages (like Coca-Cola), or economies of scale, then it is effective. However, if latecomers can surpass first movers through better technology or better execution, first-mover advantage becomes ineffective. Historically, many first movers have been surpassed by latecomers."
    }
  },
  {
    id: 108,
    topic: "economic-moats",
    question: {
      zh: "在评估公司的护城河时，以下哪个组合最能全面反映护城河状况？",
      en: "When evaluating a company's moat, which combination best comprehensively reflects the moat condition?"
    },
    options: {
      zh: [
        "只看市场份额",
        "综合分析护城河类型、强度指标（ROE、毛利率）、可持续性指标（抵御竞争的时间、自我强化能力）、以及竞争地位",
        "只看股价表现"
      ],
      en: [
        "Only look at market share",
        "Comprehensively analyze moat type, strength metrics (ROE, gross margin), sustainability metrics (duration of resisting competition, self-reinforcement capability), and competitive position",
        "Only look at stock price performance"
      ]
    },
    correct: 1,
    explanation: {
      zh: "全面评估护城河需要：1) 护城河类型：识别公司拥有哪些类型的护城河；2) 强度指标：ROE、毛利率的水平和稳定性；3) 可持续性指标：能否长期抵御竞争、是否能够自我强化；4) 竞争地位：在行业中的相对位置。单一指标无法全面反映护城河状况，需要综合判断。",
      en: "Comprehensive moat evaluation requires: 1) Moat type: Identify what types of moats the company has; 2) Strength metrics: Level and stability of ROE and gross margins; 3) Sustainability metrics: Whether it can resist competition long-term and self-reinforce; 4) Competitive position: Relative position in the industry. A single metric cannot comprehensively reflect moat condition and requires comprehensive judgment."
    }
  },
  {
    id: 109,
    topic: "economic-moats",
    question: {
      zh: "'供应链护城河'（Supply Chain Moat）的特点是什么？",
      en: "What are the characteristics of a 'Supply Chain Moat'?"
    },
    options: {
      zh: [
        "公司有很多供应商",
        "公司控制了关键的上游资源或建立了高效的供应链网络，形成成本优势或供应保障，竞争对手难以复制",
        "供应链越长越好"
      ],
      en: [
        "The company has many suppliers",
        "The company controls key upstream resources or has built an efficient supply chain network, creating cost advantages or supply security that competitors find difficult to replicate",
        "Longer supply chains are always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "供应链护城河是指公司通过控制关键上游资源（如原材料、关键零部件）或建立高效的供应链网络，形成成本优势或供应保障。例如，特斯拉控制电池供应链、苹果控制关键零部件供应。这种护城河的价值在于：1) 确保供应稳定；2) 获得成本优势；3) 限制竞争对手的供应选择。",
      en: "Supply chain moat refers to the company creating cost advantages or supply security by controlling key upstream resources (such as raw materials, key components) or building efficient supply chain networks. For example, Tesla controls the battery supply chain, Apple controls key component supplies. The value of this moat lies in: 1) Ensuring supply stability; 2) Gaining cost advantages; 3) Limiting competitors' supply choices."
    }
  },
  {
    id: 110,
    topic: "economic-moats",
    question: {
      zh: "在评估护城河时，'文化护城河'（Cultural Moat）指的是什么？",
      en: "When evaluating moats, what does 'Cultural Moat' refer to?"
    },
    options: {
      zh: [
        "公司有企业文化",
        "公司建立了独特的组织文化（如创新文化、客户至上文化），这种文化难以复制，能够持续产生竞争优势",
        "文化护城河不重要"
      ],
      en: [
        "The company has corporate culture",
        "The company has established a unique organizational culture (such as innovation culture, customer-first culture) that is difficult to replicate and can continuously generate competitive advantages",
        "Cultural moats are not important"
      ]
    },
    correct: 1,
    explanation: {
      zh: "文化护城河是指公司建立了独特的组织文化（如亚马逊的客户至上、Netflix的创新文化），这种文化：1) 难以被竞争对手复制；2) 能够持续产生竞争优势（如持续创新、卓越执行）；3) 影响员工行为和决策；4) 形成组织能力。虽然文化难以量化，但它是很多优秀公司长期成功的重要因素。",
      en: "Cultural moat refers to the company establishing a unique organizational culture (such as Amazon's customer obsession, Netflix's innovation culture). This culture: 1) Is difficult for competitors to replicate; 2) Can continuously generate competitive advantages (such as continuous innovation, excellent execution); 3) Influences employee behavior and decisions; 4) Forms organizational capabilities. Although culture is difficult to quantify, it is an important factor in the long-term success of many excellent companies."
    }
  },
  // Investment Strategy - Additional questions to reach 20
  {
    id: 111,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'安全边际'（Margin of Safety）的作用是什么？",
      en: "In value investing, what is the role of 'Margin of Safety'?"
    },
    options: {
      zh: [
        "没有作用",
        "提供缓冲空间，即使估值有误差或市场波动，也能降低投资风险，提高投资成功的概率",
        "安全边际越大越好，没有上限"
      ],
      en: [
        "No role",
        "Provides a buffer, even if valuation has errors or market fluctuations, it can reduce investment risk and increase the probability of investment success",
        "Larger margin of safety is always better, no upper limit"
      ]
    },
    correct: 1,
    explanation: {
      zh: "安全边际是价值投资的核心概念，指以低于内在价值的价格买入。它的作用：1) 提供缓冲空间，即使估值有误差，也能降低风险；2) 应对市场波动，即使股价进一步下跌，仍有安全垫；3) 提高投资成功的概率。但安全边际也要适度，过大的安全边际可能意味着公司存在严重问题。",
      en: "Margin of safety is a core concept in value investing, referring to buying at prices below intrinsic value. Its role: 1) Provides a buffer, even if valuation has errors, it can reduce risk; 2) Copes with market fluctuations, even if stock prices fall further, there is still a safety cushion; 3) Increases the probability of investment success. However, margin of safety should also be moderate; an excessively large margin of safety may indicate serious problems with the company."
    }
  },
  {
    id: 112,
    topic: "investment-strategy",
    question: {
      zh: "在构建投资组合时，'过度分散'（Over-Diversification）的问题是什么？",
      en: "When constructing an investment portfolio, what is the problem with 'Over-Diversification'?"
    },
    options: {
      zh: [
        "没有问题，分散越多越好",
        "过度分散可能导致：1) 无法深入了解每家公司；2) 稀释了优质投资的影响；3) 投资组合表现接近市场平均，难以超越市场",
        "分散投资总是好的"
      ],
      en: [
        "No problem, more diversification is always better",
        "Over-diversification may lead to: 1) Inability to deeply understand each company; 2) Diluting the impact of quality investments; 3) Portfolio performance approaching market average, difficult to outperform the market",
        "Diversification is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "过度分散的问题：1) 无法深入了解：持有太多股票，无法深入研究每家公司；2) 稀释影响：即使找到优质投资，由于占比小，对整体组合影响有限；3) 接近市场：过度分散的投资组合表现会接近市场平均，难以超越市场。适度分散（如10-20只优质股票）既能降低风险，又能保持集中度优势。",
      en: "Problems with over-diversification: 1) Inability to understand deeply: Holding too many stocks makes it impossible to deeply research each company; 2) Diluting impact: Even if quality investments are found, due to small proportions, their impact on the overall portfolio is limited; 3) Approaching market: Over-diversified portfolios will perform close to market average, difficult to outperform. Moderate diversification (such as 10-20 quality stocks) can both reduce risk and maintain concentration advantages."
    }
  },
  {
    id: 113,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'长期持有'（Long-term Holding）的重要性是什么？",
      en: "In value investing, what is the importance of 'Long-term Holding'?"
    },
    options: {
      zh: [
        "没有重要性",
        "价值投资基于公司内在价值，价值实现需要时间。长期持有可以：1) 让公司价值充分体现；2) 减少交易成本；3) 避免短期市场波动的影响；4) 享受复利效应",
        "持有时间越长越好"
      ],
      en: [
        "No importance",
        "Value investing is based on intrinsic value, and value realization takes time. Long-term holding can: 1) Allow company value to fully manifest; 2) Reduce transaction costs; 3) Avoid the impact of short-term market fluctuations; 4) Enjoy the compounding effect",
        "Longer holding period is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "长期持有在价值投资中的重要性：1) 价值实现需要时间：公司内在价值的提升和市场价格向价值的回归都需要时间；2) 减少交易成本：频繁交易会产生手续费、税费；3) 避免短期波动：短期市场波动是噪音，长期持有可以忽略；4) 复利效应：长期持有优质公司可以享受复利增长。但长期持有不等于永远持有，当公司基本面恶化或价格远高于价值时应该卖出。",
      en: "The importance of long-term holding in value investing: 1) Value realization takes time: The improvement of company intrinsic value and the convergence of market price to value both require time; 2) Reduce transaction costs: Frequent trading generates fees and taxes; 3) Avoid short-term fluctuations: Short-term market fluctuations are noise, long-term holding can ignore them; 4) Compounding effect: Long-term holding of quality companies can enjoy compound growth. However, long-term holding does not mean holding forever; when company fundamentals deteriorate or price is far above value, one should sell."
    }
  },
  {
    id: 114,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，什么时候应该卖出股票？",
      en: "In value investing, when should stocks be sold?"
    },
    options: {
      zh: [
        "永远不卖",
        "当：1) 公司基本面恶化，护城河被削弱；2) 股价远高于内在价值；3) 发现更好的投资机会；4) 投资逻辑发生变化",
        "股价一涨就卖"
      ],
      en: [
        "Never sell",
        "When: 1) Company fundamentals deteriorate, moat is eroded; 2) Stock price is far above intrinsic value; 3) Better investment opportunities are found; 4) Investment thesis changes",
        "Sell as soon as stock price rises"
      ]
    },
    correct: 1,
    explanation: {
      zh: "价值投资者应该在以下情况卖出：1) 基本面恶化：公司护城河被削弱、竞争优势丧失、财务状况恶化；2) 价格远高于价值：股价已经充分反映甚至高估了公司价值；3) 更好的机会：发现更具吸引力的投资机会，需要资金；4) 投资逻辑变化：当初买入的理由不再成立。价值投资不是永远持有，而是基于价值判断的买卖决策。",
      en: "Value investors should sell in the following situations: 1) Fundamentals deteriorate: Company moat is eroded, competitive advantages are lost, financial condition deteriorates; 2) Price far above value: Stock price already fully reflects or even overvalues company value; 3) Better opportunities: More attractive investment opportunities are found, funds are needed; 4) Investment thesis changes: The original reasons for buying no longer hold. Value investing is not holding forever, but buy/sell decisions based on value judgment."
    }
  },
  {
    id: 115,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'情绪控制'（Emotional Control）的重要性是什么？",
      en: "In investing, what is the importance of 'Emotional Control'?"
    },
    options: {
      zh: [
        "没有重要性",
        "市场情绪波动很大，投资者容易受贪婪、恐惧等情绪影响做出错误决策。情绪控制可以：1) 避免追涨杀跌；2) 坚持投资原则；3) 在别人恐惧时贪婪，在别人贪婪时恐惧",
        "情绪对投资没有影响"
      ],
      en: [
        "No importance",
        "Market sentiment fluctuates greatly, and investors are easily influenced by emotions such as greed and fear to make wrong decisions. Emotional control can: 1) Avoid chasing rising prices and selling in panic; 2) Adhere to investment principles; 3) Be greedy when others are fearful, and fearful when others are greedy",
        "Emotions have no impact on investing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "情绪控制在投资中的重要性：1) 避免追涨杀跌：市场情绪高涨时容易追高，情绪恐慌时容易杀跌；2) 坚持原则：情绪容易让人偏离投资原则和策略；3) 逆向思维：在别人恐惧时（市场下跌）买入，在别人贪婪时（市场上涨）保持谨慎；4) 理性决策：基于基本面而非情绪做决策。情绪控制是成功投资的关键因素之一。",
      en: "The importance of emotional control in investing: 1) Avoid chasing rising prices and selling in panic: High market sentiment makes it easy to chase highs, panic makes it easy to sell in panic; 2) Adhere to principles: Emotions easily make people deviate from investment principles and strategies; 3) Contrarian thinking: Buy when others are fearful (market decline), remain cautious when others are greedy (market rise); 4) Rational decisions: Make decisions based on fundamentals rather than emotions. Emotional control is one of the key factors for successful investing."
    }
  },
  {
    id: 116,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'能力圈'（Circle of Competence）的概念是什么？",
      en: "In value investing, what is the concept of 'Circle of Competence'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "投资者真正理解和熟悉的领域。在能力圈内投资，能够更好地评估公司价值、识别风险、做出理性决策",
        "能力圈越大越好"
      ],
      en: [
        "No such concept",
        "Areas that investors truly understand and are familiar with. Investing within the circle of competence allows better assessment of company value, risk identification, and rational decision-making",
        "Larger circle of competence is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "能力圈是指投资者真正理解和熟悉的领域。在能力圈内投资：1) 能够更好地评估公司价值；2) 能够识别风险；3) 能够做出理性决策。投资不了解的领域容易做出错误判断。巴菲特强调'只投资自己理解的业务'。能力圈可以逐步扩大，但需要持续学习和研究。重要的是诚实面对自己的能力边界。",
      en: "Circle of competence refers to areas that investors truly understand and are familiar with. Investing within the circle of competence: 1) Can better assess company value; 2) Can identify risks; 3) Can make rational decisions. Investing in unfamiliar areas makes it easy to make wrong judgments. Buffett emphasizes 'only invest in businesses you understand.' The circle of competence can be gradually expanded, but requires continuous learning and research. What's important is to be honest about one's own boundaries."
    }
  },
  {
    id: 117,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'集中投资'（Concentrated Investing）和'分散投资'（Diversified Investing）应该如何平衡？",
      en: "In investing, how should 'Concentrated Investing' and 'Diversified Investing' be balanced?"
    },
    options: {
      zh: [
        "只集中投资",
        "适度集中：将资金集中在最看好的优质公司（如5-15只），既能降低风险，又能保持集中度优势，获得超越市场的回报",
        "只分散投资"
      ],
      en: [
        "Only concentrated investing",
        "Moderate concentration: Concentrate funds in the most favored quality companies (such as 5-15 stocks), which can both reduce risk and maintain concentration advantages, achieving market-beating returns",
        "Only diversified investing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "平衡集中和分散：1) 适度集中：将资金集中在最看好的优质公司（如5-15只），既能降低单一公司风险，又能保持集中度优势；2) 避免过度集中：过度集中（如1-3只）风险太大；3) 避免过度分散：过度分散（如50+只）会稀释优质投资的影响。适度集中（10-20只优质股票）是较好的平衡。",
      en: "Balancing concentration and diversification: 1) Moderate concentration: Concentrate funds in the most favored quality companies (such as 5-15 stocks), which can both reduce single-company risk and maintain concentration advantages; 2) Avoid over-concentration: Over-concentration (such as 1-3 stocks) is too risky; 3) Avoid over-diversification: Over-diversification (such as 50+ stocks) will dilute the impact of quality investments. Moderate concentration (10-20 quality stocks) is a better balance."
    }
  },
  {
    id: 118,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'内在价值'（Intrinsic Value）应该如何估算？",
      en: "In value investing, how should 'Intrinsic Value' be estimated?"
    },
    options: {
      zh: [
        "只看当前股价",
        "使用多种方法综合估算：DCF模型、相对估值法、资产价值法等，结合公司基本面、增长前景、竞争优势等因素",
        "只看市盈率"
      ],
      en: [
        "Only look at current stock price",
        "Use multiple methods for comprehensive estimation: DCF model, relative valuation methods, asset value methods, etc., combined with company fundamentals, growth prospects, competitive advantages, and other factors",
        "Only look at P/E ratio"
      ]
    },
    correct: 1,
    explanation: {
      zh: "估算内在价值应该：1) 使用多种方法：DCF模型（现金流折现）、相对估值法（P/E、P/B等）、资产价值法（清算价值）等；2) 结合基本面：公司财务状况、盈利能力、增长前景；3) 考虑竞争优势：护城河、行业地位；4) 保守估算：使用保守假设，留出安全边际。内在价值不是精确数值，而是一个合理范围。",
      en: "Estimating intrinsic value should: 1) Use multiple methods: DCF model (cash flow discounting), relative valuation methods (P/E, P/B, etc.), asset value methods (liquidation value), etc.; 2) Combine fundamentals: Company financial condition, profitability, growth prospects; 3) Consider competitive advantages: Moats, industry position; 4) Conservative estimation: Use conservative assumptions, leave margin of safety. Intrinsic value is not a precise number, but a reasonable range."
    }
  },
  {
    id: 119,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'市场时机'（Market Timing）的重要性是什么？",
      en: "In investing, what is the importance of 'Market Timing'?"
    },
    options: {
      zh: [
        "市场时机最重要，应该频繁交易",
        "市场时机很难把握，价值投资者应该关注公司价值而非市场时机。但可以在市场极度高估或低估时适度调整仓位",
        "必须准确预测市场"
      ],
      en: [
        "Market timing is most important, should trade frequently",
        "Market timing is difficult to master. Value investors should focus on company value rather than market timing. However, positions can be moderately adjusted when the market is extremely overvalued or undervalued",
        "Must accurately predict the market"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场时机的重要性：1) 很难把握：准确预测市场短期走势几乎不可能；2) 价值投资关注价值：应该关注公司内在价值，而非市场时机；3) 长期持有：通过长期持有优质公司，可以忽略短期市场波动；4) 适度调整：可以在市场极度高估时减少仓位，极度低估时增加仓位，但这是基于估值而非预测。",
      en: "The importance of market timing: 1) Difficult to master: Accurately predicting short-term market movements is almost impossible; 2) Value investing focuses on value: Should focus on company intrinsic value rather than market timing; 3) Long-term holding: Through long-term holding of quality companies, short-term market fluctuations can be ignored; 4) Moderate adjustment: Can reduce positions when the market is extremely overvalued, increase positions when extremely undervalued, but this is based on valuation rather than prediction."
    }
  },
  {
    id: 120,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'复利效应'（Compounding Effect）的重要性是什么？",
      en: "In value investing, what is the importance of the 'Compounding Effect'?"
    },
    options: {
      zh: [
        "没有重要性",
        "复利是长期财富增长的关键。通过长期持有优质公司，让利润再投资，可以实现指数级增长。时间越长，复利效应越明显",
        "复利只适用于短期"
      ],
      en: [
        "No importance",
        "Compounding is the key to long-term wealth growth. By long-term holding of quality companies and reinvesting profits, exponential growth can be achieved. The longer the time, the more obvious the compounding effect",
        "Compounding only applies in the short term"
      ]
    },
    correct: 1,
    explanation: {
      zh: "复利效应的重要性：1) 指数级增长：复利让财富呈指数级增长，时间越长效果越明显；2) 长期持有：通过长期持有优质公司，让利润再投资，享受复利；3) 避免频繁交易：频繁交易会中断复利过程；4) 时间价值：时间是复利的朋友，越早开始投资，复利效应越明显。巴菲特说：'人生就像滚雪球，重要的是找到很湿的雪和很长的坡。'",
      en: "The importance of compounding effect: 1) Exponential growth: Compounding makes wealth grow exponentially, the longer the time, the more obvious the effect; 2) Long-term holding: Through long-term holding of quality companies, reinvest profits to enjoy compounding; 3) Avoid frequent trading: Frequent trading interrupts the compounding process; 4) Time value: Time is a friend of compounding; the earlier you start investing, the more obvious the compounding effect. Buffett said: 'Life is like a snowball. The important thing is finding wet snow and a really long hill.'"
    }
  },
  {
    id: 121,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'逆向投资'（Contrarian Investing）的核心思想是什么？",
      en: "In investing, what is the core idea of 'Contrarian Investing'?"
    },
    options: {
      zh: [
        "总是与市场相反",
        "在市场极度悲观、价格低于价值时买入，在市场极度乐观、价格高于价值时卖出或保持谨慎。基于价值判断而非情绪",
        "逆向投资总是对的"
      ],
      en: [
        "Always opposite to the market",
        "Buy when the market is extremely pessimistic and prices are below value, sell or remain cautious when the market is extremely optimistic and prices are above value. Based on value judgment rather than emotions",
        "Contrarian investing is always right"
      ]
    },
    correct: 1,
    explanation: {
      zh: "逆向投资的核心：1) 基于价值：不是盲目与市场相反，而是基于价值判断；2) 极度悲观时买入：市场恐慌时，优质公司可能被低估，是买入机会；3) 极度乐观时谨慎：市场狂热时，价格可能高估，应该谨慎或卖出；4) 独立思考：不随波逐流，基于自己的分析做决策。'在别人恐惧时贪婪，在别人贪婪时恐惧'。",
      en: "The core of contrarian investing: 1) Based on value: Not blindly opposite to the market, but based on value judgment; 2) Buy when extremely pessimistic: When the market panics, quality companies may be undervalued, presenting buying opportunities; 3) Be cautious when extremely optimistic: When the market is euphoric, prices may be overvalued, should be cautious or sell; 4) Independent thinking: Don't follow the crowd, make decisions based on your own analysis. 'Be greedy when others are fearful, and fearful when others are greedy.'"
    }
  },
  {
    id: 122,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'护城河'（Moat）和'估值'（Valuation）哪个更重要？",
      en: "In value investing, which is more important: 'Moat' or 'Valuation'?"
    },
    options: {
      zh: [
        "只看估值",
        "两者都重要，但理想情况是：以合理价格买入拥有强大护城河的优质公司。护城河决定长期价值，估值决定买入时机",
        "只看护城河"
      ],
      en: [
        "Only look at valuation",
        "Both are important, but ideally: Buy quality companies with strong moats at reasonable prices. Moats determine long-term value, valuation determines entry timing",
        "Only look at moats"
      ]
    },
    correct: 1,
    explanation: {
      zh: "护城河和估值都重要：1) 护城河决定长期价值：强大的护城河能够保护公司长期盈利，是长期投资价值的基础；2) 估值决定买入时机：即使有强大护城河，如果价格过高，也不是好的投资；3) 理想组合：以合理价格买入拥有强大护城河的优质公司；4) 平衡：需要平衡护城河的质量和估值的合理性。",
      en: "Both moats and valuation are important: 1) Moats determine long-term value: Strong moats can protect long-term company profitability and are the foundation of long-term investment value; 2) Valuation determines entry timing: Even with strong moats, if the price is too high, it's not a good investment; 3) Ideal combination: Buy quality companies with strong moats at reasonable prices; 4) Balance: Need to balance the quality of moats and the reasonableness of valuation."
    }
  },
  {
    id: 123,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'风险管理'（Risk Management）的核心是什么？",
      en: "In investing, what is the core of 'Risk Management'?"
    },
    options: {
      zh: [
        "避免所有风险",
        "识别、评估和管理风险，而不是避免所有风险。通过分散投资、安全边际、深入研究和长期持有来管理风险",
        "风险越大越好"
      ],
      en: [
        "Avoid all risks",
        "Identify, assess, and manage risks rather than avoid all risks. Manage risks through diversification, margin of safety, in-depth research, and long-term holding",
        "Higher risk is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "风险管理的核心：1) 识别风险：了解投资面临的各种风险（公司风险、行业风险、市场风险）；2) 评估风险：评估风险的大小和概率；3) 管理风险：通过分散投资、安全边际、深入研究、长期持有等方式管理风险；4) 不是避免风险：投资必然有风险，关键是管理而非避免。风险管理是成功投资的重要组成部分。",
      en: "The core of risk management: 1) Identify risks: Understand various risks faced by investments (company risk, industry risk, market risk); 2) Assess risks: Assess the magnitude and probability of risks; 3) Manage risks: Manage risks through diversification, margin of safety, in-depth research, long-term holding, etc.; 4) Not avoiding risks: Investment necessarily involves risks; the key is management rather than avoidance. Risk management is an important component of successful investing."
    }
  },
  {
    id: 124,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'耐心'（Patience）的重要性是什么？",
      en: "In value investing, what is the importance of 'Patience'?"
    },
    options: {
      zh: [
        "没有重要性",
        "价值实现需要时间，市场可能需要很长时间才能认识到公司价值。耐心可以：1) 等待价值实现；2) 避免频繁交易；3) 享受复利效应；4) 避免情绪化决策",
        "耐心就是永远不卖"
      ],
      en: [
        "No importance",
        "Value realization takes time, and the market may take a long time to recognize company value. Patience can: 1) Wait for value realization; 2) Avoid frequent trading; 3) Enjoy the compounding effect; 4) Avoid emotional decisions",
        "Patience means never selling"
      ]
    },
    correct: 1,
    explanation: {
      zh: "耐心在价值投资中的重要性：1) 价值实现需要时间：市场可能需要很长时间才能认识到公司价值；2) 避免频繁交易：耐心持有，避免因短期波动而频繁交易；3) 享受复利：长期持有优质公司，享受复利增长；4) 避免情绪化：耐心可以避免因市场波动而做出情绪化决策。巴菲特说：'股票市场是财富从没有耐心的人转移到有耐心的人的工具。'",
      en: "The importance of patience in value investing: 1) Value realization takes time: The market may take a long time to recognize company value; 2) Avoid frequent trading: Patient holding, avoid frequent trading due to short-term fluctuations; 3) Enjoy compounding: Long-term holding of quality companies, enjoy compound growth; 4) Avoid emotional decisions: Patience can avoid making emotional decisions due to market fluctuations. Buffett said: 'The stock market is a device for transferring money from the impatient to the patient.'"
    }
  },
  {
    id: 125,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'独立思考'（Independent Thinking）的重要性是什么？",
      en: "In investing, what is the importance of 'Independent Thinking'?"
    },
    options: {
      zh: [
        "没有重要性，应该跟随市场",
        "市场经常出错，投资者应该基于自己的研究和分析做决策，而不是盲目跟随市场情绪或他人意见。独立思考可以：1) 发现被市场低估的机会；2) 避免从众心理；3) 坚持投资原则",
        "独立思考就是总是与市场相反"
      ],
      en: [
        "No importance, should follow the market",
        "Markets are often wrong. Investors should make decisions based on their own research and analysis rather than blindly following market sentiment or others' opinions. Independent thinking can: 1) Discover opportunities undervalued by the market; 2) Avoid herd mentality; 3) Adhere to investment principles",
        "Independent thinking means always opposite to the market"
      ]
    },
    correct: 1,
    explanation: {
      zh: "独立思考的重要性：1) 市场经常出错：市场情绪可能导致价格偏离价值；2) 发现机会：通过独立思考，可以发现被市场低估的机会；3) 避免从众：不随波逐流，基于自己的分析做决策；4) 坚持原则：在市场波动时，独立思考有助于坚持投资原则。但独立思考不等于固执，应该保持开放心态，不断学习和改进。",
      en: "The importance of independent thinking: 1) Markets are often wrong: Market sentiment may cause prices to deviate from value; 2) Discover opportunities: Through independent thinking, opportunities undervalued by the market can be discovered; 3) Avoid herd mentality: Don't follow the crowd, make decisions based on your own analysis; 4) Adhere to principles: During market fluctuations, independent thinking helps adhere to investment principles. However, independent thinking does not mean stubbornness; one should maintain an open mind and continuously learn and improve."
    }
  },
  {
    id: 126,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'买入并持有'（Buy and Hold）策略适用于所有情况吗？",
      en: "In value investing, does the 'Buy and Hold' strategy apply to all situations?"
    },
    options: {
      zh: [
        "是的，买入后永远持有",
        "不是，买入并持有适用于优质公司，但当公司基本面恶化、价格远高于价值、或发现更好机会时，应该卖出",
        "买入并持有没有用"
      ],
      en: [
        "Yes, hold forever after buying",
        "No, buy and hold applies to quality companies, but should sell when company fundamentals deteriorate, price is far above value, or better opportunities are found",
        "Buy and hold is useless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "买入并持有不是永远持有：1) 适用于优质公司：对于拥有强大护城河、持续成长的优质公司，买入并持有是好的策略；2) 需要定期评估：应该定期评估公司基本面和估值；3) 应该卖出的情况：公司基本面恶化、价格远高于价值、发现更好机会、投资逻辑变化；4) 动态调整：根据情况动态调整持仓。买入并持有是策略，不是教条。",
      en: "Buy and hold does not mean holding forever: 1) Applies to quality companies: For quality companies with strong moats and continuous growth, buy and hold is a good strategy; 2) Requires regular assessment: Should regularly assess company fundamentals and valuation; 3) Situations to sell: Company fundamentals deteriorate, price is far above value, better opportunities are found, investment thesis changes; 4) Dynamic adjustment: Dynamically adjust positions according to circumstances. Buy and hold is a strategy, not a dogma."
    }
  },
  {
    id: 127,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'成本平均法'（Dollar-Cost Averaging）的作用是什么？",
      en: "In investing, what is the role of 'Dollar-Cost Averaging'?"
    },
    options: {
      zh: [
        "没有作用",
        "通过定期定额投资，可以在市场波动中平均成本，降低市场时机选择的风险，适合长期投资",
        "成本平均法总是最好的策略"
      ],
      en: [
        "No role",
        "Through regular fixed-amount investing, costs can be averaged during market fluctuations, reducing the risk of market timing, suitable for long-term investing",
        "Dollar-cost averaging is always the best strategy"
      ]
    },
    correct: 1,
    explanation: {
      zh: "成本平均法的作用：1) 平均成本：通过定期定额投资，可以在市场波动中平均买入成本；2) 降低时机风险：不需要准确预测市场时机；3) 纪律投资：强制定期投资，避免情绪影响；4) 适合长期：适合长期投资策略。但成本平均法也有局限性：如果市场持续上涨，可能错过一次性买入的机会；如果市场持续下跌，可能持续亏损。",
      en: "The role of dollar-cost averaging: 1) Average costs: Through regular fixed-amount investing, average purchase costs during market fluctuations; 2) Reduce timing risk: No need to accurately predict market timing; 3) Disciplined investing: Forces regular investing, avoiding emotional influence; 4) Suitable for long-term: Suitable for long-term investment strategies. However, dollar-cost averaging also has limitations: If the market continues to rise, may miss one-time buying opportunities; if the market continues to fall, may continue to lose money."
    }
  },
  {
    id: 128,
    topic: "investment-strategy",
    question: {
      zh: "在价值投资中，'质量优先'（Quality First）还是'价格优先'（Price First）？",
      en: "In value investing, is it 'Quality First' or 'Price First'?"
    },
    options: {
      zh: [
        "只看价格",
        "质量优先，但价格也要合理。宁愿以合理价格买入优质公司，也不要以低价买入劣质公司。优质公司的长期回报通常更好",
        "只看质量"
      ],
      en: [
        "Only look at price",
        "Quality first, but price should also be reasonable. Prefer buying quality companies at reasonable prices rather than buying poor companies at low prices. Quality companies usually have better long-term returns",
        "Only look at quality"
      ]
    },
    correct: 1,
    explanation: {
      zh: "质量优先，但价格也要合理：1) 质量优先：优质公司（强大护城河、优秀管理、持续成长）的长期回报通常更好；2) 价格要合理：即使优质公司，如果价格过高，也不是好投资；3) 避免价值陷阱：低价买入劣质公司可能是价值陷阱；4) 理想组合：以合理价格买入优质公司。巴菲特说：'以合理价格买入优质公司，胜过以低价买入普通公司。'",
      en: "Quality first, but price should also be reasonable: 1) Quality first: Quality companies (strong moats, excellent management, continuous growth) usually have better long-term returns; 2) Price should be reasonable: Even quality companies, if prices are too high, are not good investments; 3) Avoid value traps: Buying poor companies at low prices may be value traps; 4) Ideal combination: Buy quality companies at reasonable prices. Buffett said: 'It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.'"
    }
  },
  {
    id: 129,
    topic: "investment-strategy",
    question: {
      zh: "在投资中，'学习能力'（Learning Ability）的重要性是什么？",
      en: "In investing, what is the importance of 'Learning Ability'?"
    },
    options: {
      zh: [
        "没有重要性",
        "投资是一个持续学习的过程。市场在变化，公司、行业、经济环境都在变化。持续学习可以：1) 扩大能力圈；2) 适应市场变化；3) 提高投资技能；4) 发现新机会",
        "学习一次就够了"
      ],
      en: [
        "No importance",
        "Investing is a continuous learning process. Markets change, companies, industries, and economic environments all change. Continuous learning can: 1) Expand the circle of competence; 2) Adapt to market changes; 3) Improve investment skills; 4) Discover new opportunities",
        "Learning once is enough"
      ]
    },
    correct: 1,
    explanation: {
      zh: "学习能力的重要性：1) 持续学习：投资是持续学习的过程，市场、公司、行业都在变化；2) 扩大能力圈：通过学习，可以扩大投资能力圈，发现更多机会；3) 适应变化：市场环境在变化，需要不断学习适应；4) 提高技能：持续学习可以提高分析能力、判断能力。巴菲特和芒格都是终身学习者，他们强调阅读和学习的重要性。",
      en: "The importance of learning ability: 1) Continuous learning: Investing is a continuous learning process; markets, companies, and industries are all changing; 2) Expand circle of competence: Through learning, can expand investment circle of competence and discover more opportunities; 3) Adapt to changes: Market environment is changing, need to continuously learn and adapt; 4) Improve skills: Continuous learning can improve analytical and judgment abilities. Buffett and Munger are both lifelong learners, emphasizing the importance of reading and learning."
    }
  },
  // Market & Indices - Additional questions to reach 20
  {
    id: 130,
    topic: "market-indices",
    question: {
      zh: "市场指数的'市值加权'（Market-Cap Weighted）和'等权重'（Equal-Weighted）的区别是什么？",
      en: "What is the difference between 'Market-Cap Weighted' and 'Equal-Weighted' market indices?"
    },
    options: {
      zh: [
        "没有区别",
        "市值加权指数中，大市值公司对指数影响更大；等权重指数中，所有成分股权重相同。等权重指数更能反映小公司的表现",
        "只有市值加权"
      ],
      en: [
        "No difference",
        "In market-cap weighted indices, large-cap companies have greater impact on the index; in equal-weighted indices, all constituent stocks have the same weight. Equal-weighted indices better reflect the performance of small companies",
        "Only market-cap weighted"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市值加权指数中，大市值公司（如苹果、微软）对指数的影响远大于小公司。等权重指数中，所有成分股权重相同（如每只股票1%），更能反映小公司的表现。例如，S&P 500是市值加权的，如果大公司上涨，即使小公司下跌，指数也可能上涨。等权重指数更能反映市场的平均表现。",
      en: "In market-cap weighted indices, large-cap companies (such as Apple, Microsoft) have far greater impact on the index than small companies. In equal-weighted indices, all constituent stocks have the same weight (such as 1% per stock), better reflecting the performance of small companies. For example, the S&P 500 is market-cap weighted; if large companies rise, even if small companies fall, the index may still rise. Equal-weighted indices better reflect the average market performance."
    }
  },
  {
    id: 131,
    topic: "market-indices",
    question: {
      zh: "在分析市场指数时，'指数基金'（Index Fund）和'主动管理基金'（Active Fund）的主要区别是什么？",
      en: "When analyzing market indices, what is the main difference between 'Index Funds' and 'Active Funds'?"
    },
    options: {
      zh: [
        "没有区别",
        "指数基金被动跟踪指数，费用低；主动管理基金试图超越指数，费用高。长期来看，大多数主动基金难以持续超越指数",
        "只有主动基金"
      ],
      en: [
        "No difference",
        "Index funds passively track indices with low fees; active funds try to outperform indices with high fees. Long-term, most active funds find it difficult to consistently outperform indices",
        "Only active funds"
      ]
    },
    correct: 1,
    explanation: {
      zh: "指数基金被动跟踪市场指数（如S&P 500），费用低（通常0.1-0.5%），目标是获得与指数相同的回报。主动管理基金由基金经理主动选股，试图超越指数，费用高（通常1-2%）。长期来看，大多数主动基金难以持续超越指数，因为：1) 高费用侵蚀回报；2) 市场效率；3) 选股难度。",
      en: "Index funds passively track market indices (such as S&P 500) with low fees (usually 0.1-0.5%), aiming to achieve the same returns as the index. Active funds are actively managed by fund managers trying to outperform indices with high fees (usually 1-2%). Long-term, most active funds find it difficult to consistently outperform indices because: 1) High fees erode returns; 2) Market efficiency; 3) Difficulty in stock selection."
    }
  },
  {
    id: 132,
    topic: "market-indices",
    question: {
      zh: "市场指数的'再平衡'（Rebalancing）是什么意思？",
      en: "What does 'Rebalancing' of market indices mean?"
    },
    options: {
      zh: [
        "没有意义",
        "定期调整指数成分股和权重，确保指数能够准确反映市场状况。成分股可能因市值变化、公司合并、破产等原因被替换",
        "再平衡就是改变指数计算方法"
      ],
      en: [
        "No meaning",
        "Regularly adjust index constituent stocks and weights to ensure the index accurately reflects market conditions. Constituent stocks may be replaced due to market cap changes, company mergers, bankruptcies, etc.",
        "Rebalancing means changing the index calculation method"
      ]
    },
    correct: 1,
    explanation: {
      zh: "指数再平衡是指定期调整指数成分股和权重：1) 成分股调整：因市值变化、公司合并、破产、不符合标准等原因，成分股可能被替换；2) 权重调整：因市值变化，各成分股的权重会自然调整（市值加权）或定期调整（等权重）；3) 保持代表性：确保指数能够准确反映市场状况。",
      en: "Index rebalancing refers to regularly adjusting index constituent stocks and weights: 1) Constituent stock adjustments: Due to market cap changes, company mergers, bankruptcies, not meeting standards, etc., constituent stocks may be replaced; 2) Weight adjustments: Due to market cap changes, weights of constituent stocks will naturally adjust (market-cap weighted) or be regularly adjusted (equal-weighted); 3) Maintain representativeness: Ensure the index accurately reflects market conditions."
    }
  },
  {
    id: 133,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场效率假说'（Efficient Market Hypothesis）的核心观点是什么？",
      en: "When analyzing markets, what is the core view of the 'Efficient Market Hypothesis'?"
    },
    options: {
      zh: [
        "市场总是错误的",
        "市场能够快速、准确地反映所有可用信息，股价已经反映了所有公开信息，因此很难通过分析获得超额回报",
        "市场效率假说没有用"
      ],
      en: [
        "Markets are always wrong",
        "Markets can quickly and accurately reflect all available information, stock prices already reflect all public information, so it's difficult to achieve excess returns through analysis",
        "Efficient Market Hypothesis is useless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场效率假说的核心是：市场能够快速、准确地反映所有可用信息，股价已经反映了所有公开信息。这意味着：1) 很难通过分析获得超额回报；2) 股价波动是随机的；3) 主动管理难以持续超越市场。但市场效率假说也有争议，价值投资者认为市场并不总是有效的，存在定价错误的机会。",
      en: "The core of the Efficient Market Hypothesis is: Markets can quickly and accurately reflect all available information, and stock prices already reflect all public information. This means: 1) It's difficult to achieve excess returns through analysis; 2) Stock price movements are random; 3) Active management finds it difficult to consistently outperform the market. However, the Efficient Market Hypothesis is also controversial; value investors believe markets are not always efficient and there are pricing error opportunities."
    }
  },
  {
    id: 134,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场情绪'（Market Sentiment）对股价的影响是什么？",
      en: "When analyzing markets, what is the impact of 'Market Sentiment' on stock prices?"
    },
    options: {
      zh: [
        "没有影响",
        "市场情绪可能导致股价短期偏离内在价值，但长期来看，股价会回归价值。情绪波动是短期因素，价值是长期因素",
        "情绪决定一切"
      ],
      en: [
        "No impact",
        "Market sentiment may cause stock prices to deviate from intrinsic value in the short term, but long-term, stock prices will return to value. Sentiment fluctuations are short-term factors, value is a long-term factor",
        "Sentiment determines everything"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场情绪的影响：1) 短期影响：情绪可能导致股价短期偏离内在价值（过度乐观时高估，过度悲观时低估）；2) 长期回归：长期来看，股价会回归内在价值；3) 提供机会：情绪波动可能提供买入或卖出机会；4) 噪音：对于长期投资者，情绪波动是噪音，应该关注价值而非情绪。'市场是投票机，但长期是称重机'。",
      en: "The impact of market sentiment: 1) Short-term impact: Sentiment may cause stock prices to deviate from intrinsic value in the short term (overvalued when overly optimistic, undervalued when overly pessimistic); 2) Long-term convergence: Long-term, stock prices will converge to intrinsic value; 3) Provide opportunities: Sentiment fluctuations may provide buying or selling opportunities; 4) Noise: For long-term investors, sentiment fluctuations are noise; should focus on value rather than sentiment. 'The market is a voting machine, but in the long run, it's a weighing machine.'"
    }
  },
  {
    id: 135,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场周期'（Market Cycle）的特点是什么？",
      en: "When analyzing markets, what are the characteristics of 'Market Cycles'?"
    },
    options: {
      zh: [
        "市场没有周期",
        "市场会经历牛市、熊市、调整等不同阶段，每个阶段有不同的特征。理解市场周期有助于投资决策，但很难准确预测周期转折点",
        "市场周期可以准确预测"
      ],
      en: [
        "Markets have no cycles",
        "Markets go through different phases such as bull markets, bear markets, corrections, etc., each with different characteristics. Understanding market cycles helps investment decisions, but it's difficult to accurately predict cycle turning points",
        "Market cycles can be accurately predicted"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场周期的特点：1) 不同阶段：牛市（上涨）、熊市（下跌）、调整（短期下跌）、反弹（短期上涨）；2) 不同特征：每个阶段有不同的情绪、估值、交易量特征；3) 难以预测：虽然市场有周期，但很难准确预测转折点；4) 投资启示：理解周期有助于投资决策，但应该基于价值而非预测周期。",
      en: "Characteristics of market cycles: 1) Different phases: Bull markets (rising), bear markets (falling), corrections (short-term declines), rebounds (short-term rises); 2) Different characteristics: Each phase has different sentiment, valuation, and trading volume characteristics; 3) Difficult to predict: Although markets have cycles, it's difficult to accurately predict turning points; 4) Investment implications: Understanding cycles helps investment decisions, but should be based on value rather than predicting cycles."
    }
  },
  {
    id: 136,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场深度'（Market Depth）指的是什么？",
      en: "When analyzing markets, what does 'Market Depth' refer to?"
    },
    options: {
      zh: [
        "市场下跌的深度",
        "市场能够承受大额交易而不显著影响价格的能力。市场深度越大，大额交易对价格的影响越小",
        "市场深度没有意义"
      ],
      en: [
        "The depth of market decline",
        "The market's ability to absorb large trades without significantly affecting prices. The greater the market depth, the smaller the impact of large trades on prices",
        "Market depth is meaningless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场深度是指市场能够承受大额交易而不显著影响价格的能力。市场深度大意味着：1) 有足够的买卖盘；2) 大额交易不会导致价格大幅波动；3) 流动性好。市场深度小的市场，大额交易可能导致价格大幅波动。市场深度是衡量市场流动性的重要指标。",
      en: "Market depth refers to the market's ability to absorb large trades without significantly affecting prices. Large market depth means: 1) Sufficient buy and sell orders; 2) Large trades won't cause significant price fluctuations; 3) Good liquidity. Markets with small depth may experience significant price fluctuations from large trades. Market depth is an important metric for measuring market liquidity."
    }
  },
  {
    id: 137,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场波动性'（Market Volatility）增加，对投资者意味着什么？",
      en: "When analyzing markets, what does increased 'Market Volatility' mean for investors?"
    },
    options: {
      zh: [
        "应该立即卖出",
        "市场波动性增加可能带来风险和机会。对于长期价值投资者，波动可能提供以更低价格买入优质公司的机会",
        "波动性增加总是坏事"
      ],
      en: [
        "Should sell immediately",
        "Increased market volatility may bring risks and opportunities. For long-term value investors, volatility may provide opportunities to buy quality companies at lower prices",
        "Increased volatility is always bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场波动性增加的影响：1) 风险增加：价格波动更大，短期风险增加；2) 可能带来机会：对于长期价值投资者，如果公司内在价值没有变化，价格下跌可能提供买入机会；3) 情绪影响：波动可能引发恐慌或贪婪；4) 长期视角：对于长期投资者，短期波动是噪音，应该关注公司价值。",
      en: "The impact of increased market volatility: 1) Increased risk: Larger price fluctuations, increased short-term risk; 2) May bring opportunities: For long-term value investors, if company intrinsic value hasn't changed, price declines may provide buying opportunities; 3) Emotional impact: Volatility may trigger panic or greed; 4) Long-term perspective: For long-term investors, short-term volatility is noise; should focus on company value."
    }
  },
  {
    id: 138,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场集中度'（Market Concentration）指的是什么？",
      en: "When analyzing markets, what does 'Market Concentration' refer to?"
    },
    options: {
      zh: [
        "市场下跌的集中程度",
        "少数大公司占市场总市值的比例。集中度高意味着少数大公司主导市场，它们的表现对整体市场影响很大",
        "市场集中度没有意义"
      ],
      en: [
        "The concentration of market decline",
        "The proportion of total market capitalization accounted for by a few large companies. High concentration means a few large companies dominate the market, and their performance has a great impact on the overall market",
        "Market concentration is meaningless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场集中度是指少数大公司占市场总市值的比例。例如，如果前10大公司占S&P 500总市值的30%，说明市场集中度较高。高集中度意味着：1) 少数大公司主导市场；2) 这些公司的表现对整体市场影响很大；3) 市场表现可能不能代表所有公司。了解市场集中度有助于理解市场结构和风险。",
      en: "Market concentration refers to the proportion of total market capitalization accounted for by a few large companies. For example, if the top 10 companies account for 30% of the S&P 500's total market cap, it indicates high market concentration. High concentration means: 1) A few large companies dominate the market; 2) These companies' performance has a great impact on the overall market; 3) Market performance may not represent all companies. Understanding market concentration helps understand market structure and risks."
    }
  },
  {
    id: 139,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场流动性'（Market Liquidity）的重要性是什么？",
      en: "When analyzing markets, what is the importance of 'Market Liquidity'?"
    },
    options: {
      zh: [
        "没有重要性",
        "流动性影响交易的便利性和成本。高流动性市场：1) 买卖容易；2) 交易成本低；3) 价格发现更准确。低流动性市场可能导致：1) 买卖困难；2) 交易成本高；3) 价格波动大",
        "流动性越高越好"
      ],
      en: [
        "No importance",
        "Liquidity affects the convenience and cost of trading. High-liquidity markets: 1) Easy to buy and sell; 2) Low transaction costs; 3) More accurate price discovery. Low-liquidity markets may lead to: 1) Difficulty buying and selling; 2) High transaction costs; 3) Large price fluctuations",
        "Higher liquidity is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场流动性的重要性：1) 交易便利性：高流动性市场买卖容易，低流动性市场可能难以成交；2) 交易成本：高流动性市场买卖价差小，交易成本低；3) 价格发现：高流动性市场价格发现更准确；4) 价格波动：低流动性市场，大额交易可能导致价格大幅波动。流动性是市场健康的重要指标。",
      en: "The importance of market liquidity: 1) Trading convenience: High-liquidity markets are easy to trade, low-liquidity markets may be difficult to execute; 2) Transaction costs: High-liquidity markets have small bid-ask spreads and low transaction costs; 3) Price discovery: High-liquidity markets have more accurate price discovery; 4) Price fluctuations: In low-liquidity markets, large trades may cause significant price fluctuations. Liquidity is an important indicator of market health."
    }
  },
  {
    id: 140,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场估值'（Market Valuation）如何影响投资决策？",
      en: "When analyzing markets, how does 'Market Valuation' affect investment decisions?"
    },
    options: {
      zh: [
        "没有影响",
        "市场整体估值水平（如整体P/E比率）可以反映市场是否高估或低估。高估值时应该谨慎，低估值时可能有更多机会，但更重要的是关注个股价值",
        "只看市场估值就够了"
      ],
      en: [
        "No impact",
        "Overall market valuation levels (such as overall P/E ratio) can reflect whether the market is overvalued or undervalued. Should be cautious when valuations are high, may have more opportunities when valuations are low, but more important is to focus on individual stock value",
        "Only looking at market valuation is enough"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场估值的影响：1) 整体水平：市场整体估值可以反映市场是否高估或低估；2) 投资启示：高估值时应该谨慎，低估值时可能有更多机会；3) 个股更重要：即使市场整体高估，也可能有个股被低估；4) 长期视角：市场估值是参考，但更重要的是关注个股的内在价值。",
      en: "The impact of market valuation: 1) Overall level: Overall market valuation can reflect whether the market is overvalued or undervalued; 2) Investment implications: Should be cautious when valuations are high, may have more opportunities when valuations are low; 3) Individual stocks more important: Even if the overall market is overvalued, there may be undervalued individual stocks; 4) Long-term perspective: Market valuation is a reference, but more important is to focus on individual stock intrinsic value."
    }
  },
  {
    id: 141,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场情绪指标'（Market Sentiment Indicators）的作用是什么？",
      en: "When analyzing markets, what is the role of 'Market Sentiment Indicators'?"
    },
    options: {
      zh: [
        "没有作用",
        "帮助识别市场情绪是否过度乐观或悲观，可能提供逆向投资的机会。但情绪指标只是参考，应该结合基本面分析",
        "情绪指标决定一切"
      ],
      en: [
        "No role",
        "Help identify whether market sentiment is overly optimistic or pessimistic, may provide contrarian investment opportunities. However, sentiment indicators are only references and should be combined with fundamental analysis",
        "Sentiment indicators determine everything"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场情绪指标的作用：1) 识别情绪：帮助识别市场是否过度乐观或悲观；2) 逆向机会：极端情绪可能提供逆向投资机会；3) 只是参考：情绪指标只是参考，不能单独使用；4) 结合基本面：应该结合基本面分析，基于价值做决策。常见的情绪指标包括：VIX恐慌指数、投资者情绪调查、融资融券比例等。",
      en: "The role of market sentiment indicators: 1) Identify sentiment: Help identify whether the market is overly optimistic or pessimistic; 2) Contrarian opportunities: Extreme sentiment may provide contrarian investment opportunities; 3) Only references: Sentiment indicators are only references and cannot be used alone; 4) Combine fundamentals: Should be combined with fundamental analysis, make decisions based on value. Common sentiment indicators include: VIX fear index, investor sentiment surveys, margin trading ratios, etc."
    }
  },
  {
    id: 142,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场宽度'（Market Breadth）指的是什么？",
      en: "When analyzing markets, what does 'Market Breadth' refer to?"
    },
    options: {
      zh: [
        "市场下跌的宽度",
        "参与上涨或下跌的股票数量。市场宽度好意味着多数股票上涨，市场宽度差意味着只有少数股票上涨（如只有大公司上涨）",
        "市场宽度没有意义"
      ],
      en: [
        "The width of market decline",
        "The number of stocks participating in rises or falls. Good market breadth means most stocks are rising, poor market breadth means only a few stocks are rising (such as only large companies rising)",
        "Market breadth is meaningless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场宽度是指参与上涨或下跌的股票数量。市场宽度好意味着：1) 多数股票上涨，市场健康；2) 上涨有广泛基础。市场宽度差意味着：1) 只有少数股票上涨（如只有大公司上涨）；2) 市场上涨可能不健康，缺乏广泛基础。市场宽度是衡量市场健康的重要指标。",
      en: "Market breadth refers to the number of stocks participating in rises or falls. Good market breadth means: 1) Most stocks are rising, market is healthy; 2) Rises have a broad base. Poor market breadth means: 1) Only a few stocks are rising (such as only large companies rising); 2) Market rises may be unhealthy, lacking a broad base. Market breadth is an important metric for measuring market health."
    }
  },
  {
    id: 143,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场趋势'（Market Trend）和'市场波动'（Market Volatility）的区别是什么？",
      en: "When analyzing markets, what is the difference between 'Market Trend' and 'Market Volatility'?"
    },
    options: {
      zh: [
        "没有区别",
        "市场趋势是价格的长期方向（上涨、下跌、横盘），市场波动是价格的短期波动幅度。趋势反映方向，波动反映不确定性",
        "趋势和波动是一回事"
      ],
      en: [
        "No difference",
        "Market trend is the long-term direction of prices (rising, falling, sideways), market volatility is the short-term fluctuation magnitude of prices. Trend reflects direction, volatility reflects uncertainty",
        "Trend and volatility are the same thing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场趋势和波动的区别：1) 趋势：价格的长期方向，如牛市（长期上涨）、熊市（长期下跌）；2) 波动：价格的短期波动幅度，反映不确定性；3) 关系：趋势中可以有很多波动，波动不影响长期趋势；4) 投资启示：长期投资者应该关注趋势（价值），短期波动是噪音。",
      en: "The difference between market trend and volatility: 1) Trend: Long-term direction of prices, such as bull markets (long-term rising), bear markets (long-term falling); 2) Volatility: Short-term fluctuation magnitude of prices, reflecting uncertainty; 3) Relationship: Trends can have many fluctuations; fluctuations don't affect long-term trends; 4) Investment implications: Long-term investors should focus on trends (value), short-term volatility is noise."
    }
  },
  {
    id: 144,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场效率'（Market Efficiency）对投资者的启示是什么？",
      en: "When analyzing markets, what are the implications of 'Market Efficiency' for investors?"
    },
    options: {
      zh: [
        "没有启示",
        "如果市场是高效的，主动管理难以持续超越市场，指数投资可能是更好的选择。但如果市场不完全高效，价值投资可能发现被低估的机会",
        "市场总是高效的"
      ],
      en: [
        "No implications",
        "If markets are efficient, active management finds it difficult to consistently outperform the market, and index investing may be a better choice. However, if markets are not fully efficient, value investing may discover undervalued opportunities",
        "Markets are always efficient"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场效率的启示：1) 如果市场高效：主动管理难以持续超越市场，指数投资（低成本）可能是更好的选择；2) 如果市场不完全高效：可能存在定价错误，价值投资可能发现被低估的机会；3) 实际应用：大多数市场可能介于完全高效和完全低效之间，既有定价错误的机会，也有市场效率的约束。",
      en: "Implications of market efficiency: 1) If markets are efficient: Active management finds it difficult to consistently outperform the market, index investing (low cost) may be a better choice; 2) If markets are not fully efficient: There may be pricing errors, value investing may discover undervalued opportunities; 3) Practical application: Most markets may be somewhere between fully efficient and fully inefficient, with both pricing error opportunities and market efficiency constraints."
    }
  },
  {
    id: 145,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场结构'（Market Structure）指的是什么？",
      en: "When analyzing markets, what does 'Market Structure' refer to?"
    },
    options: {
      zh: [
        "市场下跌的结构",
        "市场的组织方式，包括：参与者类型（机构、散户）、交易机制、监管框架等。市场结构影响市场效率和流动性",
        "市场结构没有意义"
      ],
      en: [
        "The structure of market decline",
        "The organization of markets, including: types of participants (institutions, retail investors), trading mechanisms, regulatory frameworks, etc. Market structure affects market efficiency and liquidity",
        "Market structure is meaningless"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场结构是指市场的组织方式：1) 参与者：机构投资者、散户投资者、做市商等；2) 交易机制：交易所、场外交易、电子交易等；3) 监管框架：监管规则、信息披露要求等。市场结构影响：1) 市场效率；2) 流动性；3) 价格发现；4) 投资者行为。了解市场结构有助于理解市场运作。",
      en: "Market structure refers to how markets are organized: 1) Participants: Institutional investors, retail investors, market makers, etc.; 2) Trading mechanisms: Exchanges, over-the-counter trading, electronic trading, etc.; 3) Regulatory frameworks: Regulatory rules, disclosure requirements, etc. Market structure affects: 1) Market efficiency; 2) Liquidity; 3) Price discovery; 4) Investor behavior. Understanding market structure helps understand market operations."
    }
  },
  {
    id: 146,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场周期'和'经济周期'的关系是什么？",
      en: "When analyzing markets, what is the relationship between 'Market Cycles' and 'Economic Cycles'?"
    },
    options: {
      zh: [
        "没有关系",
        "市场周期通常领先于经济周期。股市通常在经济增长之前上涨，在经济衰退之前下跌，因为股市反映的是对未来经济的预期",
        "市场周期和经济周期完全同步"
      ],
      en: [
        "No relationship",
        "Market cycles usually lead economic cycles. Stock markets typically rise before economic growth and fall before economic recessions, because stock markets reflect expectations for future economic conditions",
        "Market cycles and economic cycles are completely synchronized"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场周期和经济周期的关系：1) 市场领先：股市通常领先于经济，因为股市反映的是对未来经济的预期；2) 提前反应：股市可能在经济增长之前上涨，在经济衰退之前下跌；3) 预期驱动：市场基于预期而非当前经济状况；4) 时间差：市场周期和经济周期有时间差，可能几个月到一年。",
      en: "The relationship between market cycles and economic cycles: 1) Market leads: Stock markets usually lead the economy because stock markets reflect expectations for future economic conditions; 2) Anticipatory reaction: Stock markets may rise before economic growth and fall before economic recessions; 3) Expectation-driven: Markets are based on expectations rather than current economic conditions; 4) Time lag: There is a time lag between market cycles and economic cycles, possibly months to a year."
    }
  },
  {
    id: 147,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场修正'（Market Correction）和'熊市'（Bear Market）的区别是什么？",
      en: "When analyzing markets, what is the difference between a 'Market Correction' and a 'Bear Market'?"
    },
    options: {
      zh: [
        "没有区别",
        "市场修正是短期下跌（通常10-20%），是正常调整；熊市是长期下跌（通常20%以上），持续时间更长。修正通常是健康的，熊市可能反映经济问题",
        "修正和熊市是一回事"
      ],
      en: [
        "No difference",
        "Market correction is a short-term decline (usually 10-20%), a normal adjustment; bear market is a long-term decline (usually 20%+), lasting longer. Corrections are usually healthy, bear markets may reflect economic problems",
        "Corrections and bear markets are the same thing"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场修正和熊市的区别：1) 修正：短期下跌（通常10-20%），持续时间短（通常几个月），是正常调整；2) 熊市：长期下跌（通常20%以上），持续时间长（通常一年以上），可能反映经济衰退；3) 性质：修正是健康的调整，熊市可能反映严重的经济问题；4) 投资启示：修正可能是买入机会，熊市需要更谨慎。",
      en: "The difference between market correction and bear market: 1) Correction: Short-term decline (usually 10-20%), short duration (usually months), a normal adjustment; 2) Bear market: Long-term decline (usually 20%+), long duration (usually a year or more), may reflect economic recession; 3) Nature: Corrections are healthy adjustments, bear markets may reflect serious economic problems; 4) Investment implications: Corrections may be buying opportunities, bear markets require more caution."
    }
  },
  {
    id: 148,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场泡沫'（Market Bubble）的特征是什么？",
      en: "When analyzing markets, what are the characteristics of a 'Market Bubble'?"
    },
    options: {
      zh: [
        "市场上涨",
        "价格远高于内在价值、投资者情绪极度乐观、大量投机行为、估值指标处于历史高位。泡沫最终会破裂，价格会大幅下跌",
        "市场泡沫是好事"
      ],
      en: [
        "Market rising",
        "Prices far above intrinsic value, extremely optimistic investor sentiment, large amounts of speculation, valuation metrics at historical highs. Bubbles eventually burst, prices will fall significantly",
        "Market bubbles are good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场泡沫的特征：1) 价格高估：价格远高于内在价值；2) 情绪极端：投资者情绪极度乐观，认为价格会永远上涨；3) 投机盛行：大量投机行为，非理性投资；4) 估值极端：估值指标（如P/E）处于历史高位；5) 最终破裂：泡沫最终会破裂，价格会大幅下跌。识别泡沫有助于避免投资风险。",
      en: "Characteristics of market bubbles: 1) Overvaluation: Prices far above intrinsic value; 2) Extreme sentiment: Extremely optimistic investor sentiment, believing prices will rise forever; 3) Speculation prevalent: Large amounts of speculation, irrational investing; 4) Extreme valuations: Valuation metrics (such as P/E) at historical highs; 5) Eventually burst: Bubbles eventually burst, prices will fall significantly. Identifying bubbles helps avoid investment risks."
    }
  },
  {
    id: 149,
    topic: "market-indices",
    question: {
      zh: "在分析市场时，'市场底部'（Market Bottom）的特征是什么？",
      en: "When analyzing markets, what are the characteristics of a 'Market Bottom'?"
    },
    options: {
      zh: [
        "市场上涨",
        "价格可能低于价值、投资者情绪极度悲观、估值处于历史低位、交易量可能放大。但很难准确识别底部，应该基于价值而非预测底部",
        "市场底部可以准确预测"
      ],
      en: [
        "Market rising",
        "Prices may be below value, extremely pessimistic investor sentiment, valuations at historical lows, trading volume may increase. However, it's difficult to accurately identify bottoms; should be based on value rather than predicting bottoms",
        "Market bottoms can be accurately predicted"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场底部的特征：1) 价格低估：价格可能低于内在价值；2) 情绪极端：投资者情绪极度悲观，认为价格会永远下跌；3) 估值低位：估值指标处于历史低位；4) 交易量：交易量可能放大（恐慌性抛售）。但很难准确识别底部，应该基于价值判断买入，而非试图预测底部。",
      en: "Characteristics of market bottoms: 1) Undervaluation: Prices may be below intrinsic value; 2) Extreme sentiment: Extremely pessimistic investor sentiment, believing prices will fall forever; 3) Low valuations: Valuation metrics at historical lows; 4) Trading volume: Trading volume may increase (panic selling). However, it's difficult to accurately identify bottoms; should buy based on value judgment rather than trying to predict bottoms."
    }
  },
  // Economics - Additional questions to reach 20
  {
    id: 150,
    topic: "economics",
    question: {
      zh: "在经济学中，'GDP'（国内生产总值）和'GNP'（国民生产总值）的区别是什么？",
      en: "In economics, what is the difference between 'GDP' (Gross Domestic Product) and 'GNP' (Gross National Product)?"
    },
    options: {
      zh: [
        "没有区别",
        "GDP衡量国内生产的价值（无论生产者国籍），GNP衡量国民生产的价值（无论生产地点）。GDP = GNP + 来自国外的净收入",
        "GDP总是大于GNP"
      ],
      en: [
        "No difference",
        "GDP measures the value of domestic production (regardless of producer nationality), GNP measures the value of national production (regardless of production location). GDP = GNP + Net income from abroad",
        "GDP is always greater than GNP"
      ]
    },
    correct: 1,
    explanation: {
      zh: "GDP和GNP的区别：1) GDP（国内生产总值）：衡量在一国境内生产的最终产品和服务的价值，无论生产者是本国人还是外国人；2) GNP（国民生产总值）：衡量一国国民生产的最终产品和服务的价值，无论生产地点在国内还是国外；3) 关系：GDP = GNP + 来自国外的净收入。对于大多数国家，GDP和GNP差异不大。",
      en: "The difference between GDP and GNP: 1) GDP (Gross Domestic Product): Measures the value of final goods and services produced within a country's borders, regardless of whether producers are nationals or foreigners; 2) GNP (Gross National Product): Measures the value of final goods and services produced by a country's nationals, regardless of production location; 3) Relationship: GDP = GNP + Net income from abroad. For most countries, the difference between GDP and GNP is small."
    }
  },
  {
    id: 151,
    topic: "economics",
    question: {
      zh: "在经济学中，'通货膨胀'（Inflation）和'通货紧缩'（Deflation）对经济的影响是什么？",
      en: "In economics, what are the impacts of 'Inflation' and 'Deflation' on the economy?"
    },
    options: {
      zh: [
        "都没有影响",
        "适度通胀通常有利于经济增长（刺激消费和投资），但恶性通胀有害。通缩通常有害（抑制消费和投资，增加债务负担）",
        "通胀和通缩都是好事"
      ],
      en: [
        "Both have no impact",
        "Moderate inflation usually benefits economic growth (stimulates consumption and investment), but hyperinflation is harmful. Deflation is usually harmful (suppresses consumption and investment, increases debt burden)",
        "Both inflation and deflation are good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "通胀和通缩的影响：1) 适度通胀（2-3%）：通常有利于经济增长，刺激消费和投资，降低实际债务负担；2) 恶性通胀：破坏经济稳定，货币贬值，储蓄价值下降；3) 通缩：通常有害，抑制消费和投资（预期价格下降），增加实际债务负担，可能导致经济衰退。央行通常目标是将通胀控制在适度水平。",
      en: "The impacts of inflation and deflation: 1) Moderate inflation (2-3%): Usually benefits economic growth, stimulates consumption and investment, reduces real debt burden; 2) Hyperinflation: Destroys economic stability, currency devaluation, savings value decline; 3) Deflation: Usually harmful, suppresses consumption and investment (expecting price declines), increases real debt burden, may lead to economic recession. Central banks usually aim to keep inflation at moderate levels."
    }
  },
  {
    id: 152,
    topic: "economics",
    question: {
      zh: "在经济学中，'货币政策'（Monetary Policy）和'财政政策'（Fiscal Policy）的区别是什么？",
      en: "In economics, what is the difference between 'Monetary Policy' and 'Fiscal Policy'?"
    },
    options: {
      zh: [
        "没有区别",
        "货币政策由央行执行（通过利率、货币供应量），财政政策由政府执行（通过税收、政府支出）。两者都用于调节经济，但工具和影响不同",
        "只有货币政策"
      ],
      en: [
        "No difference",
        "Monetary policy is implemented by central banks (through interest rates, money supply), fiscal policy is implemented by governments (through taxes, government spending). Both are used to regulate the economy, but tools and impacts differ",
        "Only monetary policy"
      ]
    },
    correct: 1,
    explanation: {
      zh: "货币政策和财政政策的区别：1) 执行者：货币政策由央行执行，财政政策由政府执行；2) 工具：货币政策通过利率、货币供应量、准备金率等；财政政策通过税收、政府支出、转移支付等；3) 影响：货币政策主要影响利率和货币供应，财政政策直接影响总需求；4) 时滞：货币政策时滞较短，财政政策时滞较长。两者通常配合使用。",
      en: "The difference between monetary and fiscal policy: 1) Implementers: Monetary policy by central banks, fiscal policy by governments; 2) Tools: Monetary policy through interest rates, money supply, reserve requirements, etc.; fiscal policy through taxes, government spending, transfer payments, etc.; 3) Impact: Monetary policy mainly affects interest rates and money supply, fiscal policy directly affects aggregate demand; 4) Time lag: Monetary policy has shorter lags, fiscal policy has longer lags. Both are usually used together."
    }
  },
  {
    id: 153,
    topic: "economics",
    question: {
      zh: "在经济学中，'失业率'（Unemployment Rate）如何影响经济？",
      en: "In economics, how does the 'Unemployment Rate' affect the economy?"
    },
    options: {
      zh: [
        "没有影响",
        "失业率影响：1) 消费能力（失业者消费减少）；2) 社会稳定性；3) 通胀压力（低失业率可能导致工资上涨和通胀）。自然失业率是正常现象，但过高失业率表明经济问题",
        "失业率越低越好"
      ],
      en: [
        "No impact",
        "Unemployment rate affects: 1) Consumption capacity (unemployed consume less); 2) Social stability; 3) Inflation pressure (low unemployment may lead to wage increases and inflation). Natural unemployment rate is normal, but excessively high unemployment indicates economic problems",
        "Lower unemployment rate is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "失业率的影响：1) 消费能力：失业者收入减少，消费能力下降，影响总需求；2) 社会稳定性：高失业率可能导致社会不稳定；3) 通胀压力：低失业率可能导致劳动力短缺，工资上涨，推高通胀（菲利普斯曲线）；4) 自然失业率：存在自然失业率（摩擦性、结构性失业），这是正常现象。过高失业率表明经济衰退或结构性问题。",
      en: "The impact of unemployment rate: 1) Consumption capacity: Unemployed have reduced income, consumption capacity declines, affecting aggregate demand; 2) Social stability: High unemployment may lead to social instability; 3) Inflation pressure: Low unemployment may lead to labor shortages, wage increases, pushing up inflation (Phillips Curve); 4) Natural unemployment rate: There is a natural unemployment rate (frictional, structural unemployment), which is normal. Excessively high unemployment indicates economic recession or structural problems."
    }
  },
  {
    id: 154,
    topic: "economics",
    question: {
      zh: "在经济学中，'贸易逆差'（Trade Deficit）一定是不好的吗？",
      en: "In economics, is a 'Trade Deficit' necessarily bad?"
    },
    options: {
      zh: [
        "是的，贸易逆差总是坏事",
        "不一定。贸易逆差可能反映：1) 国内需求旺盛；2) 资本流入（外国投资）；3) 比较优势。但如果长期持续且规模过大，可能表明竞争力问题",
        "贸易逆差总是好事"
      ],
      en: [
        "Yes, trade deficit is always bad",
        "Not necessarily. Trade deficit may reflect: 1) Strong domestic demand; 2) Capital inflows (foreign investment); 3) Comparative advantage. However, if it persists long-term and is excessively large, it may indicate competitiveness issues",
        "Trade deficit is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "贸易逆差不一定不好：1) 可能反映需求：国内需求旺盛，进口增加；2) 资本流入：贸易逆差可能伴随资本流入（外国投资），这可能是好事；3) 比较优势：进口具有比较优势的产品可能提高效率；4) 但需关注：如果长期持续且规模过大，可能表明竞争力问题、过度消费、或依赖外债。需要综合分析。",
      en: "Trade deficit is not necessarily bad: 1) May reflect demand: Strong domestic demand, increased imports; 2) Capital inflows: Trade deficit may be accompanied by capital inflows (foreign investment), which may be good; 3) Comparative advantage: Importing products with comparative advantage may improve efficiency; 4) But need attention: If it persists long-term and is excessively large, it may indicate competitiveness issues, overconsumption, or dependence on foreign debt. Need comprehensive analysis."
    }
  },
  {
    id: 155,
    topic: "economics",
    question: {
      zh: "在经济学中，'汇率'（Exchange Rate）如何影响经济？",
      en: "In economics, how does the 'Exchange Rate' affect the economy?"
    },
    options: {
      zh: [
        "没有影响",
        "汇率影响：1) 进出口（本币贬值促进出口，抑制进口）；2) 资本流动；3) 通胀（本币贬值推高进口商品价格）。汇率变动对不同行业影响不同",
        "汇率越高越好"
      ],
      en: [
        "No impact",
        "Exchange rate affects: 1) Imports and exports (currency depreciation promotes exports, suppresses imports); 2) Capital flows; 3) Inflation (currency depreciation pushes up import prices). Exchange rate changes affect different industries differently",
        "Higher exchange rate is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "汇率的影响：1) 进出口：本币贬值使出口商品更便宜（促进出口），进口商品更贵（抑制进口）；2) 资本流动：汇率变动影响资本流动，影响投资和金融市场；3) 通胀：本币贬值推高进口商品价格，可能推高通胀；4) 行业差异：出口导向行业受益于本币贬值，依赖进口的行业受损。汇率是重要的经济调节工具。",
      en: "The impact of exchange rates: 1) Imports and exports: Currency depreciation makes export goods cheaper (promotes exports), import goods more expensive (suppresses imports); 2) Capital flows: Exchange rate changes affect capital flows, affecting investment and financial markets; 3) Inflation: Currency depreciation pushes up import prices, may push up inflation; 4) Industry differences: Export-oriented industries benefit from currency depreciation, import-dependent industries suffer. Exchange rates are important economic adjustment tools."
    }
  },
  {
    id: 156,
    topic: "economics",
    question: {
      zh: "在经济学中，'经济周期'（Business Cycle）的各个阶段是什么？",
      en: "In economics, what are the stages of the 'Business Cycle'?"
    },
    options: {
      zh: [
        "只有增长和衰退",
        "经济周期包括：扩张期（经济增长）、峰值（经济高点）、衰退期（经济收缩）、谷底（经济低点）。然后循环往复",
        "经济周期没有阶段"
      ],
      en: [
        "Only growth and recession",
        "Business cycle includes: Expansion (economic growth), Peak (economic high point), Recession (economic contraction), Trough (economic low point). Then cycles repeat",
        "Business cycle has no stages"
      ]
    },
    correct: 1,
    explanation: {
      zh: "经济周期的阶段：1) 扩张期：经济增长，就业增加，收入上升，消费和投资增加；2) 峰值：经济达到高点，可能出现过热迹象；3) 衰退期：经济收缩，就业减少，收入下降，消费和投资减少；4) 谷底：经济达到低点，然后开始复苏。经济周期是正常现象，但政府政策可以影响周期的幅度和持续时间。",
      en: "Stages of the business cycle: 1) Expansion: Economic growth, employment increases, income rises, consumption and investment increase; 2) Peak: Economy reaches high point, may show signs of overheating; 3) Recession: Economic contraction, employment decreases, income declines, consumption and investment decrease; 4) Trough: Economy reaches low point, then begins recovery. Business cycles are normal, but government policies can affect the amplitude and duration of cycles."
    }
  },
  {
    id: 157,
    topic: "economics",
    question: {
      zh: "在经济学中，'供给侧'（Supply Side）和'需求侧'（Demand Side）的区别是什么？",
      en: "In economics, what is the difference between 'Supply Side' and 'Demand Side'?"
    },
    options: {
      zh: [
        "没有区别",
        "供给侧关注生产能力、生产效率、供给成本等，需求侧关注消费、投资、政府支出等。供给侧政策通过提高生产效率促进增长，需求侧政策通过刺激需求促进增长",
        "只有需求侧"
      ],
      en: [
        "No difference",
        "Supply side focuses on production capacity, production efficiency, supply costs, etc. Demand side focuses on consumption, investment, government spending, etc. Supply-side policies promote growth by improving production efficiency, demand-side policies promote growth by stimulating demand",
        "Only demand side"
      ]
    },
    correct: 1,
    explanation: {
      zh: "供给侧和需求侧的区别：1) 供给侧：关注生产能力、生产效率、供给成本、技术进步等，供给侧政策（如减税、放松管制）通过提高生产效率促进增长；2) 需求侧：关注消费、投资、政府支出、净出口等，需求侧政策（如增加政府支出、减税）通过刺激需求促进增长；3) 两者配合：供给侧和需求侧政策通常配合使用，共同促进经济增长。",
      en: "The difference between supply side and demand side: 1) Supply side: Focuses on production capacity, production efficiency, supply costs, technological progress, etc. Supply-side policies (such as tax cuts, deregulation) promote growth by improving production efficiency; 2) Demand side: Focuses on consumption, investment, government spending, net exports, etc. Demand-side policies (such as increasing government spending, tax cuts) promote growth by stimulating demand; 3) Both work together: Supply-side and demand-side policies are usually used together to promote economic growth."
    }
  },
  {
    id: 158,
    topic: "economics",
    question: {
      zh: "在经济学中，'比较优势'（Comparative Advantage）的概念是什么？",
      en: "In economics, what is the concept of 'Comparative Advantage'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "即使一国在所有产品上都不如另一国，只要在某些产品上的相对劣势较小，就应该专门生产这些产品并出口，通过贸易获得收益",
        "比较优势就是绝对优势"
      ],
      en: [
        "No such concept",
        "Even if one country is inferior to another in all products, as long as its relative disadvantage is smaller in some products, it should specialize in producing and exporting these products, gaining benefits through trade",
        "Comparative advantage is absolute advantage"
      ]
    },
    correct: 1,
    explanation: {
      zh: "比较优势的概念：1) 相对优势：即使一国在所有产品上都不如另一国（绝对劣势），只要在某些产品上的相对劣势较小，就应该专门生产这些产品；2) 贸易收益：通过专业化生产和贸易，两国都能获得收益；3) 与绝对优势的区别：绝对优势是生产成本的绝对比较，比较优势是机会成本的比较；4) 贸易基础：比较优势是国际贸易的基础理论。",
      en: "The concept of comparative advantage: 1) Relative advantage: Even if one country is inferior to another in all products (absolute disadvantage), as long as its relative disadvantage is smaller in some products, it should specialize in producing these products; 2) Trade benefits: Through specialization and trade, both countries can benefit; 3) Difference from absolute advantage: Absolute advantage is absolute comparison of production costs, comparative advantage is comparison of opportunity costs; 4) Basis of trade: Comparative advantage is the fundamental theory of international trade."
    }
  },
  {
    id: 159,
    topic: "economics",
    question: {
      zh: "在经济学中，'机会成本'（Opportunity Cost）的概念是什么？",
      en: "In economics, what is the concept of 'Opportunity Cost'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "机会成本是为了获得某种东西而放弃的其他最佳选择的价值。在做决策时，应该考虑机会成本，而不仅仅是直接成本",
        "机会成本就是直接成本"
      ],
      en: [
        "No such concept",
        "Opportunity cost is the value of the best alternative forgone to obtain something. When making decisions, should consider opportunity cost, not just direct costs",
        "Opportunity cost is direct cost"
      ]
    },
    correct: 1,
    explanation: {
      zh: "机会成本的概念：1) 定义：为了获得某种东西而放弃的其他最佳选择的价值；2) 决策考虑：在做决策时，应该考虑机会成本，而不仅仅是直接成本；3) 资源稀缺：由于资源稀缺，选择一种用途意味着放弃其他用途；4) 投资应用：在投资中，机会成本是选择一种投资而放弃的其他最佳投资的回报。理解机会成本有助于做出更好的决策。",
      en: "The concept of opportunity cost: 1) Definition: The value of the best alternative forgone to obtain something; 2) Decision consideration: When making decisions, should consider opportunity cost, not just direct costs; 3) Resource scarcity: Due to resource scarcity, choosing one use means giving up other uses; 4) Investment application: In investing, opportunity cost is the return of the best alternative investment forgone by choosing one investment. Understanding opportunity cost helps make better decisions."
    }
  },
  {
    id: 160,
    topic: "economics",
    question: {
      zh: "在经济学中，'边际效用递减'（Diminishing Marginal Utility）的概念是什么？",
      en: "In economics, what is the concept of 'Diminishing Marginal Utility'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "随着消费某种商品的数量增加，每增加一单位商品带来的额外满足感（边际效用）递减。这解释了为什么需求曲线向下倾斜",
        "边际效用总是递增的"
      ],
      en: [
        "No such concept",
        "As the quantity of a good consumed increases, the additional satisfaction (marginal utility) from each additional unit decreases. This explains why demand curves slope downward",
        "Marginal utility always increases"
      ]
    },
    correct: 1,
    explanation: {
      zh: "边际效用递减的概念：1) 定义：随着消费某种商品的数量增加，每增加一单位商品带来的额外满足感（边际效用）递减；2) 例子：第一块蛋糕带来很大满足，第二块满足感减少，第三块更少；3) 需求曲线：这解释了为什么需求曲线向下倾斜（价格越高，需求量越少）；4) 投资应用：在投资中，随着投资组合中某种资产增加，其边际贡献可能递减。",
      en: "The concept of diminishing marginal utility: 1) Definition: As the quantity of a good consumed increases, the additional satisfaction (marginal utility) from each additional unit decreases; 2) Example: The first piece of cake brings great satisfaction, the second piece brings less satisfaction, the third even less; 3) Demand curve: This explains why demand curves slope downward (higher prices lead to lower quantities demanded); 4) Investment application: In investing, as a certain asset increases in a portfolio, its marginal contribution may diminish."
    }
  },
  {
    id: 161,
    topic: "economics",
    question: {
      zh: "在经济学中，'外部性'（Externality）的概念是什么？",
      en: "In economics, what is the concept of 'Externality'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "外部性是指经济活动对第三方产生的未计入市场价格的影响。正外部性（如教育）带来社会收益，负外部性（如污染）带来社会成本。政府可能需要干预以纠正外部性",
        "外部性总是坏的"
      ],
      en: [
        "No such concept",
        "Externality refers to the impact of economic activities on third parties that is not reflected in market prices. Positive externalities (such as education) bring social benefits, negative externalities (such as pollution) bring social costs. Government may need to intervene to correct externalities",
        "Externalities are always bad"
      ]
    },
    correct: 1,
    explanation: {
      zh: "外部性的概念：1) 定义：经济活动对第三方产生的未计入市场价格的影响；2) 正外部性：带来社会收益，如教育、研发，市场可能供给不足；3) 负外部性：带来社会成本，如污染、噪音，市场可能供给过多；4) 政府干预：政府可能需要通过税收、补贴、管制等方式纠正外部性，使市场更有效率。",
      en: "The concept of externality: 1) Definition: The impact of economic activities on third parties that is not reflected in market prices; 2) Positive externality: Brings social benefits, such as education, R&D, market may under-supply; 3) Negative externality: Brings social costs, such as pollution, noise, market may over-supply; 4) Government intervention: Government may need to correct externalities through taxes, subsidies, regulations, etc., to make markets more efficient."
    }
  },
  {
    id: 162,
    topic: "economics",
    question: {
      zh: "在经济学中，'公共物品'（Public Goods）的特征是什么？",
      en: "In economics, what are the characteristics of 'Public Goods'?"
    },
    options: {
      zh: [
        "没有特征",
        "公共物品具有非排他性（无法排除他人使用）和非竞争性（一人使用不影响他人使用）。由于市场无法有效提供，通常需要政府提供",
        "公共物品就是私有物品"
      ],
      en: [
        "No characteristics",
        "Public goods have non-excludability (cannot exclude others from using) and non-rivalry (one person's use does not affect others' use). Since markets cannot efficiently provide them, usually require government provision",
        "Public goods are private goods"
      ]
    },
    correct: 1,
    explanation: {
      zh: "公共物品的特征：1) 非排他性：无法排除他人使用，如国防、路灯；2) 非竞争性：一人使用不影响他人使用，如广播、知识；3) 市场失灵：由于无法收费或收费困难，市场无法有效提供公共物品；4) 政府提供：通常需要政府提供公共物品，通过税收融资。准公共物品（如教育、医疗）可能部分由政府提供。",
      en: "Characteristics of public goods: 1) Non-excludability: Cannot exclude others from using, such as national defense, streetlights; 2) Non-rivalry: One person's use does not affect others' use, such as broadcasting, knowledge; 3) Market failure: Due to inability to charge or difficulty charging, markets cannot efficiently provide public goods; 4) Government provision: Usually require government provision of public goods, financed through taxes. Quasi-public goods (such as education, healthcare) may be partially provided by government."
    }
  },
  {
    id: 163,
    topic: "economics",
    question: {
      zh: "在经济学中，'市场失灵'（Market Failure）的原因有哪些？",
      en: "In economics, what are the causes of 'Market Failure'?"
    },
    options: {
      zh: [
        "没有原因",
        "市场失灵的原因包括：外部性、公共物品、信息不对称、垄断等。当市场无法有效配置资源时，可能需要政府干预",
        "市场总是有效的"
      ],
      en: [
        "No causes",
        "Causes of market failure include: externalities, public goods, information asymmetry, monopoly, etc. When markets cannot efficiently allocate resources, government intervention may be needed",
        "Markets are always efficient"
      ]
    },
    correct: 1,
    explanation: {
      zh: "市场失灵的原因：1) 外部性：经济活动对第三方的影响未计入价格；2) 公共物品：市场无法有效提供；3) 信息不对称：买卖双方信息不对等，导致逆向选择和道德风险；4) 垄断：市场力量集中，导致价格过高、产量过低；5) 政府干预：当市场失灵时，政府可能需要通过管制、税收、补贴等方式干预，提高市场效率。",
      en: "Causes of market failure: 1) Externalities: Economic activities' impact on third parties not reflected in prices; 2) Public goods: Markets cannot efficiently provide; 3) Information asymmetry: Unequal information between buyers and sellers, leading to adverse selection and moral hazard; 4) Monopoly: Market power concentration, leading to high prices and low output; 5) Government intervention: When market failure occurs, government may need to intervene through regulation, taxes, subsidies, etc., to improve market efficiency."
    }
  },
  {
    id: 164,
    topic: "economics",
    question: {
      zh: "在经济学中，'菲利普斯曲线'（Phillips Curve）描述了什么关系？",
      en: "In economics, what relationship does the 'Phillips Curve' describe?"
    },
    options: {
      zh: [
        "没有关系",
        "描述了失业率和通胀率之间的负相关关系：失业率低时，通胀率通常较高；失业率高时，通胀率通常较低。但长期来看，这种关系可能不成立",
        "失业率和通胀率总是正相关"
      ],
      en: [
        "No relationship",
        "Describes a negative correlation between unemployment rate and inflation rate: When unemployment is low, inflation is usually high; when unemployment is high, inflation is usually low. However, this relationship may not hold in the long run",
        "Unemployment and inflation are always positively correlated"
      ]
    },
    correct: 1,
    explanation: {
      zh: "菲利普斯曲线：1) 短期关系：描述了失业率和通胀率之间的负相关关系，失业率低时，劳动力市场紧张，工资上涨，推高通胀；2) 政策权衡：政府面临失业和通胀之间的权衡；3) 长期失效：长期来看，这种关系可能不成立，因为预期会调整；4) 实际应用：央行在制定货币政策时需要考虑这种关系，但也要考虑长期影响。",
      en: "Phillips Curve: 1) Short-term relationship: Describes a negative correlation between unemployment rate and inflation rate. When unemployment is low, labor market is tight, wages rise, pushing up inflation; 2) Policy trade-off: Governments face a trade-off between unemployment and inflation; 3) Long-term invalidity: In the long run, this relationship may not hold because expectations adjust; 4) Practical application: Central banks need to consider this relationship when formulating monetary policy, but also consider long-term impacts."
    }
  },
  {
    id: 165,
    topic: "economics",
    question: {
      zh: "在经济学中，'乘数效应'（Multiplier Effect）的概念是什么？",
      en: "In economics, what is the concept of the 'Multiplier Effect'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "初始支出（如政府支出、投资）会通过连锁反应产生更大的总需求增加。乘数效应的大小取决于边际消费倾向",
        "乘数效应总是1"
      ],
      en: [
        "No such concept",
        "Initial spending (such as government spending, investment) will generate a larger increase in total demand through chain reactions. The size of the multiplier effect depends on the marginal propensity to consume",
        "Multiplier effect is always 1"
      ]
    },
    correct: 1,
    explanation: {
      zh: "乘数效应的概念：1) 定义：初始支出通过连锁反应产生更大的总需求增加；2) 机制：政府增加支出→收入增加→消费增加→收入进一步增加→消费进一步增加...；3) 乘数大小：取决于边际消费倾向（MPC），MPC越高，乘数越大；4) 政策意义：财政政策的效果可能大于初始支出，但也可能产生相反效果（如挤出效应）。",
      en: "The concept of multiplier effect: 1) Definition: Initial spending generates a larger increase in total demand through chain reactions; 2) Mechanism: Government increases spending → income increases → consumption increases → income further increases → consumption further increases...; 3) Multiplier size: Depends on marginal propensity to consume (MPC), higher MPC means larger multiplier; 4) Policy significance: Fiscal policy effects may be greater than initial spending, but may also have opposite effects (such as crowding out)."
    }
  },
  {
    id: 166,
    topic: "economics",
    question: {
      zh: "在经济学中，'流动性陷阱'（Liquidity Trap）是什么？",
      en: "In economics, what is a 'Liquidity Trap'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "当利率已经很低（接近零）时，进一步降低利率无法刺激经济，因为人们更愿意持有现金而非投资。此时货币政策失效，需要财政政策",
        "流动性陷阱总是好事"
      ],
      en: [
        "No such concept",
        "When interest rates are already very low (near zero), further lowering interest rates cannot stimulate the economy because people prefer holding cash rather than investing. At this point, monetary policy is ineffective and fiscal policy is needed",
        "Liquidity trap is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "流动性陷阱：1) 定义：当利率已经很低（接近零）时，进一步降低利率无法刺激经济；2) 原因：人们更愿意持有现金而非投资或消费，因为预期未来可能更差；3) 政策失效：此时货币政策失效，降低利率无法刺激需求；4) 解决方案：需要财政政策（增加政府支出）来刺激需求。这是凯恩斯经济学的重要概念。",
      en: "Liquidity trap: 1) Definition: When interest rates are already very low (near zero), further lowering interest rates cannot stimulate the economy; 2) Reason: People prefer holding cash rather than investing or consuming because they expect the future may be worse; 3) Policy ineffectiveness: At this point, monetary policy is ineffective, lowering interest rates cannot stimulate demand; 4) Solution: Need fiscal policy (increasing government spending) to stimulate demand. This is an important concept in Keynesian economics."
    }
  },
  {
    id: 167,
    topic: "economics",
    question: {
      zh: "在经济学中，'滞胀'（Stagflation）是什么？",
      en: "In economics, what is 'Stagflation'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "滞胀是指经济停滞（高失业率、低增长）和通货膨胀同时发生。这是经济政策的两难困境，因为刺激经济的政策可能加剧通胀，抑制通胀的政策可能加剧经济停滞",
        "滞胀总是好事"
      ],
      en: [
        "No such concept",
        "Stagflation refers to the simultaneous occurrence of economic stagnation (high unemployment, low growth) and inflation. This is an economic policy dilemma because policies to stimulate the economy may worsen inflation, while policies to curb inflation may worsen stagnation",
        "Stagflation is always good"
      ]
    },
    correct: 1,
    explanation: {
      zh: "滞胀：1) 定义：经济停滞（高失业率、低增长）和通货膨胀同时发生；2) 困境：这是经济政策的两难困境，刺激经济的政策（如增加支出）可能加剧通胀，抑制通胀的政策（如提高利率）可能加剧经济停滞；3) 原因：可能由供给冲击（如石油危机）引起；4) 解决方案：需要供给侧政策（提高生产效率）和需求侧政策配合。",
      en: "Stagflation: 1) Definition: Simultaneous occurrence of economic stagnation (high unemployment, low growth) and inflation; 2) Dilemma: This is an economic policy dilemma. Policies to stimulate the economy (such as increasing spending) may worsen inflation, while policies to curb inflation (such as raising interest rates) may worsen stagnation; 3) Causes: May be caused by supply shocks (such as oil crises); 4) Solutions: Need supply-side policies (improving production efficiency) and demand-side policies working together."
    }
  },
  {
    id: 168,
    topic: "economics",
    question: {
      zh: "在经济学中，'购买力平价'（Purchasing Power Parity, PPP）的概念是什么？",
      en: "In economics, what is the concept of 'Purchasing Power Parity (PPP)'?"
    },
    options: {
      zh: [
        "没有这个概念",
        "购买力平价理论认为，长期来看，汇率应该调整到使相同的一篮子商品在不同国家具有相同的价格。PPP用于比较不同国家的实际生活水平和经济规模",
        "购买力平价就是名义汇率"
      ],
      en: [
        "No such concept",
        "Purchasing Power Parity theory holds that in the long run, exchange rates should adjust so that the same basket of goods has the same price in different countries. PPP is used to compare actual living standards and economic size across countries",
        "Purchasing Power Parity is the nominal exchange rate"
      ]
    },
    correct: 1,
    explanation: {
      zh: "购买力平价：1) 理论：长期来看，汇率应该调整到使相同的一篮子商品在不同国家具有相同的价格；2) 机制：如果一国商品更便宜，需求增加，货币升值，直到价格相等；3) 应用：PPP用于比较不同国家的实际生活水平和经济规模，比名义汇率更准确；4) 局限性：由于商品不可贸易、运输成本、关税等因素，PPP可能不完全成立。",
      en: "Purchasing Power Parity: 1) Theory: In the long run, exchange rates should adjust so that the same basket of goods has the same price in different countries; 2) Mechanism: If goods in one country are cheaper, demand increases, currency appreciates until prices are equal; 3) Application: PPP is used to compare actual living standards and economic size across countries, more accurate than nominal exchange rates; 4) Limitations: Due to non-tradable goods, transportation costs, tariffs, etc., PPP may not fully hold."
    }
  },
  {
    id: 169,
    topic: "economics",
    question: {
      zh: "在经济学中，'债务与GDP比率'（Debt-to-GDP Ratio）的重要性是什么？",
      en: "In economics, what is the importance of the 'Debt-to-GDP Ratio'?"
    },
    options: {
      zh: [
        "没有重要性",
        "债务与GDP比率衡量政府债务相对于经济规模的规模。比率过高可能表明：1) 偿债压力大；2) 财政可持续性问题；3) 可能影响经济增长和金融稳定。但也要考虑利率、经济增长率等因素",
        "债务与GDP比率越高越好"
      ],
      en: [
        "No importance",
        "Debt-to-GDP ratio measures the size of government debt relative to economic size. Excessively high ratio may indicate: 1) High debt service pressure; 2) Fiscal sustainability issues; 3) May affect economic growth and financial stability. But also need to consider interest rates, economic growth rates, and other factors",
        "Higher debt-to-GDP ratio is always better"
      ]
    },
    correct: 1,
    explanation: {
      zh: "债务与GDP比率的重要性：1) 衡量规模：衡量政府债务相对于经济规模的规模；2) 偿债压力：比率过高可能表明偿债压力大，需要更多税收或借款；3) 可持续性：可能影响财政可持续性，如果经济增长率低于利率，债务可能不可持续；4) 综合考虑：也要考虑利率、经济增长率、财政状况等因素。没有绝对的安全阈值，但过高比率需要关注。",
      en: "The importance of debt-to-GDP ratio: 1) Measure size: Measures the size of government debt relative to economic size; 2) Debt service pressure: Excessively high ratio may indicate high debt service pressure, requiring more taxes or borrowing; 3) Sustainability: May affect fiscal sustainability. If economic growth rate is lower than interest rate, debt may be unsustainable; 4) Comprehensive consideration: Also need to consider interest rates, economic growth rates, fiscal conditions, and other factors. There is no absolute safe threshold, but excessively high ratios need attention."
    }
  }
];


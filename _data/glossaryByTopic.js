// Organize glossary by topic
const glossary = require('./glossary');

module.exports = function() {
  const byTopic = {};
  
  glossary.forEach(term => {
    if (!byTopic[term.topic]) {
      byTopic[term.topic] = [];
    }
    byTopic[term.topic].push(term);
  });
  
  // Sort terms within each topic by English name
  Object.keys(byTopic).forEach(topic => {
    byTopic[topic].sort((a, b) => a.en.localeCompare(b.en));
  });
  
  // Return as array of {topic, terms} objects, sorted by topic name
  const topicNames = {
    'fundamental-analysis': { zh: '基本面分析', en: 'Fundamental Analysis', order: 1 },
    'financial-statements': { zh: '财务报表', en: 'Financial Statements', order: 2 },
    'valuation': { zh: '估值方法', en: 'Valuation Methods', order: 3 },
    'economic-moats': { zh: '护城河', en: 'Economic Moats', order: 4 },
    'investment-strategy': { zh: '投资策略', en: 'Investment Strategy', order: 5 },
    'market-indices': { zh: '市场与指数', en: 'Market & Indices', order: 6 },
    'economics': { zh: '经济学', en: 'Economics', order: 7 }
  };
  
  return Object.keys(byTopic)
    .map(topic => ({
      id: topic,
      name: topicNames[topic] || { zh: topic, en: topic },
      terms: byTopic[topic],
      order: topicNames[topic]?.order || 999
    }))
    .sort((a, b) => a.order - b.order);
};


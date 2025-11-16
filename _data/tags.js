// Generate tags data from units
const units = require('./units');

const tagsMap = {};

// Collect all tags from units and chapters
units.forEach(unit => {
  unit.tags.forEach(tag => {
    if (!tagsMap[tag]) {
      tagsMap[tag] = {
        id: tag,
        name: tag,
        units: [],
        chapters: []
      };
    }
    tagsMap[tag].units.push({
      id: unit.id,
      title: unit.title,
      icon: unit.icon,
      description: unit.description
    });
  });

  // Collect tags from chapters
  if (unit.chapters) {
    unit.chapters.forEach(chapter => {
      if (chapter.tags) {
        chapter.tags.forEach(tag => {
          if (!tagsMap[tag]) {
            tagsMap[tag] = {
              id: tag,
              name: tag,
              units: [],
              chapters: []
            };
          }
          // Check if unit is already added
          const unitExists = tagsMap[tag].units.some(u => u.id === unit.id);
          if (!unitExists) {
            tagsMap[tag].units.push({
              id: unit.id,
              title: unit.title,
              icon: unit.icon,
              description: unit.description
            });
          }
          tagsMap[tag].chapters.push({
            id: chapter.id,
            unitId: unit.id,
            title: chapter.title,
            icon: chapter.icon,
            slug: chapter.slug
          });
        });
      }
    });
  }
});

// Convert to array and sort by name
const tags = Object.values(tagsMap).sort((a, b) => a.name.localeCompare(b.name));

module.exports = tags;


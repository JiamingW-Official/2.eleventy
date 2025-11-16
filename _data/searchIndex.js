// Generate comprehensive search index for all content
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const units = require('./units');

const searchIndex = [];

// Helper function to extract text content from markdown/nunjucks
function extractTextContent(content) {
  // Remove front matter
  const parsed = matter(content);
  let text = parsed.content || content;
  
  // Remove HTML tags
  text = text.replace(/<[^>]*>/g, ' ');
  
  // Remove markdown syntax
  text = text.replace(/[#*_`\[\]()]/g, ' ');
  text = text.replace(/!\[.*?\]\(.*?\)/g, ' '); // Remove images
  text = text.replace(/\[.*?\]\(.*?\)/g, ' '); // Remove links
  
  // Remove nunjucks syntax
  text = text.replace(/\{\%.*?\%\}/g, ' ');
  text = text.replace(/\{\{.*?\}\}/g, ' ');
  
  // Clean up whitespace
  text = text.replace(/\s+/g, ' ').trim();
  
  return text.substring(0, 500); // Limit to 500 chars for search
}

// Add units to search index
units.forEach(unit => {
  searchIndex.push({
    type: 'unit',
    id: unit.id,
    title: unit.title,
    description: unit.description,
    tags: unit.tags,
    url: {
      zh: `/zh/${unit.id}/`,
      en: `/en/${unit.id}/`
    },
    searchableText: `${unit.title.zh} ${unit.title.en} ${unit.description.zh} ${unit.description.en} ${unit.tags.join(' ')}`
  });

  // Add chapters to search index
  if (unit.chapters) {
    unit.chapters.forEach(chapter => {
      // Try to read chapter content files
      let contentZh = '';
      let contentEn = '';
      
      const chapterPathZh = path.join(__dirname, '..', 'zh', unit.id, `${chapter.slug}.njk`);
      const chapterPathEn = path.join(__dirname, '..', 'en', unit.id, `${chapter.slug}.njk`);
      
      try {
        if (fs.existsSync(chapterPathZh)) {
          const fileContent = fs.readFileSync(chapterPathZh, 'utf8');
          contentZh = extractTextContent(fileContent);
        }
      } catch (e) {
        // File doesn't exist or can't be read
      }
      
      try {
        if (fs.existsSync(chapterPathEn)) {
          const fileContent = fs.readFileSync(chapterPathEn, 'utf8');
          contentEn = extractTextContent(fileContent);
        }
      } catch (e) {
        // File doesn't exist or can't be read
      }
      
      searchIndex.push({
        type: 'chapter',
        id: chapter.id,
        unitId: unit.id,
        title: chapter.title,
        tags: chapter.tags || [],
        url: {
          zh: `/zh/${unit.id}/${chapter.slug}/`,
          en: `/en/${unit.id}/${chapter.slug}/`
        },
        searchableText: `${chapter.title.zh} ${chapter.title.en} ${contentZh} ${contentEn} ${(chapter.tags || []).join(' ')}`
      });
    });
  }
});

// Add markdown files
const mdFiles = [
  { path: 'project.md', lang: 'zh', url: { zh: '/zh/project/', en: '/en/project/' } },
  { path: 'README.md', lang: 'both', url: { zh: '/zh/README/', en: '/en/README/' } }
];

mdFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file.path);
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(fileContent);
      const content = extractTextContent(fileContent);
      const title = parsed.data.title || file.path.replace('.md', '');
      
      searchIndex.push({
        type: 'page',
        id: file.path.replace('.md', ''),
        title: { zh: title, en: title },
        url: file.url,
        searchableText: `${title} ${content}`
      });
    }
  } catch (e) {
    // File doesn't exist or can't be read
  }
});

module.exports = searchIndex;

module.exports = function(eleventyConfig) {
  // Copy images and assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");
  
  // Copy CSS if any
  eleventyConfig.addPassthroughCopy("css");
  
  // Copy Chinese_Unit images if they exist
  eleventyConfig.addPassthroughCopy({
    "../Chinese_Unit/Unit 1/**/*.{png,jpg,jpeg}": "images/unit1/"
  });
  
  // Enable syntax highlighting for code blocks
  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  // Add filter to find item by id or any key
  eleventyConfig.addFilter("findBy", function(array, key, value) {
    if (!array) return null;
    return array.find(item => item && item[key] === value);
  });

  // Add filter to switch language in URL
  eleventyConfig.addFilter("switchLang", function(url, currentLang, targetLang) {
    const pathPrefix = process.env.GITHUB_REPOSITORY 
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
      : (process.env.CI ? '/2.eleventy/' : '');
    if (!url) return `${pathPrefix}${targetLang}/`;
    // URL already contains pathPrefix, just replace the language part
    return url.replace(`/${currentLang}/`, `/${targetLang}/`);
  });

  // Add filter to dump data as JSON (for JavaScript)
  eleventyConfig.addFilter("dump", function(value) {
    return JSON.stringify(value);
  });

  // Add filter to add pathPrefix to URLs
  eleventyConfig.addFilter("url", function(url) {
    const pathPrefix = process.env.GITHUB_REPOSITORY 
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
      : (process.env.CI ? '/2.eleventy/' : '');
    if (!url) return pathPrefix;
    // Remove leading slash if present, then add pathPrefix
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    return pathPrefix + cleanUrl;
  });

  // Add filter to encode image URLs (handle spaces in filenames)
  eleventyConfig.addFilter("imageUrl", function(url) {
    const pathPrefix = process.env.GITHUB_REPOSITORY 
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
      : (process.env.CI ? '/2.eleventy/' : '');
    if (!url) return pathPrefix;
    // Remove leading slash if present
    const cleanUrl = url.startsWith('/') ? url.slice(1) : url;
    // Encode the URL properly (spaces become %20)
    const encodedUrl = encodeURI(cleanUrl);
    return pathPrefix + encodedUrl;
  });

  // Add filter to mark terms in content
  eleventyConfig.addFilter("markTerms", function(content, glossary, lang, pathPrefix) {
    if (!content || !glossary || !Array.isArray(glossary)) return content;
    
    let markedContent = String(content);
    
    // Sort terms by length (longest first) to avoid partial matches
    const sortedTerms = [...glossary].sort((a, b) => {
      const aLen = Math.max(a.en.length, a.zh.length);
      const bLen = Math.max(b.en.length, b.zh.length);
      return bLen - aLen;
    });
    
    sortedTerms.forEach(term => {
      const termEn = term.en;
      const termZh = term.zh;
      const glossaryUrl = `${pathPrefix}${lang}/glossary/#${term.id}`;
      
      // Mark English terms (case-insensitive, whole word)
      const enRegex = new RegExp(`\\b${termEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      markedContent = markedContent.replace(enRegex, (match, offset) => {
        // Check if already inside HTML tags
        const before = markedContent.substring(Math.max(0, offset - 100), offset);
        const after = markedContent.substring(offset + match.length, offset + match.length + 100);
        
        // Don't mark if inside HTML tags
        const openTags = (before.match(/<[^>]*>/g) || []).length;
        const closeTags = (before.match(/<\/[^>]*>/g) || []).length;
        const isInTag = openTags > closeTags;
        
        if (isInTag || before.includes('class="term') || before.includes('href=')) {
          return match;
        }
        
        return `<span class="term" data-term-id="${term.id}"><a href="${glossaryUrl}" class="term-link">${match}</a></span>`;
      });
      
      // Mark Chinese terms
      const zhRegex = new RegExp(termZh.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      markedContent = markedContent.replace(zhRegex, (match, offset) => {
        const before = markedContent.substring(Math.max(0, offset - 100), offset);
        const after = markedContent.substring(offset + match.length, offset + match.length + 100);
        
        const openTags = (before.match(/<[^>]*>/g) || []).length;
        const closeTags = (before.match(/<\/[^>]*>/g) || []).length;
        const isInTag = openTags > closeTags;
        
        if (isInTag || before.includes('class="term') || before.includes('href=')) {
          return match;
        }
        
        return `<span class="term" data-term-id="${term.id}"><a href="${glossaryUrl}" class="term-link">${match}</a></span>`;
      });
    });
    
    return markedContent;
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    // GitHub Pages uses repository name as base path
    // If your repo is "2.eleventy", the site will be at /2.eleventy/
    // Set pathPrefix based on environment variable or default to repo name
    pathPrefix: process.env.GITHUB_REPOSITORY 
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` 
      : (process.env.CI ? '/2.eleventy/' : '')
  };
};


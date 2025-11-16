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
    if (!url) return `/${targetLang}/`;
    return url.replace(`/${currentLang}/`, `/${targetLang}/`);
  });

  // Add filter to dump data as JSON (for JavaScript)
  eleventyConfig.addFilter("dump", function(value) {
    return JSON.stringify(value);
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
    dataTemplateEngine: "njk"
  };
};


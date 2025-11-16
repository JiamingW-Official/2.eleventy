// Get pathPrefix based on environment
module.exports = function() {
  if (process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`;
  }
  if (process.env.CI) {
    return '/2.eleventy/';
  }
  return '';
};


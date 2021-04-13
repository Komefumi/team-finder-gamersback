const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'git@github.com:Komefumi/team-finder-gamersback.git',
});

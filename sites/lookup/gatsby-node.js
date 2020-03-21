exports.onCreatePage = ({ page, actions }) => {
  if (page.path.matches(/^\search/)) {
    page.matchPath = '/search/*';
    actions.createPage(page);
  }
};

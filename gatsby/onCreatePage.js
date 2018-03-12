module.exports = async ({ page, boundActionCreators: { createPage } }) =>
  new Promise((resolve, _reject) => {
    if (page.path.match(/^\/content/)) {
      page.layout = 'blogPost';

      createPage(page);
    }

    resolve();
  });

module.exports = async ({ page, actions: { createPage } }) =>
  new Promise((resolve, _reject) => {
    if (page.path.match(/^\/now/)) {
      page.layout = 'blog';

      createPage(page);
    }

    resolve();
  });

const path = require('path');

exports.createPages = ({ boundActionCreators: { createPage }, graphql }) =>
  new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('src/templates/post.js');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 100) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: pageTemplate
          });
        });
      })
    );
  });

exports.onCreatePage = ({ page, boundActionCreators: { createPage } }) =>
  new Promise((resolve, _reject) => {
    if (page.path.match(/^\/content/)) {
      page.layout = 'blogPost';

      createPage(page);
    }

    resolve();
  });

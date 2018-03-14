import React from 'react';

import NowPageWrapper from '../components/Blog/NowPageWrapper';

const Template = ({
  data: { allNowPages: { edges }, postByPath: { frontmatter, html } }
}) => (
  <NowPageWrapper title={frontmatter.title} html={html} recentPosts={edges} />
);

export default Template;

export const pageQuery = graphql`
  query docByPath($path: String!) {
    allNowPages: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
    postByPath: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

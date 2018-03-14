import React from 'react';

import NowPageWrapper from '../components/Blog/NowPageWrapper';

const NowPage = ({ data: { nowIndex: { html } } }) => (
  <NowPageWrapper title="Now" html={html} />
);

export default NowPage;

export const pageQuery = graphql`
  query nowQuery {
    nowIndex: markdownRemark(frontmatter: { path: { eq: "/now/2018-03-12" } }) {
      html
      frontmatter {
        path
      }
    }
  }
`;

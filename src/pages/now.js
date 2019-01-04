import React from 'react';

import NowPageWrapper from '../components/Blog/NowPageWrapper';

const NowPage = ({
  data: {
    nowIndex: {
      frontmatter: { date },
      html
    }
  }
}) => <NowPageWrapper title="Now" date={date} html={html} />;

export default NowPage;

export const pageQuery = graphql`
  query nowQuery {
    nowIndex: markdownRemark(frontmatter: { path: { eq: "/now/2018-07-18" } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

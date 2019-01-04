import React from 'react';
import { graphql } from 'gatsby';

import NowPageWrapper from '../components/Blog/NowPageWrapper';

interface INowPageProps {
  data: {
    nowIndex: {
      frontmatter: {
        date: string;
      };
      html: string;
    };
  };
}

const NowPage: React.SFC<INowPageProps> = ({
  data: {
    nowIndex: {
      frontmatter: { date },
      html
    }
  }
}): JSX.Element => <NowPageWrapper title="Now" date={date} html={html} />;

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

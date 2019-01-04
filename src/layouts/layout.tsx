import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './index.css';

import Wrapper from '../components/Layout';
import FooterLinks from '../components/Footer';

const Layout: React.SFC = ({ children }): JSX.Element => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <main>{children}</main>
        <FooterLinks />
      </Wrapper>
    )}
  />
);

export default Layout;

import React from 'react';
import { Link } from 'gatsby';

import Section from '../components/Layout/Section';
import Layout from '../layouts/layout';

const NotFoundPage: React.SFC = (): JSX.Element => (
  <Layout>
    <Section>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Would you like to go back <Link to="/">home</Link>?
      </p>
    </Section>
  </Layout>
);

export default NotFoundPage;

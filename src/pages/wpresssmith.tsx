import React from 'react';

import Header from '../components/Header';
import Section from '../components/Layout/Section';
import Layout from '../layouts/layout';

const WpresssmithPage: React.SFC = (): JSX.Element => (
  <Layout>
    <Header title="WPressSmith" back="/" />

    <Section>
      <p>Premium Wordpress design, development and support services</p>
    </Section>

    <Section>
      <h2>Wordpress themes</h2>

      <p>
        I design and build Wordpress custom themes that are custom-tailored for
        your exact needs. Each theme is hand crafted and built on the Genesis
        framework, making your site faster, more secure and SEO-friendly.
      </p>
    </Section>

    <Section>
      <h2>Wordpress plugins</h2>

      <p>
        A theme dictates how a Wordpress website looks, while plugins add
        functionality. I write custom plugins that are theme-independent so that
        they can be used with any theme you desire.
      </p>
    </Section>

    <Section>
      <h2>Wordpress maintenance</h2>

      <p>
        I manage Wordpress sites, ensuring they have regular backups, all themes
        and plugins are up to date and your website is malware-free.
      </p>
    </Section>

    <Section>
      <h2>Find out more</h2>

      <p>
        <a
          aria-label="WordPressSmith"
          href="https://wpresssmith.com"
          title="WPressSmith.com"
        >
          WpressSmith.com
        </a>
      </p>
    </Section>
  </Layout>
);

export default WpresssmithPage;

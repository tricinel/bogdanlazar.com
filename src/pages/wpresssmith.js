import React from 'react';

import Header from '../components/Header';
import Section from '../components/Layout/Section';

const IndexPage = () => (
  <div>
    <Header title="WPressSmith" back="/" />

    <Section>
      <p>Premium Wordpress design, development and support services</p>
    </Section>

    <Section>
      <h2>Wordpress themes</h2>

      <p>
        I design Wordpress custom themes that fit each site&apos;s needs, so
        that the theme is custom-tailored for your exact needs.
      </p>
    </Section>

    <Section>
      <h2>Wordpress plugins</h2>

      <p>
        A theme dictates how a Wordpress website looks, while plugins add
        functionality.
      </p>
    </Section>

    <Section>
      <h2>Wordpress maintenance</h2>

      <p>
        I will manage your Wordpress site, ensuring it has regular backups, all
        themes and plugins are up to date and your website is malware-free.
      </p>
    </Section>

    <Section>
      <h2>Find out more</h2>

      <p>
        <a href="https://wpresssmith.com" title="WPressSmith.com">
          WpressSmith.com
        </a>
      </p>
    </Section>
  </div>
);

export default IndexPage;

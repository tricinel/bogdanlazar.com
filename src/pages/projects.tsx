import React from 'react';

import Header from '../components/Header';
import Section from '../components/Layout/Section';
import Layout from '../layouts/layout';

const ProjectsPage: React.SFC = (): JSX.Element => (
  <Layout>
    <Header title="My projects" back="/" />

    <Section>
      <h2>Wordpress</h2>

      <ul>
        <li>
          <a href="http://bandsawmanuals.com/" title="Bandsawmanuals.com">
            Bandsawmanuals.com
          </a>
        </li>
        <li>
          <a href="http://bandsawreviews.com/" title="Bandsawreviews.com">
            Bandsawreviews.com
          </a>
        </li>
        <li>
          <a href="https://stilwelltriallaw.com/" title="Stilwelltriallaw.com">
            StilwellTrialLaw.com
          </a>
        </li>
        <li>
          <a href="https://wpresssmith.com/" title="WpressSmith.com">
            WpressSmith.com
          </a>
        </li>
        <li>
          <a href="https://dieaerztevorsorge.de/" title="DieAerztevorsorge.de">
            DieAerzteVorsorge.de
          </a>
        </li>
      </ul>
    </Section>

    <Section>
      <h2>Web apps</h2>

      <ul>
        <li>
          <a href="http://bandsawspeeds.com" title="QCalc">
            QCalc - Bandsaw Speeds
          </a>
        </li>
      </ul>
    </Section>
  </Layout>
);

export default ProjectsPage;

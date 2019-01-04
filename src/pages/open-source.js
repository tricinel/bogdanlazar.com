import React from 'react';

import Header from '../components/Header';
import Section from '../components/Layout/Section';
import { Highlight } from '../components/Typography';
import Layout from '../layouts/layout';

const OpenSource = () => (
  <Layout>
    <Header title="Open source" back="/" />

    <Section>
      <p>
        The open source community has given me so much and I do my best to
        contribute back. My focus is on <Highlight>Javascript</Highlight>,{' '}
        <Highlight>CSS</Highlight> and <Highlight>design</Highlight>. The
        following are the most current projects I am working on. For a complete
        list, check out my <a href="https://github.com/tricinel">Github</a>{' '}
        profile.
      </p>
    </Section>

    <Section>
      <h2>Frontwerk</h2>

      <p>
        Frontwerk is a zero configuration toolset aimed at helping frontend
        developers. It abstracts a set of underlying tools commonly used for
        testing, linting, formatting and bundling code, along with their
        configurations in order to improve both the developer experience and the
        time it takes to get started and maintain a Javascript project.
      </p>

      <ul>
        <li>
          <a href="https://frontwerk.org">Read the documentation</a>
        </li>
        <li>
          <a href="https://npmjs.org/package/frontwerk">Get it from npm</a>
        </li>
      </ul>
    </Section>

    <Section>
      <h2>Edge Theme</h2>

      <p>
        As a designer and a developer, I am very much in love with my
        development environment. I am also very keen on it looking its best. For
        this purpose, I have created a set of beautiful themes for code editors
        and the terminal. Currently, I support{' '}
        <a href="http://github.com/tricinel/edge-theme-sublime-text-3">
          Sublime Text 3
        </a>
        , <a href="https://github.com/tricinel/edge-theme-vim">Vim</a>, as well
        as <a href="https://github.com/tricinel/edge-theme-iterm2">iTerm2</a>,
        with Atom and VSCode in the works.
      </p>

      <ul>
        <li>
          <a href="https://github.com/tricinel/edge-theme">
            Check out the source code
          </a>
        </li>
      </ul>
    </Section>
  </Layout>
);

export default OpenSource;

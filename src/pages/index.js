import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import Section from '../components/Layout/Section';
import { Highlight } from '../components/Typography';

const IndexPage = () => (
  <div>
    <Header title="I&apos;m a dreamer and a human" />

    <Section>
      <p>
        I design and I write code. It’s a daily challenge. And yes, I mess up
        quite often. I&apos;m a <Highlight>human</Highlight>.
      </p>

      <p>
        And I dream. I dream of Apple&apos;s great product experiences. I dream
        of Musk’s Tesla or his solar powered batteries. I&apos;m a{' '}
        <Highlight>dreamer</Highlight>.
      </p>

      <p>
        Curious what I&apos;m doing <Highlight>right now</Highlight>? Check out
        my <Link to="/now">Now</Link> page.
      </p>
    </Section>

    <Section>
      <h2>Work</h2>

      <ul>
        <li>
          <a href="https://twitter.com/frylondon" title="Fry-It Twitter">
            @frylondon
          </a>
        </li>
        <li>
          <a href="http://blazardesign.com/" title="Freelance portfolio">
            Freelance
          </a>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/wpresssmith">WpressSmith</Link>
        </li>
      </ul>
    </Section>

    <Section>
      <h2>Writing</h2>

      <ul>
        <li>
          <a
            href="https://medium.com/@tricinel/be-comfortable-walking-away-16f96659febd"
            title="Be comfortable walking away"
          >
            Be comfortable walking away
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@tricinel/lessons-from-my-first-public-talk-ac7cb793339"
            title="Lessons from my first public talk"
          >
            Lessons from my first public talk
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@tricinel/choosing-what-to-do-is-easy-6926f9e516da"
            title="Choosing what to do is easy"
          >
            Choosing what to do is easy
          </a>
        </li>
        <li>
          <a href="https://medium.com/@tricinel" title="More on Medium">
            More on Medium...
          </a>
        </li>
      </ul>
    </Section>

    <Section>
      <h2>Talks</h2>

      <ul>
        <li>
          <a href="" title="Taming Javascript">
            Taming Javascript
          </a>{' '}
          on Feb 6, 2018 at{' '}
          <a href="https://twitter.com/WebEngDus" title="WebEngDus on Twitter">
            @WebEngDus
          </a>
        </li>
      </ul>
    </Section>
  </div>
);

export default IndexPage;

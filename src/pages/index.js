import React from 'react';
import Link from 'gatsby-link';

import Header from '../components/Header';
import Section from '../components/Layout/Section';
import { Highlight } from '../components/Typography';

const IndexPage = () => (
  <div>
    <Header title="Developer & Designer" />

    <Section>
      <p>
        Hey, I&apos;m <Highlight>Bogdan</Highlight>, a designer and a developer.
        I find problem solving interesting and I love working with people that
        believe in what they do and inspire the same in others.
      </p>

      <p>
        I work <Highlight>remotely</Highlight> because I believe we do our best
        work wherever we are the happiest!
      </p>

      <p>
        I live in Dusseldorf, Germany with my lovely wife, Maria, and our crazy
        dog, Scooby. If you&apos;re ever in the neighbourhood and in the mood
        for <a href="http://www.uerige.de/en/">a great German beer</a> or some
        wurst, stop by! I&apos;d love to meet you!
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
          <Link to="/open-source">Open source</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link
            aria-label="WordPressSmith"
            title="WordPressSmith"
            to="/wpresssmith"
          >
            WpressSmith
          </Link>
        </li>
      </ul>
    </Section>

    <Section>
      <h2>Writing</h2>

      <ul>
        <li>
          <a
            href="https://medium.com/@tricinel/principles-of-good-design-b9fac1c44604"
            title="10 Principles of Good Product Design"
          >
            10 Principles of Good Product Design
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@tricinel/how-to-feel-like-a-million-bucks-at-the-end-of-the-day-b5291bfd3c53"
            title="How to feel like a million bucks at the end of the day"
          >
            How to feel like a million bucks at the end of the day
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@tricinel/screw-productivity-organize-your-day-for-happiness-848bb5f2d583"
            title="Screw productivity! Organize your day for happiness!"
          >
            Screw productivity! Organize your day for happiness!
          </a>
        </li>
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
          <a
            href="http://talks.bogdanlazar.com/the-great-gatsby"
            title="The Great Gatsby"
          >
            The Great Gatsby
          </a>{' '}
          on Jul 28, 2018 at{' '}
          <a href="https://twitter.com/reactjs_dus">@reactjs_dus</a>
        </li>
        <li>
          <a
            href="http://talks.bogdanlazar.com/taming-javascript"
            title="Taming Javascript"
          >
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

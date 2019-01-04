import React from 'react';

import { Footer } from '../Layout';

const FooterLinks: React.SFC = (): JSX.Element => (
  <Footer>
    <h3>Get in touch</h3>
    <ul>
      <li>
        <a href="https://github.com/tricinel" title="Github">
          Github
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tricinel" title="LinkedIn">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://twitter.com/tricinel" title="Twitter">
          Twitter
        </a>
      </li>
      <li>
        <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#98;&#111;&#103;&#100;&#97;&#110;&#64;&#98;&#111;&#103;&#100;&#97;&#110;&#108;&#97;&#122;&#97;&#114;&#46;&#99;&#111;&#109;">
          Let&apos;s talk!
        </a>
      </li>
    </ul>
  </Footer>
);

export default FooterLinks;

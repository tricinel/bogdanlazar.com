import React from 'react';

import Section from '../Layout/Section';
import PostLink from '../Blog/PostLink';

const getPostLink = ({ node: { frontmatter: { path, date } } }) => (
  <li>
    <PostLink key={date} title={date} to={path} />
  </li>
);

const RecentPosts = ({ posts }) => (
  <Section>
    <p>Previous Now pages</p>
    <ul>{posts.map(getPostLink)}</ul>
  </Section>
);

export default RecentPosts;

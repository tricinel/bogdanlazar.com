import React from 'react';

import Section from '../Layout/Section';
import PostLink from './PostLink';
import { IPost } from '../../types/Post';

interface IRecentPostsProps {
  posts: IPost[];
}

const getPostLink = ({
  node: {
    frontmatter: { path, date }
  }
}: IPost) => (
  <li>
    <PostLink key={date} title={date} to={path} />
  </li>
);

const RecentPosts: React.SFC<IRecentPostsProps> = ({ posts }): JSX.Element => (
  <Section>
    <p>Previous Now pages</p>
    <ul>{posts.map(getPostLink)}</ul>
  </Section>
);

export default RecentPosts;

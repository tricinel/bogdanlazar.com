import React from 'react';

import Header from '../Header';
import Section from '../Layout/Section';
import RecentPosts from './RecentPosts';
import PostFooter from './PostFooter';
import { Highlight } from '../Typography';
import Layout from '../../layouts/layout';
import { IPost } from '../../types/Post';

interface INowPageWrapperProps {
  title: string;
  date: string;
  html: string;
  recentPosts?: IPost[];
}

const NowPageWrapper: React.SFC<INowPageWrapperProps> = ({
  title,
  date,
  html,
  recentPosts
}): JSX.Element => (
  <Layout>
    <Header title={title} back="/" />

    <Section dangerouslySetInnerHTML={{ __html: html }} />

    <Section>
      <p>
        This is a{' '}
        <a href="https://nownownow.com/about" title="What is a now page">
          now
        </a>{' '}
        page that shows what I&apos;m focused on right now. I aim to update it
        as things change.
      </p>
    </Section>

    <PostFooter>
      <Highlight>Last updated {date}</Highlight>
    </PostFooter>

    {recentPosts && <RecentPosts posts={recentPosts} />}
  </Layout>
);

export default NowPageWrapper;

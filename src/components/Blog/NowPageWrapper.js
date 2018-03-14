import React from 'react';

import Header from '../Header';
import Section from '../Layout/Section';
import RecentPosts from './RecentPosts';

const NowPageWrapper = ({ title, html, recentPosts }) => (
  <div>
    <Header title={title} back="/" />

    <Section>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Section>

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

    {recentPosts && <RecentPosts posts={recentPosts} />}
  </div>
);

export default NowPageWrapper;

import React from 'react';
import { Link } from 'gatsby';

interface IPostLinkProps {
  title: string;
  to: string;
}

const PostLink: React.SFC<IPostLinkProps> = ({ title, to }): JSX.Element => (
  <Link to={to}>{title}</Link>
);

export default PostLink;

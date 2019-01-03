import React from 'react';
import { Link } from 'gatsby';

const PostLink = ({ title, to }) => <Link to={to}>{title}</Link>;

export default PostLink;

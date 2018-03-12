import React from 'react';
import Helmet from 'react-helmet';

import './index.css';

import Wrapper from '../components/Layout';

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="BogdanLazar.com" />
    {children()}
  </Wrapper>
);

export default TemplateWrapper;

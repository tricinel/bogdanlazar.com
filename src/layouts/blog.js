import React from 'react';
import Helmet from 'react-helmet';

import './index.css';

import Wrapper from '../components/Layout';
import FooterLinks from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="BogdanLazar.com" />
    {children()}
    <FooterLinks />
  </Wrapper>
);

export default TemplateWrapper;

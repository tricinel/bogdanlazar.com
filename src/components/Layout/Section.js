import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

const StyledSection = styled.section`
  padding: ${rhythm(1)} 0;
`;

const Section = ({ children }) => (
  <StyledSection>
    {children}
    <hr />
  </StyledSection>
);

export default Section;

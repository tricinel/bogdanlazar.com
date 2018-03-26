import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 0 1.4em;
`;

const Section = ({ children }) => (
  <StyledSection>
    {children}
    <hr />
  </StyledSection>
);

export default Section;

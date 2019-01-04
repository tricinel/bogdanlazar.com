import styled from '@emotion/styled';

import theme from '../../utils/theme';

const Highlight = styled.span`
  background-color: ${theme.primary};
  color: ${theme.secondary};
  padding: 2px 4px;
`;

const Heading = styled.h1`
  background-color: ${theme.primary};
  font-size: 3.2em;
  display: block;
  padding: 8px 16px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

export { Highlight, Heading };

import styled from 'styled-components';

import theme from '../../utils/theme';
import { rhythm } from '../../utils/typography';

const Highlight = styled.span`
  background-color: ${theme.primary};
  color: ${theme.secondary};
  padding: ${rhythm(0.025)} ${rhythm(0.065)};
`;

const Heading = styled.h1`
  background-color: ${theme.primary};
  font-size: ${rhythm(1.6)};
  display: inline-block;
  padding: ${rhythm(0.5)} ${rhythm(1)};
`;

export { Highlight, Heading };

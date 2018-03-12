import styled from 'styled-components';

import { rhythm } from '../../utils/typography';

const Wrapper = styled.div`
  max-width: 860px;
  margin: 1.4em auto;
  padding: 0 1.4em;
`;

const Header = styled.header`
  margin-bottom: ${rhythm(1.5)};
  text-align: center;
`;

const Footer = styled.footer``;
const Main = styled.main``;

export { Header, Footer, Main };
export default Wrapper;

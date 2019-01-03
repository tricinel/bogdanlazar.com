import styled from '@emotion/styled';

const Wrapper = styled.div`
  max-width: 860px;
  margin: 1.4em auto;
  padding: 0;

  @media screen and (min-width: 768px) {
    padding: 0 1.4em;
  }
`;

const Header = styled.header`
  margin-bottom: 16px;
  text-align: center;
`;

const Footer = styled.footer`
  padding: 0 1.4em;
`;

const Main = styled.main``;

export { Header, Footer, Main };
export default Wrapper;

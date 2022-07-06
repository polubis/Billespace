import { ReactElement } from 'react';
import styled from 'styled-components';

export interface LayoutProps {
  children: ReactElement;
  header: ReactElement;
  footer: ReactElement;
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: 106px 0 64px 0;
`;

const Header = styled.header`
  height: 82px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;

  & > * {
    height: 100%;
  }
`;

const Main = styled.main`
  height: 100%;
  padding: 0 24px 24px 24px;
`;

const Footer = styled.footer`
  height: 64px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  & > * {
    height: 100%;
  }
`;

export const Layout = ({ children, header, footer }: LayoutProps) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </Container>
  );
};

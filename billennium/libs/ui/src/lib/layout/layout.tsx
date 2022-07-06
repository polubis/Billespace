import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

type RightHeaderContentElement = ReactElement | undefined | null;

export interface LayoutProps {
  title: string;
  children: ReactElement;
  rightHeaderContent: RightHeaderContentElement;
  footer: ReactElement;
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin: 106px 0 64px 0;
`;

const Header = styled.header<{ rightHeaderContent: RightHeaderContentElement }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  padding: 0 24px;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.14);
  position: fixed;

  ${(props) =>
    props.rightHeaderContent
      ? css`
          & > *:last-child {
            flex-shrink: 0;
            margin-left: 24px;
          }
        `
      : css``}
`;

const Title = styled.h5`
  font-size: 20px;
  font-family: 'Billennium', sans-serif;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.14);
  background: #fff;
  right: 0;

  & > * {
    height: 100%;
  }
`;

export const Layout = ({
  title,
  children,
  rightHeaderContent,
  footer,
}: LayoutProps) => {
  return (
    <Container>
      <Header rightHeaderContent={rightHeaderContent}>
        <Title>{title}</Title>
        {rightHeaderContent}
      </Header>
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </Container>
  );
};

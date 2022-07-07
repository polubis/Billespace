import { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled, { css, keyframes } from 'styled-components';

export interface SelectionDialogProps {
  children: ReactNode;
  title: string;
}

const SlideIn = keyframes`
  from {
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AppearIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const FlyIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40%);
  }
  50% {
    opacity: 1;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px;
  bottom: 0;
`;

const Title = styled.h5`
  margin: 0 0 28px 0;
  font-size: 20px;
  font-family: 'Billennium', sans-serif;
  color: #fff;
  opacity: 0;
  will-change: transform;
  animation: ${FlyIn} 1s cubic-bezier(1, 0.2, 0.4, 0.84) 0.4s forwards;
`;

const animateChildren = () => {
  const styles = Array.from(
    { length: 10 },
    (_, i) => css`
      & > *:nth-child(${i + 1}) {
        opacity: 0;
        will-change: transform;
        animation: ${SlideIn} 0.3s cubic-bezier(1, 0.2, 0.4, 0.85)
          ${(i + 1) * 0.1}s forwards;
      }
    `
  );

  return styles;
};

const Content = styled.div`
  display: flex;
  flex-flow: column;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }

  ${animateChildren()}
`;

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.71);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  will-change: transform;
  animation: ${AppearIn} 0.3s cubic-bezier(1, 0.2, 0.4, 0.85) forwards;
`;

export const SelectionDialog = ({ children, title }: SelectionDialogProps) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = useMemo(() => document.getElementById('root'), []);

  const content = (
    <>
      <Backdrop />
      <Container>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </Container>
    </>
  );

  return root ? createPortal(content, root) : content;
};

export interface SelectionDialogItemProps {
  children: ReactNode;
  dotted?: boolean;
  motive?: 'gray' | 'green' | 'red';
}

const getMotiveStyle = (motive: SelectionDialogItemProps['motive']) => {
  const grayMotive = css`
    background: #f6f6f6;
    color: #000;
  `;

  if (motive === 'gray') {
    return grayMotive;
  }

  if (motive === 'green') {
    return css`
      background: #0a782c;
      color: #fff;
    `;
  }

  if (motive === 'red') {
    return css`
      background: #ff0000;
      color: #fff;
    `;
  }

  return grayMotive;
};

const dottedText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const textStyle = css`
  font-family: 'Billennium', sans-serif;
  font-size: 16px;
  line-height: 24px;
`;

export const SelectionDialogItem = styled.div<SelectionDialogItemProps>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  background: #f6f6f6;

  ${(props) => getMotiveStyle(props.motive)}

  ${(props) =>
    Array.isArray(props.children) && props.children.length > 1
      ? css`
          & > *:nth-child(1) {
            margin-right: 14px;
            flex-shrink: 0;
          }

          & > *:nth-child(2) {
            ${textStyle}
            ${props.dotted && dottedText}
          }
        `
      : css`
          ${textStyle}
          ${props.dotted && dottedText}
        `}
`;

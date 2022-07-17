import { ReactNode } from 'react';
import styled from 'styled-components';
import { Label } from '../typography/typography';

export interface ListProps {
  title?: ReactNode;
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;

  ${Label} {
    margin-bottom: 14px;
  }

  ${Wrapper} {
    & > *:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

export const List = ({ title, children }: ListProps) => {
  return (
    <Container>
      {title && <Label>{title}</Label>}
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

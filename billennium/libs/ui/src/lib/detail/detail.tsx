import { ReactElement } from 'react';
import styled from 'styled-components';

export interface DetailProps {
  label: ReactElement;
  value: ReactElement;
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
`;

export const Detail = ({ label, value }: DetailProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  );
};

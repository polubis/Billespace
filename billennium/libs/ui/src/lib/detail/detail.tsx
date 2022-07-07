import { ReactNode } from 'react';
import styled, { StyledComponent } from 'styled-components';

type RenderContent = (component: StyledComponent<'span', any>) => ReactNode;
type ContentProp = RenderContent | string;

const isString = (arg: ContentProp): arg is string => typeof arg === 'string';

export interface DetailProps {
  label: ContentProp;
  value: ContentProp;
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const LabelText = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Billennium', sans-serif;
  color: #6d6d6d;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
`;

const ValueText = styled.span`
  font-size: 16px;
  font-family: 'Billennium', sans-serif;
  color: #000;
  font-weight: bolder;
`;

export const Detail = ({ label, value }: DetailProps) => {
  return (
    <Container>
      <Label>
        {isString(label) ? <LabelText>{label}</LabelText> : label(LabelText)}
      </Label>
      <Value>
        {isString(value) ? <ValueText>{value}</ValueText> : value(ValueText)}
      </Value>
    </Container>
  );
};

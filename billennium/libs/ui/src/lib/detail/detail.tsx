import { ReactNode } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Label, Title } from '../typography/typography';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  & > * {
    text-transform: uppercase;
  }
`;

const Value = styled.div`
  display: flex;
  align-items: center;
`;

export const Detail = ({ label, value }: DetailProps) => {
  return (
    <Container>
      <LabelWrapper>
        {isString(label) ? <Label>{label}</Label> : label(Label)}
      </LabelWrapper>
      <Value>{isString(value) ? <Title>{value}</Title> : value(Title)}</Value>
    </Container>
  );
};

import { ReactElement } from 'react';
import styled from 'styled-components';
import { List } from '../list/list';
import { SmallTitleStyle } from '../typography/typography';

export interface NumericSelectorItemProps {
  active?: boolean;
}

export interface NumericSelectorProps {
  title: string;
  children: ReactElement<NumericSelectorItemProps>[];
}

export const NumericSelectorItem = styled.button<NumericSelectorItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  min-width: 45px;
  min-height: 50px;
  border-radius: 5px;
  border: none;
  ${SmallTitleStyle}

  &:focus {
    outline: none;
  }

  ${(props) => {
    if (props.disabled)
      return 'cursor: default; background: #ff000097; color: #000000;';
    else
      return props.active
        ? 'background: #rgba(0, 0, 0, 0.05); color: #000000;'
        : 'background: #0fb2409d; color: #000000;';
  }}
`;

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
`;

export const NumericSelector = ({ title, children }: NumericSelectorProps) => {
  return (
    <List title={title}>
      <Container>{children}</Container>
    </List>
  );
};

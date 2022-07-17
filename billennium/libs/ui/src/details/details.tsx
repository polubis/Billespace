import { ReactNode } from 'react';
import styled from 'styled-components';

export interface DetailsProps {
  children: ReactNode;
}

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
`;

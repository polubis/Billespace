import { ReactNode } from 'react';
import styled from 'styled-components';

export interface TileProps {
  children: ReactNode;
}

export const Tile = styled.div<TileProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: #f6f6f6;
  padding: 12px 16px;
`;

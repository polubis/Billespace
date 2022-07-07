import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  icon: ReactNode;
}

export type ActiveNavItem = NavItem | null;

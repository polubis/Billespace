import { PayloadAction as ToolkitPayloadAction } from '@reduxjs/toolkit';

export type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never
> = ToolkitPayloadAction<P, T, M, E>;

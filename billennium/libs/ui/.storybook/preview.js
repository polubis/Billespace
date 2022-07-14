import { GlobalStyle } from '../src/globalStyle';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

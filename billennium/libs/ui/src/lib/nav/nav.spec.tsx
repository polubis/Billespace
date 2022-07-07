/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';

import { Nav } from './nav';

describe('<Nav>', () => {
  it('it should renders navigation', () => {
    render(
      <Nav
        items={[{ label: 'First', icon: <div>A</div> }]}
        onActiveClick={() => {}}
        onClick={() => {}}
      />
    );

    screen.getByText('A');
    screen.getByTitle('First');
  });
});

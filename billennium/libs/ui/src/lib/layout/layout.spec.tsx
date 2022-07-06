import { render, screen } from '@testing-library/react';

import { Layout } from './layout';

describe('<Layout>', () => {
  it('displays content', () => {
    render(
      <Layout
        title="Title"
        rightHeaderContent={<div>A</div>}
        footer={<div>Footer</div>}
      >
        <div>Content</div>
      </Layout>
    );

    screen.getByText('Title');
    screen.getByText('A');
    screen.getByText('Content');
    screen.getByText('Footer');
  });
});

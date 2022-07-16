/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { ImagePicker } from './image-picker';

describe('<ImagePicker />', () => {
  it('renders trigger & content', () => {
    render(
      <ImagePicker
        Trigger={() => <div>Trigger</div>}
        Content={() => <div>Content</div>}
        image={null}
        onChange={() => {}}
      />
    );

    screen.getByText('Trigger');
    screen.getByText('Content');
  });
});

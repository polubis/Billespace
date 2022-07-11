import { Story, Meta } from '@storybook/react';
import { Tile, TileProps } from './tile';

export default {
  component: Tile,
  title: 'Tile',
} as Meta;

const Template: Story<TileProps> = (args) => (
  <div style={{ margin: 16 }}>
    <Tile {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { children: <div>Content</div> };

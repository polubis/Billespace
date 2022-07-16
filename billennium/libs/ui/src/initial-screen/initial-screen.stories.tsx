import { Story, Meta } from '@storybook/react';
import { InitialScreen, InitialScreenProps } from './initial-screen';

export default {
  component: InitialScreen,
  title: 'InitialScreen',
} as Meta;

const Template: Story<InitialScreenProps> = (args) => (
  <InitialScreen {...args} />
);

export const Basic = Template.bind({});
Basic.args = { title: 'Billespace' };

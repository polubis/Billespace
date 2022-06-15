import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

const BASE_PROPS: AvatarProps = {
  src: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=391',
  text: 'User avatar',
};

export const Basic = Template.bind({});
Basic.args = BASE_PROPS;

export const WithShapes = Template.bind({});
WithShapes.args = {
  ...BASE_PROPS,
  shapes: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  ...BASE_PROPS,
  shapes: true,
  shadow: true,
};

export const WithLetter = Template.bind({});
WithLetter.args = {
  ...BASE_PROPS,
  shapes: true,
  shadow: true,
  letter: 'A',
};

export const Rotating = Template.bind({});
Rotating.args = {
  ...BASE_PROPS,
  shapes: true,
  shadow: true,
  rotating: true,
};

import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Input, InputProps } from './input';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<InputProps> = (args) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Filled = Template.bind({});
Filled.args = { value: 'Warsaw' };

export const Error = Template.bind({});
Error.args = { value: 'Warsawo', invalid: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, placeholder: 'City' };

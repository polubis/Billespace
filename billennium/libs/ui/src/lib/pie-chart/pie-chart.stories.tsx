import { Meta, Story } from '@storybook/react';
import { PieChart, PieChartProps } from './pie-chart';

export default {
  component: PieChart,
  title: 'PieChart',
} as Meta;

const Template: Story<PieChartProps> = (args) => (
  <div style={{ margin: '16px' }}>
    <PieChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [1, 2],
  size: 36,
};

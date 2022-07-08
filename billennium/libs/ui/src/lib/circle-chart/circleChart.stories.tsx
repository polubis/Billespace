import { Meta, Story } from "@storybook/react";
import { CircleChart, CircleChartProps } from "./circleChart";

export default {
    component: CircleChart,
    title: 'CircleChart'
} as Meta;

const Template: Story<CircleChartProps> = (args) => <div style={{margin: '16px'}}><CircleChart {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    data: [['Item 1'], ['Item 2', 'Item 3']],
    size: 18
}

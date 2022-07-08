import { Meta, Story } from "@storybook/react";
import { AnaliticTile, AnaliticTileProps } from "./analiticTile";

export default {
    component: AnaliticTile,
    title: 'AnaliticTile'
} as Meta;

const Template: Story<AnaliticTileProps> = (args) => <div style={{margin: '16px'}}><AnaliticTile {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
    title: 'HRBP',
    data: [['Item 1'], ['Item 2', 'Item 3']]
}

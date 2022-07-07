import { Story, Meta } from '@storybook/react';
import { 
    Heading as HeadingStory, 
    Title as TitleStory, 
    Label as LabelStory, 
    Description as DescriptionStory
} from './typography';

export default {
  title: 'Typography',
} as Meta;

interface Props {
    value: JSX.Element
}

const Template: Story<Props> = (args) => <div style={{margin: '16px'}}>{args.value}</div>;

export const Heading = Template.bind({});
Heading.args = {
  value: (
    <HeadingStory>
        Reservation details
    </HeadingStory>
  ),
};

export const Title = Template.bind({});
Title.args = {
  value: (
    <TitleStory>
        Open space 1
    </TitleStory>
  ),
};

export const Label = Template.bind({});
Label.args = {
  value: (
    <LabelStory>
        POLAND
    </LabelStory>
  ),
};

export const Description = Template.bind({});
Description.args = {
  value: (
    <DescriptionStory>
        Desk will be asigned automatically
    </DescriptionStory>
  ),
};
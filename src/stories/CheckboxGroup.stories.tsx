import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Checkbox from "components/Checkbox";

export default {
  title: 'Checkbox Group',
  component: Checkbox.Group,
} as ComponentMeta<typeof Checkbox.Group>;

const Template: Story<ComponentProps<typeof Checkbox.Group>> = (args) => <Checkbox.Group {...args}/>;
export const FirstStory = Template.bind({});
FirstStory.args = {
  options: [{ label: 'test1', value: { a: 'test1' } }, { label: 'test2', value: 'test2' }],
  value: ['test2', 'test3', { a: 'test1' }],
}
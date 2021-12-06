import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Checkbox } from "components";

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => <Checkbox { ...args } />;
export const FirstStory = Template.bind({});
FirstStory.args = {
  children: 'test',
}
import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { TextArea } from "components";

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: Story<ComponentProps<typeof TextArea>> = (args) => <TextArea {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  placeholder: 'Описание',
  label: 'test',
};
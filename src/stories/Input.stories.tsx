import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Input } from "../index";
import { CloseIcon } from "ui-its-icons";

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<ComponentProps<typeof Input>> = (args) => <Input { ...args } />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  icon: <CloseIcon/>,
  placeholder: 'Test',
};
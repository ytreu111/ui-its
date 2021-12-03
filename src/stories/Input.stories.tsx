import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Input } from "../index";

import 'antd/dist/antd.css';
import { ArrowIcon } from "ui-its-icons";

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story<ComponentProps<typeof Input>> = (args) => <Input { ...args } />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  placeholder: 'Test',
  // icon: <ArrowIcon/>,
  // optional: () => {}
};
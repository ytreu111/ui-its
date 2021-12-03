import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Select from "components/Select/Select";

import 'antd/dist/antd.css';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: Story<ComponentProps<typeof Select>> = (args) => <Select {...args} />;

const options = (() => {
  const options = [];

  for(let i = 1; i < 50; i++){
    options.push({
      value: `test${i}`,
      label: `test_label_${i}`
    })
  }

  return options;
})()

export const FirstStory = Template.bind({});
FirstStory.args = {
  options: options,
  allowClear: true,
  small: true,
};
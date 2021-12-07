import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Button from "components/Button";
import { CloseIcon } from "ui-its-icons";

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button { ...args } />;
export const FirstStory = Template.bind({});
FirstStory.args = {
  children: 'Кнопка',
  type: 'danger',
  icon:<CloseIcon/>,
  loading: true
}
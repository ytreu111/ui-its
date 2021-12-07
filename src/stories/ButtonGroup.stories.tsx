import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Button from "components/Button";
import { CloseIcon } from "ui-its-icons";

export default {
  title: 'Button Group',
  component: Button.Group,
} as ComponentMeta<typeof Button.Group>;

const Template: Story<ComponentProps<typeof Button.Group>> = (args) => <Button.Group {...args} >
  <Button icon={<CloseIcon/>} value={'test1'}>Кнопка 1</Button>
  <Button value={'test2'}>Кнопка 2</Button>
  <Button value={'test3'}>Кнопка 3</Button>
</Button.Group>;
export const FirstStory = Template.bind({});
FirstStory.args = {
  defaultValue: 'test2',
}
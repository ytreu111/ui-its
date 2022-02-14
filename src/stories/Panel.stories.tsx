import React, { ComponentProps } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Panel from "components/Panel";
import Button from "../components/Button";

export default {
  title: 'Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const footerContent =
  <>
    <Button type={'danger'}>Test</Button>
  </>

const children =
  <>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
    <Button type={'primary'}>Test</Button>
  </>

const Template: Story<ComponentProps<typeof Panel>> = (args) => <Panel {...args} />;
export const FirstStory = Template.bind({});
FirstStory.args = {
  headerContent: 'test',
  footerContent,
  children,
  style: {
    height: '500px'
  }
}
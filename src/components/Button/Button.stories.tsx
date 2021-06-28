import React from "react";

import Button from "./Button";

import { Story, Meta } from "@storybook/react";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Simple = Template.bind({});

Simple.args = {
  primary: false,
  children: "testtext",
};

Primary.args = {
  ...Simple.args,
  primary: true,
};

export const WithoutText = Template.bind({});

WithoutText.args = {
  ...Simple.args,
  children: "",
};

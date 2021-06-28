import React from "react";

import Header from "./Header";

import { Story, Meta } from "@storybook/react";

export default {
  component: Header,
  title: "Components/Header",
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Simple = Template.bind({});


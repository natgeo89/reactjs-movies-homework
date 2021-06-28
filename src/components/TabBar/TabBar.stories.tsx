import React from "react";

import TabBar from "./TabBar";

import { Story, Meta } from "@storybook/react";

export default {
  component: TabBar,
  title: "Components/TabBar",
} as Meta;

const Template: Story = (args) => <TabBar {...args} />;

export const Active = Template.bind({});



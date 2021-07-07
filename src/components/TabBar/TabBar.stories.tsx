import React from "react";

import TabBar from "./TabBar";

import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
  component: TabBar,
  title: "Components/TabBar",
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Active = Template.bind({});



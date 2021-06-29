import React from "react";

import Pagination from "./Pagination";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: Pagination,
  title: "Components/Pagination",
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Simple = Template.bind({});

Simple.args = {
  count: 5,
};

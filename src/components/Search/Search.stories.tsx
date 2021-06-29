// Search.stories.ts | Search.stories.tsx

import React from 'react';

import Search from './Search';

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: Search,
  title: 'Components/Search',
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  text: "type to search",
};

// Search.stories.ts | Search.stories.tsx

import React from 'react';

import Search from './Search';

import { Story, Meta } from '@storybook/react';
import { SearchProps } from './Search';

export default {
  component: Search,
  title: 'Components/Search',
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  text: "type to search",
};

import React from "react";

import LanguageSelect from "./LanguageSelect";

import { Story, Meta } from "@storybook/react";

export default {
  component: LanguageSelect,
  title: "Components/LanguageSelect",
} as Meta;

const Template: Story = (args) => <LanguageSelect {...args} />;

export const Simple = Template.bind({});


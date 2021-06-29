import React from "react";

import LanguageSelect from "./LanguageSelect";

import { ComponentMeta, ComponentStory } from "@storybook/react";


export default {
  component: LanguageSelect,
  title: "Components/LanguageSelect",
} as ComponentMeta<typeof LanguageSelect>;

const Template: ComponentStory<typeof LanguageSelect> = (args) => <LanguageSelect {...args} />;

export const Simple = Template.bind({});

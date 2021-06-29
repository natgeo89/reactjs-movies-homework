import React from "react";

import MovieCard from "./MovieCard";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  component: MovieCard,
  title: "Components/MovieCard",
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Simple = Template.bind({});

Simple.args = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-FcZYbGKZ4pRACbEF5InqyIS4pu7CBW-nQ&usqp=CAU",
  rating: 5,
  title: "Title",
  genres: ["genre1", "genre2"],
};

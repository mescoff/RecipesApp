import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ingredientsMock } from "../testTools/mockData";
import { IIngredient } from "../interfaces/recipe.interface";
import { IngredientsStatic } from "../components/recipe/recipePage/ingredients/IngredientsStatic";


export default {
  title: "Example/IngredientsStaticContainer",
  component: IngredientsStatic
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<{ ingredients: IIngredient[] }> = args => (
  <IngredientsStatic {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ingredients: ingredientsMock,
}
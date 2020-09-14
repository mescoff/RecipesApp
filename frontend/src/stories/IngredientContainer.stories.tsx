import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ingredientsMock } from "../testTools/mockData";
import { IIngredient } from "../Interfaces/recipe.interface";
import ManageIngredients from "../Components/Recipe/RecipePage/Ingredients/ManageIngredients";


export default {
  title: "Example/IngredientsContainer",
  component: ManageIngredients
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<{ ingredients: IIngredient[] }> = args => (
  <ManageIngredients {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ingredients: ingredientsMock,
}
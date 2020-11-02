import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ingredientsMock } from "../testTools/mockData";
import { IIngredient } from "../interfaces/recipe.interface";
import ManageIngredientsModifiable from "../components/recipe/recipePage/ingredients/ManageIngredientsModifiable";


export default {
  title: "Example/IngredientsModifiableContainer",
  component: ManageIngredientsModifiable
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<{ ingredients: IIngredient[] }> = args => (
  <ManageIngredientsModifiable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  ingredients: ingredientsMock,
}
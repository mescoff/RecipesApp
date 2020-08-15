import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { instructionsMock } from "../testTools/mockData";
import ManageRecipeInstructions from "../Components/Recipe/RecipePage/Instructions/ManageRecipeInstructions";
import { IInstruction } from "../Interfaces/recipe.interface";


export default {
  title: "Example/ManageRecipeInstructions",
  component: ManageRecipeInstructions
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<{ instructions: IInstruction[] }> = args => (
  <ManageRecipeInstructions {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  instructions: instructionsMock,
}
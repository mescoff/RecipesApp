import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { recipeMock1 } from "../testTools/mockData";
import { RecipeMainInfoContainerStatic } from "../components/recipe/recipePage/mainInformation/RecipeMainInfoContainerStatic";
import { IRecipe } from "../interfaces/recipe.interface";
import { Box } from "@material-ui/core";

export default {
  title: "Example/RecipeInfo",
  component: RecipeMainInfoContainerStatic
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<{ recipe: IRecipe }> = args => (
  <Box width="30%">
    <RecipeMainInfoContainerStatic {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  recipe: recipeMock1,
}

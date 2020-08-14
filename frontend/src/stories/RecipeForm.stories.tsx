import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ManageRecipeForm, { IRecipeFormProps } from "../Components/Recipe/ManageRecipeForm";
import { RecipeMock1 } from "../testTools/mockData";

export default {
    title: "Example/ManageRecipeForm",
    component: ManageRecipeForm
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<IRecipeFormProps> = args => (
    <ManageRecipeForm {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    recipe: RecipeMock1,
}

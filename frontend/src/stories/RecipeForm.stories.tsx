import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ManageRecipeForm, { IManageRecipeFormProps } from "../Components/Recipe/RecipePage/MainInformation/ManageRecipeForm";
import { recipeMock1 } from "../testTools/mockData";

export default {
    title: "Example/ManageRecipeForm",
    component: ManageRecipeForm
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<IManageRecipeFormProps> = args => (
    <ManageRecipeForm {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    recipe: recipeMock1,
}

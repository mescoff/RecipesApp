import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ManageRecipeMainInfoContainer, { IManageRecipeFormProps } from "../components/recipe/recipePage/mainInformation/ManageRecipeMainInfoContainer";
import { recipeMock1 } from "../testTools/mockData";

export default {
    title: "Example/ManageRecipeInfo",
    component: ManageRecipeMainInfoContainer
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} as Meta;

const Template: Story<IManageRecipeFormProps> = args => (
    <ManageRecipeMainInfoContainer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    recipe: recipeMock1,
}

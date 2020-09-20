import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { instructionsMock } from "../testTools/mockData";
import ManageInstructionsDraggable from "../components/recipe/recipePage/instructions/ManageInstructionsDraggable";
import { IInstruction } from "../interfaces/recipe.interface";


export default {
  title: "Example/InstructionsContainer",
  component: ManageInstructionsDraggable
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story<{ instructions: IInstruction[] }> = args => (
  <ManageInstructionsDraggable {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  instructions: instructionsMock,
}
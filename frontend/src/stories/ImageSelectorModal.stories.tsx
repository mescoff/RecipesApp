import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ImageSelectorModal from "../Components/Recipe/RecipePage/Instructions/ImageSelectorModal";

export default {
  title: "Example/ImageSelectorModal",
  component: ImageSelectorModal
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = () => (

    <ImageSelectorModal />

);

export const Basic = Template.bind({});
// Basic.args = {
//   instructions: instructionsMock,
// }
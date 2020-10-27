import React from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import Gallery from '../components/recipe/recipePage/imageGallery/Gallery';
import { IMedia } from '../interfaces/recipe.interface';
import { mediasMock } from '../testTools/mockData';

export default {
  title: "Example/PictureGallery",
  component: Gallery
} as Meta;

const Template: Story<{medias: IMedia[]}> = (args) => (
  <Gallery {...args}/>
);

export const Basic = Template.bind({})
Basic.args = {
  medias: mediasMock,
}
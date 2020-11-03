import React from 'react';
import { IRecipe } from '../../../interfaces/recipe.interface';
import { RecipeMainInfoContainerStatic } from './mainInformation/RecipeMainInfoContainerStatic';
import { Box } from '@material-ui/core';
import Gallery from './imageGallery/Gallery';
import { InstructionsStatic } from './instructions/InstructionsStatic';
import { IngredientsStatic } from './ingredients/IngredientsStatic';

export const RecipePageStatic: React.FC<{ recipe: IRecipe }> = (props) => {
  return (
    <Box textAlign="left" fontFamily="DeliveryNote,Segoe UI,Roboto">
      <Box display="flex" width='100%'>
        <Gallery medias={props.recipe.media} />
        <RecipeMainInfoContainerStatic recipe={props.recipe} />
      </Box>
      <Box display="flex" width='100%' marginBottom={2} justifyContent='space-between'>
        <Box width='20%'>
          <IngredientsStatic ingredients={props.recipe.ingredients} />
        </Box>
        <Box width='30%'>
          <InstructionsStatic instructions={props.recipe.instructions}/>
        </Box>
      </Box>
    </Box>
  )
}
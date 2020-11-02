import React, { useState, useEffect } from "react";
import { IRecipe } from "../../../interfaces/recipe.interface";
import ManageRecipeMainInfoContainer from "./mainInformation/ManageRecipeMainInfoContainer";
import { Box } from "@material-ui/core";
import Gallery from "./imageGallery/Gallery";
import ManageInstructionsDraggable from "./instructions/ManageInstructionsDraggable";
import ManageIngredientsModifiable from "./ingredients/ManageIngredientsModifiable";


/**
 * Recipe page : view Recipe details or create new recipe
 * @param props 
 */
const RecipePageModifiable: React.FC<{ recipe: IRecipe }> = props => {
  const [recipe, setRecipe] = useState<IRecipe>({ ...props.recipe });

  useEffect(() => {
    setRecipe(props.recipe);
  },[props.recipe])

  // TODO: If no recipeId this should be blank and ready to create recipe
  return (

    <>
      <Box display="flex" width='100%' justifyContent="space-between">
        <Gallery medias={recipe.media} />
        <ManageRecipeMainInfoContainer recipe={recipe} />
      </Box>
      <Box display="flex" width='100%' marginBottom={2} justifyContent='space-between'>
        <ManageIngredientsModifiable ingredients={recipe.ingredients} />
        <ManageInstructionsDraggable instructions={recipe.instructions} />
      </Box>
      </>
  );
};

export const getCourseById = (
  recipes: IRecipe[],
  recipeId: string
): IRecipe | null => {
  return recipes.find(recipe => recipe.id.toString() === recipeId) || null;
};

export default RecipePageModifiable;

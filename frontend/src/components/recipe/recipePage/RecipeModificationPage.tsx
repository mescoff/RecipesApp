import React, { useState, useEffect, useContext } from "react";
import { IRecipe, defaultRecipe } from "../../../interfaces/recipe.interface";
import { RouteComponentProps } from "@reach/router";
import { logInfo } from "../../../helpers/helpers";
import { RecipesContext, IRecipesContext } from "../../../contexts/RecipesContext";
import CustomModal from "../../common/CustomModal";
import ManageRecipeForm from "./mainInformation/ManageRecipeForm";
import { Box, CircularProgress } from "@material-ui/core";
import Gallery from "./imageGallery/Gallery";
import ManageInstructionsDraggable from "./instructions/ManageInstructionsDraggable";
import ManageIngredients from "./ingredients/ManageIngredients";


interface RecipePageProps extends RouteComponentProps {
  recipeId?: string;
}

/**
 * Recipe page : view Recipe details or setup new recipe
 * @param props 
 */
const RecipeModifiationPage: React.FC<RecipePageProps> = props => {
  const logger = "RecipePage";
  const [recipe, setRecipe] = useState<IRecipe>({ ...defaultRecipe });
  const [error, setError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const recipeContext = useContext<IRecipesContext>(RecipesContext);

  useEffect(() => {
    logInfo(logger, `About to render recipepage. recipeId:${props.recipeId} and recipes:`, recipeContext.state.recipes);
    if (props.recipeId && recipeContext.state.recipes.length > 0) {
      logInfo(logger, "Looking for recipe");
      const rec = getCourseById(recipeContext.state.recipes, props.recipeId) || null;
      if (rec === null) {
        setError("Recipe not found");
        setIsModalOpen(true);
      } else {
        setRecipe(rec);
      }
    }
  }, [recipeContext.state.recipes]);

  const handleToggle = () => {
    // setIsModalOpen( prev => {
    //     return !prev;
    // })
    logInfo(logger, `Setting modal isOpen: ${!isModalOpen}`);
    setIsModalOpen(!isModalOpen);
  };

  // TODO: If no recipeId this should be blank and ready to create recipe
  logInfo(logger, "Rendering");
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" m={2}>
        {recipe.id !== -1 ?
          <>
            <Box display="flex" >
              <Gallery medias={recipe.media} />
              <ManageRecipeForm recipe={recipe} />
            </Box>
            <Box display="flex" width='100%' marginBottom={2} justifyContent='space-between'>
              <ManageIngredients ingredients={recipe.ingredients} />
              <ManageInstructionsDraggable instructions={recipe.instructions} />
            </Box>
            {/* <Box width={'50%'} >
              <ManageInstructionsDraggable instructions={recipe.instructions} />
            </Box> */}
          </> :
          <Box marginTop={'20vh'}>
            <CircularProgress />
          </Box>
        }
        {isModalOpen === true &&
          <CustomModal
            title="Oops"
            description={error}
            isOpen={isModalOpen}
            handleToggle={handleToggle}
            redirectLink={"/"}
          />
        }
      </Box>
    </Box>
  );
};


export const getCourseById = (
  recipes: IRecipe[],
  recipeId: string
): IRecipe | null => {
  return recipes.find(recipe => recipe.id.toString() === recipeId) || null;
};

export default RecipeModifiationPage;

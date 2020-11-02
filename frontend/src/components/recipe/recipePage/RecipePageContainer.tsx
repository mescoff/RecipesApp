import React, { useState, useContext, useEffect } from 'react';
import { IRecipesContext, RecipesContext } from '../../../contexts/RecipesContext';
import { RouteComponentProps } from '@reach/router';
import { IRecipe, defaultRecipe } from '../../../interfaces/recipe.interface';
import { logInfo } from '../../../helpers/helpers';
import RecipePageModifiable, { getCourseById } from './RecipePageModifiable';
import { Box, CircularProgress, Button } from '@material-ui/core';
import CustomModal from '../../common/CustomModal';
import * as Colors from '../../../interfaces/colors';
import { RecipePageStatic } from './RecipePageStatic';


interface RecipePageProps extends RouteComponentProps {
  recipeId?: string;
}

export const RecipePageContainer: React.FC<RecipePageProps> = (props) => {
  const logger = "RecipePageContainer";
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const recipeContext = useContext<IRecipesContext>(RecipesContext);
  const [recipe, setRecipe] = useState<IRecipe>({ ...defaultRecipe });
  const [error, setError] = useState<string>("");
  const [modifyModeActive, setModifyModeActive] = useState<boolean>(false);

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
  logInfo(logger, "Rendering");
  return (
    // <Box display="flex" justifyContent="center">
    <Box display="flex" >
      <Box display="flex" flexDirection="column">
      <Box display="flex" alignSelf="flex-start" margin={4} width="15vw">
        <Button
          style={{ color: modifyModeActive === true ? "rgba(0, 0, 0, 0.3)" : Colors.MAINTHEME }}
          disabled={modifyModeActive}
          variant="outlined"
          onClick={() => (setModifyModeActive(!modifyModeActive))}>Modify</Button>
      </Box>
      <Box display="flex" alignSelf="flex-start" margin={4} width="15vw">
        <Button
          style={{ color: modifyModeActive === false ? "rgba(0, 0, 0, 0.3)" : "blue" }}
          disabled={!modifyModeActive}
          variant="outlined"
          onClick={() => (setModifyModeActive(!modifyModeActive))}>Save</Button>
      </Box>
      </Box>
      <Box display="flex" flexDirection="column" marginTop={5} width="60vw">
        {/* <Box display="flex" flexDirection="column" marginTop={5} width="1024px"> */}
        {recipe.id !== -1 ?
          <>
            {
              modifyModeActive === true ?
                <RecipePageModifiable recipe={recipe} />
                : <RecipePageStatic recipe={recipe} />
            }
          </>
          : <Box marginTop={'20vh'}>
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
  )
}
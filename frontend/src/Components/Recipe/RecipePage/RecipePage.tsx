import React, { useState, useEffect, useContext } from "react";
import { IRecipe, defaultRecipe } from "../../../Interfaces/recipe.interface";
import { Typography, Box, Modal } from "@material-ui/core";
import { RouteComponentProps } from "@reach/router";
import { logInfo } from "../../../Tools/functions";
import { RecipesContext, IRecipesContext } from "../../../Contexts/RecipesContext";
import CustomModal from "../../common/CustomModal";
import ManageRecipeForm from "./MainInformation/ManageRecipeForm";

interface RecipePageProps extends RouteComponentProps {
	recipeId?: string;
}

/**
 * Recipe page : view Recipe details or setup new recipe
 * @param props 
 */
const RecipePage: React.FC<RecipePageProps> = props => {
	const logger = "RecipePage";
	const [recipe, setRecipe] = useState<IRecipe>({ ...defaultRecipe });
	const [error, setError] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const recipeContext = useContext<IRecipesContext>(RecipesContext);

	useEffect(() => {
		if (props.recipeId && recipeContext.recipes.length > 0) {
			logInfo(logger, "Looking for recipe");
			const rec = getCourseById(recipeContext.recipes, props.recipeId) || null;
			if (rec === null) {
				setError("Recipe not found");
				setIsModalOpen(true);
			} else {
				setRecipe(rec);
			}
		}
	});

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
		<>
			{/* <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h5" component="h6">
          {recipe.titleShort}
        </Typography>
      </Box> */}
			<ManageRecipeForm recipe={recipe} />
			<CustomModal
				title="Oops"
				description={error}
				isOpen={isModalOpen}
				handleToggle={handleToggle}
				redirectLink={"/"}
			/>
		</>
	);
};

// RecipePage.propTypes = {
//     recipeId?: 
// }

export const getCourseById = (
	recipes: IRecipe[],
	recipeId: string
): IRecipe | null => {
	return recipes.find(recipe => recipe.id === recipeId) || null;
};

export default RecipePage;

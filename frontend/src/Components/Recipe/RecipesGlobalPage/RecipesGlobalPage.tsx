import { IRecipe } from "../../../interfaces/recipe.interface";
import { ManageRecipeCard } from "./ManageRecipeCard";
import Box from "@material-ui/core/Box";
import React, { useContext, useEffect } from "react";
import {  RouteComponentProps,} from "@reach/router";
import { RecipesContext, IRecipesContext } from "../../../contexts/RecipesContext";
import { CircularProgress } from "@material-ui/core";

const img1 = "https://images.unsplash.com/photo-1445847562439-f251c3799ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
const img2 = "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const RecipeList: React.FC<{recipes: IRecipe[]}> = (props) => {
  const recipes = props.recipes.map(recipe => (
    <ManageRecipeCard key={recipe.id} {...recipe} />
  ));
  const results = <>{recipes}</>;
  return results;
};


// FOR when hovering over one recipe
/* <Box flexGrow={1}>Item 1</Box> */
// export type TParams = { id: string };

// TODO: Don't forget to memoize AllRecipesPage to prevent over re-renders if context state updates on fields we don't care about in this component

const RecipesGlobalPage: React.FC<RouteComponentProps> = () => {
  const recipesContext = useContext<IRecipesContext>(RecipesContext);
  // ApiService.Get("http://localhost:4001/");

  return (
    <>
    {recipesContext.state.recipes.length > 0 ?
      <Box
        maxWidth="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        mt={2}
      >
        <RecipeList recipes={recipesContext.state.recipes} />
      </Box>
      : <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    }
    </>
  );
};

export default RecipesGlobalPage;

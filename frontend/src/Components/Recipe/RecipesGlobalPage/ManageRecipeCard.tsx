import React, { useState } from "react";
import { IRecipe } from "../../../interfaces/recipe.interface";
import { logInfo } from "../../../helpers/helpers";
import { Grow } from "@material-ui/core";
import { RecipeLarger } from "./RecipeCardLarger";
import RecipeCard from "./RecipeCard";

export interface IManageRecipeProps {
  onHover: (recipe:IRecipe) => void;
}


export const ManageRecipeCard: React.FC<IRecipe> = (props) => {
  const logger = "ManageRecipe";
  const [showSmall, setShowSmall] = useState<boolean>(true);

  /// TODO: use 
  const handleHover = (recipe:IRecipe) => {
    logInfo(logger, `${props.id}: showSmall = ${!showSmall}`);
    // setShowSmall(prev => !prev); 
  };

  return (
    showSmall ? 
      <Grow
        in = {showSmall}
        unmountOnExit
        style={{ transformOrigin: "0 0 0" }}
        {...(showSmall ? { timeout: {enter: 1500, exit: 750} } : {})}
      >
        <RecipeCard onHover={handleHover} recipe={props} />
      </Grow>
      :
      <Grow
        in={!showSmall}
        style={{ transformOrigin: "0 0 0" }}
        {...(!showSmall ? { timeout: {enter: 1500, exit: 750} } : {})}
      >
        <RecipeLarger onHover={handleHover} recipe={props} />
      </Grow>
    
  );
};

import React, { useState } from "react";
import { IRecipe } from "../../Interfaces/recipe.interface";
import { logInfo } from "../../tools/functions";
import Recipe from "./Recipe";
import { RecipeLarger } from "./RecipeLarger";
import { Grow } from "@material-ui/core";

export interface IManageRecipeProps {
  onClicked: () => void;
}

export const ManageRecipe = (props: IRecipe) => {
  const logger = "ManageRecipe";
  const [showSmall, setShowSmall] = useState<boolean>(true);

  const handleClick = () => {
    logInfo(logger, `${props.id}: showSmall = ${!showSmall}`);

    setShowSmall(prev => !prev);
  };

  //   return clicked === false ? (
  return (
    showSmall ? 
      <Grow
        in = {showSmall}
        unmountOnExit
        style={{ transformOrigin: "0 0 0" }}
        {...(showSmall ? { timeout: {enter: 1500, exit: 750} } : {})}
      >
        <Recipe onClicked={handleClick} {...props} />
      </Grow>
      :
      <Grow
        in={!showSmall}
        style={{ transformOrigin: "0 0 0" }}
        {...(!showSmall ? { timeout: {enter: 1500, exit: 750} } : {})}
      >
        <RecipeLarger onClicked={handleClick} {...props} />
      </Grow>
    
  );
};

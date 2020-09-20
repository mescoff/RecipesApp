import React from 'react';
import { IRecipe } from '../interfaces/recipe.interface';

export interface IRecipesContext{
    recipes: IRecipe[];
    updateRecipe: (recipe:IRecipe) => void;
}

export const defaultRecipesContext: IRecipesContext = {
    recipes : new Array<IRecipe>(),
    updateRecipe: (recipe:IRecipe) => {}
}

export const RecipesContext = React.createContext(defaultRecipesContext);
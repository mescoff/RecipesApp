import React from 'react';
import { IRecipe } from '../interfaces/recipe.interface';
import { Action } from './RecipeReducers';

export interface IInitialRecipesContextContextState{
  recipes: Array<IRecipe>;  // readonly
}

export const defaultRecipesContextState : IInitialRecipesContextContextState = {
  recipes : new Array<IRecipe>()
}

export interface IRecipesContext{
    state: IInitialRecipesContextContextState;
    // updateRecipe: (recipe:IRecipe) => void;
    // dispatch: (action: Action) => void;
    dispatch: React.Dispatch<Action>;
}

export const defaultRecipesContext: IRecipesContext = {
    state : defaultRecipesContextState,
    // updateRecipe: (recipe:IRecipe) => {},
    dispatch: () => {}
}

export const RecipesContext = React.createContext(defaultRecipesContext);
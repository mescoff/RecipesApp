import { IRecipesContext, IInitialRecipesContextContextState as IInitialRecipesContextState, IInitialRecipesContextContextState } from "./RecipesContext";
import { TestData } from "./RecipesProvider";

export type Action = { type: 'GET_RECIPES' | 'UPDATE_RECIPE', label: string, payload:any };

export const recipesReducer = (state: IInitialRecipesContextState, action: Action): IInitialRecipesContextContextState => {
  switch (action.type) {
    case 'GET_RECIPES':
      // return state.recipes;
      return {
        recipes: TestData()
      }
    case 'UPDATE_RECIPE':
      return state;
    // default:
    //   throw new Error();
  }
  return state;
}
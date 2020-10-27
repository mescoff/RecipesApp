import React, { useReducer, useEffect } from "react";
import { IRecipesContext, RecipesContext, defaultRecipesContext, defaultRecipesContextState } from "./RecipesContext";
import { IRecipe } from "../interfaces/recipe.interface";
import { recipeMock1 } from "../testTools/mockData";
import { recipesReducer } from "./RecipeReducers";
import * as ApiService from "../services/apiCall.service";
import { logInfo, logError } from "../helpers/helpers";

export const TestData = (): IRecipe[] => {
    const res = new Array<IRecipe>();
    for (let i = 0; i < 5; i++) {
      res.push({ ...recipeMock1, id : i });
    }
    return res;
  };
  
class RecipesProvider extends React.Component<IRecipesContext> {
    // TODO: If we want to transform this into FC component:    const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    // then use useEffect() to get recipes from API if recipes.Count === 0
    
  state : IRecipesContext = {
    ...this.props,
    // updateRecipe: defaultRecipesContext.updateRecipe,
  };
  
  async componentDidMount(){
     //https://localhost:44319/api/Recipes/3
     try{
      const recipe = await ApiService.Get("https://localhost:44319/api/","Recipes/3");
      // const recipe = result.data;
      logInfo("RecipeProvider","Provider loading recipe: ", recipe);
      this.setState( {
        state: {
          ...this.state.state,
          recipes: [recipe]
        }
      })
     } catch (error){
       logError("ApiService","Something happened when fetching recipes:", error);
     }
      // this.setState({
      //     // recipes: TestData(),
      //     recipes: recipe,
      // })
     
  }

  render() {
    return (
      <RecipesContext.Provider value={this.state}>
        {this.props.children }
      </RecipesContext.Provider>
    );
  }
}

// const RecipesProvider : React.FC<IRecipesContext> = (props) => {
//   const [state, dispatch] = useReducer(recipesReducer, defaultRecipesContextState)
//   const value = {state, dispatch};

//   useEffect(() => {
//     // LOAD RECIPES HERE
//     // state.recipes = TestData();  HOW TO LOAD WITHOUT MODIFYING STATE IN PLACE?

//   }, []);

//   return(
//     <RecipesContext.Provider value={value}>
//       {props.children}
//     </RecipesContext.Provider>
//   )
// }


export default RecipesProvider;

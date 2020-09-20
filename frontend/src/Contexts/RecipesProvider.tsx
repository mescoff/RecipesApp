import React from "react";
import { IRecipesContext, RecipesContext, defaultRecipesContext } from "./RecipesContext";
import { IRecipe } from "../interfaces/recipe.interface";
import { recipeMock1 } from "../testTools/mockData";

const TestData = (): IRecipe[] => {
    const res = new Array<IRecipe>();
    for (let i = 0; i < 10; i++) {
      res.push({ id: i.toString(), ...recipeMock1 });
    }
    return res;
  };
  
class RecipesProvider extends React.Component<IRecipesContext> {
    // TODO: If we want to transform this into FC component:    const [state, dispatch] = React.useReducer(countReducer, {count: 0})
    // then use useEffect() to get recipes from API if recipes.Count === 0
    
  state = {
    ...this.props,
    updateRecipe: defaultRecipesContext.updateRecipe,
  };
  
  componentDidMount(){
      this.setState({
          recipes: TestData(),
      })
  }

  render() {
    return (
      <RecipesContext.Provider value={this.state}>
        {this.props.children }
      </RecipesContext.Provider>
    );
  }
}

export default RecipesProvider;

import React from "react";
import { recipeMock1 } from "../../../testTools/mockData";
import RecipeCard, { IRecipeCardProps } from "./RecipeCard";
import { IManageRecipeProps } from "./ManageRecipeCard";
import { createHistory, createMemorySource, LocationProvider } from "@reach/router";
import {render} from '@testing-library/react'

const mockLocation = {
  pathname: "/recipes",
  hash: "",
  search: "",
  state: ""
};

// const renderWithRouter = (ui, {route = "/", history= createHistory(createMemorySource(route))} = {}){
//     return {
//         ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
//         history
//     }
// }

test('recipe card renders', async () => {
    const recipeProps: IRecipeCardProps & IManageRecipeProps = {
            recipe: recipeMock1,
            onHover: jest.fn
          };
    // const{container, history:{navigate}} = renderWithRouter(<RecipeCard {...recipeProps}/>);
    // const appContainer = container;

})

// const render = (args?: any) => {
//   const recipeProps: IRecipeCardProps & IManageRecipeProps = {
//     recipe: RecipeMock1,
//     onHover: jest.fn
//   };
//   return mount(<RecipeCard {...recipeProps} />);
// };

// beforeEach(() => {
//     jest.spyOn(Location, 'useLocation').mockReturnValue(mockLocation);
// })

// it("recipe rendered properly", () => {
//   const wrapper = render();
//   // const title = wrapper.find()
// });

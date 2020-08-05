import { IRecipe } from "../../Interfaces/recipe.interface";
import { ManageRecipe } from "./ManageRecipe";
import { RecipeMock1 } from "../../testTools/mockData";
import ApiService from "../../services/apiCall.service";
import Box from "@material-ui/core/Box";
import Footer from "../common/Footer";
import HeaderBar from "../common/Header";
import React from "react";

const img1 =
  "https://images.unsplash.com/photo-1445847562439-f251c3799ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80";
const img2 =
  "https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

// const TestData = [
//   {
//     title: "Almond Pesto",
//     img_link: img1,
//     description: "Description for your recipe"
//   },
//   {
//     title: "Coconut Curry",
//     img_link: img2,
//     description: "Description for your recipe"
//   }
// ];

const TestData = (): IRecipe[] => {
  const res = new Array<IRecipe>();
  for (let i = 0; i < 10; i++) {
    res.push({ id: i, ...RecipeMock1 });
  }
  return res;
};

interface IRecipeList {
  recipes: IRecipe[];
}

// const RecipeList = (props: IRecipeList) => (
//   <>
//     {props.recipes.map(recipe => (
//       <Recipe key={recipe.titleShort} {...recipe} />
//     ))}
//   </>
// );
const RecipeList = (props: IRecipeList) => {
  // const firstRecipe = props.recipes[0];
  const recipes = props.recipes.map(recipe => (
    <ManageRecipe key={recipe.id} {...recipe} />
  ));
  const results = (
    <>
      {recipes}
    </>
  );

  return results;
};

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-around",
//       overflow: "hidden",
//       backgroundColor: theme.palette.background.paper
//     },
//     gridList: {
//       width: 500,
//       height: 450
//     }
//   })
// );

{
  /* <Box flexGrow={1}>Item 1</Box> */
} // FOR when hovering over one recipe

const RecipePage = () => {
  // const classes = useStyles();

  ApiService.Get("http://localhost:4001/");
  return (
    // <Box display="flex" justifyContent="center">
    <div className="main-container" style={{ width: "100%" }}>
      <HeaderBar />
      {/* <Container display="flex" flexDirection="row" justifyContent="left" mt={2}> */}
      <Box
        maxWidth="100%"
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        mt={2}
      >
        <RecipeList recipes={TestData()} />
      </Box>
      <Footer />
    </div>
  );
};

export default RecipePage;

import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { defaultRecipesContext } from "../../Contexts/RecipesContext";
import { Router, Redirect } from "@reach/router";
import { ThemeProvider } from "@material-ui/styles";
import RecipesGlobalPage from "../Recipe/RecipesGlobalPage/RecipesGlobalPage";
import DeliveryNote from "../../fonts/DeliveryNote.otf";
import Main from "./Main";
import NoMatch from "../common/NoMatch";
import React from "react";
import RecipePage from "../Recipe/RecipePage/RecipePage";
import RecipesProvider from "../../Contexts/RecipesProvider";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["DeliveryNote", "Segoe UI", "Roboto"].join(",")
  }
});

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: ['HimawariScript','DeliveryNote','Segoe UI', 'Roboto'].join(","),
//   },
//   // overrides: {
//   //   MuiCssBaseline: {
//   //     '@global': {
//   //       '@font-face': [raleway],
//   //     },
//   //   },
//   // },
// });

// FIXME: attempt to load font...
const deliveryNote = {
  fontFamily: "DeliveryNote",
  fontStyle: "normal",
  // fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('DeliveryNote'),
    url(${DeliveryNote}) format('truetype')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RecipesProvider {...defaultRecipesContext}>
          <Main>
            <Router>
              <RecipesGlobalPage path="/recipes" />
              <RecipePage path="/recipes/:recipeId" />
              <Redirect noThrow from="/" to="/recipes" />
              <NoMatch default />
            </Router>
          </Main>
        </RecipesProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;

// TODO: Create a "dashboard component" that just contains header and footer and takes children component

import React from "react";
// import "./Recipe.css";
// import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {
  Typography,
  Box,
  CardActionArea,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { IRecipe } from "../../../interfaces/recipe.interface";
import { IManageRecipeProps } from "./ManageRecipeCard";
import { Link } from "@reach/router";
import { useLocation } from "react-router";

// export interface IRecipe {
//     img_link: string;
//     title: string;
//     description: string;
// }

//export interface IRecipe {
//   TitleShort: string;
//   TitleLong: string;
//   Description: string;
//   LastModifier: string;
//   AuditDate: Date;
//   CreateDate: Date;
// }

// export const CreateRecipe = (img_link: string, title:string, description:string):IRecipe => ({
//     img_link,
//     title,
//     description
// });

export interface IRecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = (props: IRecipeCardProps & IManageRecipeProps) => {
  const { id, medias, titleShort, description } = props.recipe;
  const classes = useStyles();
  const location = useLocation();
  return (
    <Box width="20%" height="20%">
      <Link to={`${location.pathname}/${id}`} style={{ textDecoration: "none" }}>
        <Box m={2}>
          <Card
          // onMouseOut={props.onHover}
          >
            {/* <CardActionArea> */}
            <CardMedia
              className={classes.picture}
              image={medias[0].mediaPath}
              title={titleShort}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {titleShort}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
              {/* <IngredientsTable /> */}
            </CardContent>
            {/* </CardActionArea> */}
          </Card>
        </Box>
      </Link>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      margin: "1rem",
      marginBottom: "20px",
      height: "50vh"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    },
    picture: {
      // width: 151
      height: "20vh",
      width: "100%"
    }
  })
);

// Recipe.propTypes = {
//   recipe: PropTypes.object.isRequired,
// };

export default RecipeCard;

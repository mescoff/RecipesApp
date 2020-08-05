import React from "react";
import "./Recipe.css";
// import PropTypes from 'prop-types';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {
  Typography,
  Box,
  CardActionArea,
  makeStyles,
  Theme,
  createStyles
} from "../../../node_modules/@material-ui/core";
import { IRecipe } from "../../Interfaces/recipe.interface";
import { IManageRecipeProps } from "./ManageRecipe";

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



const Recipe = (props: IRecipe & IManageRecipeProps) => {
  const { medias, titleShort, description } = props;
  const classes = useStyles();
  return (
    <Box width="20%" height="20%">
      <Card
        className="recipe-card"
        onClick={props.onClicked}
        // onMouseOut={props.onHover}
      >
        <CardActionArea>
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
        </CardActionArea>
      </Card>
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

export default Recipe;

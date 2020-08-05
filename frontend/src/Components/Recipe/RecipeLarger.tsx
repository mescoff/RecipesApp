import React from "react";
import {
  CardMedia,
  makeStyles,
  Theme,
  createStyles,
  Box,
  Card,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";
import IngredientsTable from "../RecipeUtils/IngredientsTable";
import { IRecipe } from "../../Interfaces/recipe.interface";
import { IManageRecipeProps } from "./ManageRecipe";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: "1rem",
      marginBottom: "20px",
      height: "70vh"
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
      height: "100%",
      width: "100%"
    }
    // controls: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   paddingLeft: theme.spacing(1),
    //   paddingBottom: theme.spacing(1),
    // },
    // playIcon: {
    //   height: 38,
    //   width: 38,
    // },
  })
);

// width: "30vw",

export const RecipeLarger = (props: IRecipe & IManageRecipeProps ) => {
  const classes = useStyles();
  const { medias, titleShort, description } = props;
  return (
    <Box width="50%" height="60%">
      <Card className={classes.root} onClick={props.onClicked}>
        <CardMedia
          // className="media"
          className={classes.picture}
          image={medias[0].mediaPath}
          title={titleShort}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h3">
              {titleShort}
            </Typography>
            <Typography component="p">{description}</Typography>
            <Divider style={{ marginTop: "10px", marginBottom: "10px" }} />
            <IngredientsTable />
          </CardContent>
        </div>
      </Card>
    </Box>
  );
};

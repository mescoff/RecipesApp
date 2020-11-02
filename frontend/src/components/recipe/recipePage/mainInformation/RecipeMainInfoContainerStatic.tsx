import React from "react";
import { IRecipe } from "../../../../interfaces/recipe.interface";
import { Typography, makeStyles, Box } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TimePickerLabel from "./TimePickerLabel";
import { TimeInterval } from "./TimeInterval";


const useStyles = makeStyles(() => ({
  title: {
    color: "rgba(0, 0, 0, 0.54)",
    padding: 3,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1,
    margin: 0,
    marginBottom: "1vh",
    borderLeft: "1px rgba(0, 0, 0, 0.1) solid",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid",
    // borderRadius: "20% 10%",
  },
  typo: {
    marginLeft:"5px"
  },
  icon: {
    // fontSize: "small"
    marginLeft: "4px",
    color: "rgba(0, 0, 0, 0.3)"
  }
}))

export const RecipeMainInfoContainerStatic: React.FC<{ recipe: IRecipe }> = (props) => {

  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="column">
      {/* TITLE */}
      <Box margin={2}>
        <Box width="48px">
          <p className={styles.title}>Title</p>
        </Box>
        <Typography className={styles.typo} variant="body1">
          {props.recipe.titleShort}
        </Typography>
      </Box>

      {/* LONGER TITLE */}
      {props.recipe.titleLong &&
        <Box margin={2}>
          <Box width="76px">
            <p className={styles.title}>Fun Title</p>
          </Box>
          <Typography className={styles.typo} variant="body1">
            {props.recipe.titleLong}
          </Typography>
        </Box>
      }

      {/* TIME INTERVALS */}
      <Box margin={2} display="flex">
        <Typography className={styles.title}>Time</Typography>
        <AccessTimeIcon className={styles.icon} />
      </Box>
      <>
        {
          props.recipe.timeIntervals.map(interval => (
            <TimePickerLabel key={interval.label} label={interval.label} >
              <TimeInterval timeInterval={interval} />
            </TimePickerLabel>))
        }
      </>

      {/* DESCRIPTION */}
      <Box margin={2}>
        <Box width="95px">
          <p className={styles.title}>Description</p>
        </Box>
        <Typography className={styles.typo} variant="body1">
          {props.recipe.description}
        </Typography>
      </Box>
    </Box>
  )
}
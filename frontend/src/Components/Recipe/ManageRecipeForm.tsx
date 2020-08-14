import React, { useState, ReactElement } from "react";
import { IRecipe, ITimeInterval, TimeUnit } from "../../Interfaces/recipe.interface";
import { makeStyles, Theme, createStyles, Typography, FormControl, InputLabel, OutlinedInput, Grid, Divider, Box } from "@material-ui/core";
import TimePicker from "./TimePicker";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { logInfo } from "../../Tools/functions";
import { ManageRecipeCard } from "./ManageRecipeCard";
import { SelectInputProps } from "@material-ui/core/Select/SelectInput";

export interface IRecipeFormProps {
  recipe: IRecipe;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
        // width: "25ch"
      }
    },
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(1)
        // width: "25ch"
      }
    },
    typo: {
      textAlign: 'center',
    },
    icon: {
      // fontSize: 'small'
      marginRight: '2px'
    }
  })
);

const ManageRecipeForm: React.FC<IRecipeFormProps> = props => {
  const logger = "ManageRecipeForm";
  const styles = useStyles();
  const [tempRecipe, setTempRecipe] = useState<IRecipe>(props.recipe);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempRecipe({
      ...tempRecipe,
      [event.target.name]: event.target.value
    });
  };

  const handleTimeIntervalUpdate2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    logInfo(logger, "handleTimeIntervalUpdate received event:", event);
    const name = event.target.name;
    logInfo(logger, "handleTimeIntervalUpdate event name:", name);
    const selectedOptionIndex = event.target.options.selectedIndex;
    // The Key of the Enum data in the selected option
    const enumKey = event.target.options[selectedOptionIndex].getAttribute('data-key');  // TimeUnit | Number for now
    // The Property of the 
    // const property = event.

    // const intervalToUpdate = tempRecipe.timeIntervals.find(t => )
    // setTempRecipe({
    //   ...tempRecipe,
    //   // timeIntervals
    // })
  }

  /**
   * Handle update of time intervals (value or unit for now).  
   * Update all TimeInterval properties with a single function
   * @param intervalLabel The interval label. Used like an ID to find interval in list //TODO: consider possible bug if multiple interval named same by mistake...
   * @param propertyName The name of the property to update on the TimeInterval Object
   * @param value The value (of type Number of TimeUnit)
   */
  const handleTimeIntervalUpdate = (intervalLabel: string, propertyName: string, value: string | TimeUnit): void => {
    // Multistep update to avoid mutating the state -- and even more steps to make it more legible
    // Retrieving index of interval we need to update. Looking by label
    const intervalIndex = tempRecipe.timeIntervals.findIndex(i => i.label === intervalLabel);
    logInfo(logger, `handleTimeIntervalUpdate Value: ${value}, typeOf: ${typeof(value)}`);
    if (intervalIndex !== -1) {
      // create new interval with updated property
      const updatedInterval = {
        ...tempRecipe.timeIntervals[intervalIndex],
        [propertyName]: value
      }
      // replace old interval with updated one in list
      const updatedTimeIntervals = [
        ...tempRecipe.timeIntervals.slice(0, intervalIndex),
        updatedInterval,
        ...tempRecipe.timeIntervals.slice(intervalIndex + 1)
      ]
      // update interval list in recipe
      setTempRecipe({
        ...tempRecipe,
        timeIntervals: updatedTimeIntervals
      });
    }
  }

  // TODO: ON Send back to Context. Don't send if some fields are not valid !! => so get validation


  return (
    // <Container maxWidth="sm">
    // <Box className={styles.root} display="flex" >
    <Grid container spacing={3}>
      {/* display="flex"> */}
      {/* <form className={styles.form}> */}
      <form className={styles.form}>
        {/* <Typography>Title</Typography>
        <TextField
          // id="outlined-secondary"
          label="Avocado Toasts"
          variant="outlined"
          color="secondary"
          id="recipe-title-input"
          size="small"
          name="shortTitle"
          // value={tempRecipe.titleShort}
          // onChange={handleChange}
        /> */}

        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="component-outlined">Title</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={tempRecipe.titleShort}
            onChange={handleChange}
            label="Avocado Toasts"
            name="titleShort"
          />
        </FormControl>
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="component-outlined">Fun Title</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={tempRecipe.titleLong}
            onChange={handleChange}
            label="Avocado Toasts"
            name="titleLong"
          />
        </FormControl>

        <Grid item xs={2} sm container direction="row"  >
          <AccessTimeIcon className={styles.icon} />
          <Typography className={styles.typo}>Time</Typography>
        </Grid>
        <>
          {tempRecipe.timeIntervals.map(interval => (
            <TimeIntervalContainer timeInterval={interval} handleChange={handleTimeIntervalUpdate} />
          ))}
        </>
      </form>
      {/* <TimeIntervalContainer timeInterval={tempRecipe.ti}/>
        <TimeIntervalContainer category="Cooking"/> */}

    </Grid>
  );
};

// interface ITimeAssignementListProps {
//   intervals: ITimeInterval[];
//   handleChange: (intervalLabel: string, propertyName: string, value: string | TimeUnit) => void;
// }
// /**
//  * Render list of intervals into TimeIntervalContainers
//  * @param props { intervals: ITimeInterval[] }
//  */
// const TimeAssignementList: React.FC<ITimeAssignementListProps> = (props) => {
//   return <>
//     {props.intervals.map(interval => (
//       <TimeIntervalContainer timeInterval={interval} handleChange={props.handleChange} />
//     ))
//     }
//   </>
// }

export interface ITimeIntervalContainerProps {
  timeInterval: ITimeInterval;
  // handleChange: ITimeAssignementListProps['handleChange'];
  handleChange: (intervalLabel: string, propertyName: string, value: string | TimeUnit) => void;
}

/**
 * Container to update each time interval of the recipe 
 * (ex: Prep time, Cooking time, etc)
 * @param props {timeInterval : ITimeInterval} 
 */
const TimeIntervalContainer: React.FC<ITimeIntervalContainerProps> = (props) => {
  const styles = useStyles();
  return (
    <Grid item xs={12} sm container alignItems="center" spacing={1}>
      <Grid item xs={2} />
      <Grid item xs={1}>
        <Divider className={styles.typo} />
      </Grid>
      <Grid item xs={3} >
        <Typography>{props.timeInterval.label}</Typography>
      </Grid>
      <TimePicker {...props} />
      {/* </Box> */}
    </Grid>
  );
}

export default ManageRecipeForm;

import React from 'react';
import { Grid, Typography, makeStyles, Theme, createStyles, TextField, Box } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TimePickerContainer from './TimePickerContainer';
import { nameof } from '../../../../helpers/helpers';
import { IRecipe, TimeUnit, ITimeInterval, TimeIntervalLabel } from '../../../../interfaces/recipe.interface';

export interface IRecipeFormProps {
  recipe: IRecipe;
  handleGeneralChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTimePickerChange: (intervalLabel: string, propertyName: string, value: string | TimeUnit) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      marginLeft: '4px'
    },
    multilineInput: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    divider: {
      marginBottom: '8vh'
    }
  })
);

/**
 * Container with main recipe info (titles, times, description)
 * @param props 
 */
const RecipeMainInfoContainer: React.FC<IRecipeFormProps> = (props) => {
  const styles = useStyles();
  return (
    <>
      <form className={styles.form}>
        <TextField
          size="small"
          id="outlined-title"
          label="Title"
          type="text"
          variant="outlined"
          value={props.recipe.titleShort}
          onChange={props.handleGeneralChange}
          name={nameof<IRecipe>("titleShort")}
        />
        <TextField
          size="small"
          id="outlined-title"
          label="Fun Title"
          type="text"
          variant="outlined"
          value={props.recipe.titleLong}
          onChange={props.handleGeneralChange}
          name={nameof<IRecipe>("titleLong")}
        />
        <Grid item xs={2} sm container direction="row"  >
          <Typography className={styles.typo}>Time</Typography>
          <AccessTimeIcon className={styles.icon} />
        </Grid>
        
        <TimePickerContainersList timeIntervals={props.recipe.timeIntervals} handleTimePickerChange={props.handleTimePickerChange} />
   
        <Grid item xs={12} sm container direction="row"  >
          <Box mt={2} width={1}>
            <TextField
              id="recipe-description"
              label="Description"
              multiline
              rows={6}
              variant="outlined"
              value={props.recipe.description}
              name={nameof<IRecipe>("description")}
              onChange={props.handleGeneralChange}
              fullWidth={true}
            />
          </Box>
        </Grid>
      </form>
    </>
  )
}

const TimePickerContainersList: React.FC<{
  timeIntervals: ITimeInterval[], handleTimePickerChange: (intervalLabel: string, propertyName: string, value: string | TimeUnit) => void;
}> = (props) => {
  const logger = "TimePickerContainersList";
  const list = (
    <>
      {
        props.timeIntervals.map(interval => (
          <TimePickerContainer key={interval.label} timeInterval={interval} handleChange={props.handleTimePickerChange} />
        ))
      }
    </>
  );
  return list;
}

    // <>
    //   {
    //     Object.keys(TimeIntervalLabel).map(enumKey => {
    //       // logInfo(logger, `enumKey is ${enumKey} and type is ${typeof (enumKey)}`);
    //       // find corresponding interval, otherwise return empty interval
    //       const matchingTimeIntervalInRecipe = props.timeIntervals !== undefined ? props.timeIntervals.find(t => t.label === enumKey) : undefined;
    //       // logInfo(logger, `matchingTimeIntervalInRecipe: `, matchingTimeIntervalInRecipe);
    //       const timeInterval: ITimeInterval = matchingTimeIntervalInRecipe !== undefined ? matchingTimeIntervalInRecipe[0] : { label: enumKey, timeValue: 0, timeUnit: TimeUnit.Minutes };
    //       // logInfo(logger, `Final TImeInterval is: `, timeInterval);
    //       return (
    //         <TimePickerContainer key={enumKey} timeInterval={timeInterval} handleChange={props.handleTimePickerChange} />
    //       )
    //     })
    //   }
    // </>



export default RecipeMainInfoContainer;
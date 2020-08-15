import React from 'react';
import { ITimeInterval } from '../../../../Interfaces/recipe.interface';
import { Grid, Divider, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import TimePicker from './TimePicker';
import { IRecipeFormProps } from './RecipeForm';

export interface ITimePickerContainerProps {
  timeInterval: ITimeInterval;
  // handleChange: ITimeAssignementListProps['handleChange'];
  handleChange: IRecipeFormProps["handleTimePickerChange"];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typo: {
      textAlign: 'center',
    },
  })
);

/**
 * Container for TimeInterval label and TimePicker component
 * (ex: Prep time, Cooking time, etc)
 * @param props {timeInterval : ITimeInterval} 
 */
const TimePickerContainer: React.FC<ITimePickerContainerProps> = (props) => {
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
    </Grid>
  );
}

export default TimePickerContainer;
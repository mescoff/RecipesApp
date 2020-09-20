import React from 'react';
import { Grid, FormControl, InputLabel, OutlinedInput, Typography, makeStyles, Theme, createStyles, TextField, Box, Divider } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import TimePickerContainer from './TimePickerContainer';
import { nameof } from '../../../../helpers/helpers';
import { IRecipe, TimeUnit } from '../../../../interfaces/recipe.interface';

export interface IRecipeFormProps {
  recipe: IRecipe;
  // handleChange: ITimeAssignementListProps['handleChange'];
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
    }
  })
);

const RecipeForm: React.FC<IRecipeFormProps> = (props) => {
  const styles = useStyles();
  return (
    <Grid container spacing={3}>
      <form className={styles.form}>
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="component-outlined">Title</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={props.recipe.titleShort}
            onChange={props.handleGeneralChange}
            label="Avocado Toasts"
            name={nameof<IRecipe>("titleShort")}
          />
        </FormControl>
        <FormControl variant="outlined" size="small">
          <InputLabel htmlFor="component-outlined">Fun Title</InputLabel>
          <OutlinedInput
            id="recipe-titleLong"
            value={props.recipe.titleLong}
            onChange={props.handleGeneralChange}
            label="Avocado Toasts"
            name={nameof<IRecipe>("titleLong")}
          />
        </FormControl>

        <Grid item xs={2} sm container direction="row"  >
          <Typography className={styles.typo}>Time</Typography>
          <AccessTimeIcon className={styles.icon} />
        </Grid>

        {/* <Grid item xs={12} sm container direction="row"  >
          <Grid item xs={4} >
            <Divider />
          </Grid>
        </Grid> */}

        {/* <Grid item xs={12} sm container alignItems="center" spacing={1}> */}
        <>
          {props.recipe.timeIntervals.map(interval => (
            <TimePickerContainer timeInterval={interval} handleChange={props.handleTimePickerChange} />
          ))}
        </>

        <Grid item xs={12} sm container direction="row"  >
          <Box mt={2} width={1}>
            <TextField
              id="recipe-description"
              label="Description"
              multiline
              rows={4}
              defaultValue="A few words to describe me !"
              variant="outlined"
              value={props.recipe.description}
              name={nameof<IRecipe>("description")}
              onChange={props.handleGeneralChange}
              fullWidth={true}
            />
          </Box>
        </Grid>

      </form>
    </Grid>
  )
}

export default RecipeForm;
import React from 'react';
import { Grid, Typography, makeStyles, Theme, createStyles, TextField, Box, Divider } from '@material-ui/core';
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
    },
    divider: {
      marginBottom: '8vh'
    }
  })
);

const RecipeForm: React.FC<IRecipeFormProps> = (props) => {
  const styles = useStyles();
  return (
    <>
      {/* <Box display="flex">
        <Typography variant='h5' style={{ alignSelf: 'flex-start' }}>
          Basics
        </Typography>
      </Box>
      <Divider className={styles.divider} /> */}

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
        {props.recipe.timeIntervals !== undefined && props.recipe.timeIntervals.length > 1 &&
        // TODO: remove eventually because time interval should never be empty...
          <>
            {
              props.recipe.timeIntervals.map(interval => (
                <TimePickerContainer key={interval.label} timeInterval={interval} handleChange={props.handleTimePickerChange} />
              ))
            }
          </>
        }

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

export default RecipeForm;
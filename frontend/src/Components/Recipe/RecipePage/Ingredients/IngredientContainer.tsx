import React, { ChangeEvent } from 'react';
import { IIngredient, IUnit } from '../../../../Interfaces/recipe.interface';
import { Box, TextField, createStyles, Theme, makeStyles, MenuItem, FormControl, Select, IconButton } from '@material-ui/core';
import { logInfo, nameof } from '../../../../Tools/helpers';
import ClearIcon from '@material-ui/icons/Clear';

interface IIngredientContainerProps {
  ingredient: IIngredient;
  units: IUnit[];
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (ingredient: IIngredient) => void;
  handleDelete: (id: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    qttyField: {
      width: '70px'
    },
    ingredientField: {
      width: 'auto'
    }   ,
    unitField: {
      minWidth: '90px'
    }
  })
);


const IngredientContainer: React.FC<IIngredientContainerProps> = (props) => {
  const logger = "IngredientContainer";
  const styles = useStyles();

  /**
  * On update from input 
  * Prep the values to send them back to parent via generic handleChange()
  * @param event Event source of the callback
  */
  const onUpdateTextField = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    // property to update
    const propertyName = event.target.name;
    // logInfo(logger, `onUpdateTextField: value ${value}, prop:${propertyName}`);
    // No validation in this case because anything can be inputed
    const ing = {
      ...props.ingredient,
      [propertyName]: value
    };
    props.handleChange(ing);
  }

  const onDelete = () => {
    props.handleDelete(props.ingredient.id);
  }

  /**
    * On update from dropdown item 
    * Prep the values to send them back to parent via generic handleChange()
    * @param event Event source of the callback
    * @param child React element that was selected
    */
  const onUpdateSelect = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode): void => {
    // if (event.target.name !== undefined) {
      const value: string = event.target.value as string;
      // FIXME: [Important] here we assume that there are no duplicate units with same symbol... Otherwise this will break
      const unit = props.units.find(u => u.symbol === value);
      if (unit !== undefined) {
        logInfo(logger, `onUpdateSelect: value:${value} unit:`, unit);
        const ing = {
          ...props.ingredient,
          unit: unit
        };
        props.handleChange(ing);
      }
      else {
        logInfo(logger, `[onUpdateSelect] Unit with symbol ${value} could not be found`);
      }
    // }
  }

  return (
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='flex-start'
      alignItems="center"
      m={2}>
      <TextField
        className={styles.qttyField}
        label='qty'
        size='small'
        variant='outlined'
        value={props.ingredient.quantity}
        name={nameof<IIngredient>('quantity')}
        onChange={onUpdateTextField}
      />
      <Box mr={2} ml={2}>
        <FormControl className={styles.unitField} variant='outlined' size='small'  >
          <Select
            id='ingredientunit-select'
            value={props.ingredient.unit.symbol}
            // TODO: add tool tip above dropdown value to show full unit name (over symbol)
            // name={props.ingredient.unit.id}
            onChange={onUpdateSelect}
          >
            {/* // FIXME: make sure unit points to one ref of the units list at Manage component level rather than each ingredient holding the list of units...  [OK] */}
            {props.units.map(
              unit => {
                return (
                  <MenuItem key={unit.name} value={unit.symbol}>
                    {unit.symbol}
                  </MenuItem>
                )
              }
            )}
          </Select>
        </FormControl>
      </Box>
      <TextField
        className={styles.ingredientField}
        label='ingredient'
        size='small'
        variant='outlined'
        value={props.ingredient.name}
        name={nameof<IIngredient>('name')}
        onChange={onUpdateTextField}
      />
      <IconButton size='medium' color="secondary" aria-label="delete ingredient" onClick={onDelete}>
          <ClearIcon />
      </IconButton>
    </Box>
  );
}

export default IngredientContainer;
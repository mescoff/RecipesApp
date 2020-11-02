import React, { useState, useEffect } from 'react';
import { IIngredient } from '../../../../interfaces/recipe.interface';
import { Box, Typography, Divider, makeStyles, Theme, createStyles, IconButton } from '@material-ui/core';
import IngredientModifiable from './IngredientModifiable';
import { unitsMock } from '../../../../testTools/mockData';
import { logInfo } from '../../../../helpers/helpers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


export const useIngredientsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column"
    },
    divider: {
      marginBottom: '4vh'
    }
  })
);

// TESTS
// - textfield update properly
// - dropdown for unit works properly
// - only tempIngredients are updated not props.ingredients
// - adding new ingredient works (added and on modif tempIngredients is updated properly)
// - test delete

/**
 * Container for ingredients
 * @param props : { ingredients: IIngredient[] }
 */
const ManageIngredientsModifiable: React.FC<{ ingredients: IIngredient[] }> = (props) => {
  // FIXME: At the moment all separate components are Managed (Ingredients, Instructions, Info) but eventually put together we'll have to move control up to common parent
  const logger = 'ManageIngredients';
  const [tempIngredients, setIngredients] = useState<IIngredient[]>([]);
  const styles = useIngredientsStyles();
  const units = unitsMock; // TODO: Units should come from API and be centralized in context

  useEffect(() => {
    setIngredients(props.ingredients);
  }, [props.ingredients]);

  const handleChange = (ingredient: IIngredient) => {
    logInfo(logger, `[Update Ingredient]:`, ingredient);
    const ingredientIndex = tempIngredients.findIndex(i => i.id === ingredient.id);
    if (ingredientIndex !== -1) {
      const updatedIngredients = [
        ...tempIngredients.slice(0, ingredientIndex),
        ingredient,
        ...tempIngredients.slice(ingredientIndex + 1)
      ];
      setIngredients(updatedIngredients);
    }
    else {
      logInfo(logger, `[Update Ingredient] Ingredient with id ${ingredient.id} not found`);
    }
  }

  const handleDelete = (id: number) => {
    const ingredientIndex = tempIngredients.findIndex(i => i.id === id);
    if (ingredientIndex !== -1) {
      logInfo(logger, `[Delete Ingredient] With id: ${id}`);
      const updatedIngredients = [
        ...tempIngredients.slice(0, ingredientIndex),
        ...tempIngredients.slice(ingredientIndex + 1)
      ];
      setIngredients(updatedIngredients);
    }
    else {
      logInfo(logger, `[Delete Ingredient] Ingredient with id ${id} not found`);
    }
  }

  const onAddClicked = () => {
    // WATCHOUT: For now we assume that when receiving the ingredients we generate our own ids in order and can assume that the bottom ingredient has the highest ID. 
    // So new id is last element's id + 1...
    const tempId = tempIngredients.length > 0 ? tempIngredients[tempIngredients.length - 1].id + 1 : 0;
    const emptyIngredient: IIngredient = { name: '', quantity: '', id: tempId, unit: units[0] }
    logInfo(logger, `[Add Ingredient] Id ${tempId}`);
    const updatedIngredients = [
      ...tempIngredients.slice(0),
      emptyIngredient
    ]
    setIngredients(updatedIngredients);
  }

  return (
    <Box className={styles.root} >
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems='center'>
        <Typography variant="h5" >
          Ingredients
        </Typography>
        <IconButton size='medium' color="primary" aria-label="add new ingredient" onClick={onAddClicked}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <Divider className={styles.divider} />
      <Box display="flex" flexDirection="column" >
        {
          tempIngredients.map(i => (
            <IngredientModifiable key={i.id} ingredient={i} units={units} handleChange={handleChange} handleDelete={handleDelete}/>
          ))
        }
      </Box>
    </Box>
  )
}

export default ManageIngredientsModifiable;
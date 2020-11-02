import React from 'react';
import { IIngredient } from '../../../../interfaces/recipe.interface';
import { useIngredientsStyles } from './ManageIngredientsModifiable';
import { Box, Typography, makeStyles } from '@material-ui/core';

export const staticInfoStyles = makeStyles(() => ({
  title: {
    paddingLeft:'.5vw',
    marginBottom:'3vh',
    borderLeft: "1px rgba(0, 0, 0, 0.1) solid",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid"
  }
}))

export const IngredientsStatic: React.FC<{ ingredients: IIngredient[] }> = (props) => {
  const mainStyles = useIngredientsStyles();
  const customStyles = staticInfoStyles();
  return (
    <Box className={mainStyles.root}>
      <Typography variant="h5" className={customStyles.title} >
        Ingredients
      </Typography>
      <Box display="flex" flexDirection="column" >
        {
          props.ingredients.map(i => (
              <IngredientStatic key={i.id} ingredient={i} />
          ))
        }
        </Box>
    </Box>
  )
}

const IngredientStatic: React.FC<{ ingredient: IIngredient }> = (props) => {
  const ingredient = props.ingredient;
  return (
    <Box display="flex" justifyContent="space-between" alignContent="center" marginBottom={1}>
      {/* {"º"} */}
      {/* <FiberManualRecordIcon color="primary" fontSize="small" /> */}
      <Typography style={{marginRight:"40px"}} >{ingredient.name}</Typography>
      <Typography style={{fontWeight:"bold"}}>{`${ingredient.quantity} ${ingredient.unit.symbol}`}</Typography>
    </Box>
  )
}
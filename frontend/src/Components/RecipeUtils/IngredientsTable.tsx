import { MASS, VOLUME, TEMPERATURE } from './UnitsHelper'
import React from 'react';
// import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


//TODO: Allow to write unity manually (ex: garlic, specify clove. Allow to save for later use too)

interface IIngredient{
    id?:number,
    name: string,
    quantity: number,
    unit: MASS|VOLUME|TEMPERATURE|string, // leaving string for now but will need to enforce Unit
}

const ingredients: IIngredient[] = [
    {name:"Basil", quantity: 2, unit: VOLUME.cup},
    {name:"Pine Nuts", quantity: 2, unit: VOLUME.tablespoon},
    {name:"Garlic", quantity: 2, unit: "cloves"},
    {name:"Parmesan", quantity: 1/2, unit: VOLUME.cup},
    {name:"Olive Oil", quantity: 1/2, unit: VOLUME.cup},
  ];

let id = 0;
const generateId = (ingredient:IIngredient) => {
  id += 1;
  ingredient.id = id;
}

//const rows = ingredients.map(ingredient => createData(ingredient));
// as a function:
// const CreateRows =  () => {return ingredients.map(ingredient => createData(ingredient))};
const CreateRows =  () =>  { ingredients.map(ingredient => generateId(ingredient))};



const IngredientsTable = () => {
    CreateRows();

    const styles = {
      root: {
        //width: "100%",
        // marginTop: theme.spacing.unit * 3,
        maxWidth: 300,
        // marginTop: '20px',
        overflowX: 'auto',
      } as React.CSSProperties,
      table: {
        // minWidth: 400,
      },
      row: {
        fontSize: 10,
      }
    };

    return (
      <Paper style={styles.root}>
        <Table style={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.map(ingredient => (
              <TableRow key={ingredient.id} style={styles.row}>
                <TableCell align="left">{ingredient.name}</TableCell>
                <TableCell align="left">
                  {ingredient.quantity} {ingredient.unit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
}

// IngredientsTable.propTypes = {
//   body: PropTypes.object.isRequired,
// };

export default IngredientsTable;



  
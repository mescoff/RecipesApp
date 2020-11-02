import React from 'react';
import { IInstruction } from '../../../../interfaces/recipe.interface';
import { useIngredientsStyles } from '../ingredients/ManageIngredientsModifiable';
import { Box, Typography } from '@material-ui/core';
import { staticInfoStyles } from '../ingredients/IngredientsStatic';


export const InstructionsStatic: React.FC<{ instructions: IInstruction[] }> = (props) => {
  const styles = useIngredientsStyles();
  const customStyles = staticInfoStyles();
  return (
    <Box className={styles.root}>
      <Typography variant="h5" className={customStyles.title}>
        Instructions
      </Typography>
      <Box display="flex" flexDirection="column" >
        {
          props.instructions.map(i => (
            <InstructionStatic key={i.id} instruction={i} />
          ))
        }
      </Box>
    </Box>
  )
}


const InstructionStatic: React.FC<{ instruction: IInstruction }> = (props) => {
  const instruction = props.instruction;
  return (
    <Box display="flex" alignItems="center" marginBottom={1}>
      <Box marginRight="2vw" border={"1px blue dashed"} borderRadius='50%'  pl={1} pr={1} pt={0.5} pb={0.5}>
        {/* // TODO: for nice borders: https://www.123rf.com/visual/search/44439005 and use border-image:https://www.w3schools.com/cssref/css3_pr_border-image.asp */}
        <Typography align='center' variant='body2'>{instruction.stepNum}</Typography>
      </Box>
      <Typography>{instruction.description}</Typography>
    </Box>
  )
}
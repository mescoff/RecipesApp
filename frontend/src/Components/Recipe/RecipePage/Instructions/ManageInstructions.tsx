import React, { useState } from 'react';
import { IInstruction } from '../../../../interfaces/recipe.interface';
import InstructionContainer from './InstructionContainer';
import { Box, Typography, IconButton, Divider, makeStyles, Theme, createStyles } from '@material-ui/core';
import { logInfo } from '../../../../helpers/helpers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { DragDropContext } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '70vw',
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column"
    },
    divider: {
      marginBottom: '8vh'
    }
  })
);

/**
 * Management container for Instructions
 * @param props : { instructions: IInstruction[] }
 */
const ManageInstructions: React.FC<{ instructions: IInstruction[] }> = (props) => {
  const logger = "ManageRecipeInstructions";
  const [tempInstructions, setInstructions] = useState<IInstruction[]>(props.instructions);
  const styles = useStyles();

  // TODO: Implement Drag and Drop for reordering : https://react-dnd.github.io/react-dnd/examples 
  // WATCHOUT: Make sure that stepNumber can never be duplicated. Don't let user define it

  const handleChange = (instruction: IInstruction): void => {
    // Multistep update to avoid mutating the state -- and even more steps to make it more legible
    // Retrieving index of instruction we need to update. Looking by stepNum
    const instructionIndex = tempInstructions.findIndex(i => i.stepNum === instruction.stepNum);
    // logInfo(logger, `handleChange Value: updatedInstruction:`, updatedInstruction);
    // logInfo(logger, `handleTimeIntervalUpdate instructionIndex: ${instructionIndex}`);
    if (instructionIndex !== -1) {
      // replace old interval with updated one in list
      const updatedTimeIntervals = [
        ...tempInstructions.slice(0, instructionIndex),
        instruction,
        ...tempInstructions.slice(instructionIndex + 1)
      ]
      // update interval list in recipe
      setInstructions(updatedTimeIntervals);
    }
    else {
      logInfo(logger, `[Update Instruction] Instruction with stepNum ${instruction.stepNum} not found`);
    }
  }

  const onAddClicked = () => {
    // WATCHOUT: Right now we assume that last element is highest step. But what about when user will be able to reorder them
    const newStepNumber = tempInstructions.length > 0 ? tempInstructions[tempInstructions.length - 1].stepNum + 1 : 1;
    const emptyInstruction: IInstruction = { stepNum: newStepNumber, description: '' }
    logInfo(logger, `[Add Instruction]. StepNum ${newStepNumber}`);
    const updatedInstructions = [
      ...tempInstructions.slice(0),
      emptyInstruction
    ]
    setInstructions(updatedInstructions);
  }


  // TODO: below make sure you reorder stepnums automatically after deletion
  const handleDelete = (stepNum: number) => {
    logInfo(logger, `[Delete Instruction] `);
    const instructionIndex = tempInstructions.findIndex(i => i.stepNum === stepNum);
    if (instructionIndex !== -1) {
      logInfo(logger, `[Delete Instruction] With step number: ${stepNum}`);
      // create new list. Remove instruction, and reorder following steps
      const updatedInstructions = new Array<IInstruction>();
      for (let i = 0; i < tempInstructions.length; i++) {   
        if (i === instructionIndex) {
          // skip/don't add instruction to be deleted
          // logInfo(logger, `[Delete Instruction] Skipping item at index ${i}`);
          continue;
        }
        else if (i > instructionIndex) {
          // logInfo(logger, `[Delete Instruction] Reordering items after index ${i}`);
          // reorder instructions (replace with new instance to avoid modifying object in place)
          const reorderedInst = {
            ...tempInstructions[i],
            stepNum: tempInstructions[i].stepNum - 1
          }
          updatedInstructions.push(reorderedInst);
        }
        else {
          // no need to copy new instance of instruction
          updatedInstructions.push(tempInstructions[i]);
        }
      }
      
      // replace current list with reordered / updated list
      setInstructions(updatedInstructions);
    }
    else {
      logInfo(logger, `[Delete Instruction] Ingredient with step number ${stepNum} not found`);
    }
  }

  return (
    <Box className={styles.root} >
      <Box display="flex" flexDirection="row" justifyContent="space-between" >
        <Typography variant='h5' >
          Instructions
        </Typography>
        <IconButton size='medium' color="primary" aria-label="add new instruction" onClick={onAddClicked}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <Divider className={styles.divider} />
      <Box display="flex" flexDirection="column" >
        {tempInstructions.map((instruction, index) => (
          <InstructionContainer key={`instruction_${instruction.stepNum}`} instructionIndex={index} instruction={instruction} handleChange={handleChange} handleDelete={handleDelete} />
        ))
        }
      </Box>
    </Box>
  )
}

export default ManageInstructions;
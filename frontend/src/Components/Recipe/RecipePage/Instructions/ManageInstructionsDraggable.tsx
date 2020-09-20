import React, { useState } from 'react';
import { IInstruction } from '../../../../interfaces/recipe.interface';
import InstructionContainer from './InstructionContainer';
import { Box, Typography, IconButton, Divider, makeStyles, Theme, createStyles } from '@material-ui/core';
import { logInfo } from '../../../../helpers/helpers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { moveElementandReorder, deleteElementAndReorder } from './instructionsHelper';

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
const ManageInstructionsDraggable: React.FC<{ instructions: IInstruction[] }> = (props) => {
  const logger = "ManageRecipeInstructions";
  const [tempInstructions, setInstructions] = useState<IInstruction[]>(props.instructions);
  const styles = useStyles();

  // WATCHOUT: Make sure that stepNumber can never be duplicated. Don't let user define it

  const onUpdateInstruction = (instruction: IInstruction): void => {
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
  const onDeleteInstruction = (instructionIndex: number) => {
    logInfo(logger, `[Delete Instruction] at index ${instructionIndex}`);

    const updatedInstructions = deleteElementAndReorder(
      tempInstructions,
      instructionIndex
    );
    // replace current list with reordered / updated list
    setInstructions(updatedInstructions);
  }

  const onDragInstruction = (result: DropResult) => {
    // dropped outside the list or not moved
    if (!result.destination || (result.source.index === result.destination.index)) {
      return;
    }
    // move element and reorder the range between source and destination
    const updatedInstructions = moveElementandReorder(
      tempInstructions,
      result.source.index,
      result.destination.index
    );

    setInstructions(updatedInstructions);
  }

  // Draggable help: https://codesandbox.io/s/k260nyxq9v?file=/index.js:425-564 and  https://codesandbox.io/s/zqwz5n5p9x
  return (
    <Box className={styles.root} >
      <Box display="flex" flexDirection="row" justifyContent="space-between" >
        <Typography variant="h4" >
          Instructions
        </Typography>
        <IconButton size='medium' color="primary" aria-label="add new instruction" onClick={onAddClicked}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <Divider className={styles.divider} />
      <DragDropContext onDragEnd={onDragInstruction}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tempInstructions.map((instruction, index) => (
                <InstructionContainer
                  key={`instruction_${instruction.stepNum}`}
                  instructionIndex={index}
                  instruction={instruction}
                  handleChange={onUpdateInstruction}
                  handleDelete={onDeleteInstruction} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  )
}

export default ManageInstructionsDraggable;
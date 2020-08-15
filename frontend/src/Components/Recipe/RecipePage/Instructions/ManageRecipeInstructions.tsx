import React, { useState } from 'react';
import { IInstruction } from '../../../../Interfaces/recipe.interface';
import InstructionContainer from './InstructionContainer';
import { Grid } from '@material-ui/core';
import { logInfo } from '../../../../Tools/functions';

/**
 * Management container for Instructions
 * @param props : { instructions: IInstruction[] }
 */
const ManageRecipeInstructions: React.FC<{ instructions: IInstruction[] }> = (props) => {
  const logger = "ManageRecipeInstructions";
  const [tempInstructions, setTempInstructions] = useState<IInstruction[]>( props.instructions );

  // TODO: Make sure that stepNumber can never be duplicated. Don't let user define it

  const handleChange = (updatedInstruction: IInstruction): void => {
    // Multistep update to avoid mutating the state -- and even more steps to make it more legible
    // Retrieving index of instruction we need to update. Looking by stepNum
    const instructionIndex = tempInstructions.findIndex(i => i.stepNum === updatedInstruction.stepNum);
    // logInfo(logger, `handleChange Value: updatedInstruction:`, updatedInstruction);
    // logInfo(logger, `handleTimeIntervalUpdate instructionIndex: ${instructionIndex}`);
    if (instructionIndex !== -1) {
      // replace old interval with updated one in list
      const updatedTimeIntervals = [
        ...tempInstructions.slice(0, instructionIndex),
        updatedInstruction,
        ...tempInstructions.slice(instructionIndex + 1)
      ]
      // update interval list in recipe
      setTempInstructions(updatedTimeIntervals);
    }
  }

  return (
    // <Grid xs={8} container spacing={2} alignItems="center" >
      <InstructionContainer instruction={tempInstructions[1]} handleChange={handleChange} />
    // </Grid>
  )
}

export default ManageRecipeInstructions;
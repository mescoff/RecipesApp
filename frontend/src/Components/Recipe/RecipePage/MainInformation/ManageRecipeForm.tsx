import React, { useState, useEffect } from "react";
import { IRecipe, TimeUnit } from "../../../../interfaces/recipe.interface";
import { logInfo } from "../../../../helpers/helpers";
import RecipeMainInfoContainer from "./RecipeMainInfoContainer";
import { Box } from "@material-ui/core";

export interface IManageRecipeFormProps {
  recipe: IRecipe;
}


const ManageRecipeForm: React.FC<IManageRecipeFormProps> = props => {
  const logger = "ManageRecipeForm";
  const [tempRecipe, setTempRecipe] = useState<IRecipe>({...props.recipe});

  useEffect( () => {
    setTempRecipe({...props.recipe});
  }, [props.recipe]);

  /**
   * Handle updates from most inputs 
   * @param event The event source of the callback
   */
  const handleGeneralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempRecipe({
      ...tempRecipe,
      [event.target.name]: event.target.value
    });
  };

  /**
   * Handle update from time picker(s) (value or unit for now).  
   * Update different TimeInterval properties in one function
   * @param intervalLabel The interval label. Used like an ID to find interval in list //TODO: consider possible bug if multiple interval named same by mistake...
   * @param propertyName The name of the property to update on the TimeInterval Object
   * @param value The value (of type Number of TimeUnit)
   */
  const handleTimePickerUpdate = (intervalLabel: string, propertyName: string, value: string | TimeUnit): void => {
    // Multistep update to avoid mutating the state -- and even more steps to make it more legible
    // Retrieving index of interval we need to update. Looking by label
    const intervalIndex = tempRecipe.timeIntervals.findIndex(i => i.label === intervalLabel);
    logInfo(logger, `handleTimeIntervalUpdate Value: ${value}, typeOf: ${typeof (value)}`);
    if (intervalIndex !== -1) {
      // create new interval with updated property
      const updatedInterval = {
        ...tempRecipe.timeIntervals[intervalIndex],
        [propertyName]: value
      }
      // replace old interval with updated one in list
      const updatedTimeIntervals = [
        ...tempRecipe.timeIntervals.slice(0, intervalIndex),
        updatedInterval,
        ...tempRecipe.timeIntervals.slice(intervalIndex + 1)
      ]
      // update interval list in recipe
      setTempRecipe({
        ...tempRecipe,
        timeIntervals: updatedTimeIntervals
      });
    }
  }

  // TODO: ON Send back to Context. Don't send if some fields are not valid !! => so get validation

  return (
    <Box ml={3}>
      <RecipeMainInfoContainer recipe={tempRecipe} handleGeneralChange={handleGeneralChange} handleTimePickerChange={handleTimePickerUpdate} />
    </Box>
  );
};

export default ManageRecipeForm;

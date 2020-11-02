import React, { ChangeEvent, useState } from 'react';
import { Grid, TextField, FormControl, Select, MenuItem, Tooltip, Box } from '@material-ui/core';
import { TimeUnit, ITimeInterval } from '../../../../interfaces/recipe.interface';
import { logInfo, nameof } from '../../../../helpers/helpers';
import Validate, { IValidationStatus } from '../../../../helpers/validate';
import { IRecipeMainInfoContainerProps } from './RecipeMainInfoContainerModifiable';

// TODO: useful for getting styles of Material-ui inputs and selects
// const BootstrapInput = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     input: {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }),
// )(InputBase);


export interface ITimePickerContainerProps {
  timeInterval: ITimeInterval;
  // handleChange: ITimeAssignementListProps['handleChange'];
  handleChange: IRecipeMainInfoContainerProps["handleTimePickerChange"];
}

/**
 * Time Picker component: update recipe's time intervals.  
 * One input for quantity, one dropdown for unit 
 * @param props : { timeInterval: ITimeInterval }
 */
const TimePicker: React.FC<ITimePickerContainerProps> = (props) => {
  const logger = 'TimePicker';
  const [textFieldValidation, setTextFieldValidation] = useState<IValidationStatus>({ isValid: true });
  // TODO: forward validation back to manage

  // TODO: Have 3 pickers (one for each --  H, min, s). Only show the other pickers if the parent pciker is selected
  // Example: if Hours is selected, show Hours, min and seconds. If min selected, show min and seconds. If new recipe and empty, show one empty select box

  /**
   * On update from input 
   * Prep the values to send them back to parent via generic handleChange()
   * @param event Event source of the callback
   */
  const onUpdateTextField = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    // TimeInterval Property to update
    const intervalProperty = event.target.name;
    logInfo(logger, `onUpdateTextField: value ${value}, prop:${intervalProperty}`);
    // if empty value just update
    if (value === '') {
      props.handleChange(props.timeInterval.label, intervalProperty, value);
    }
    else {
      // else if input length is greater than 3 characters prevent from inputing more
      if (value.length >= 3){
        return;
      }
      // else validate input
      const validation = Validate.validateDigit(value, 60);
      setTextFieldValidation(validation);
      props.handleChange(props.timeInterval.label, intervalProperty, value);
    }
  }

  /**
   * On update from dropdown item 
   * Prep the values to send them back to parent via generic handleChange()
   * @param event Event source of the callback
   * @param child React element that was selected
   */
  const onUpdateSelect = (event: React.ChangeEvent<{ name?: string; value: unknown }>, child: React.ReactNode): void => {
    if (event.target.name !== undefined) {
      const value: string = event.target.value as string;
      // TimeInterval Property to update
      const intervalProperty = event.target.name;
      logInfo(logger, `onUpdateSelect: label:${props.timeInterval.label}  value:${value} prop:${intervalProperty}`);
      props.handleChange(props.timeInterval.label, intervalProperty, value);
    }
  }

  return (
    <Box width={1} display="flex" alignContent="center">
      <Box marginRight={2} width="20%">
        <Tooltip open={!textFieldValidation.isValid} title={textFieldValidation.errorMessage ?? ''} >
          <TextField
            id={`timeValue-${props.timeInterval.label}`}
            size="small"
            variant="outlined"
            name={nameof<ITimeInterval>("timeValue")}
            value={props.timeInterval.timeValue}
            onChange={onUpdateTextField}
            error={!textFieldValidation.isValid}
          />
        </Tooltip>
      </Box>
      <Box>
        <FormControl variant="outlined" size="small" fullWidth={true}>
          <Select
            id="timeunit-select"
            value={props.timeInterval.timeUnit}
            name={nameof<ITimeInterval>("timeUnit")}
            onChange={onUpdateSelect}
            style={{ width: '95px' }}
          >
            {Object.keys(TimeUnit).map(
              key => {
                const val = TimeUnit[key];
                return (
                  <MenuItem key={key} value={val}>
                    {val}
                  </MenuItem>
                )
              }
            )}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default TimePicker;
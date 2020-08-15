import React, { useState } from 'react';
import { IInstruction } from '../../../../Interfaces/recipe.interface';
import { Box, TextField, Typography, makeStyles, Theme, createStyles, IconButton, ButtonBase } from '@material-ui/core';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';

interface IInstructionContainerProps {
  instruction: IInstruction;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (instruction: IInstruction) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBase: {
      '&:hover': {
        borderRadius: 4,
        border: '1px solid #ced4da',
        fontSize: 16,
        cursor: "default"
      }
    },
    clickedStepNum: {
      color: '#377edb',
      borderWidth: '2px',
      borderColor: '377edb#',
      fontWeight: 'bold'
    },
    clickedButtonBase: {
      borderRadius: 4,
      border: '1px solid #377edb',
      fontSize: 16,
    },
    focusVisible: {
    },
    typo: {
      fontWeight: 'inherit'
    },
  })
);

/**
 * Container for instructions (step and description)
 * @param props : IInstructionContainerProps
 */
const InstructionContainer: React.FC<IInstructionContainerProps> = (props) => {
  const styles = useStyles();
  const [selected, setSelected] = useState<boolean>(false);

  // FIXME: Not really needed at the moment but will be useful once we start modifying more than just description for step (assigning media for example)
  const handlePrepForChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.handleChange({ stepNum: props.instruction.stepNum, description: value });
  }

  const handleFocus = (focused: boolean) => {
    // TODO: handle when over are selected ==> SO extract this handleClick at list level, along with the selected prop
    setSelected(focused);
  }

  return (
    // TODO: button funtionalities should be extracted to separate component
    <Box
      display='flex'
      flexDirection='row'
      justifyContent='flex-start'
      alignItems="center"
      minWidth='100px'
      className={selected == true ? styles.clickedButtonBase : styles.buttonBase}
    >
      <Box className={selected == true ? styles.clickedStepNum : ''} border={1} borderRadius='50%' width='2vmax' m={2}>
        {/* // TODO: for nice borders: https://www.123rf.com/visual/search/44439005 and use border-image:https://www.w3schools.com/cssref/css3_pr_border-image.asp */}
        <Typography className={styles.typo} align='center'>{props.instruction.stepNum}</Typography>
      </Box>
      <Box minWidth='50vmax' m={2}>
        <TextField
          id='recipe-description'
          label='Instruction'
          multiline
          variant='outlined'
          value={props.instruction.description}
          name={props.instruction.stepNum.toString()}
          onChange={handlePrepForChange}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          fullWidth={true}
        />
      </Box>
      <IconButton aria-label='Assign picture' color='primary'>
        <PhotoAlbumOutlinedIcon />
      </IconButton >
    </Box>

  )
}

export default InstructionContainer;
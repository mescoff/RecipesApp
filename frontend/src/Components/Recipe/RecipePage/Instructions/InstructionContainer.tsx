import React, { useState } from 'react';
import { IInstruction } from '../../../../interfaces/recipe.interface';
import { Box, TextField, Typography, makeStyles, Theme, createStyles, IconButton } from '@material-ui/core';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import { logInfo } from '../../../../helpers/helpers';
import { Draggable } from 'react-beautiful-dnd';

interface IInstructionContainerProps {
  instruction: IInstruction;
  instructionIndex: number;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (instruction: IInstruction) => void;
  handleDelete: (stepNum: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBase: {
      '&:hover': {
        borderRadius: 4,
        border: '1px solid #ced4da',
        fontSize: 16,
        cursor: "grab"
      }
    },
    text: {
      fontSize: '0.5em'
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
    props.handleChange({id: props.instruction.id, stepNum: props.instruction.stepNum, description: value });
  }

  const onDelete = () => {
    // logInfo(`InstructionContainer`, `Deleting instruction with stepNum ${rops.instruction.stepNum}`);
    props.handleDelete(props.instructionIndex);
  }

  const onFocus = (focused: boolean) => {
    // TODO: handle when over are selected ==> SO extract this handleClick at list level, along with the selected prop
    setSelected(focused);
  }

  const onSelectImage = () => {
    logInfo(`InstructionContainer`, 'Image selection');
  }

  return (
    // TODO: button funtionalities should be extracted to separate component
    <Draggable key={props.instruction.stepNum} draggableId={props.instruction.stepNum.toString()} index={props.instructionIndex}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        // style={getItemStyle(
        //   snapshot.isDragging,
        //   provided.draggableProps.style
        // )}
        >
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='flex-start'
            alignItems="center"
            // minWidth='50vw' 
            // minWidth='400px' 
            // width='300px'
            // overflow={false}
            className={(selected === true || snapshot.isDragging === true) ? styles.clickedButtonBase : styles.buttonBase}
          >
            {/* TODO:  border around step num should disappear if size of parent is < 40vmax */}
            <Box className={(selected === true || snapshot.isDragging === true) ? styles.clickedStepNum : ''} border={"1px blue dashed"} borderRadius='50%' maxWidth='20px' pl={1} pr={1} pt={0.5} pb={0.5} m={2}>
              {/* // TODO: for nice borders: https://www.123rf.com/visual/search/44439005 and use border-image:https://www.w3schools.com/cssref/css3_pr_border-image.asp */}
              <Typography align='center' variant='body2'>{props.instruction.stepNum}</Typography>
            </Box>
            {/* <Box minWidth='100px' maxWidth='300px' height='30px' m={2}> */}
            {/* <Box width='300px' maxWidth='300px' height='30px' m={2}> */}
            <Box width={1} m={2}>
              <TextField
                id='recipe-description'
                label='Instruction'
                multiline
                variant='outlined'
                InputProps={{ classes: { input: styles.text } }}
                value={props.instruction.description}
                name={props.instruction.stepNum.toString()}
                onChange={handlePrepForChange}
                onFocus={() => onFocus(true)}
                onBlur={() => onFocus(false)}
                fullWidth={true}

              />
            </Box>
            <IconButton aria-label='Assign picture' color='primary' onClick={onSelectImage}>
              <PhotoAlbumOutlinedIcon />
            </IconButton >
            {/* {selected === true &&  
        FIXME: select instruction in different way than through input field. When we click on buttons field is blurred, so input is considered unselected
        and the icon will disappear and prevent action */}
            <IconButton size='medium' color="secondary" aria-label="delete ingredient" onClick={onDelete}>
              <ClearIcon />
            </IconButton>
            {/* } */}
          </Box>
        </div>
      )}
    </Draggable>
  )
}

export default InstructionContainer;
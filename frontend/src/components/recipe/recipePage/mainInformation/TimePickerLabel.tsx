import React from 'react';
import { Grid, Divider, Typography, makeStyles, createStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    divider: {
      textAlign: "center",
      width: "35px",
      marginRight: "10px"
    },
  })
);

/**
 * Container for TimeInterval label and TimePicker component
 * (ex: Prep time, Cooking time, etc)
 * @param props {timeInterval : ITimeInterval} 
 */
const TimePickerLabel: React.FC<{ label: string }> = (props) => {
  const styles = useStyles();
  return (
    <Box width={1} display="flex" justifyContent="flex-end" alignItems="center" textAlign="left">
      <Box width="50px" height={1}/>
      <Divider className={styles.divider} />
      <Box width="120px" >
        <Typography >{props.label}</Typography>
      </Box>
      {props.children}
    </Box>
  );
}

export default TimePickerLabel;
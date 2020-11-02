import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { ITimeInterval } from '../../../../interfaces/recipe.interface';

export const TimeInterval: React.FC<{ timeInterval: ITimeInterval; }> = (props) => {
  return (

      // <Box display="flex" alignContent="center">
        <Typography variant="body1">
          {props.timeInterval.timeValue} {props.timeInterval.timeUnit}
        </Typography>
      // {/* </Box> */}

  );
}
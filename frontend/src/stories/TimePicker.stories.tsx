import React from 'react';
import TimePicker, { ITimePickerContainerProps } from '../components/recipe/recipePage/mainInformation/TimePicker';
import { Meta, Story } from '@storybook/react/types-6-0';
import { timeIntervalMocks } from '../testTools/mockData';
import { Grid } from '@material-ui/core';

export default {
  title: "Example/TimePicker",
  component: TimePicker
} as Meta;

const Template: Story<ITimePickerContainerProps> = args => (
  <Grid item xs={6} sm container alignItems="center" spacing={1}>
    <TimePicker {...args} />
  </Grid>
);

export const Basic = Template.bind({});
Basic.args = {
  timeInterval: timeIntervalMocks[0],
}
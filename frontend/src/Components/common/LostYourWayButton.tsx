import React from "react";
import { Button } from "@material-ui/core";

const LostYouWayButton = (props: { redirect: () => void }) => (
  <Button
    variant="outlined"
    size="small"
    color="primary"
    onClick={props.redirect}
  >
    {`Let's get you back on track...`}
  </Button>
);

export default LostYouWayButton;

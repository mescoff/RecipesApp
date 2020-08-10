import React from "react";
import Box from "@material-ui/core/Box";
import { RouteComponentProps, navigate } from "@reach/router";
import LostYouWayButton from "./LostYourWayButton";

const NoMatch: React.FC<RouteComponentProps> = () => {
  const redirect = () => {
    navigate("/");
  };

  return (
    <>
      <Box display="flex" flexDirection="column" mt={5}>
        <h3>Oops, looks like you lost your way</h3>
        <div>
          {/* <Button variant="contained" href="/"  color="primary" >
            Home
          </Button> */}
          <LostYouWayButton redirect={redirect} />
        </div>
      </Box>
    </>
  );
};

export default NoMatch;

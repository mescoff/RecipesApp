import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HeaderBar from "./Header";

const NoMatch = () => {
  return (
    <>
      <HeaderBar />     
        <Box display="flex" flexDirection="column" mt={5} >
          <h3>Oops, looks like you lost your way</h3>
          <div>
          <Button variant="contained" href="/"  color="primary" >
            Home
          </Button>
          </div>
        </Box>
  
    </>
  );
};

export default NoMatch;

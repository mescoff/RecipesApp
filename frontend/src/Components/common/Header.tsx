import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import logo from "../../Icons/fried.svg";
import toolbarImg from "../../Images/food.jpeg";
import { makeStyles, Paper, Box, Container } from "@material-ui/core";

// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${toolbarImg}`,
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    height: 50,
    width: "100%",
    padding: "0 30px"
  },
  details: {
    fontFamily: "DeliveryNote"
  }
  // typo:{
  //   fontWeight: '2em',
  //   fontFamily: 'DeliveryNote',
  // }
});

const HeaderBar = () => {
  const styles = useStyles();
  return (
    <div>
      {/* <AppBar */}
      <Box
        style={{ backgroundImage: `url(${toolbarImg})`, height: "80px" }}
        // position="static"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow={1}
      >
        <Box display="inline-block" border={2} borderRadius={14} borderColor='white' p={0.7}>
          <Typography
            style={{ color: "white" }}
            color="inherit"
            variant="h4"
            component="h5"
            display="inline"
          >
          {/* <h3 style={{fontFamily:'DeliveryNote', color:'white', display:'inline'}}> */}
            Recipes{" "}
            {/* </h3> */}
          </Typography>
          <img
            src={logo}
            alt="pan"
            style={{ width: "30px", height: "30px", marginLeft: "10px", display:'inline' }}
            
          />
        </Box>
      </Box>
    </div>
  );
};

export default HeaderBar;

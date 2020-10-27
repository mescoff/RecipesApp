import React from "react";
import Typography from "@material-ui/core/Typography";

import logo from "../../icons/fried.svg";
import toolbarImg from "../../images/food.jpeg";
import { makeStyles, Box } from "@material-ui/core";

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
  return (
    <div>
      {/* <AppBar */}
      <Box
        style={{ backgroundImage: `url(${toolbarImg})`, height: "13vh",opacity:0.6 }}
        // position="static"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        boxShadow={1}
      >
        {/* <Box display="inline-block" border={2} borderRadius={14} borderColor='white' p={0.7}> */}
        <Box display="inline-block" m={2}>
          <Typography
            style={{ color: "white", fontSize: '3em' }}
            color="inherit"
            variant="h2"
            // component="h5"
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

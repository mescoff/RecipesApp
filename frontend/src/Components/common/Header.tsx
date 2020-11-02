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
    // backgroundImage: `url(${toolbarImg})`,
    backgroundColor: '#319b54',
    height: "13vh",
    opacity: 0.6
  },
  recipeTitle:{
     color: "rgba(255,255,255,1)", 
    fontSize: '3em', 
    fontFamily: "Comic Sans MS,DeliveryNote,Segoe UI,Roboto"
  },
  recipeLogo:{
    width: "50px", height: "50px", marginRight: "10px", display: 'inline', padding: '6px', border: '5px rgba(255,255,255,0.5) solid', borderRadius: "50% 20% / 10% 40%"
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
        // style={{ backgroundImage: `url(${toolbarImg})`, height: "13vh",opacity:0.6 }}
        className={styles.root}
        // position="static"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        boxShadow={1}
      >
        {/* <Box display="inline-block" border={2} borderRadius={14} borderColor='white' p={0.7}> */}
        <Box display="flex" alignItems="center" m={2}>
          <img
            src={logo}
            alt="pan"
           className={styles.recipeLogo}
          />
          <Typography
            className={styles.recipeTitle}
            color="inherit"
            variant="h2"
            display="inline"
          >
            {/* <h3 style={{fontFamily:'DeliveryNote', color:'white', display:'inline'}}> */}
            Recipes
            {/* </h3> */}
          </Typography>

        </Box>
      </Box>
    </div>
  );
};

export default HeaderBar;

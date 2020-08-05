import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import logo from '../../Icons/fried.svg';
import toolbarImg from '../../Images/food.jpeg'

// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';



const HeaderBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar style={{backgroundImage:`url(${toolbarImg})`, height:'40px'}} >
          <Button style={{color:'pink'}} variant='outlined' color='inherit' href='/' >
            <Typography >Recipes </Typography>
            <img src={logo} alt='pan' 
            style={{width:'30px', height:'30px', marginLeft:'10px'}}/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderBar;

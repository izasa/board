import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function Banner() {
    return (
      <div className="App">
          <AppBar position="static">
          <Toolbar disableGutters>
            <SportsSoccerIcon />
            <Typography
              variant="h6"
            >
              Live Football World Cup Score Board
            </Typography>
            </Toolbar>
          </AppBar>
      </div>
    );
  }
  
  export default Banner;
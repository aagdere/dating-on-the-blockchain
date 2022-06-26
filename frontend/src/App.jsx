import React, { useState, useEffect } from 'react';
import Dating from './Dating';
import { styled, Container, Box, Grid } from '@mui/material';
import { lightBlue } from '@mui/material/colors';



function App() {

  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
         <Dating />
        </Grid>   
         
      </Grid> 
    </div>
  );
}

export default App;

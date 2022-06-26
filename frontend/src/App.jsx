import React, { useState, useEffect } from 'react';
import Dating from './Dating';
import { styled } from '@mui/material';
import { lightBlue } from '@mui/material/colors';



function App() {

  const StyledDating = styled(Dating)({
    backgroundColor: "lightblue"
  })

  return (
    <div className="App">
      <StyledDating/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

function MatchFound(props) {

  const profileName = (user) => {
    return <Typography variant="h6"> {user[1]} </Typography>
  }

  const profilePicture = (user) => {
      return <Box
        component="img"
        sx={{
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Matched!"
        src={user[0]}
      />
    }

  return (
    <div className="App">
      <Typography variant="h3"> You've Got a Match! </Typography>
      {profileName(props.me)}
      {profilePicture(props.me)}
      {profileName(props.match)}
      {profilePicture(props.match)}
    </div>
  );
}

export default MatchFound;

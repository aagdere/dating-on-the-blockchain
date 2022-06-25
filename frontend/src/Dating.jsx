import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

const loggedIn = false

const fetchMyAddress = async () => {
  return "myaddress"
}

const fetchProfile = async (address) => {
  return {
    name: "Aris",
    linkToPicture: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
  }
}

function Dating() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile, setProfile] = useState(undefined)
  const [myAddress, setMyAddress] = useState(undefined)

  const maybeImage = (profile) => {
    if (profile && profile.linkToPicture) {
      return <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Match Candidate"
        src={profile.linkToPicture}
        // src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
      />
    } else {
      return <br/>
    }
  }

  useEffect(() => {
    const fetchAndSetMyAddress = async () => {
      const myAddress = await fetchMyAddress();
      setMyAddress(myAddress)
    }

    fetchAndSetMyAddress()
  }, []);

  useEffect(() => {
    const fetchAndSetProfile = async () => {
      const myProfile = await fetchProfile();
      setProfile(myProfile)
    }

    if (myAddress && !profile) {
      fetchAndSetProfile()
    }
  }, [myAddress]);

  return (
    <div className="App">
      Dating
      <br/>
      {maybeImage(profile)}
    </div>
  );
}

export default Dating;

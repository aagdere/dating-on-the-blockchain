import React, { useState, useEffect } from 'react';
import Matching from './Matching';
import CreateProfile from './CreateProfile';
import Address from './Address';

const fetchProfile = async (useMocked, address) => {
  if (useMocked) {
    return {
      name: "Aris",
      linkToPicture: "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
    }
  } else {
    return undefined
  }
}

function Dating() {
  const [profile, setProfile] = useState(undefined)
  const [myAddress, setMyAddress] = useState(undefined)

  const addressCallback = (address) => {
    console.log("Got address! " + address)
    setMyAddress(address)
  }

  const profileCreatedCallback = (profile) => {
    console.log("Got profile!")
    console.log(profile)
    setProfile(profile)
  }

  const selectScreen = (myAddress, profile) => {
    if (myAddress && profile){
      return <Matching profile={profile} address={myAddress}/>
    } else if (myAddress) {
      return <CreateProfile address={myAddress} profileCreatedCallback={profileCreatedCallback}/>
    } else {
      return <Address connectedCallback={addressCallback}/>
    }
  }

  useEffect(() => {
    const fetchAndSetProfile = async () => {
      const myProfile = await fetchProfile(false, myAddress);
      setProfile(myProfile)
    }

    if (myAddress && !profile) {
      fetchAndSetProfile()
    }
  }, [myAddress]);

  return (
    <div className="App">
      {selectScreen(myAddress, profile)}
    </div>
  );
}

export default Dating;

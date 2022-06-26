import React, { useState, useEffect } from 'react';
import Matching from './Matching';
import CreateProfile from './CreateProfile';
import Address from './Address';
import MatchFound from './MatchFound';

function Dating() {
  const [profile, setProfile] = useState(undefined)
  const [myAddress, setMyAddress] = useState(undefined)
  const [match, setMatch] = useState(undefined)
  const [myUser, setMyUser] = useState(undefined)

  const addressCallback = (address) => {
    console.log("Got address! " + address)
    setMyAddress(address)
  }

  const profileCreatedCallback = (profile) => {
    console.log("Got profile!")
    console.log(profile)
    setProfile(profile)
  }

  const foundMatchCallback = (matchUser, me) => {
    setMatch(matchUser)
    setMyUser(me)
  }

  const selectScreen = (myAddress, profile) => {
    if (match && myUser) {
      return <MatchFound match={match} me={myUser}/>
    } else if (myAddress && profile){
      return <Matching profile={profile} address={myAddress} foundMatchCallback={foundMatchCallback}/>
    } else if (myAddress) {
      return <CreateProfile address={myAddress} profileCreatedCallback={profileCreatedCallback}/>
    } else {
      return <Address connectedCallback={addressCallback}/>
    }
  }

  return (
    <div className="App">
      {selectScreen(myAddress, profile)}
    </div>
  );
}

export default Dating;

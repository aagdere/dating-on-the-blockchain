import React, { useState, useEffect } from 'react';
import Matching from './Matching';
import CreateProfile from './CreateProfile';
import Address from './Address';
import MatchFound from './MatchFound';
import worldID from "@worldcoin/id";
import { keccak256 } from "@ethersproject/solidity";
import { WorldIdContractJson } from './WorldIdContract';
import { defaultAbiCoder as abi } from "@ethersproject/abi";


var Web3 = require('web3');

const hashBytes = (input) => {
  return abi.encode(
    ["uint256"],
    [keccak256(["bytes"], [input]) >> 8],
  );
};

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
  const [match, setMatch] = useState(undefined)
  const [myUser, setMyUser] = useState(undefined)
  const [walletAddress, setWalletAddress] = React.useState("");

  const web3 = new Web3(window.ethereum);

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
    if (myAddress && profile) {
      return <Matching profile={profile} address={myAddress} />
    } else if (myAddress) {
      return <CreateProfile address={myAddress} profileCreatedCallback={profileCreatedCallback} />
    } else {
      return <Address connectedCallback={addressCallback} />
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


  const getWorldIdContract = async (web3) => {
    const data = WorldIdContractJson();

    const netId = await web3.eth.net.getId();

    // assert(netId == "80001");

    const greeting = new web3.eth.Contract(
      data.abi,
      "80001" && "0x4f4B71911AbA9CE7280a1368b7dc2b8a4CD493bc"
    );
    return greeting;
  };

  const initWorldIdComponent= () => {
    try {
      worldID.init("world-id-container", {
        enable_telemetry: true,
        action_id: "wid_staging_7f99cb225ef789dacc88c79e4a2cb6f3",
        signal: walletAddress,
      });
    } catch (failure) {

    }
  }

  useEffect(() => {
    const worldIdInit = async () => {
      try {
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        setWalletAddress(account);
        
        console.log("trying to enable worldID");
        const result = await worldID.enable(); // <- Send 'result' to your backend or smart contract
        console.log("World ID verified successfully!", result);
        const contract = await getWorldIdContract(web3)
        /*
        XHRPOSThttps://app.posthog.com/e/?ip=1&_=1656218500083&v=0.0.5
[HTTP/2 200 OK 37ms]

World ID verified successfully! 
Object { merkle_root: "0x1ef8aa94ba93c1d1273e4ddcb0e0329939034ea30c9b645095ebb90029333872", nullifier_hash: "0x2c6ac073932968b216619f633752472957db8cd1e3affc48d30770e6a0401e81", proof: "0x2e24dfb793bd51f4f24b6f7849fcbcd5a2809aedea98d2ac1757b6483c69893715261103c9c277882da0eaca786867a213370a9e82b58f8459b10cfdf1c7ecb705e35a76312a05a1ceb9f60df6c06b066f7b877edda137586d29d8943a7737151987b5bcb1c482c9a9c0586b19eeb7b2c03515a99e813e2ff58b77f5a11321e730196951405109e69780d146af364475bd95676f7e2aed72d8ff9591c212a19307a6da9b03cd1174880f88a59855eb6c2963e5d1f7194f7b330730a5e8269a8c0c67f5d27c74e4ac3481421ead2b57debb91512a93eb376a3ae4d57101e6b0a719ecd3bd95fc5859a53da4cb0f60b5a06b7cef2a8806ed591fb122b0c2170c98" }
        */

        const proof = abi.decode(["uint256[8]"], result.proof)[0];
        console.log("proof", proof);
        contract.methods.verifyAndExecute(
          account,
          result.merkle_root,
          result.nullifier_hash,
          proof
        )
          .send({ from: account })
          .on('transactionHash', (hash) => console.log("validation hash", hash))
          .on('error', (err) => console.error("error", err));
      } catch (failure) {
        console.warn("World ID verification failed:", failure);
        // Re-activate here so your end user can try again

      }
    };
    worldIdInit()
  }, []);

  return (
    <div className="App">
      {selectScreen(myAddress, profile)}

      <div id="world-id-container"></div>
      {walletAddress && initWorldIdComponent()}
    </div>
  );
}
}

export default Dating;

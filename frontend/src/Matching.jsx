import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { DatingContractJson } from './DatingContract';

var Web3 = require('web3');

function Matching(props) {
  const [peopleIndex, setPeopleIndex] = useState(-1)
  const [people, setPeople] = useState([])
  const [haveNotStarted, setHaveNotStarted] = useState(true)
  const [outOfPeople, setOutOfPeople] = useState(false)

  const web3 = new Web3(window.ethereum);

  useEffect(() => {

    const fetchPeople = async () => {
      const peopleFromContract = await fetchMatchCandidates()
      const peopleToSave = []
      peopleFromContract.map((person) => {
        peopleToSave.push({
          name: person[1],
          linkToPicture: person[0],
          address: person[2]
        })
      })
      setPeople(peopleToSave)
    }

    fetchPeople()

    const interval = setInterval(async () => {
      const contract = await getContract(web3)
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];

      const likedUsers = await contract.methods.getLikedUsers(account).call()
      const allUsers = await contract.methods.getUsers().call()
      console.log("Checking for matches...")
      
      likedUsers.forEach(user => {

        const doStuff = async () => {
          const userAddress = user[2]
          const isMatch = await contract.methods.matched(userAddress).call()
          // const isMatch = true
          if (isMatch) {
            console.log(`Found a match!: ${JSON.stringify(user, null, 2)}`)
            props.foundMatchCallback(user, allUsers.filter(user => user[2] === account)[0])
          }
        }

        doStuff()
      })

    }, 2000)
  }, [])

  useEffect(() => {
    if (people.length > 0 && haveNotStarted) {
      setHaveNotStarted(false)
      setPeopleIndex(0)
    }
  }, [people])

  useEffect(() => {
    if (peopleIndex > people.length - 1) {
      setOutOfPeople(true)
    } else {
      setOutOfPeople(false)
    }
  }, [peopleIndex])

  const getContract = async (web3) => {
    const data = DatingContractJson();

    const netId = await web3.eth.net.getId();
    const deployedNetwork = data.networks[netId];
    const greeting = new web3.eth.Contract(
      data.abi,
      deployedNetwork && deployedNetwork.address
    );
    return greeting;
  };

  const fetchMatchCandidates = async () => {
    const contract = await getContract(web3)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const allUsers = await contract.methods.getUsers().call()
    const likedUsers = await contract.methods.getLikedUsers(account).call()
    const unlikedUsers = await contract.methods.getUnlikedUsers(account).call()
    const excludeAddresses = (likedUsers.concat(unlikedUsers)).map(user => user[2]).concat([account])
    const remainingMatchCandidates = allUsers.filter(user => !excludeAddresses.includes(user[2]))

    return remainingMatchCandidates
  }

  const maybeImage = () => {
    if (props.profile && props.profile.linkToPicture) {
      return <Box
        component="img"
        sx={{
          maxHeight: { xs: 500, md: 250 },
          maxWidth: { xs: 500, md: 250 },
        }}
        alt="Match Candidate"
        src={props.profile.linkToPicture}
      />
    } else {
      return <div/>
    }
  }

  const maybeMatchCandidate = (people, peopleIndex) => {
    if (people.length > 0 && peopleIndex > -1 && peopleIndex < people.length) {
      return <div>
        <Typography variant="h5">{people[peopleIndex].name}</Typography>
        <Box
            component="img"
            sx={{
              maxHeight: { xs: 500, md: 250 },
              maxWidth: { xs: 500, md: 250 },
            }}
            alt="Match Candidate"
            src={people[peopleIndex].linkToPicture}
        />
        </div>
    } else if (people.length > 0 && peopleIndex > -1) {
      return <Typography variant="h4"> All out of people, come back later! </Typography>
    } else {
      return <div/>
    }
  }

  const like = async (person) => {
    // Call smart contract
    const contract = await getContract(web3)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    console.log("account")
    console.log(account)
    console.log("liking")
    console.log(person.address)

    await contract.methods.like(person.address).send({ from: account })
  }

  const unlike = async (person) => {
    // Call smart contract
    const contract = await getContract(web3)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    console.log("account")
    console.log(account)
    console.log("unliking")
    console.log(person.address)

    await contract.methods.unlike(person.address).send({ from: account })
  }

  const onClickYes = async () => {
    // Check if match
    await like(people[peopleIndex])
    setPeopleIndex(peopleIndex + 1)
  }

  const onClickNo = async () => {
    await unlike(people[peopleIndex])
    setPeopleIndex(peopleIndex + 1)
  }

  return (
    <div className="App" >
      <Typography variant="h3"> Find some matches! </Typography>
      <Typography variant="h6"> Account: {props.address} </Typography>
      <br/>
      {maybeMatchCandidate(people, peopleIndex)}
      <Button disabled={outOfPeople} onClick={onClickYes}>Yes</Button>
      <Button disabled={outOfPeople} onClick={onClickNo}>No</Button>
    </div>
  );
}

export default Matching;

import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import getGithubExampleResponse from './ExampleGithubResponse.js';
import axios from 'axios';
import { DatingContractJson } from './DatingContract';

var Web3 = require('web3');

function CreateProfile(props) {
  // const [selectedImage, setSelectedImage] = useState(undefined)
  const [githubUserTextField, setGithubUserTextField] = useState("")
  const [githubUsername, setGithubUsername] = useState("")
  const [githubUserInfo, setGithubUserInfo] = useState(undefined)
  const [decentralizedFileStorageLink, setDecentralizedFileStorageLink] = useState(undefined)
  const [profileCreated, setProfileCreated] = useState(undefined)
  const [contract, setContract] = useState(undefined)
  const [account, setAccount] = useState(undefined)
  const [user, setUser] = useState(undefined)

  const web3 = new Web3(window.ethereum);

  useEffect(() => {
    if (githubUserInfo && decentralizedFileStorageLink && profileCreated) {
      props.profileCreatedCallback({
        githubUserInfo: githubUserInfo,
        decentralizedFileStorageLink: decentralizedFileStorageLink
      })
    }
  }, [decentralizedFileStorageLink, githubUsername])

  const fetchGithubUserInfo = async (isMocked, username) => {
    const githubURL = `https://api.github.com/users/${username}`
    
    if (!isMocked) {
      return await axios({
        method: 'get',
        url: githubURL,
      });
    } else {
      const result = getGithubExampleResponse()
      return result
    }
  }

  const onClickGetUser = async () => {
    setGithubUsername(githubUserTextField)
    const userInfo = await fetchGithubUserInfo(true, githubUserTextField)
    setGithubUserInfo(userInfo)
    //onFileUpload()
  }

  // // On file upload (click the upload button)
  // const onFileUpload = () => {
  
  //   // Create an object of formData
  //   const formData = new FormData();
  
  //   // Update the formData object
  //   formData.append(
  //     "myFile",
  //     selectedImage,
  //     selectedImage.githubUsername
  //   );
  
  //   // Details of the uploaded file
  //   console.log(selectedImage);

  //   // Request made to the backend api
  //   // Send formData object
  //   axios({
  //     method: 'post',
  //     url: 'https://api.example.com',
  //     data: formData
  //   });
  // };

  // const onFileChange = event => {
  //   setSelectedImage(event.target.files[0])
  // }

  const onGithubUsernameChange = (event) => {
    setGithubUserTextField(event.target.value);
  }

  const profileName = () => {
    if (githubUserInfo) {
      return <Typography variant="h6"> {githubUserInfo.data.name} </Typography>
    } else {
      return <div/>
    }
  }

  const profilePicture = () => {
    if (githubUserInfo) {
      console.log(githubUserInfo.data)
      return <Box
        component="img"
        sx={{
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Match Candidate"
        src={githubUserInfo.data.avatar_url}
      />
    } else {
      return <div/>
    }
  }

  const userInfo = () => {
    // console.log(githubUserInfo)
    // if (githubUserInfo) {
    //   return <div>
    //     {JSON.stringify(githubUserInfo, null, 2)}
    //   </div>
    // } else {
    //   return <div/>
    // }
  }

  // const maybeUploadButton = () => {
  //   if (selectedImage == undefined) {
  //     return <div>
  //       <input
  //         style={{ display: "none" }}
  //         id="contained-button-file"
  //         type="file"
  //         // ref={fileInput}
  //         onChange={onFileChange}
  //       />
  //       <label htmlFor="contained-button-file">
  //         <Button variant="contained" color="primary" component="span">
  //           Upload Picture
  //         </Button>
  //       </label>
  //     </div>
  //   } else {
  //     return <div/>
  //   }
  // }

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

  useEffect (() => {
    const createProfileIfNeeded = async () => {
      if (decentralizedFileStorageLink && contract && account && !user) {
        // const githubAvatarLink = githubUserInfo.data.avatar_url
        const name = githubUserInfo.data.name
        await contract.methods.createProfile(name, decentralizedFileStorageLink).send({from: account})
      }
    }

    
  }, [decentralizedFileStorageLink, contract, account, user])

  const onClickSubmit = async () => {
    const contract = await getContract(web3)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setContract(contract)
    setAccount(account[0])

    const allUsers = await contract.methods.getUsers().call()
    const me = allUsers.filter(user => user[2] == account)
    if (me.length > 0) {
      console.log("You've already created a user!")
      console.log(me[0])
      setUser(me)
    } else {
      // Post image to IPFS
    }
  } 

  return (
    <div className="App">
      <Typography variant="h3"> Create your Profile! </Typography>
      <Typography variant="h6"> Account: {props.address} </Typography>
      <br/>
      <TextField disabled={!(githubUserInfo == undefined)} placeholder="Github Username" value={githubUserTextField} onChange={onGithubUsernameChange}/>
      <br/>
      {profileName()}
      {profilePicture()}
      {userInfo()}
      <br/>
      <Button disabled={!(githubUserInfo == undefined)} onClick={onClickGetUser}>
        Get User
      </Button> 
      <Button disabled={(githubUserInfo == undefined)} onClick={onClickSubmit}>
        Save
      </Button>
    </div>
  );
}

export default CreateProfile;

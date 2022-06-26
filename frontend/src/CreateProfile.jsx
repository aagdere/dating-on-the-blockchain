import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import getGithubExampleResponse from './ExampleGithubResponse.js';
import axios from 'axios';
import { DatingContractJson } from './DatingContract';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
var Web3 = require('web3');

const useNftStorage = true
const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYyZThCZDBDZDQ1MTViMDI0NTA0YmM3MTc5MWFDMjQxN0U3OWExYzgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjEyODYyMjA0MiwibmFtZSI6ImV0aG55In0.H8MeYoXeMbNz3TsUwV5GLA-dMGuippyLLEuNeE_Y5ow'

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

    const loadContract = async () => {
      const contract = await getContract(web3)
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setContract(contract)
      setAccount(account)
    }

    loadContract()
  }, [])

  useEffect(() => {
    if (githubUserInfo && decentralizedFileStorageLink && profileCreated) {
      props.profileCreatedCallback({
        githubUserInfo: githubUserInfo,
        decentralizedFileStorageLink: decentralizedFileStorageLink
      })
    }
  }, [decentralizedFileStorageLink, githubUsername, profileCreated])

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
    const userInfo = await fetchGithubUserInfo(false, githubUserTextField)
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
      return <div />
    }
  }

  const profilePicture = () => {
    if (githubUserInfo) {
      return <CardMedia
        component="img"
        height="500"
        image={githubUserInfo.data.avatar_url}
      />
    } else {
      return <div />
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

  useEffect(() => {
    const createProfileIfNeeded = async () => {
      if (decentralizedFileStorageLink && contract && account && !profileCreated) {
        // const githubAvatarLink = githubUserInfo.data.avatar_url
        const name = githubUserInfo.data.name
        await contract.methods.createProfile(name, decentralizedFileStorageLink).send({ from: account })
        setProfileCreated(true)
      }
    }

    createProfileIfNeeded()
  }, [decentralizedFileStorageLink, contract, account, user, profileCreated])

  async function getImageData(imgUrl) {
    return axios
      .get(imgUrl, {
        responseType: 'arraybuffer'
      });
  }

  async function storeInNftstorage(binaryData) {
    return axios.post("https://api.nft.storage/upload", binaryData, {
      headers: {
        'Authorization': `Bearer ${NFT_STORAGE_KEY}`,
        'Content-Type': 'image/jpeg'
      }
    });
  }

  async function storeInStorj(binaryData) {
    let data = new FormData();
    data.append('file', binaryData);

    return axios.post("https://demo.storj-ipfs.com/api/v0/add", data, {
      headers: {
        'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
      }
    });
  }

  const onClickSubmit = async () => {
    const contract = await getContract(web3)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setContract(contract)
    setAccount(account)

    const allUsers = await contract.methods.getUsers().call()
    console.log("All Users")
    console.log(allUsers)
    const me = allUsers.filter(user => user[2] == account)
    if (me.length > 0) {
      console.log("You've already created a user!")
      console.log(me[0])
      console.log(me[0].decentralizedFileStorageLink)
      setUser(me[0])
      setProfileCreated(true)
      setDecentralizedFileStorageLink(me[0].decentralizedFileStorageLink)
    } else {
      // Post image to IPFS
      const binaryImgBuffer = await getImageData(githubUserInfo.data.avatar_url);
      if (useNftStorage) {
        const nftstorage = await storeInNftstorage(binaryImgBuffer.data);
        const httpNftStorageIpfsLink = `https://${nftstorage.data.value.cid}.ipfs.nftstorage.link/`;
        setDecentralizedFileStorageLink(httpNftStorageIpfsLink)
      } else {
        const storj = await storeInStorj(binaryImgBuffer.data);
        const httpStorjLink = `https://demo.storj-ipfs.com/ipfs/${storj.data['Hash']}`;
        setDecentralizedFileStorageLink(httpStorjLink)
      }
    }
  }

  const nukeEverything = async () => {
    if (contract) {
      await contract.methods.reset().send({ from: account })
    }
  }

  return (
    <div className="App">
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <Typography variant="h3"> Create Your Profile! </Typography>
          <Typography variant="h6">{props.address}</Typography>
          <br />
          <TextField disabled={!(githubUserInfo == undefined)} placeholder="GitHub Username" value={githubUserTextField} onChange={onGithubUsernameChange} />
          {githubUserInfo && <Card>
            <Divider></Divider>
            {profilePicture()}
            <CardContent>
              {profileName()}
              {userInfo()}
            </CardContent>
          </Card>}
          <br />
          <Button disabled={!(githubUserInfo == undefined)} onClick={onClickGetUser}>
            Get User
          </Button>
          <Button disabled={(githubUserInfo == undefined)} onClick={onClickSubmit}>
            Save
          </Button>
        </CardContent>

      </Card>

      <Button onClick={nukeEverything}>
        Nuke Everything
      </Button>
    </div>
  );
}

export default CreateProfile;

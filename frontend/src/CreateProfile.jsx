import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';

const imageUploadEndpoint = "api.example.com"

function CreateProfile(props) {
  const [selectedImage, setSelectedImage] = useState(undefined)
  const [nameTextField, setNameTextField] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    console.log(selectedImage)
    console.log(name)
    if (selectedImage && name) {
      props.profileCreatedCallback({
        name: name,
        linkToPicture: URL.createObjectURL(selectedImage)
      })
    }
  }, [selectedImage, name])

  const onClickSubmit = () => {
    console.log("Selected Image")
    console.log(selectedImage)
    setName(nameTextField)
    //onFileUpload()
  }

  // On file upload (click the upload button)
  const onFileUpload = () => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      selectedImage,
      selectedImage.name
    );
  
    // Details of the uploaded file
    console.log(selectedImage);

    // Request made to the backend api
    // Send formData object
    axios({
      method: 'post',
      url: 'https://api.example.com',
      data: formData
    });
  };

  const onFileChange = event => {
    setSelectedImage(event.target.files[0])
  }

  const onNameChange = (event) => {
    setNameTextField(event.target.value);
  }

  const profilePicture = () => {
    if (selectedImage) {
      return <Box
        component="img"
        sx={{
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="Match Candidate"
        src={URL.createObjectURL(selectedImage)}
      />
    } else {
      return <div/>
    }
  }

  const maybeUploadButton = () => {
    if (selectedImage == undefined) {
      return <div>
        <input
          style={{ display: "none" }}
          id="contained-button-file"
          type="file"
          // ref={fileInput}
          onChange={onFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload Picture
          </Button>
        </label>
      </div>
    } else {
      return <div/>
    }
  }

  return (
    <div className="App">
      <Typography variant="h3"> Create your Profile! </Typography>
      <Typography variant="h6"> Account: {props.address} </Typography>
      <br/>
      <TextField placeholder="Name" value={nameTextField} onChange={onNameChange}/>
      <br/>
      {profilePicture()}
      {maybeUploadButton()}
      <br/>
      <Button onClick={onClickSubmit}>
        Save
      </Button> 
    </div>
  );
}

export default CreateProfile;

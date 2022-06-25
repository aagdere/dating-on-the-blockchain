import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const metaMaskImgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"

function Address(props) {
  const [isConnected, setIsConnected] = useState(false)
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false)
  const [ethereum, setEthereum] = useState(undefined)
  const [waitingForMetaMask, setWaitingForMetaMask] = useState(false)
  const [checkIfConnectedButton, setCheckIfConnectedButton] = useState(false)
  const [address, setAddress] = useState(undefined)

  useEffect(() => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    const isInstalled = ethereum && ethereum.isMetaMask;
    setEthereum(ethereum)
    setIsMetaMaskInstalled(isInstalled)

    ethereum.on('connect', (connectInfo) => connectToMetaMask(ethereum))
  }, []);

  useEffect(() => {
    if (address) {
      props.connectedCallback(address)
    }
  }, [address]);

  const connectToMetaMask = async (ethereum) => {
      setWaitingForMetaMask(true)
      await requestAccounts(ethereum)    
  }

  const connectToMetaMaskIfReady = async () => {
    if (ethereum && isMetaMaskInstalled) {
      await connectToMetaMask(ethereum)
    }
  }

  const requestAccounts = async (ethereum) => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      const response = await ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true)
      setAddress(response[0])
    } catch (error) {
      console.error(error);
      if (error.code === 4001) {
        console.log("Request rejected!")
        setWaitingForMetaMask(false)
      } else if (error.code === -32002) {
        console.log("Request already in flight")
        setCheckIfConnectedButton(true)
      }
    }
  };

  const render = () => {
    if (!isMetaMaskInstalled) {
      return "Please install MetaMask!"
    } else if (!isConnected){
      if (checkIfConnectedButton) {
        return <Button onClick={connectToMetaMaskIfReady}>Check if Connected</Button>
      }
      return <Button disabled={waitingForMetaMask} onClick={connectToMetaMaskIfReady}>Connect to MetaMask</Button>
    } else {
      return `Successfully Connected! Address: ${address}`
    }
  }

  return (
    <div className="App">
      <Box
        component="img"
        sx={{
          height: 500,
          width: 500,
          maxHeight: { xs: 500, md: 250 },
          maxWidth: { xs: 500, md: 250 },
        }}
        alt="MetaMask"
        src={metaMaskImgUrl}
      />
      <br/>
      {render()}
    </div>
  );
}

export default Address;
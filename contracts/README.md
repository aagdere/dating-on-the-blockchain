# Details and Credentials

## Compiling and Deploying
`npm run compile`
`npm run deploy`
Then copy the build file to `frontend-example/contracts/Dating.json`

## Deployed Contract Address
```
  Replacing 'Dating'
   ------------------
   > transaction hash:    0x5652d9994aaa1291052fb81119fbe0de11e88367756a0194beae58ff4c99556b
   > Blocks: 0            Seconds: 0
   > contract address:    0xe6b9e7879E5D77AafFC56b0D37515539258a3E78
   > block number:        128318
   > block timestamp:     1656177737
   > account:             0xf336ef14952Ad86D7f7b4C628648bA4eDC844bBe
   > balance:             0.068986151
   > gas used:            4803326 (0x494afe)
   > gas price:           1 gwei
   > value sent:          0 ETH
   > total cost:          0.004803326 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:         0.004803326 ETH
```

## Private Keys
This is all based off the Boba Network. We have these accounts that already have L2 Boba Rinkeby Eth

Account 1: (Account 1 is the owner of this contract)

- Address: 0xf336ef14952Ad86D7f7b4C628648bA4eDC844bBe (owner)
- Private Key: 49b59aebc6cbe66b18ff817ee79affb61778f7d3c6285fa01a743ae1d26b9211

Account 2:
- Address: 0x2028879b223444A417D239616fE060a15aef46A9
- Private Key: df0b5d86556be6021e41af7b0b912dc37cce0800f9a31171dc6a540a10c2501b

## Metmask Network 
1. Open up Metamask
2. Add Network

```
Network Name: BOBA Rinkeby L2
RPC URL: https://rinkeby.boba.network
Chain ID: 28
Currency Symbol: ETH
Block Expolorer URL: https://blockexplorer.rinkeby.boba.network
```

## Helpful Notes

If the function to be called is pure or read-only, you need to use:

`myContract.methods.myMethod([arguments]).call()`
If the function to be called is going to modify the state (aka transaction), you will need to use:

`myContract.methods.myMethod([arguments]).send()`
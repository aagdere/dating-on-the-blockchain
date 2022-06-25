const HDWalletProvider = require('@truffle/hdwallet-provider')


const pk_1 = '49b59aebc6cbe66b18ff817ee79affb61778f7d3c6285fa01a743ae1d26b9211';
const pk_2 = 'df0b5d86556be6021e41af7b0b912dc37cce0800f9a31171dc6a540a10c2501b';

module.exports = {
  contracts_build_directory: './build',
  networks: {
    boba_rinkeby: {
      provider: function () {
        return new HDWalletProvider({
          privateKeys: [pk_1, pk_2],
          providerOrUrl: 'https://rinkeby.boba.network',
        })
      },
      network_id: 28,
      host: 'https://rinkeby.boba.network',
    }
  },
  compilers: {
    solc: {
      version: '0.6.12',
    },
  },
}
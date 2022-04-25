/**
 * @type import('hardhat/config').HardhatUserConfig
 */
try {
  require('@nomiclabs/hardhat-waffle')
  require('@openzeppelin/hardhat-upgrades')
  require('hardhat-jest-plugin')
  require('hardhat-docgen')
  require('@primitivefi/hardhat-dodoc')
  require('hardhat-contract-sizer')
} catch (err) {
  if (err.message !== 'HH5: HardhatContext is not created.') {
    console.log(err)
  }
}

module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2 ** 32 - 1
      }
    }
  },
  paths: {
    root: './',
    sources: './src',
    tests: './src',
    artifacts: './artifacts'
  },
  docgen: {
    path: './docs',
    clear: false,
    runOnCompile: true
  },
  dodoc: {
    runOnCompile: true,
    testMode: false
    // More options...
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    }
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: false,
    strict: false,
    only: []
  }
}

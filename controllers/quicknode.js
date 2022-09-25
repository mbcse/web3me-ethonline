import config from '../config'
const ethers = require('ethers')
export async function getERC20DATA (contractAddress) {
  const provider = new ethers.providers.JsonRpcProvider(config.QUICKNODE.API)
  provider.connection.headers = { 'x-qn-api-version': 1 }
  const heads = await provider.send('qn_getTokenMetadataByContractAddress', {
    contract: contractAddress
  })
  return heads
}

export async function getNFTDATA (contractAddress) {
  const provider = new ethers.providers.JsonRpcProvider(config.QUICKNODE.API)
  provider.connection.headers = { 'x-qn-api-version': 1 }
  const heads = await provider.send('qn_fetchNFTCollectionDetails', {
    contract: contractAddress
  })
  return heads
}

export async function getNFTTransfersDATA (contractAddress, wallet) {
  const provider = new ethers.providers.JsonRpcProvider(config.QUICKNODE.API)
  provider.connection.headers = { 'x-qn-api-version': 1 }
  const heads = await provider.send('qn_fetchNFTs', {
    wallet,
    omitFields: ['provenance', 'traits'],
    page: 1,
    perPage: 10,
    contracts: [
      contractAddress
    ]
  })
  return (heads)
}

export async function getTokenBalance (wallet) {
  const provider = new ethers.providers.JsonRpcProvider(config.QUICKNODE.API)
  provider.connection.headers = { 'x-qn-api-version': 1 }
  const heads = await provider.send('qn_getWalletTokenBalance', {
    wallet: 
  })
  return (heads)
}

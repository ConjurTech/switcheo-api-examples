const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')

function createDeposit ({ contractHash, blockchain, address,
    assetID, amount, privateKey }) {
    const timestamp = getTimestamp()
    const signableParams = { blockchain, contractHash, assetID, amount, timestamp }
    const signature = signParams(signableParams, privateKey)
    const apiParams = { ...signableParams, address, signature, timestamp }
      console.log(apiParams)
    return api.post(API_URL + '/deposits', apiParams)
  };

module.exports = { createDeposit }

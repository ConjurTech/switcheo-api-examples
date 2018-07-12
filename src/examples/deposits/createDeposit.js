const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')

function createDeposit ({ blockchain, address, assetID, amount, privateKey }) {
  const signableParams = { blockchain, assetID, amount, timestamp: getTimestamp(),
                           contractHash: CONTRACT_HASH }
  const signature = signParams(signableParams, privateKey)
  const apiParams = { ...signableParams, address, signature }
  return api.post(API_URL + '/deposits', apiParams)
};

module.exports = { createDeposit }

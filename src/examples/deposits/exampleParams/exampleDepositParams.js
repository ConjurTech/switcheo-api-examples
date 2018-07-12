const user = require('../../../user')
const { toNeoAssetAmount } = require('../../../utils')
const { CONTRACT_HASH } = require('../../../config')

module.exports = {
  depositParams: {
    contractHash: CONTRACT_HASH,
    blockchain: 'neo',
    address: user.address,
    assetID: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
    amount: (1).toFixed(8),
    privateKey: user.privateKey
  }
}

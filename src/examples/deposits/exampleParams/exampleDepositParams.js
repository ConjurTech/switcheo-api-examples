const user = require('../../../user')
const { toNeoAssetAmount } = require('../../../utils')

module.exports = {
  depositParams: {
    blockchain: 'neo',
    address: user.address,
    assetID: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
    amount: (1).toFixed(8),
    privateKey: user.privateKey
  }
}

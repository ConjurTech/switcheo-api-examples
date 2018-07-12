const user = require('../../../user')
const { toNeoAssetAmount } = require('../../../utils')

module.exports = {
  depositParams: {
    blockchain: 'neo',
    address: user.address,
    assetID: 'SWTH',
    amount: (toNeoAssetAmount(1)),
    privateKey: user.privateKey
  }
}

const user = require('../../../user')
const { toAssetAmount } = require('../../../utils')

module.exports = {
  withdrawalParams: {
    blockchain: 'neo',
    address: user.address,
    assetID: 'SWTH',
    amount: toAssetAmount(1, 'SWTH'),
    privateKey: user.privateKey
  }
}

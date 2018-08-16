const user = require('../../../user')
const { toAssetAmount } = require('../../../utils')

module.exports = {
  orderParams: {
    pair: 'SWTH_NEO',
    blockchain: 'neo',
    address: user.address,
    side: 'buy',
    price: (0.0001).toFixed(8),
    // the amount of SWTH to sell or buy
    wantAmount: toAssetAmount(200.5, 'SWTH'),
    useNativeTokens: true,
    orderType: 'limit',
    privateKey: user.privateKey
  }
}

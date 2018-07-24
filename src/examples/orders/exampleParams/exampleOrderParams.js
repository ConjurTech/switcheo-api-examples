const user = require('../../../user')
const { toNeoAssetAmount } = require('../../../utils')

module.exports = {
  orderParams: {
    pair: 'SWTH_NEO',
    blockchain: 'neo',
    address: user.address,
    side: 'buy',
    price: (0.001).toFixed(8),
    wantAmount: toNeoAssetAmount(120),
    useNativeTokens: true,
    orderType: 'limit',
    privateKey: user.privateKey
  }
}

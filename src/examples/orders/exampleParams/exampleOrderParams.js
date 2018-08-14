const user = require('../../../user')
const { toNeoAssetAmount } = require('../../../utils')

module.exports = {
  orderParams: {
    pair: 'SWTH_NEO',
    blockchain: 'neo',
    address: user.address,
    side: 'buy',
    price: (0.0001).toFixed(8),
    wantAmount: toNeoAssetAmount(200.5),
    useNativeTokens: true,
    orderType: 'limit',
    privateKey: user.privateKey
  }
}

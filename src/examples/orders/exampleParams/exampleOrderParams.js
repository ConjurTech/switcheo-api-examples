const user = require('../../../user')
const { toAssetAmount } = require('../../../utils')

module.exports = {
  orderParams: {
    pair: 'SWTH_NEO',
    blockchain: 'neo',
    address: user.address,
    side: 'buy',
    price: (0.0001).toFixed(8),
  // if the side is 'buy', then this is the amount of SWTH you want
  // if the side is 'sell' then this is the amount of NEO you want
    quantity: toAssetAmount(200.5, 'SWTH'),
    useNativeTokens: true,
    orderType: 'limit',
    privateKey: user.privateKey
  }
}

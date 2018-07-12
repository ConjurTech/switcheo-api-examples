const { createOrder } = require('./createOrder')
const user = require('../../user')
const { toNeoAssetAmount } = require('../../utils')

createOrder({
  pair: 'SWTH_NEO',
  blockchain: 'neo',
  address: user.address,
  side: 'buy',
  price: (0.001).toFixed(8),
  wantAmount: toNeoAssetAmount(20.5),
  useNativeTokens: true,
  orderType: 'limit',
  privateKey: user.privateKey
})
.then((response) => console.log(response.body))

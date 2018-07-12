const { createOrder } = require('./createOrder')
const { broadcastOrder } = require('./broadcastOrder')
const user = require('../../user')
const { toNeoAssetAmount } = require('../../utils')

const orderParams = {
  pair: 'SWTH_NEO',
  blockchain: 'neo',
  address: user.address,
  side: 'buy',
  price: (0.001).toFixed(8),
  wantAmount: toNeoAssetAmount(20.5),
  useNativeTokens: true,
  orderType: 'limit',
  privateKey: user.privateKey
}

function executeOrderBroadcast(order) {
  broadcastOrder({ order, privateKey: user.privateKey })
  .then((broadcastOrderResponse) => {
    console.log('broadcastOrder')
    console.log(broadcastOrderResponse.body)
  })
}

createOrder(orderParams)
.then((createOrderResponse) => {
  const order = createOrderResponse.body
  console.log('createOrder')
  console.log(order)
  executeOrderBroadcast(order)
})

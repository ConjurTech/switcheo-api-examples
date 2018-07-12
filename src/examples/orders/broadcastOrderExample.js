const { createOrder } = require('./createOrder')
const { broadcastOrder } = require('./broadcastOrder')
const { orderParams } = require('./exampleParams/exampleOrderParams')

createOrder(orderParams).then((response) => {
  const order = response.body
  console.log('createOrder')
  console.log(order)

  broadcastOrder({ order, privateKey: orderParams.privateKey }).then((response) => {
    console.log('broadcastOrder')
    console.log(response.body)
  })
})

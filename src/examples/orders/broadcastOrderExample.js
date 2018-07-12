const { createOrder } = require('./createOrder')
const { broadcastOrder } = require('./broadcastOrder')
const { orderParams } = require('./exampleParams/exampleOrderParams')
const user = require('../../user')

createOrder(orderParams).then((response) => {
  const order = response.body
  console.log('createOrder')
  console.log(order)

  broadcastOrder({ order, privateKey: user.privateKey }).then((response) => {
    console.log('broadcastOrder')
    console.log(response.body)
  })
})

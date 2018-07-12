const { createAndBroadcastOrder } = require('./createAndBroadcastOrder')
const { createCancellation } = require('./createCancellation')
const { orderParams } = require('./exampleParams/exampleOrderParams')
const user = require('../../user')

createAndBroadcastOrder(orderParams).then((response) => {
  const order = response.body
  console.log('createAndBroadcastOrder')
  console.log(order)

  const { address, privateKey } = orderParams
  createCancellation({ order, address, privateKey }).then((response) => {
    console.log('createCancellation')
    console.log(response.body)
  })
})

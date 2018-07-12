const { createAndBroadcastOrder } = require('./createAndBroadcastOrder')
const { createCancellation } = require('./createCancellation')
const { executeCancellation } = require('./executeCancellation')
const { orderParams } = require('./exampleParams/exampleOrderParams')

createAndBroadcastOrder(orderParams).then((response) => {
  const order = response.body
  console.log('createAndBroadcastOrder')
  console.log(order)

  const { address, privateKey } = orderParams
  createCancellation({ order, address, privateKey }).then((response) => {
    const cancellation = response.body
    console.log('createCancellation')
    console.log(cancellation)

    executeCancellation({ cancellation, privateKey }).then((response) => {
      console.log('executeCancellation')
      console.log(response.body)
    })
  })
})

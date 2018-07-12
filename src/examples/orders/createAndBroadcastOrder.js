const { createOrder } = require('./createOrder')
const { broadcastOrder } = require('./broadcastOrder')
const { orderParams } = require('./exampleParams/exampleOrderParams')

function createAndBroadcastOrder(orderParams) {
  return new Promise((resolve) => {
    createOrder(orderParams).then((response) => {
      const order = response.body
      broadcastOrder({ order, privateKey: orderParams.privateKey }).then((response) => {
        resolve(response)
      })
    })
  })
}

module.exports = { createAndBroadcastOrder }

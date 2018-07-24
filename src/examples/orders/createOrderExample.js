const { createOrder } = require('./createOrder')
const { orderParams } = require('./exampleParams/exampleOrderParams')

createOrder(orderParams).then((response) => {
  console.log(response.body)
  console.log("****")
  response.body.fills.forEach((fill) => {
    console.log(fill.offer)
    console.log("****")
    console.log(fill.txn)
  })
  // console.log(response.body.makes[0].txn)
})

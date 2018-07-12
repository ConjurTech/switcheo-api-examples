const { createOrder } = require('./createOrder')
const { orderParams } = require('./exampleParams/exampleOrderParams')

createOrder(orderParams).then((response) => console.log(response.body))

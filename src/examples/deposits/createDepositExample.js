const { createDeposit } = require('./createDeposit')
const { depositParams } = require('./exampleParams/exampleDepositParams')

createDeposit(depositParams).then((response) => console.log(response.body))
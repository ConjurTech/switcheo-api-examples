const { createDeposit } = require('./createDeposit')
const { broadcastDeposit } = require('./broadcastDeposit')
const { depositParams } = require('./exampleParams/exampleDepositParams')

createDeposit(depositParams).then((response) => {
  const deposit = response.body
  console.log('createDeposit')
  console.log(deposit)

  broadcastDeposit({ deposit, privateKey: depositParams.privateKey }).then((response) => {
    console.log('broadcastDeposit')
    console.log(response.body)
  })
})

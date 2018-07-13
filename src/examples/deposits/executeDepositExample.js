const { createDeposit } = require('./createDeposit')
const { executeDeposit } = require('./executeDeposit')
const { depositParams } = require('./exampleParams/exampleDepositParams')

createDeposit(depositParams).then((response) => {
  const deposit = response.body
  console.log('createDeposit')
  console.log(deposit)

  executeDeposit({ deposit, privateKey: depositParams.privateKey }).then((response) => {
    console.log('executeDeposit')
    console.log(response.body)
  })
})

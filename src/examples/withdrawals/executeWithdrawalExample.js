const { createWithdrawal } = require('./createWithdrawal')
const { executeWithdrawal } = require('./executeWithdrawal')
const { withdrawalParams } = require('./exampleParams/exampleWithdrawalParams')

createWithdrawal(withdrawalParams).then((response) => {
  const withdrawal = response.body
  console.log('createWithdrawal')
  console.log(withdrawal)

  executeWithdrawal({ withdrawal, privateKey: withdrawalParams.privateKey }).then((response) => {
    console.log('executeWithdrawal')
    console.log(response.body)
  })
})

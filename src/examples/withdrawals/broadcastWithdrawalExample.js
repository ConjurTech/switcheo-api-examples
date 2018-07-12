const { createWithdrawal } = require('./createWithdrawal')
const { broadcastWithdrawal } = require('./broadcastWithdrawal')
const { withdrawalParams } = require('./exampleParams/exampleWithdrawalParams')

createWithdrawal(withdrawalParams).then((response) => {
  const withdrawal = response.body
  console.log('createWithdrawal')
  console.log(withdrawal)

  broadcastWithdrawal({ withdrawal, privateKey: withdrawalParams.privateKey }).then((response) => {
    console.log('broadcastWithdrawal')
    console.log(response.body)
  })
})

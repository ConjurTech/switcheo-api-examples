const { createWithdrawal } = require('./createWithdrawal')
const { withdrawalParams } = require('./exampleParams/exampleWithdrawalParams')

createWithdrawal(withdrawalParams).then((response) => console.log(response.body))
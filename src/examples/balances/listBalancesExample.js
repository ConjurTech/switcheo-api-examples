const { listBalances } = require('./listBalances')
const user = require('../../user')

listBalances({ addresses: [user.address] }).then((response) => {
  console.log(response.body)
})

const { listTrades } = require('./listTrades')

listTrades('neo', 'SWTH_NEO', 3).then((response) => {
  console.log(response.body)
})

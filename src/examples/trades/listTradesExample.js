const { listTrades } = require('./listTrades')

listTrades({ blockchain: 'neo', pair: 'SWTH_NEO', limit: 3 }).then((response) => {
  console.log(response.body)
})

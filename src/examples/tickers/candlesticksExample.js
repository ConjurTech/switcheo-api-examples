const { candlesticks } = require('./candlesticks')

const startTime = 1531213200
const endTime = 1531220400
candlesticks({ pair: 'SWTH_NEO', interval: 1, startTime, endTime }).then((response) => {
  console.log(response.body)
})

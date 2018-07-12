const api = require('../../api')
const { API_URL } = require('../../config')

function candlesticks({ pair, interval, startTime, endTime }) {
  const params = { pair, interval, startTime, endTime }
  return api.get(API_URL + '/tickers/candlesticks', params)
}

module.exports = { candlesticks }

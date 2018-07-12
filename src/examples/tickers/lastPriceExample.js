const { lastPrice } = require('./lastPrice')

lastPrice().then((response) => { console.log(response.body) })

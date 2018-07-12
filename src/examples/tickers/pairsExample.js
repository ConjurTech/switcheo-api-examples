
const { pairs } = require('./pairs')

pairs().then((response) => { console.log(response.body) })

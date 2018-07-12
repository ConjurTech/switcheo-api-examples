const { contracts } = require('./contracts')

contracts().then((response) => { console.log(response.body) })

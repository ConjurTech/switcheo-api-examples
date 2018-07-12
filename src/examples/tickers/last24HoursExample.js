const { last24Hours } = require('./last24Hours')

last24Hours().then((response) => { console.log(response.body) })

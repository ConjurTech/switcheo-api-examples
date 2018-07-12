const { listOffers } = require('./listOffers')

listOffers({ blockchain: 'neo', pair: 'SWTH_NEO' }).then((response) => {
  console.log(response.body)
})

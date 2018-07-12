const { listOffers } = require('./listOffers')

listOffers('neo', 'SWTH_NEO').then((response) => {
  console.log(response.body)
})

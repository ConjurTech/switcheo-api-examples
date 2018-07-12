const { getTimestamp, signParams } = require('../../utils')
const { API_URL, CONTRACT_HASH } = require('../../config')
const api = require('../../api')
const user = require('../../user')

function createOrder({ pair, blockchain, address, side, price,
                       wantAmount, useNativeTokens, orderType,
                       privateKey }) {
  return new Promise((resolve, reject) => {
    const timestamp = getTimestamp()
    const contractHash = CONTRACT_HASH
    const signableParams = { pair, blockchain, contractHash: CONTRACT_HASH,
                             side, price, wantAmount, useNativeTokens, orderType }

    const signature = signParams({ ...signableParams, timestamp }, privateKey)
    const apiParams = { ...signableParams, signature, address, timestamp }
    api.post(API_URL + '/orders', apiParams).then(function(response) {
      console.log('createOrder')
      console.log(response.body)
      resolve(response.body)
    })
  })
}

createOrder({
  pair: 'SWTH_NEO',
  blockchain: 'neo',
  address: user.address,
  side: 'buy',
  price: '0.00123456',
  wantAmount: '1000' + '0000' + '0000',
  useNativeTokens: true,
  orderType: 'limit',
  privateKey: user.privateKey
})

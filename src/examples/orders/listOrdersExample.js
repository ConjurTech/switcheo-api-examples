const { listOrders } = require('./listOrders')

listOrders({ address: '87cf67daa0c1e9b6caa1443cf5555b09cb3f8e5f' }).then((response) => {
  console.log(response.body)
})

const { wallet } = require('@cityofzion/neon-js')
const { concatArrays } = require('./utils')
const api = require('./api')

function fetchUserBalance(user) {
  const transformedAddress = wallet.getAddressFromScriptHash(user.address)
  const url = 'https://neoscan.io/api/main_net/v1/get_balance/' + transformedAddress
  return api.get(url)
}

function unspentTransactionFoundInInputs(unspentTransaction, inputs) {
  return inputs.some((input) => {
    return unspentTransaction.n === input.prevIndex &&
           unspentTransaction.txid === input.prevHash
  })
}

function anyInputsBelongToUser(transaction, userBalances) {
  const unspentTransactions = concatArrays(userBalances.map((balance) => balance.unspent))
  return unspentTransactions.some((unspentTransaction) => {
    return unspentTransactionFoundInInputs(unspentTransaction, transaction.inputs)
  })
}

module.exports = { fetchUserBalance, anyInputsBelongToUser }

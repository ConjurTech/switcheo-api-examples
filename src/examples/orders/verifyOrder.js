const Neon = require('@cityofzion/neon-js')
const { fetchUserBalance, anyInputsBelongToUser } = require('../../verification')
const { getAssetId } = require('../../utils')
const user = require('../../user')
const { CONTRACT_HASH } = require('../../config')

function validateContractHash(transaction) {
  if (transaction.invoke.scriptHash !== CONTRACT_HASH) {
    throw new Error("The transaction's contract hash does not match the requested contract hash")
  }
}

function validateExpectedOperation(transaction, expectedOperation) {
  if (transaction.invoke.operation !== expectedOperation) {
    throw new Error(`The transaction's operation should be '${expectedOperation}'`)
  }
}

function validateInputs(transaction, balances) {
  if (anyInputsBelongToUser(transaction, balances)) {
    throw new Error("The user's unspect transactions should not be used as inputs")
  }
}

function performCommonValidations({ transaction, balances, expectedOperation }) {
  validateContractHash(transaction)
  validateExpectedOperation(transaction, expectedOperation)
  validateInputs(transaction, balances)
}

function validateTransactionAsset(reversedTxnAssetId, assetSymbol) {
  const txnAssetId = Neon.u.reverseHex(reversedTxnAssetId)
  const assetId = getAssetId(assetSymbol)
  if (txnAssetId !== assetId) {
    throw new Error("The transaction's asset ID does not match the requested asset ID")
  }
}

function validateFillArguments(transaction, orderParams) {

}

function validateFill({ fill, orderParams, balances }) {
  const transaction = fill.txn
  performCommonValidations({ transaction, balances, expectedOperation: 'fillOffer' })
  validateFillArguments(transaction, orderParams)
}

function validateMakeArguments(transaction, orderParams) {
  const { args } = transaction.invoke

  // e.g. of pair: 'SWTH_NEO'
  const { pair, side } = orderParams
  const pairSymbols = pair.split('_') // e.g. pairSymbols = ['SWTH', 'NEO']

  // if the pair is 'SWTH_NEO' and the side is 'buy', then the wanted asset is 'SWTH'
  // if the side is not 'buy', i.e. 'sell', then the wanted asset is 'NEO'
  const wantAssetSymbol = side === 'buy' ? pairSymbols[0] : pairSymbols[1]
  const offerAssetSymbol = side === 'buy' ? pairSymbols[1] : pairSymbols[0]
  validateTransactionAsset(args[3], wantAssetSymbol)
  validateTransactionAsset(args[1], offerAssetSymbol)
}

function validateMake({ make, orderParams, balances }) {
  const transaction = make.txn
  performCommonValidations({ transaction, balances, expectedOperation: 'makeOffer' })
  validateMakeArguments(transaction, orderParams)
}

function fetch

function verifyOrderTransactions(order, orderParams) {
  return new Promise((resolve) => {
    fetchUserBalance(user).then((response) => {
      const balances = response.body.balance
      order.fills.forEach((fill) => validateFill({ fill, orderParams, balances }))
      order.makes.forEach((make) => validateMake({ make, orderParams, balances }))
      resolve()
    })
  })
}

module.exports = { verifyOrderTransactions }

// verifyOrderTransaction(
// {
//   offerHash: '00aec37f9bbb27804271122bfa35b8dcb1e34881b2e1aac96d41ceacc27da30e',
//   hash: 'e72a3745767fbd8d1ccdcdc44f49945b90324e38ec541d25a714e47277143f24',
//   sha256: '96f5b87784a5fd5938338b4925f3f27561b2be8a4b5d9138f853ef345c75cbea',
//   invoke: {
//     scriptHash: 'eed0d2e14b0027f5f30ade45f2b23dc57dd54ad2',
//     operation: 'makeOffer',
//     args: [
//       '5f8e3fcb095b55f53c44a1cab6e9c1a0da67cf87',
//       '9b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc5',
//       2050000,
//       '32e125258b7db0a0dffde5bd03b2b859253538ab',
//       2050000000,
//       '33376337623364632d633138642d343463332d393030352d393639613036363465303765'
//     ]
//   },
//   type: 209,
//   version: 1,
//   attributes: [ { usage: 32, data: '5f8e3fcb095b55f53c44a1cab6e9c1a0da67cf87' } ],
//   inputs: [
//     {
//       prevHash: '8d2feec5f893523187216acdba2b234a4c0eb47500c7703e495ef2318afc352c',
//       prevIndex: 1
//     }
//   ],
//   outputs: [
//     {
//       assetId: '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
//       scriptHash: 'e707714512577b42f9a011f8b870625429f93573',
//       value: 1e-8
//     }
//   ],
//   scripts: [],
//   script: '2433376337623364632d633138642d343463332d393030352d393639613036363465303765088084307a000000001432e125258b7db0a0dffde5bd03b2b859253538ab08d0471f0000000000209b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc5145f8e3fcb095b55f53c44a1cab6e9c1a0da67cf8756c1096d616b654f6666657267d24ad57dc53db2f245de0af3f527004be1d2d0ee',
//   gas: 0
// })

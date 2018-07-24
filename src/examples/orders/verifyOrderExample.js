const { createOrder } = require('./createOrder')
const user = require('../../user')
const { toNeoAssetAmount } = require('../../utils')
const { verifyOrderTransactions } = require('./verifyOrder')

const orderWithMakesParams = {
  pair: 'NEO_SWTH',
  blockchain: 'neo',
  address: user.address,
  side: 'buy',
  price: (1).toFixed(8),
  wantAmount: toNeoAssetAmount(1),
  useNativeTokens: true,
  orderType: 'limit',
  privateKey: user.privateKey
}

const orderWithFillsParams = {
  pair: 'SWTH_NEO',
  blockchain: 'neo',
  address: user.address,
  side: 'buy',
  price: (0.001).toFixed(8),
  wantAmount: toNeoAssetAmount(20.5),
  useNativeTokens: true,
  orderType: 'limit',
  privateKey: user.privateKey
}

const makeTxn0 = { offerHash:
   'db9c54bd63b53a9f7aa64b38484046672cb1355fab80441f4cf263cbb1d7a218',
  hash:
   'a0482db4000313ca402794502d55269f2aa85360f62d2ed2fa8dec144e66d19b',
  sha256:
   '4f2073e2d1a0e4226d174f572a9aee4d06134470430c566f472cdd0f11ab9198',
  invoke:
   { scriptHash: 'eed0d2e14b0027f5f30ade45f2b23dc57dd54ad2',
     operation: 'makeOffer',
     args:
      [ '5f8e3fcb095b55f53c44a1cab6e9c1a0da67cf87',
        '32e125258b7db0a0dffde5bd03b2b859253538ab',
        100000000,
        '9b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc5',
        100000000,
        '64343364666438392d356538352d343139382d613337622d373037373837643366613464' ] },
  type: 209,
  version: 1,
  attributes:
   [ { usage: 32, data: '5f8e3fcb095b55f53c44a1cab6e9c1a0da67cf87' } ],
  inputs:
   [ { prevHash:
        '7a8752a2fe8be98000424f2e4d5775eaf75fca689867068c15283a18cb263a89',
       prevIndex: 0 } ],
  outputs:
   [ { assetId:
        '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
       scriptHash: 'e707714512577b42f9a011f8b870625429f93573',
       value: 1e-8 } ],
  scripts: [],
  script:
   '2464343364666438392d356538352d343139382d613337622d3730373738376433666134640800e1f50500000000209b7cffdaa674beae0f930ebe6085af9093e5fe56b34a5c220ccdcf6efc336fc50800e1f505000000001432e125258b7db0a0dffde5bd03b2b859253538ab145f8e3fcb095b55f53c44a1cab6e9c1a0da67cf8756c1096d616b654f6666657267d24ad57dc53db2f245de0af3f527004be1d2d0ee',
  gas: 0 }

const orderWithMakes = { id: '4e069515-fec5-448b-a09c-f7f99e582a5c',
  blockchain: 'neo',
  contract_hash: 'eed0d2e14b0027f5f30ade45f2b23dc57dd54ad2',
  address: '87cf67daa0c1e9b6caa1443cf5555b09cb3f8e5f',
  side: 'buy',
  offer_asset_id: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
  want_asset_id:
   'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
  offer_amount: '100000000',
  want_amount: '100000000',
  transfer_amount: '0',
  priority_gas_amount: '0',
  use_native_token: true,
  native_fee_transfer_amount: 0,
  deposit_txn: null,
  created_at: '2018-07-16T08:59:14.838Z',
  status: 'pending',
  fills: [],
  makes:
   [ { id: 'd43dfd89-5e85-4198-a37b-707787d3fa4d',
       offer_hash: null,
       available_amount: null,
       offer_asset_id: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
       offer_amount: '100000000',
       want_asset_id:
        'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
       want_amount: '100000000',
       filled_amount: null,
       txn: makeTxn0,
       cancel_txn: null,
       price: '1.0',
       status: 'pending',
       created_at: '2018-07-16T08:59:14.854Z',
       transaction_hash:
        'a0482db4000313ca402794502d55269f2aa85360f62d2ed2fa8dec144e66d19b',
       trades: [] } ] }


// verifyOrderTransactions(orderWithMakes, orderWithMakesParams).then(() => {
//   console.log('verified')
// })

const fillTxn0 = { hash:
   '11efdc3b59f748e4d170d3ca13f469cd81e60fee0f95174d69ba242e7e1dfea7',
  sha256:
   'd2f93c90aa61298d5785af83fc2e35806ff7cfddbf7fba3fd5432aeaf4f8e3d7',
  invoke:
   { scriptHash: 'eed0d2e14b0027f5f30ade45f2b23dc57dd54ad2',
     operation: 'fillOffer',
     args:
      [ '5f8e3fcb095b55f53c44a1cab6e9c1a0da67cf87',
        '1750c356bb27507ee8c41681dfea05d08a3a139d76a8033079f1a5eb20943e82',
        2050000000,
        '32e125258b7db0a0dffde5bd03b2b859253538ab',
        1537500,
        true ] },
  type: 209,
  version: 1,
  attributes:
   [ { usage: 32, data: '5f8e3fcb095b55f53c44a1cab6e9c1a0da67cf87' } ],
  inputs:
   [ { prevHash:
        '6e7ae43a4611a61b0a5f8223576a1e9db318d1afe6fe794b087d55e58504f0c0',
       prevIndex: 0 } ],
  outputs:
   [ { assetId:
        '602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7',
       scriptHash: 'e707714512577b42f9a011f8b870625429f93573',
       value: 1e-8 } ],
  scripts: [],
  script:
   '5108dc751700000000001432e125258b7db0a0dffde5bd03b2b859253538ab088084307a00000000201750c356bb27507ee8c41681dfea05d08a3a139d76a8033079f1a5eb20943e82145f8e3fcb095b55f53c44a1cab6e9c1a0da67cf8756c10966696c6c4f6666657267d24ad57dc53db2f245de0af3f527004be1d2d0ee',
  gas: 0 }

const orderWithFills = { id: 'd61dfa22-eadd-4085-975a-1fd20890ea28',
  blockchain: 'neo',
  contract_hash: 'eed0d2e14b0027f5f30ade45f2b23dc57dd54ad2',
  address: '87cf67daa0c1e9b6caa1443cf5555b09cb3f8e5f',
  side: 'buy',
  offer_asset_id:
   'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
  want_asset_id: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
  offer_amount: '2050000',
  want_amount: '2050000000',
  transfer_amount: '0',
  priority_gas_amount: '0',
  use_native_token: true,
  native_fee_transfer_amount: 0,
  deposit_txn: null,
  created_at: '2018-07-16T08:56:51.398Z',
  status: 'pending',
  fills:
   [ { id: '352988ce-ee4f-4905-ab49-bf43ec5bb021',
       offer_hash:
        '823e9420eba5f1793003a8769d133a8ad005eadf8116c4e87e5027bb56c35017',
       offer_asset_id:
        'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b',
       want_asset_id: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
       fill_amount: '1024590',
       want_amount: '2050000000',
       filled_amount: '',
       fee_asset_id: 'ab38352559b8b203bde5fddfa0b07d8b2525e132',
       fee_amount: '1537500',
       price: '0.0004998',
       txn: fillTxn0,
       status: 'pending',
       created_at: '2018-07-16T08:56:51.414Z',
       transaction_hash:
        '11efdc3b59f748e4d170d3ca13f469cd81e60fee0f95174d69ba242e7e1dfea7' } ],
  makes: [] }

  verifyOrderTransactions(orderWithFills, orderWithFillsParams).then(() => {
    console.log('order verified')
  })

const user = {
  address: '<address>',
  privateKey: '<private key>'
}

if (user.address === '<address>' || user.privateKey === '<private key>') {
  throw new Error('address and privateKey has not been setup in src/user.js')
}

if (user.address.length !== 40) {
  let message = 'user.address seems to be an invalid format, it should be a script hash,'
  message += ' please check the "Address" secion of the docs for more information'
  throw new Error(message)
}

if (user.privateKey.length !== 64) {
  let message = 'user.privateKey seems to be an invalid format, it should not be the WIF,'
  message += ' please see the Neon JS private key documentation for more information'
  throw new Error(message)
}

module.exports = user

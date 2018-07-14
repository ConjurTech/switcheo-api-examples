const user = {
  address: '<address>',
  privateKey: '<private key>'
}

if (user.address === '<address>' || user.privateKey === '<private key>') {
  throw new Error('address and privateKey has not been setup in src/user.js')
}

module.exports = user

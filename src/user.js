// const user = {
//   address: '87cf67daa0c1e9b6caa1443cf5555b09cb3f8e5f',
//   privateKey: 'cd7b887c29a110e0ce53e81d6dd02805fc7b912718ff8b6659d8da42887342bd'
// }

const user = {
  address: 'b9e9b9178d7eeeb612777d5482c39bcaf9d23ee7',
  privateKey: '2eaedf5f1173672b26f3d127453ee3520814d70e3a061d41c8d07bf34b86e4bd'
}

if (user.address === '<address>' || user.privateKey === '<private key>') {
  throw new Error('address and privateKey has not been setup in src/user.js')
}

module.exports = user

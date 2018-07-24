// const config = {
//   API_URL: 'https://test-api.switcheo.network/v2',
//   CONTRACT_HASH: 'a9e54a8059afac9b294bff5e6b56fa8b8ba61a55'
// }
const config = {
  API_URL: 'http://localhost:3000/v2',
  CONTRACT_HASH: 'a9e54a8059afac9b294bff5e6b56fa8b8ba61a55'
}

module.exports = config

if (config.API_URL === '<api url>' || config.CONTRACT_HASH === '<contract hash>') {
  throw new Error('API_URL and CONTRACT_HASH has not been setup in src/config.js')
}

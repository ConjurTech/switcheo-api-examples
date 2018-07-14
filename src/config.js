const config = {
  API_URL: '<api url>',
  CONTRACT_HASH: '<contract hash>'
}

module.exports = config

if (config.API_URL === '<api url>' || config.CONTRACT_HASH === '<contract hash>') {
  throw new Error('API_URL and CONTRACT_HASH has not been setup in src/config.js')
}

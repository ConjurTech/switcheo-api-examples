const stringify = require('json-stable-stringify')
const Neon = require('@cityofzion/neon-js')
const { wallet, tx } = require('@cityofzion/neon-js')
const { mapKeys, snakeCase } = require('lodash')
const { BigNumber } = require('bignumber.js')

const NEO_ASSET_PRECISION = 8

function signMessage(message, privateKey) {
  return wallet.generateSignature(message, privateKey)
}

function encodeMessage(message) {
  const messageHex = Neon.u.str2hexstring(message)
  const messageLengthHex = (messageHex.length / 2).toString(16).padStart(2, '0')
  const encodedMessage = `010001f0${messageLengthHex}${messageHex}0000`
  return encodedMessage
}

function signTransaction(transaction, privateKey) {
  const txnSerialized = tx.serializeTransaction(transaction, false)
  return signMessage(txnSerialized, privateKey)
}

function convertKeysToSnakeCase(obj) {
  return mapKeys(obj, (_, k) => snakeCase(k))
}

function stringifyParams(params) {
  const snakeCaseParams = convertKeysToSnakeCase(params)
  // use stringify from json-stable-stringify to ensure that
  // params are sorted in alphabetical order
  return stringify(snakeCaseParams)
}

function mapPairToUrlParam(key, value) {
  if (Array.isArray(value)) {
    return value.map((v) => `${key}[]=${value}`).join('&')
  }
  return `${key}=${value}`
}

function convertHashToUrlParams(params) {
  const snakeCaseParams = convertKeysToSnakeCase(params)
  return Object.keys(snakeCaseParams).map(key => mapPairToUrlParam(key, snakeCaseParams[key])).join('&')
}

function signParams(params, privateKey) {
  const payload = stringifyParams(params)
  if (payload.length > 252) {
    throw new Error('Cannot sign a message more than 252 characters in length')
  }
  const encodedPayload = encodeMessage(payload)
  return signMessage(encodedPayload, privateKey)
}

function getTimestamp() {
  return new Date().getTime()
}

function toNeoAssetAmount(value) {
  const bigNumber = new BigNumber(value)
  const assetMultiplier = Math.pow(10, NEO_ASSET_PRECISION)
  return bigNumber.times(assetMultiplier).toFixed(0)
}

module.exports = {
  signTransaction,
  signParams,
  stringifyParams,
  convertHashToUrlParams,
  getTimestamp,
  toNeoAssetAmount,
  signMessage,
}

const { getTimestamp, signParams } = require('../../utils')
const { API_URL } = require('../../config')
const api = require('../../api')

function broadcastWithdrawal ({ withdrawal, privateKey }) {
    // const { id, transaction: withdrawalTxn } = withdrawal;
    // console.log(withdrawalTxn)
    const signedParams = {id: withdrawal.id, timestamp: getTimestamp()}
    const signature = signParams(signedParams, privateKey);
    const url = `${API_URL}/withdrawals/${withdrawal.id}/broadcast`
    return api.post(url, {...signedParams, signature })
};

module.exports = { broadcastWithdrawal }
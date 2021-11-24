import web3 from './web3'
const faucetABI = require('./build/ethereum_contracts_Faucet_sol_Faucet.abi')

const faucetContract = new web3.eth.Contract(
    faucetABI,
    "0x4099E633A607F6ED211e2c82565003d6F755e75e"
  )

export default faucetContract
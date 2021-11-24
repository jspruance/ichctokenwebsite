import web3 from './web3'
const compiledFaucet = require('./contracts/Faucet.json')

const faucetContract = new web3.eth.Contract(
    compiledFaucet.abi,
    "0x4099E633A607F6ED211e2c82565003d6F755e75e"
  )

export default faucetContract
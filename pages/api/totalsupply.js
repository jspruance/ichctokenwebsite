import faucetContract from '../../ethereum/faucet'

export default function handler(req, res) {
  try {
    const totalSupply = faucetContract.methods.totalSupply().call()
    res.status(200).json({ totalSupply: totalSupply })
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
}

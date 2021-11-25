import tokenContract from '../../ethereum/token'

export default function handler(req, res) {
  try {
    const totalSupply = tokenContract.methods.totalSupply().call()
    res.status(200).json({ totalSupply: totalSupply })
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
}

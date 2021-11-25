import tokenContract from '../../ethereum/token'

export default function handler(req, res) {
  try {
    const totalSupply = tokenContract.methods.totalSupply().call()
    console.log(`totalSupply :::: ${JSON.stringify(totalSupply)}`)
    res.status(200).json({ totalSupply: JSON.stringify(totalSupply) })
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
}

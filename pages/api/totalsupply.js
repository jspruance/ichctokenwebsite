import tokenContract from '../../ethereum/token'

export default async function handler(req, res) {
  try {
    let totalSupply = await tokenContract.methods.totalSupply().call()
    totalSupply = totalSupply.substring(0, totalSupply.length - 18)
    res.status(200).send(totalSupply)
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
}

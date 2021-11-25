import tokenContract from '../../ethereum/token'

export default async function handler(req, res) {
  try {
    const totalSupply = await tokenContract.methods.totalSupply().call()
    console.log(`totalSupply :::: ${JSON.stringify(totalSupply)}`)
    res.status(200).send(totalSupply)
  } catch(err) {
    res.status(500).json({ error: err.message })
  }
}

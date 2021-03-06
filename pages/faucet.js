import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import web3 from '../ethereum/web3'
import faucetContract from '../ethereum/faucet'
import Link from 'next/link'

export default function Faucet() {
  const [withdrawError, setWithdrawError] = useState('')
  const [withdrawSuccess, setWithdrawSuccess] = useState('')
  // const [recipientAddress, setRecipientAddress] = useState('')

  // const addressUpdateHandler = (event) => {
  //   setRecipientAddress(event.target.value)
  // }

  const getICHCHandler = async() => {
    setWithdrawError('')
    setWithdrawSuccess('')
    let balance
    let resp
    try {
      const accounts = await web3.eth.getAccounts()
      resp = await faucetContract.methods.withdraw().send({
        from: accounts[0],
        gas: 300000,
        gasPrice: null, 
      })
      setWithdrawSuccess('Operation succeeded - enjoy your tokens!')
      balance = await faucetContract.methods.getBalance().call()
    } catch(err) {
      setWithdrawError(err.message)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>I Can Has Cheezburger Token</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css"></link>
        <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2EF9PKF797"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date())

              gtag('config', 'G-2EF9PKF797')
            `,
          }}
        />
      </Head>

      <main>
        <Header minimal={true} />
        <div className="container">
          <h2 className="pink">ICHC Token Faucet</h2>

          <div className="faucet-container">
            
            <div className="address-entry">
              <img src="/faucet_med.png" alt="ICHC Token Faucet" />
              {/* <button 
                className="metamask-btn"
                onClick={() => {console.log('connect...')}}
              ><span>Connect to MetaMask</span>
              </button>
              <div className="or"> - OR - </div>
              <div className="nes-field">
                <label htmlFor="name_field" className="input-label">Enter wallet address:</label>
                <input 
                  type="text" 
                  id="name_field" 
                  className="nes-input faucet-txt-input" 
                  onChange={addressUpdateHandler}
                />
              </div> */}
              
              <button 
                onClick={getICHCHandler} 
                type="button" 
                className="nes-btn is-primary faucet-btn">
                  Get ICHC Tokens
              </button>
              <div className="instructions">
                <Link href="/instructions">
                  <a>step-by-step instructions</a>
                </Link>
              </div>
            </div>
          </div>
          {
            withdrawError && <div className="withdraw-error">{withdrawError}</div>
          }
          {
            withdrawSuccess && <div className="withdraw-success">{withdrawSuccess}</div> 
          } 
          <Menu />
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container h2 {
          font-size: 1em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .container img {
          margin-bottom: 1em;
        }

        .or {
          margin: 1em 0;
        }

        main {
          padding: 0 0;
          margin: 0 0 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .faucet-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 1em 0;
        }

        .address-entry {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          xmargin-left: 2em;
        }

        .input-label {
          font-size: .7em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .faucet-txt-input {
          width: 700px;
          font-size: .9em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .withdraw-error {
          color: red;
          max-width: 900px;
        }

        .withdraw-success {
          color: green;
          max-width: 900px;
        }

        .metamask-btn {
          height: 55px;
          width: 325px;
          margin-bottom: 1em;
          font-weight: bold;
          font-size: .7em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          background: top 2px left 5px no-repeat url("/mm_logo_45.png"), #ffffff;
          cursor: pointer !important;
        }

        .metamask-btn span {
          margin-left: 52px;
        }
        
        .metamask-btn:hover {
          cursor: pointer;
          color: #ffffff;
          background-color: #FF007A;
        }

        .faucet-btn {
          margin-left: 1em;
          margin-top: 2em;
          margin-bottom: 1em;
          font-size: .8em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          color: black;
        }

        .faucet-btn span {
          margin-left: 40px;
        }
        
        .faucet-btn:hover {
          cursor: pointer;
          color: #ffffff;
        }

        .instructions a {
          color: white;
          text-decoration: underline;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 1000px;
          margin-top: 1rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          color: aqua;
          font-family: Times,"Times New Roman", serif;
          cursor: default !important;
        }

        a, button {
          cursor: pointer !important;
        }

        .white {
          color: #FFFFFF;
        }

        .pink {
          color: #FF007A;
        }

        .default-font {
          font-family: Times,"Times New Roman", serif;
        }

        body {
          background: url("/stars_sparkle_bg.gif");
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

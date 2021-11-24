import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import web3 from '../ethereum/web3'
const compiledFaucet = require('../ethereum/contracts/Faucet.json')

export default function Faucet({faucetContract}) {
  const getICHCHandler = async() => {
    console.log('dripping ICHC from faucet')
    console.log(`faucetContract :::: JSON.stringify(faucetContract)`)
    // console.log(`balance ::: ${balance}`)
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
        <Header />
        <div className="container">
          <h2 className="pink">ICHC Token Faucet</h2>
          <img src="/faucet_med.png" alt="ICHC Token Faucet" />
          <div className="faucet-container">
            <div className="nes-field">
              <label htmlFor="name_field" className="input-label">Enter wallet address:</label>
              <input type="text" id="name_field" className="nes-input faucet-txt-input" />
            </div>
            
            <button onClick={getICHCHandler} type="button" className="nes-btn is-primary faucet-btn">Get ICHC Token</button>
          </div>
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
          margin-top: 1em;
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
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 700px;
          margin: 1em 0;
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

        .faucet-btn {
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

        a {
          cursor: default !important;
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

export async function getServerSideProps() {
  const faucetContract = new web3.eth.Contract(
    compiledFaucet.abi,
    "0x4099E633A607F6ED211e2c82565003d6F755e75e"
  )
  return { props: { faucetContract } }
}

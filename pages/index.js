import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I Can Has Cheezburger Token</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/fonts.css"></link>
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
        <div className="grid">
          <img src="/cat_main_150.png" alt="I Can Has Cheezburger?" />
          <div className="ichc-token-info-container">
            <div className="get-ichc-token-container">
              <h2 className="pink">Get I Can Has Cheezburger Token:</h2>
              <div className="get-ichc-buttons">
                <button 
                  className="uniswap-btn"
                  onClick={() => {window.open('https://app.uniswap.org/#/swap?outputCurrency=0xB7813d0F0ff024Feb86F9D3A734d73AF489163A4', '_blank')}}
                >
                  <span>Buy on Uniswap</span>
                </button>
                <Link href="/faucet">
                  <button className="faucet-btn">
                    <span>ICHC Faucet</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="ichc-token-info">
              <ul>
                <li>Capped supply of 100 million tokens</li>
                <li>Block reward of 25 ICHC per transaction per mined block</li>
                <li>Running on the Ethereum blockchain</li>
              </ul>
              <Menu />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 1rem 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

        .ichc-token-info-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 700px;
        }

        .get-ichc-token-container {
          margin-left: 3em;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          font-size: .7em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .get-ichc-token-container h2 {
          font-size: 1.2em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .ichc-token-info ul {
          color: white;
          font-size: .75em;
          line-height: 2.5em;
          margin-top: 5em;
          list-style-type: none;
          text-align: center;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .uniswap-btn {
          height: 55px;
          width: 275px;
          margin-bottom: 1em;
          font-weight: bold;
          font-size: 1.1em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          background: top 0px left 5px no-repeat url("/uniswap-uni-logo-45.png"), #ffffff;
        }

        .uniswap-btn span {
          margin-left: 40px;
        }
        
        .uniswap-btn:hover {
          cursor: pointer;
          color: #ffffff;
          background: top 0px left 5px no-repeat url("/uniswap-uni-logo-45-white.png"), #FF007A;
        }

        .faucet-btn {
          height: 55px;
          width: 275px;
          margin-left: 1.5em;
          margin-bottom: 1em;
          font-weight: bold;
          font-size: 1.1em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          background: top 0px left 5px no-repeat url("/faucet-45.png"), #ffffff;
        }

        .faucet-btn span {
          margin-left: 40px;
        }
        
        .faucet-btn:hover {
          cursor: pointer;
          color: #ffffff;
          background: top 0px left 5px no-repeat url("/faucet-45.png"), #007FFF;
        }

        a {
          color: inherit;
          text-decoration: none;
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

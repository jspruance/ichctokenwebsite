import Head from 'next/head'

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
        <div className="header-container">
          <img src="/coin.gif" width="80px" alt="ICHC Token" />
          <h1 className="title">I Can Has Cheezburger Token</h1>
          <img src="/coin.gif" width="80px" alt="ICHC Token" />
        </div>
        <p className="description">
          A peer-to-peer electronic cash system
        </p>
        <div className="grid">
          <img src="/cat_main_150.png" alt="I Can Has Cheezburger?" />
          <div className="ichc-token-info-container">
            <div className="get-ichc-token-container">
              <h2 className="pink">Get ICHC Token</h2>
              <button 
                className="uniswap-btn"
                onClick={() => {window.open('https://app.uniswap.org/#/swap?outputCurrency=0xB7813d0F0ff024Feb86F9D3A734d73AF489163A4', '_blank')}}
              >
                <span>Buy on Uniswap</span>
              </button>
            </div>
            <div className="ichc-token-info">
              <ul>
                <li>Capped supply of 100 million tokens</li>
                <li>Block reward of 25 ICHC per transaction per mined block</li>
                <li>Built on top of the Ethereum blockchain</li>
                {/* <li>Inspired by the classic internet meme</li> */}
              </ul>
              <div className="etherscan">
                <div className="info-bar">
                  <a href="https://etherscan.io/token/0xB7813d0F0ff024Feb86F9D3A734d73AF489163A4" target="_blank">
                    View on Etherscan
                  </a>&nbsp;|&nbsp;
                  <span className="contact white">
                    contact: <a href="mailto:crypto@ichctoken.org">crypto@ichctoken.org</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2021-2022 I Can Has Cheezburger Token (ICHC Token)</p>
      </footer>

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

        .header-container {
          display: flex;
          flex-direction: row;
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

        .etherscan {
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          font-size: .6em;
        }

        .etherscan a:link {
          text-decoration: underline;
        }

        .etherscan a:hover {
          text-decoration: none;
        }

        .info-bar {
          margin-top: 3em;
        }

        .contact {
          font-size: 1.7em;
          font-family: Times,"Times New Roman", serif;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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

        .title {
          margin: 0 .2em;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          font-size: 1.5rem;
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

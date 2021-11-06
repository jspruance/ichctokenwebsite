import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Faucet() {
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
          <p>faucet</p>
          <Menu />
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

        .faucet-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 700px;
        }

        .faucet-btn {
          height: 55px;
          width: 275px;
          margin-bottom: 1em;
          font-weight: bold;
          font-size: 1.1em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
          background: top 0px left 5px no-repeat url("/uniswap-uni-logo-45.png"), #ffffff;
        }

        .faucet-btn span {
          margin-left: 40px;
        }
        
        .faucet-btn:hover {
          cursor: pointer;
          color: #ffffff;
          background: top 0px left 5px no-repeat url("/uniswap-uni-logo-45-white.png"), #FF007A;
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

import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function About() {
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
          <div className="about-container">
            <div className="about-title-container">
              <h2 className="pink">About ICHC Token</h2>
            </div>
            <div className="about-token-info">
              <p>I Can Has Cheezburger Token (ICHC) is a cryptocurrency released on October 29th, 2021 in Palo Alto, California. It is based on the classic intrnet meme which was widely circulated in 2007. The photo of 'Happy Cat' is said to have originated from a Russian cat food ad from the 1990s.</p>
              <p>ICHC implements the ERC-20 token standard and runs on the Ethereum blockchain. It has a limited, capped supply of 100 million tokens and pays a block reward of 25 ICHC per ICHC transaction in the mined Ethereum block.</p>
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

        .about-container {
          display: flex;
          padding-left: 35px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 700px;
        }

        .about-token-info p {
          font-size: 1.2em;
          line-height: 1.5em;
        }

        .about-title-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          font-size: .7em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .about-title-container h2 {
          font-size: 1.2em;
          font-family: "press_start_2pregular", Times,"Times New Roman", serif;
        }

        .info-bar {
          margin-top: 3em;
        }

        .contact {
          font-size: 1.7em;
          font-family: Times,"Times New Roman", serif;
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

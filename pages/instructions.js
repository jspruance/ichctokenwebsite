import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Instructions() {
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
          <h2 className="pink">ICHC Token Faucet - instructions</h2>

          <div className="faucet-instructions">
              <ol>
                  <li>Install MetaMask if you do not already have it installed and create a new wallet: <Link href="https://metamask.io/download.html"><a target="_blank">Install MetaMask</a></Link></li>
                  <li>When visiting the faucet page you should be automatically prompted to connect to your MetaMask wallet. <br />If not, refresh the page after installing MetaMask.</li>
                  <li>Click on the 'Get ICHC Tokens' button.</li>
                  <li>You will be prompted to accept the transaction, including any Ethereum gas fees.</li>
                  <li>Once accepted, your new ICHC tokens will be transferred to your MetaMask wallet.</li>
                  <li>There is a time limit before which you can request new tokens - this is typically 3 days.</li>
              </ol>
             
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
          margin-bottom: 1em;
        }

        .faucet-instructions {
          margin: 2em 0 0 0;
          color: white;
          font-size: 1.1em;
        }

        .faucet-instructions ol {
          line-height: 1.7;
        }

        .faucet-instructions a {
          color: aqua;
          text-decoration: underline;
        }

        .faucet-instructions a:hover {
            text-decoration: none;
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

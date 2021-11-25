import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <>
      <div className="menu">
        <div className="info-bar">
          <Link href="/">
            Home
          </Link>&nbsp;|&nbsp;
          <Link href="/faucet">
            Faucet
          </Link>&nbsp;|&nbsp;
          <Link href="https://etherscan.io/token/0xB7813d0F0ff024Feb86F9D3A734d73AF489163A4">
            View on Etherscan
          </Link>&nbsp;|&nbsp;
          <Link href="/about">
            About
          </Link>&nbsp;|&nbsp;
          <span className="contact white">
            <Link href="mailto:crypto@ichctoken.org">crypto@ichctoken.org</Link>
          </span>
        </div>
      </div>
    <style jsx>{`
    .menu {
      color: aqua;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "press_start_2pregular", Times,"Times New Roman", serif;
      font-size: .6em;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .menu a:link {
      text-decoration: underline;
    }

    .menu a:hover {
      text-decoration: none;
    }

    .info-bar {
      margin-top: 3em;
    }

    .contact {
      font-size: 1.7em;
      font-family: Times,"Times New Roman", serif;
    }

    .white {
      color: #FFFFFF;
    }
    `}</style>
    
    </>
  )
}
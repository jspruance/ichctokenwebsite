import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <>
      <div className="menu">
        <div className="info-bar">
          <Link href="/" className="menu-link" >
            Home
          </Link>&nbsp;|&nbsp;
          <Link href="/faucet" className="menu-link" >
            Faucet
          </Link>&nbsp;|&nbsp;
          <Link href="https://etherscan.io/token/0xB7813d0F0ff024Feb86F9D3A734d73AF489163A4" className="menu-link" >
            View on Etherscan
          </Link>&nbsp;|&nbsp;
          <Link href="/about" className="menu-link" >
            About
          </Link>&nbsp;|&nbsp;
          <span className="contact white">
            <Link href="mailto:crypto@ichctoken.org" className="menu-link" >crypto@ichctoken.org</Link>
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

    .menu-link, a  {
      color: inherit;
      text-decoration: none;
    }

    .menu a:link, .menu .menu-link:link, {
      text-decoration: underline;
    }

    .menu a:hover, .menu .menu-link:hover {
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
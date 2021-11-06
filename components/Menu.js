import React from 'react'

export default () => {
  return (
    <>
      <div className="menu">
        <div className="info-bar">
          <a href="/" target="_blank">
            Home
          </a>&nbsp;|&nbsp;
          <a href="/faucet" target="_blank">
            Faucet
          </a>&nbsp;|&nbsp;
          <a href="https://etherscan.io/token/0xB7813d0F0ff024Feb86F9D3A734d73AF489163A4" target="_blank">
            View on Etherscan
          </a>&nbsp;|&nbsp;
          <a href="/about" target="_blank">
            About
          </a>&nbsp;|&nbsp;
          <span className="contact white">
            <a href="mailto:crypto@ichctoken.org">crypto@ichctoken.org</a>
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
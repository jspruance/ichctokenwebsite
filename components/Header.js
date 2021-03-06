import React from 'react'
import Link from 'next/link'

export default props => {
  return (
    <>
      <Link href="/">
        <div className="header-container">
          <img src="/coin.gif" width="80px" alt="ICHC Token" />
          <h1 className="title">I Can Has Cheezburger Token</h1>
          <img src="/coin.gif" width="80px" alt="ICHC Token" />
        </div>
      </Link>
      {
        !props.minimal && <p className="description">
          A peer-to-peer electronic cash system
        </p>
      }
    <style jsx>{`
    .header-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
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
    `}</style>
    </>
  )
}
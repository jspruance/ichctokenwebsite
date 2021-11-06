import React from 'react'

export default () => {
  return (
    <>
      <footer>
        <p>&copy; 2021-2022 I Can Has Cheezburger Token (ICHC Token)</p>
      </footer>
    <style jsx>{`
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
    `}</style>
    </>
  )
}
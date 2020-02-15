import React from 'react'
import Header from '../Header/Header'

const RootLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default RootLayout

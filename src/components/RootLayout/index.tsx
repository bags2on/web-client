import React from 'react'
import Header from '../Header'

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout: React.FC<IRootLayout> = ({ children }) => {
  return (
    <>
      <Header
        onCartOpen={() => {
          console.log(1)
        }}
        onDrawerOpen={() => {
          console.log(2)
        }}
      />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout

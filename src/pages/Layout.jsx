import React from 'react'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function Layout({ children }) {
  return(
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}
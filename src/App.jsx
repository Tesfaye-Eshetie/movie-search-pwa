import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Routers from './routers.jsx'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routers/>
      </Layout>
    </BrowserRouter>
  )
}

export default App

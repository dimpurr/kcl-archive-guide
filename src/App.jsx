import { useState } from 'react'
import Content from './comp/content'
import Footer from './comp/footer'
// import Head from './comp/head'
import Side from './comp/side'
import Translate from './comp/translate'
import Vis from './comp/vis'
import './App.css'
import Header from './comp/header'
import GlobalFooter from './comp/globalfooter'

function App() {

  return (
    <div>
    <Header />
    <div className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="flex">
            <div className="w-96 flex-shrink-0 mr-10">
              <Side />
            </div>
            <div className="flex-1">
              <Content />
              <Footer />
            </div>
          </div>
        <div className="mt-4 w-full">
          <br />
          <hr />
          <br />
            <Translate />
          </div>
        </div>
      </div>
      <GlobalFooter />
    </div>
  )
}

export default App
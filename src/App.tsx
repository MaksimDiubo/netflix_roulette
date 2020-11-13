import React from 'react'
import { Header, Main, Footer } from './Containers'
import { ErrorBoundary } from './Components'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default App

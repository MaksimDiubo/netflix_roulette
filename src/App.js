import React, { createElement } from 'react'
import './App.css'
import {
  ViaComponent,
  ViaFunctionalComponent,
  ViaPureComponent,
} from './components'

function App() {
  const header = createElement('h1', null, 'Hello, World!')

  return (
    <div className="App">
      {header}
      <ViaComponent />
      <ViaPureComponent />
      <ViaFunctionalComponent />
    </div>
  )
}

export default App

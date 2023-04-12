import React from 'react'
import { StoreContext } from 'storeon/react'
import store from '@store'
import './App.css'

import {
  Login
} from '@pages'

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Login />
      </div>
    </StoreContext.Provider>
  )
}

export default App

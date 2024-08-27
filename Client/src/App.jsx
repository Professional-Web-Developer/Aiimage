import React from 'react'
import ImageGenerator from './Components/ImageGenerator.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ImageGenerator/>}></Route>

      </Routes>      
      </BrowserRouter>
    </div>
  )
}

export default App
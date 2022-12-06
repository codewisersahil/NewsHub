import React from 'react'
import HomePage from './Container/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Catagory from './Container/Catagory'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    {/* <HomePage/> */}

    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/cat' element={<Catagory/>} />

    </Routes>
    </BrowserRouter>
    



    </>
  )
}

export default App
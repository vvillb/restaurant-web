import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Products from '../pages/Products'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        < Route path='/products' element={<Products/>}/>
        < Route path='/contact' element={<Contact/>}/>

    </Routes>
  )
}

export default AppRouter
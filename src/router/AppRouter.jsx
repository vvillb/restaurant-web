import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Cajas from '../pages/Cajas'
import Tartas from '../pages/Tartas'
import Pedidos from '../pages/Pedidos'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        < Route path='/products' element={<Products/>}/>
        < Route path='/contact' element={<Contact/>}/>
        < Route path='/cajas' element={<Cajas/>}/>
        < Route path='/tartas' element={<Tartas/>}/>
        <Route path='/pedidos' element={<Pedidos/>}/>


    </Routes>
  )
}

export default AppRouter

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Cajas from '../pages/Cajas'
import Tartas from '../pages/Tartas'
import Pedidos from '../pages/Pedidos'
import Alfajores from '../pages/productos/Alfajores'
import Brownie from '../pages/productos/Brownie'
import CinammonRolls from '../pages/productos/CinammonRolls'
import Cookies from '../pages/productos/Cookies'
import SuperCookies from '../pages/productos/SuperCookies'
import Granola from '../pages/productos/Granola'
import Surtidos from '../pages/productos/Surtidos'

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
        <Route path='/cajas/alfajores' element={<Alfajores/>} />
        <Route path='/cajas/brownie' element={<Brownie/>} />
        <Route path='/cajas/cinammonrolls' element={<CinammonRolls/>} />
        <Route path='/cajas/cookies' element={<Cookies/>} />
        <Route path='/cajas/supercookies' element={<SuperCookies/>} />
        <Route path='/cajas/granola' element={<Granola/>} />
        <Route path='/cajas/surtido' element={<Surtidos/>} />





    </Routes>
  )
}

export default AppRouter

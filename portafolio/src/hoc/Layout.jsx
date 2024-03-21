import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='bg-white min-w-sm min-h-md'>
        
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout
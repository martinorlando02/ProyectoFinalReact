import React from 'react'
import Shop from './Shop'
import { Link } from "react-router-dom";
import MenuMarcas from './MenuMarcas';



const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold text-[#4B0082]'>StyleStride</h1>
        <div className='flex items-center text-[#4B0082] '>
                    <Link className="Link block p-4" to="/">
                    Inicio
                    </Link>
                    <MenuMarcas className="Link block p-4"/>
                    <Link className="Link block p-4" to="/SobreNosotros" >
                    Nosotros
                    </Link>
                    <Link className="Link block p-4" to="/contacto" >
                    Contacto
                    </Link>
                    <Link className='Link p-4' to="/shop" >
                    <Shop />
                    </Link>
        </div>
    </div>
  )
}

export default Navbar
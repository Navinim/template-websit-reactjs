import React, { useState } from 'react'
import { CloseOutlined, MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleNav = () => {
    setOpenNav(!openNav)
  }
  
  return (
    <>
      <div className="flex justify-between items-center h-24  max-w-[1240px]  mx-auto text-white px-4">
        <Link to="/">
          <h1 className="w-full text-3xl font-bold uppercase">
            brand
          </h1>
        </Link>
        <ul className="hidden md:flex  uppercase cursor-pointer">
          <Link to="/"><li className='p-4'>Home</li></Link>
          <Link to="/about"><li className='p-4'>About</li></Link>
          <Link to="/product"><li className='p-4'>Product</li></Link>
          <Link to="/service"><li className='p-4'>Services</li></Link>
          <AnchorLink href='#contact'><li className='p-4'>Contact</li></AnchorLink>         
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          
          {!openNav ? <MenuOutlined  size={20} className="h-6 w-6" /> : <CloseOutlined size={20} className="h-6 w-6" />}
         
        </div>
        <div className={openNav ? 'fixed left-0 top-6 text-black w-[60%] border-r border-r-gray-900 bg-green-300 opacity-90 ease-in-out' : 'fixed left-[-100%]'}>
          <Link to="/">
            <h1 className="w-full text-3xl font-bold uppercase m-4">
              brand
            </h1>
          </Link>
          <ul className='p-4 uppercase'>
            <Link to="/"><li className='p-4 border-b border-gray-500'>Home</li></Link>
            <Link><li className='p-4 border-b border-gray-500'>About</li></Link>
            <Link to="/product"><li className='p-4 border-b border-gray-500'>Product</li></Link>
            <Link><li className='p-4 border-b border-gray-500'>Services</li></Link>
            <AnchorLink href='#contact'><li className='p-4'>Contact</li></AnchorLink>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar
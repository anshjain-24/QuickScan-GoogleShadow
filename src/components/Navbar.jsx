import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-600 border-gray-900 w-screen'>
        
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to="/">
            <p className='text-2xl bg-blue-500 font-bold text-white py-2 px-3 rounded-full dark:bg-gray-500 dark:text-gray-900'> 
                  Google 🔎
            </p>
            </Link>
            <button type='button' onClick={()=> setDarkTheme(!darkTheme)} className='text-xl bg-gray-700 dark:bg-gray-300 border rounded-full px-3 py-2 hover:shadow-lg'>
                  {darkTheme ? "💡" : "🌙"}
            </button>
        </div>

        <Search />

    </div> 
  )
}

export default Navbar
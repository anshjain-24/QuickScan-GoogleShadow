import React,{useEffect, useState} from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './components/AppRoutes.jsx'

const App = () => {
  
  const [darkTheme, setDarkTheme] = useState(false)
  console.log("dark : ",darkTheme);
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div  className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
             <Navbar darkTheme = {darkTheme} setDarkTheme = {setDarkTheme}/>
             <AppRoutes />
             <Footer />
        </div>
    </div>
  )
}

export default App
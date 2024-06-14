import React,{useEffect, useState} from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Routes from './components/Routes.jsx'

const App = () => {
  
  const [dark, setDark] = useState(false)
  console.log("dark : ",dark);
  return (
    <div className={dark ? 'dark' : ''}>
        <h1  className="text-4xl p-10 font-bold underline text-gray-100 bg-gray-200 dark:bg-gray-800 dark:text-gray-500 min-h-screen">
             <Navbar />
             <Routes />
             <Footer />
        </h1>
    </div>
  )
}

export default App
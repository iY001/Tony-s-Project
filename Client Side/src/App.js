import React, { useEffect } from 'react'
import MasterRoutes from './Routes/MasterRoutes'

function App() {
  useEffect(() => {
    const isDark = localStorage.getItem("dark")
    isDark == "true" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
  },[])
  return (
    <>
      {/* Routes */}
      <MasterRoutes />   
    </>
  )
}

export default App
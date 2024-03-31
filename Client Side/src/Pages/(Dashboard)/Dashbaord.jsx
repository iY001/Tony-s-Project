import React, { useEffect } from 'react'
import CheckAdmin from './functions/CheckAdmin'
import {  useNavigate } from 'react-router-dom';

function Dashbaord() {
  const user = JSON.parse(localStorage.getItem('user'))
  const Navigate = useNavigate()

  useEffect(() => {
    function Check() {
      const isAdmin = CheckAdmin()
      if (!isAdmin) {
        return Navigate('/401')
      }else{
        return Navigate('/dashboard')
      }
    }
    Check()
  }, [])
  return (
    <>
      <h1>Hello {user?.name}</h1>
    </>
  )
}

export default Dashbaord
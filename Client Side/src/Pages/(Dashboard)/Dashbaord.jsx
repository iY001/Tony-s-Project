import React from 'react'

function Dashbaord() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <h1>Hello {user?.name}</h1>    
    </>
  )
}

export default Dashbaord
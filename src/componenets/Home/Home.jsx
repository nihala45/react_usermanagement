import React from 'react'
import { logout } from '../../firebase' 
const Home = () => {
  return (
    <div>
      <p onClick={()=>{logout()}}>Logout</p>
      <h1>Welcome to user</h1>
    </div>
  )
}

export default Home

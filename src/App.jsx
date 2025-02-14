import React from 'react'
import Login from './componenets/Login/Login'
import Signup from './componenets/Signup/Signup'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<div><Login/></div>}/>
          <Route path='/signup' element={<div><Signup/></div>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

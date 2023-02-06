import React from 'react'
 import InterFace from './InterFace'
 import LogIn from './LogIn'
 import HomePage from './HomePage'
import { Routes as Routess, Route } from 'react-router-dom'

function Routes() {



  return (
    <div>
<Routess>
<Route path="/" element={<InterFace/>}></Route>
<Route path="/logIn" element={<LogIn/>}></Route>
<Route path="/saudiday" element={<HomePage/>}></Route>

</Routess>
    </div>
  )
}

export default Routes
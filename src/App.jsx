import  {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";

import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
       <div className="container">
        <Outlet/>
       </div>
    </div>
  )
}

export default App

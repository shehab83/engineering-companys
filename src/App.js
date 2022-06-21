import React from 'react'
import Home from './Home'
import Notfound from './Notfound'
import { BrowserRouter, Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import About from './About '
import CONTACT from './CONTACT'
import './App.css'
function App() {
  function wakkka(e) {
    e.preventDefault();
    console.log('shehabsjjj')
  }
  return (
    <BrowserRouter >
      <div >
        <div className='div2'>
          <nav className='navbar navbar-expand-lg navbar-light '>
            <form className='form-inline my-2 my-lg-0'>
              <input className='form-control mr-sm-2' type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div  >
              <Link to='/' className='link1'>Home</Link>
              <Link to='/About' className='link1'>About</Link>
              <Link to='/CONTACT' className='link1'>CONTACT</Link>
            </div>

          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/CONTACT' element={<CONTACT />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
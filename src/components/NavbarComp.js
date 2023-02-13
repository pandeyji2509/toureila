import React, { Component, useState } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import  Buses from './Buses';
import Hotels from './Hotels';
import Home from './Home';
import Flights from './Flights';
import './navbar.css';
import Detail from './Detail';
import {RxHamburgerMenu} from 'react-icons/rx';
import data from '../Assets/data.json';
import { GrUserWorker } from 'react-icons/gr';
import {AiOutlineClose} from 'react-icons/ai';
function NavbarComp() {
  const[show,setShow]=useState(false);
  const ShowName=()=>{
    if(show===true){
        setShow(false);
    }
    else{
        setShow(true);
    }
} 
  return (
    <Router>
      <header>
        <a href='' className='logo'>Toureila</a>
        <input type="checkbox" id="menu-bar"/>
        <label for="menu-bar" onClick={ShowName}><RxHamburgerMenu/></label>
        <nav className='navbar'>
          <ul>
            <li><Link as={Link} to={"/"}>Home</Link></li>
            <li><Link as={Link} to={"/Buses"}>Buses</Link></li>
            <li><Link as={Link} to={"/Hotels"}>Hotels</Link></li>
            <li><Link as={Link} to={"/Flights"}>Flights</Link></li>
          </ul>
        </nav>
      </header>
      <div className=''>
        <Routes>
          <Route path="/Buses"
            exact element={<Buses />}>
          </Route>
          <Route path="/Hotels"
            exact element={<Hotels/>}>
          </Route>
          <Route path="/"
            exact element={<Home/>}>
          </Route>
          <Route className="" path="/Flights"
            exact element={<Flights />}>
          </Route>
          <Route className="" path="/Detail/:id"
            exact element={<Detail />}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default NavbarComp;
import './header.css';
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import { MdTrain } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai"
import { GiMoneyStack } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import video from '../Assets/video1.mp4';
import Login from './Login';
import Testimonial from "./testimonials/Testimonial";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {HiOutlineUserCircle} from 'react-icons/hi'
import { border } from '@mui/system';
import Logo from './img/toureila.png';
import GoogleMapReact from 'google-map-react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';
import useElementOnScreen from './useElementOnScreen';


function Header() {
    const targetRef = useRef(null);
    useEffect(()=>{
        const header = document.querySelector(".categories");
        const sectionOne = document.querySelector(".tickets");
        
        const sectionOneOptions = {
          rootMargin: "0px 0px 0px 0px",
          threshold:0.7
        };
        
        const sectionOneObserver = new IntersectionObserver(function(
          entries,
          sectionOneObserver
        ) {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              header.classList.add("sticky");
              sectionOne.classList.add("ml");
            } else {
              header.classList.remove("sticky");
              sectionOne.classList.remove("ml");
            }
          });
        },
        sectionOneOptions);
        
        sectionOneObserver.observe(sectionOne);
    },[])

    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/Login" exact element={<Login />}>
                    </Route>
                </Routes>
                <div className='home'>
                    <div className='overlay'></div>
                    <video src={video} muted autoPlay loop type='video1/mp4'></video> 
                    <div className='gap'></div>
                    <div className="data">
                        <img
                            className="logo"
                            src={Logo} alt="logo" />             
                        <div className= "categories" ref={targetRef}>
                        <span><RiFlightTakeoffFill className='fas' />Flights</span>
                            <span><FaHotel className='fas' />Hotels</span>
                            <span><MdTrain className='fas' />Trains</span>
                            <span><FaBus className='fas' />Buses</span>
                            <span><AiFillCar className='fas' />Cabs</span>
                            <Link className="login" as={Link} to={"/Login"} ><HiOutlineUserCircle size={40}/></Link>
                        </div>
                        <div className="tickets" >
                            <div className='ticket-type' >
                                <span className='selected-ticket-type'><BiCheckCircle />ONEWAY</span>
                                <span><input type="radio" /> TRIP</span>
                                <span><input type="radio" /> MULTI CITY</span>
                            </div>
                            <div className='flight-search'>
                                <div className='flight'>
                                    <span className='head'>FROM</span>
                                    {/* <Autocomplete
                                        onPlaceChanged={(place) => onPlaceChanged(place)}
                                        onLoad={onLoad}> */}
                                        <input
                                            type="text"
                                            placeholder="Delhi"
                                            style={{
                                                width: `240px`,
                                                height: `32px`,
                                                padding: `0 12px`,
                                                font: `14px`,
                                                outline: `none`,
                                                textOverflow: `ellipses`,
                                                border: `none`,
                                                fontweight: `800`,
                                            }}
                                        />
                                    {/* </Autocomplete> */}
                                    <input placeholder='DEL,Indra Gandhi Airport' />
                                </div>
                                <div className='flight'>
                                    <span className='head'>TO</span>
                                    <input placeholder='Bengaluru' />
                                    <input placeholder='BRL,Kempegowda International Airpot' />
                                </div>
                                <div className='ticket-left'>
                                    <span className='head'>DEPARTURE</span>
                                    <input type="date" min="2022/12/02" value="2018-07-22" />
                                </div>
                                <div className='ticket-left'>
                                    <span className='head'>RETURN</span>
                                    <div className='tap'>
                                        Tap to add a return date for a bigger discount
                                    </div>
                                </div>
                                <div className='ticket-left'>
                                    <span className='head'>TRAVELLERS AND CLASS</span>
                                    <span className='cla'>
                                        <input type="number" className='trav' placeholder='1' min={1} />
                                        <span className='passenger'>Traveller</span>
                                    </span>
                                    <span>Economy/Premium</span>
                                </div>
                            </div>
                            <div className='fare-search'>
                                <span className='fare-select'>Select A fare Type:</span>
                                <div className='fare-type'>
                                    <span className='selected-fare-type'><BiCheckCircle />Regular Fares</span>
                                    <span><input type="radio" /> Armed Forces Fares</span>
                                    <span><input type="radio" /> Student Fares</span>
                                    <span><input type="radio" /> Senior citizen Fares</span>
                                    <span><input type="radio" /> Double Seat Fares</span>
                                </div>
                                <div className='search-button'>SEARCH</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>    
        </div>
    )
}
export default Header;
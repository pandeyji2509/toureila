import React from 'react'
import './Home.css';
import video from '../Assets/video1.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
const Home = () => {
    return (
        <section className='home'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop type='video1/mp4'></video>
        <div className='homeContent container'>
    <div className='textDiv'>
        <span className='smallText'>our Packages</span>
        <h1 className='homeTitle'>Search your Holiday</h1>
    </div>
    <div className='cardDiv grid'>
        <div className='destinationInput'>
        <label htmlFor="city">Search your destination:</label>
        <div className='input flex'>
            <input type='text' placeholder='Enter your name here.'/>
            <GrLocation className='icon'/>
        </div>
        </div>
    
        <div className='dateInput'>
        <label htmlFor="date">Select our Date:</label>
        <div className='input flex'>
            <input type='date' />
        </div>
        </div>
    
        <div className='priceInput'>
        <div className='label_total flex'>
            <label htmlFor="price">Max Price:</label>
            <h3 className='total'>₹5000</h3>
        </div>
        <div className='imput flex'>
            <input type="range" max='5000' min="1000"/>
        </div>
        </div>
        <div className='searchOptions flex'>
            <HiFilter className=''/>
        </div>
    </div>
        </div>
        </section>
      )
    }
    
    export default Home;
    

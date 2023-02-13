import React, { useState, useEffect } from 'react';
import Home from './Home';
import JobBoardComponent from './JobBoardComponent';
import { useParams } from 'react-router';
import data from '../Assets/data.json';
import './detail.css';
function Detail() {
    let {id}=useParams();
    const key={id};

    const info=(data[(key.id)-1]);
    console.log(info);

    
    return( 
        <div className='head'> 
            <h1 className='header'>{info.company}</h1>
            <img src={info.logo} alt="col"/>
            <p>{info.position}</p>
            <p>Langauges: {info.languages.map((lang)=><p>{lang}</p>)}</p>
        </div>
    );
};
export default Detail;
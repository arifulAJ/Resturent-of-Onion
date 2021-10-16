import React, { useEffect, useState } from 'react';
import { Navbar, Row } from 'react-bootstrap';
import GetLunch from './GetLunch/GetLunch';
import './Lunch.css'

const Lunch = () => {
    const [lunch,setLunch]=useState([])
    useEffect(()=>{
        fetch('./Lunch.json')
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[])
    return (
       
        <div className=" row row-cols-1 row-cols-md-3 row-cols-lg-4 container text-center mx-auto">
         
            {
                lunch.map(lun=><GetLunch key={lun.id} lun={lun}></GetLunch>)
            }
 
  </div>
    );
};

export default Lunch;
import React, { useEffect, useState } from 'react';
import GetDinner from './GetDinner';
import './GetDinner.css'

const Dinner = () => {
    const [dinner,setDinner]=useState([])
    useEffect(()=>{
        fetch('./Dinner.json')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return (
        <div className=" row row-cols-1 row-cols-md-3 row-cols-lg-4 container text-center mx-auto">
          {
              dinner.map(din=><GetDinner key={din.id} din={din}></GetDinner>)
          }  
        </div>
    );
};

export default Dinner;
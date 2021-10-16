import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Food from './Food/Food';
import './GetFood.css'

const GetFood = () => {
    const [foods,setFoods]=useState([]);

    useEffect(()=>{
        fetch('./Breackfast.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <div className=" container  row row-cols-1 row-cols-md-3 row-cols-lg-4 container text-center mx-auto">
             
            {
                foods.map(food=><Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default GetFood;
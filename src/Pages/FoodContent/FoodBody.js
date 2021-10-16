import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './foodContent.css'
import GetFood from './FoodGet/GetFood';

const FoodBody = () => {
    return (
       <Navbar expand="lg" >
            <div className="container pt-5 mx-auto w-50 text-center ">
           <Link className="food" to='/breakfast'> Breakfast </Link>
           <Link className="food" to='/lunch'>Lunch</Link>
           <Link className="food" to='/dinner'>Dinner</Link>

        </div>
        
       </Navbar>
    );
};

export default FoodBody;
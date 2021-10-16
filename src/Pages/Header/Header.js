import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

import './header.css'

const Header = () => {
    return (
        <div className="header">
          
            <h1 className=" w-50 mx-auto pt-5">Best food waiting for your bally</h1>
            <InputGroup className="mb-3 w-50 mx-auto pt-5">
    <FormControl
      placeholder="Search food items"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">search</InputGroup.Text>
  </InputGroup>
        </div>
    );
};

export default Header;
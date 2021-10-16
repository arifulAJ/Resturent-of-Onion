import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const {title,img,made}=props.food
    return (
        <div className="food">
           
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
    {made}
    </Card.Text>
    <Link to="/order"> <Button  variant="primary">Order now</Button></Link>
  </Card.Body>
</Card>

        </div>
    );
};

export default Food;
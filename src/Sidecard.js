import React from "react";

import "./App.css";
import imgCard1 from "./img/p1.svg";
import imgCard2 from "./img/p3.png";
import imgCard3 from "./img/p2.png";
import imgCard4 from "./img/p4.png";

import { Card, Button, CardTitle, CardText,CardImg, Row, Col } from 'reactstrap';

const SideCard = () => (
    
    <Row> 
    <Col sm="3">
    <Card body>
    <CardImg top width="100%" src={imgCard1} alt="Card image cap" />
  
        <CardTitle>Rs. 1222</CardTitle>
        <CardText>Set of 5 enchanting roses</CardText>
        <Button>Add to Cart</Button>
      </Card>
    </Col>
    <Col sm="3">
      <Card body>
      <CardImg top width="100%" src={imgCard2} alt="Card image cap" />
        <CardTitle>Rs. 699</CardTitle>
        <CardText>Top 5 Succelents</CardText>
        <Button>Add to Cart</Button>
      </Card>
    </Col>
    <Col sm="3">
    
      <Card body>
      <CardImg top width="100%" src={imgCard3} alt="Card image cap" />
        <CardTitle>Rs.999</CardTitle>
        <CardText>Happy Holi Colorful Plant Pack</CardText>
        <Button>Add to Cart</Button>
      </Card>
    </Col>
    <Col sm="3">
      <Card body>
      <CardImg top width="100%" src={imgCard4} alt="Card image cap" />
        <CardTitle>Rs. 649</CardTitle>
        <CardText> Air Purifier For green wall</CardText>
        <Button>Add to Cart</Button>
      </Card>
    </Col>
  </Row>
 
);

export default SideCard;


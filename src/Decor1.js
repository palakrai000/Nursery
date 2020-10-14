import React from 'react'; 
import "./App.css";

import imgCard1 from "./img/g1.png";

import imgCard2 from "./img/g2.png";
import imgCard3 from "./img/g3.png";
import imgCard4 from "./img/g4.png";

import { Card, Button, CardTitle, CardText,CardImg, Row, Col } from 'reactstrap';


const Decor1 = (props) => {
return(
    <Row> 
    <Col sm="3">
    <Card body>
    <CardImg top width="100%" src={imgCard1} alt="Card image cap" />
  
<CardTitle>{props.title1}</CardTitle>
<CardText>{props.text1}</CardText>
<Button>{props.button1}</Button>
      </Card>
    </Col>
   
    <Col sm="3">
      <Card body>
      <CardImg top width="100%" src={imgCard2} alt="Card image cap" />
      <CardTitle>{props.title2}</CardTitle>
<CardText>{props.text2}</CardText>
<Button>{props.button2}</Button>
      </Card>
    </Col>
    <Col sm="3">
    
      <Card body>
      <CardImg top width="100%" src={imgCard3} alt="Card image cap" />
      <CardTitle>{props.title3}</CardTitle>
<CardText>{props.text3}</CardText>
<Button>{props.button3}</Button>
      </Card>
    </Col>
    <Col sm="3">
      <Card body>
      <CardImg top width="100%" src={imgCard4} alt="Card image cap" />
      <CardTitle>{props.title4}</CardTitle>
      <CardText>{props.text4}</CardText>
      <Button>{props.button4}</Button>
      </Card>
    </Col>
  </Row>
);

}
    
  
   

export default Decor1;
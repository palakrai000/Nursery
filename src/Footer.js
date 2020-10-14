import React, { Component } from 'react';
import './App.css';
import { ReactComponent as Phone } from "./img/phone.svg";
import { ReactComponent as MapPin } from "./img/map-pin.svg";
import { ReactComponent as Mail } from "./img/mail.svg";
import {  faTwitterSquare, faFacebook, faPinterest, faInstagram} from "@fortawesome/free-brands-svg-icons";


import { Container,Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return(

   <div className="col-lg-12">
    
        


        <div  className="bg-dark " class="bg">
    <Container className="py-3">
    <div className="d-flex justify-content-center flex-column flex-md-row flex-wrap ">
     
        
   
        
     
       <Row> 
        <Col className="list-inline-item"> 
             <FontAwesomeIcon icon={faTwitterSquare} size="2x" color= "White"  />
             </Col>
      
          <Col className="list-inline-item">  
             <FontAwesomeIcon  icon={faFacebook} size="2x" color="White" />
          </Col>

          <Col className="list-inline-item">
             <FontAwesomeIcon icon={faInstagram} size="2x" color="White" />   
          </Col>

          <Col className="list-inline-item">
            <FontAwesomeIcon icon={faPinterest} size="2x" color="White"  />
          </Col>
          </Row>   
      </div>
 
  </Container>
 </div>

 <div className="bg-dark text-light" class="bg">
  <Container className="py-4">
  
        
          <Row>
              <Col lg="4" md="4">
                <div className="card-3">
                  <Phone width="50" height="55" strokeWidth="1" />
                  <p>+91-8882637900</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="card-3">
                  <MapPin width="55" height="55" strokeWidth="1" />
                  <p>New delhi, India</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="card-3">
                  <Mail width="55" height="55" strokeWidth="1" />
                  <p>nurturelive@yahoo.in</p>
                </div>
              </Col>
            </Row>
      
  <h4 align="center">
        
        &copy; 2019 by eCommerce. All rights reserved.    </h4>
    
  </Container>
 </div>
</div>
   
    
    ) 
    
  }
}
export default Footer;


















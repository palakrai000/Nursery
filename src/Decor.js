import React, { Component } from "react";
import Decor1 from './Decor1';
//Use of props




class Decor extends Component{
  render(){
    return(
      <div>
      <Decor1 title1="Rs.1222"  text1="Planters" button1="Add to Cart"
      title2="Rs.699" text2="Pebbles" button2="Add to Cart"
       title3="Rs.999" text3="Soils and Fertilizers" button3="Add to Cart"
       title4="Rs.649" text4="Gardening tools" button4="Add to Cart"/> 
      </div>
    );  
    
  }
}

export default Decor;
import React from 'react';
import Home from './Home';
import Side from './Sidecard';
import Decor  from './Decor';
import Space from './Body';
import NavBar from './Navbar';
import Footer from './Footer';


const App = () => (
 
<div >
            <NavBar/>
            <Home/>
            <Space/>
            <Side/>  
            &nbsp;
            <h5>Garden Decor and Care</h5> 
            &nbsp;
            <Decor/> 
            &nbsp;  

            <Footer/>
       
</div>
);
export default App;


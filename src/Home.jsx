import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Header from './Navbar';
import LoginComponent from './LoginComponent';

const Home = () => {
      const [showLogin,setShowlogin]=useState(false);
    
  return (
    <div>
        Home page
        <Header />
            
           {setShowlogin?<LoginComponent setShowlogin={setShowlogin}/>:<></>} 
        
           {/* <Signup/> */}
        
    
    </div>
  )
}

export default Home

import React, { useEffect, useRef } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
import { 
 faGithub, 
 faLinkedin, 
 faMedium, 
 faStackOverflow, 
} from "@fortawesome/free-brands-svg-icons"; 
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg" 

const Header = () => { 
 
 return ( 
   <Box> 
     <Box color="white" maxWidth="1280px" margin="0 auto"> 
       <HStack 
         px={16} 
         py={4} 
         justifyContent="space-between" 
         alignItems="center" 
       > 
         <nav> 
           <HStack spacing={8}> 
             <img src={logo} />
           </HStack> 
         </nav> 
         <nav> 
           <HStack spacing={8}> 
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <Link to="/order-online" className="nav-item">Order Online</Link>
                <Link to="/login" className="nav-item">Login</Link>
           </HStack> 
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header; 
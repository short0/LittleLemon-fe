import React, { useEffect, useRef } from "react"; 
import { Box, HStack, Text } from "@chakra-ui/react";
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
                <Link to="/"><Text color="black">Home</Text></Link>
                <Link to="/about"><Text color="black">About</Text></Link>
                <Link to="/menu"><Text color="black">Menu</Text></Link>
                <Link to="/reservations"><Text color="black">Reservations</Text></Link>
                <Link to="/order-online"><Text color="black">Order Online</Text></Link>
                <Link to="/login"><Text color="black">Login</Text></Link>
           </HStack> 
         </nav> 
       </HStack> 
     </Box> 
   </Box> 
 ); 
}; 

export default Header; 
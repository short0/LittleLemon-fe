import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading, HStack, Button, ButtonGroup } from "@chakra-ui/react"; 
import Card from "./Card"; 
 
const dishes = [ 
 { 
   title: "Greek salad", 
   description: 
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo turpis, in tincidunt lacus condimentum vel. Morbi mollis dictum.", 
   getImageSrc: () => require("../images/greek salad.jpg"), 
 }, 
 { 
   title: "Bruchetta", 
   description: 
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo turpis, in tincidunt lacus condimentum vel. Morbi mollis dictum.", 
   getImageSrc: () => require("../images/greek salad.jpg"), 
 }, 
 { 
   title: "Lemon dessert", 
   description: 
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo turpis, in tincidunt lacus condimentum vel. Morbi mollis dictum.", 
   getImageSrc: () => require("../images/lemon dessert.jpg"), 
 }, 
]; 
 
const Highlight = () => { 
 return ( 
   <FullScreenSection 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   >
     <HStack>
      <Heading as="h1"> 
        This weeks specials!
       </Heading>
       <Button
                backgroundColor="#F4CE14"
                color="#333333"
       >
         Online Menu
       </Button>
     </HStack>
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(3,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {dishes.map((dish) => ( 
         <Card 
           key={dish.title} 
           title={dish.title} 
           description={dish.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={dish.getImageSrc()} 
         /> 
       ))} 
     </Box> 
   </FullScreenSection> 
 ); 
}; 
 
export default Highlight;
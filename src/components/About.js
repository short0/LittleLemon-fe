import React from "react"; 
import { Heading, VStack, HStack, Image, Text } from "@chakra-ui/react"; 
import owners from "../images/Mario and Adrian A.jpg"  
 
const Hero = () => ( 
    <HStack
        paddingX="100"
        paddingY="50"
        spacing={50}
        backgroundColor="#495E57"
    >
        <VStack
            alignItems="start"
        >
            <Heading as="h1" color="#F4CE14">Little Lemon</Heading>
            <Heading as="h3" color="#EDEFEE">Chicago</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo turpis, in tincidunt lacus condimentum vel. Morbi mollis dictum.</Text>
        </VStack>
        <Image
            src={owners}
            alignSelf="start"
            maxWidth="400px"
        />
    </HStack>
);

export default Hero;
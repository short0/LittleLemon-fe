import React from "react"; 
import { Heading, VStack, HStack, Image, Button, ButtonGroup, Text } from "@chakra-ui/react"; 
import restaurantFood from "../images/restauranfood.jpg"  
 
const Hero = () => ( 
    <HStack
        paddingX="100"
        paddingY="10"
        spacing={50}
        backgroundColor="#495E57"
    >
        <VStack
            alignItems="start"
        >
            <Heading as="h1" color="#F4CE14">Little Lemon</Heading>
            <Heading as="h3" color="#EDEFEE">Chicago</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat leo turpis, in tincidunt lacus condimentum vel. Morbi mollis dictum.</Text>
            <Button
                backgroundColor="#F4CE14"
                color="#333333"
            >Reserve a table</Button>
        </VStack>
        <Image
            src={restaurantFood}
            alignSelf="start"
            maxWidth="200px"
        />
    </HStack>
);

export default Hero;
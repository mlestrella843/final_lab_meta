import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react"; // Asegúrate de importar Text
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Maria!";
const bio1 = "A Full Stack developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="FFFFFF"
  >
    <VStack spacing={6} textAlign="center">
      {/* Avatar */}
      <Avatar size="xl" name="Maria" src="https://i.pravatar.cc/150?img=5" />
      {/* Greeting */}
      <Heading as="h1" size="2xl" color="black">
        {greeting}
      </Heading>
      {/* Bio */}
      <Text fontSize="xl" color="black">
        {bio1}
      </Text>
      <Text fontSize="xl" color="black">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
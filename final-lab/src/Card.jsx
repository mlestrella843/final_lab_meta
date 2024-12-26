import { Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      borderRadius="md"
      boxShadow="lg"
      overflow="hidden"
      backgroundColor="white"
      align="stretch"
    >
      {/* Imagen del proyecto */}
      <Image src={imageSrc} alt={title} objectFit="cover" height="200px" />

      <VStack spacing={4} padding={4} align="stretch">
        {/* Título del proyecto */}
        <Heading as="h3" size="lg">
          {title}
        </Heading>

        {/* Descripción del proyecto */}
        <Text color="gray.600">{description}</Text>

        {/* Botón o Icono de acción */}
        <HStack spacing={2}>
          <Button variant="outline" colorScheme="teal" rightIcon={<FontAwesomeIcon icon={faArrowRight} />}>
            Learn More
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;


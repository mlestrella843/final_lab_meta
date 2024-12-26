// ContactMeSection.js
  import React from "react";
  import { useFormik } from "formik";
  import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Select,
    Input,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import * as Yup from "yup";
  import FullScreenSection from "./FullScreenSection";
  import useSubmit from "./hooks/useSubmit";
  import {useAlertContext} from "./context/alertContext";

  const ContactMeSection = () => {
     const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext(); // Hook para manejar las alertas
  
    const formik = useFormik({
      initialValues: {
        firstName: "",
        email: "",
        type: "", // Debe ser obligatorio seleccionar una opción
        comment: "",
      },
      validationSchema: Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        type: Yup.string().oneOf(["hireMe", "openSource", "other"], "Invalid option").required("Please select an option"),
        comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
      }),
      onSubmit: async (values) => {
        try {
          await submit("url", values);
          if (response?.type === "success") {
            onOpen("success", response.message);
            formik.resetForm();
          } else {
            onOpen("error", response?.message || "Something went wrong, please try again later.");
          }
        } catch {
          onOpen("error", "Something went wrong, please try again later.");
        }
      }
  
    });
  
    return (
      <FullScreenSection isDarkBackground backgroundColor="#f7fafc" py={16} spacing={8}>
        <VStack w="1024px" p={32} alignItems="flex-start">
          <Heading as="h1" id="contactme-section" color="black">
            Contact me
          </Heading>
          <Box p={6} rounded="md" w="100%" backgroundColor="white" boxShadow="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                {/* Campo de Nombre */}
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName" color="black">Name</FormLabel>
                  <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} borderColor="black" color="black" _hover={{ borderColor: "black" }} />
                  <FormErrorMessage color="red.500">{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
  
                {/* Campo de Email */}
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email" color="black">Email Address</FormLabel>
                  <Input id="email" name="email" type="email" {...formik.getFieldProps("email")} borderColor="black" color="black" _hover={{ borderColor: "black" }} />
                  <FormErrorMessage color="red.500">{formik.errors.email}</FormErrorMessage>
                </FormControl>
  
                {/* Campo de Tipo de Consulta */}
                <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                  <FormLabel htmlFor="type" color="black">Type of enquiry</FormLabel>
                  <Select id="type" name="type" {...formik.getFieldProps("type")} borderColor="black" color="black" _hover={{ borderColor: "black" }}>
                    <option value="" disabled>Select an option</option>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                  </Select>
                  <FormErrorMessage color="red.500">{formik.errors.type}</FormErrorMessage>
                </FormControl>
  
                {/* Campo de Mensaje */}
                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel htmlFor="comment" color="black">Your message</FormLabel>
                  <Textarea id="comment" name="comment" height={250} {...formik.getFieldProps("comment")} borderColor="black" color="black" _hover={{ borderColor: "black" }} />
                  <FormErrorMessage color="red.500">{formik.errors.comment}</FormErrorMessage>
                </FormControl>
  
                {/* Botón de Enviar */}
                <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>Submit</Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </FullScreenSection>
    );
  };
  
  export default ContactMeSection;
  
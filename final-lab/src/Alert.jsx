// Alert.js
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogOverlay,
  } from "@chakra-ui/react";
  import { useAlertContext } from "./context/alertContext";
  import { useRef } from "react";
  
  function Alert() {
    const { isOpen, type, message, onClose } = useAlertContext(); // Obtenemos el estado y las funciones del contexto
    const cancelRef = useRef(); // Referencia para el botón de cancelar
    const isSuccess = type === "success"; // Determina si es éxito o error
  
    return (
      <AlertDialog
        isOpen={isOpen} // Se muestra solo cuando 'isOpen' es true
        leastDestructiveRef={cancelRef}
        onClose={onClose} // Cierra la alerta
      >
        <AlertDialogOverlay>
          <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {isSuccess ? 'All good!' : 'Oops!'}
            </AlertDialogHeader>
            <AlertDialogBody>{message}</AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    );
  }
  
  export default Alert;

// alertContext.js
import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false, // Determina si la alerta está abierta
    type: 'success', // Tipo de alerta (success o error)
    message: '', // Mensaje que se mostrará en la alerta
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }), // Función para abrir la alerta
        onClose: () => setState({ isOpen: false, type: '', message: '' }), // Función para cerrar la alerta
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext); // Hook para acceder al contexto
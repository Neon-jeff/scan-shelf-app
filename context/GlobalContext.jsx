import React, { createContext, useState, useContext } from 'react';

// Create the context
const GlobalErrorContext = createContext();

// Provider component
const GlobalErrorContextProvider = ({ children }) => {
    const [error, setError] = useState(null);

    // Function to set an error
    const displayError = (errorMessage) => {
        setError(errorMessage);
    };

    // Function to clear an error
    const clearError = () => {
        setError(null);
    };

    return (
        <GlobalErrorContext.Provider value={{ error, displayError, clearError }}>
            {children}
        </GlobalErrorContext.Provider>
    );
};

// Custom hook to use the GlobalErrorContext
const useGlobalError = () => useContext(GlobalErrorContext);

export { GlobalErrorContextProvider, useGlobalError };

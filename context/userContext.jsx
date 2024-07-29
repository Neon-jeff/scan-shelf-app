import { createContext } from "react";

const UserContext = createContext([]);

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };

import { createContext, useState } from "react";

const UserContext = createContext([]);

const UserContextProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };

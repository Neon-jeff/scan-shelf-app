import { createContext, useState } from "react";

const UserContext = createContext([]);

const UserContextProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [message, setMessage] = useState("");
  return (
    <UserContext.Provider
      value={{ category, setCategory, message, setMessage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

import { createContext, useState } from "react";

const LibraryContext = createContext([]);

const LibraryContextProvider = ({ children }) => {
  const [newId, setNewId] = useState("");
  const [sections, SetSections] = useState([]);

  let value = { newId, setNewId ,sections,SetSections };
  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
};

export { LibraryContext, LibraryContextProvider };

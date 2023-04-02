import { createContext } from "react";

export const fileContext = createContext();
const filesContexProvider = ({ children }) => {
  return (
    <filesContexProvider.Provider value={{ ...state, dispatch }}>
      {children}
    </filesContexProvider.Provider>
  );
};

export default filesContexProvider;

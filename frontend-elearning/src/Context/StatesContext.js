import { useContext,useState,react,createContext } from "react";

export const allStatesContext = createContext();
const StateContexProvider = ({children}) => {
    return ( 
        <div>
            <allStatesContext.Provider>
            {children}
            </allStatesContext.Provider>
        </div>
     );
}
 
export default StateContexProvider;
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useAuthContext = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw Error('auth context is out of bound.')
    }

    return context;

}
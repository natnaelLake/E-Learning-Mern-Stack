import { useContext } from "react";
import { FileContext } from "../Context/fileContext";

export const useFileContext = () => {

    const context = useContext(FileContext)
    if(!context){
        throw Error('file context is out of bound.')
    }
    return context;
}
export default useFileContext;
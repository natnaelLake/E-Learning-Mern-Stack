import { useContext } from "react";
import { fileContext } from "../Context/fileContext";

const useFileContext = () => {

    const context = useContext(fileContext)
    if(!context){
        throw Error('file context is out of bound.')
    }
    return context;
}
export default useFileContext;
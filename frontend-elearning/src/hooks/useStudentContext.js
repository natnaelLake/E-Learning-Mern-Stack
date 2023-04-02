import { useContext } from "react";
import { studentContext } from "../Context/StudentsContext";

const useStudentContext = () => {
    const context = useContext(studentContext) 

    if(!context){
        throw Error('student context is out of bound.')
    }
    return context;
}

export default useStudentContext;
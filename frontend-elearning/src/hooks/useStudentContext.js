import { useContext } from "react";
import { StudentContext } from "../Context/StudentsContext";

export const useStudentContext = () => {
    const context = useContext(StudentContext) 

    if(!context){
        throw Error('student context is out of bound.')
    }
    return context;
}
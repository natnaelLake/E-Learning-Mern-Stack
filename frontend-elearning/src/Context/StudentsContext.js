import { createContext, useReducer,useEffect } from "react";

export const StudentContext = createContext();
const studentReducer = (state, action) => {
  switch (action.type) {
    case "GET_STUDENT":
      return {
        studentList: action.payload,
      };
    case "DELETE_STUDENT":
      return {
        studentList: state.studentList.filter((stud)=> stud._id !== action.payload._id),
      };
    case "UPDATE_STUDENT":
      return {
        studentList: action.payload,
      };
    case "ADD_STUDENT":
      return {
        studentList: [action.payload, ...state.studentList],
      };
    default:
      return state;
  }
};
export const StudentContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(studentReducer, {
    studentList: null,
  });
  useEffect(()=>{
    const studentList = JSON.parse(localStorage.getItem('allStudent'))
    // const countListStud = JSON.parse(localStorage.getItem('countStud'))
    
    if(studentList){
        dispatch({type:"GET_STUDENT",payload:studentList})
        // dispatch({type:'COUNT_STUDENT',payload:countListStud})
    }
},[])
  console.log('returned data from stud page is: ',state)
  // console.log('returned data from studCount page is: ',state.countListStud)

  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
import { createContext } from "react";

export const studentContext = createContext();
const studentReducer = (state, action) => {
  switch (action.type) {
    case "GET_STUDENTS":
      return {
        studentList: action.payload,
      };
    case "DELETE_STUDENTS":
      return {
        studentList: [...state.studentList],
      };
    case "UPDATE_STUDENTS":
      return {
        studentList: action.payload,
      };
    case "ADD_STUDENTS":
      return {
        studentList: [action.payload, ...state.studentList],
      };
    default:
      return state;
  }
};
const StudentsContextProvider = ({ children }) => {
  const { state, dispatch } = useReducer(studentReducer, {
    studentList: null,
  });
  return (
    <StudentsContextProvider.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentsContextProvider.Provider>
  );
};

export default StudentsContextProvider;

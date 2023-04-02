import { createContext, useReducer } from "react";

export const StudentContext = createContext();
const studentReducer = (state, action) => {
  switch (action.type) {
    case "GET_STUDENT":
      return {
        studentList: action.payload,
      };
    case "DELETE_STUDENT":
      return {
        studentList: [...state.studentList],
      };
    case "COUNT_STUDENT":
      return {
        studentList: [...state.studentList],
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
  const { state, dispatch } = useReducer(studentReducer, {
    studentList: null,
  });
  return (
    <StudentContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

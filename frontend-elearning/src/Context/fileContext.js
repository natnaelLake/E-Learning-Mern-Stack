import { createContext, useReducer } from "react";



export const FileContext = createContext();

export const fileReducer = (state,action)=>{
  switch (action.type) {
    case "GET_COURSE":
      return {
        fileList: action.payload,
      };
    case "DELETE_COURSE":
      return {
        fileList: [...state.fileList],
      };
    case "UPDATE_COURSE":
      return {
        fileList: action.payload,
      };
    case "ADD_COURSE":
      return {
        fileList: [action.payload, ...state.fileList],
      };
    default:
      return state;
  }
}
export const FilesContextProvider = ({ children }) => {
  const [state,dispatch] = useReducer(fileReducer,{
    fileList:[]
  })
  return (
    <FileContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};
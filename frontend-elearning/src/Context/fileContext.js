import { createContext, useReducer,useEffect } from "react";



export const FileContext = createContext();

export const fileReducer = (state,action)=>{
  console.log(action.type,action.payload)
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
    fileList:null,
    // countListFile:null
  })
  useEffect(()=>{
    const fileList = JSON.parse(localStorage.getItem('allCourse'))
    // const countListFile = JSON.parse(localStorage.getItem('countCourse'))
    console.log('fetched from local',fileList)
    if(fileList){
      console.log(fileList)
        dispatch({type:'GET_COURSE',payload:fileList})
    }
  //   if(countListFile){
  //     dispatch({type:'COUNT_COURSE',payload:countListFile})
  // }
},[])
  console.log('returned data from course page is: ',state)
  // console.log('returned data from courseCount page is: ',state.countListFile)

  return (
    <FileContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FileContext.Provider>
  );
};
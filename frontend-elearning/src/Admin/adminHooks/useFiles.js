import axios from "axios";
import { useFileContext } from "../../hooks/useFileContext";

export const useFiles = () => {
  // const {getData,setGetData} = useState()
  // const {updateData,setUpdateData} = useState()
  // const {deleteData,setDeleteData} = useState()
  // const {addData,setAddData} = useState()

  const { dispatch, fileList } = useFileContext();
  // console.log(studentList)
  const getCourse = async () => {
    const allCourses = await axios.get(
      "https://e-learning-web-app-back-end.onrender.com/getVideos"
    );
    console.log(allCourses);
    // console.log(allCourses.data.fileList)

    if (allCourses.status === 200) {
      // setGetData(allStudents)
      // console.log('json file is ',JSON.stringify(allCourses.data.fileList))
      localStorage.setItem(
        "allCourse",
        JSON.stringify(allCourses.data.fileList)
      );
      // localStorage.setItem("countCourse", JSON.stringify(allCourses.data.countListFile));
      dispatch({ type: "GET_COURSE", payload: allCourses.data.fileList });
      // dispatch({type:'COUNT_COURSE',payload:allCourses.data.countListFile})
      console.log("file list is ", fileList);
    }
  };
  const getCourseSearch = async (search) => {
    const allCourses = await axios.get(
      "https://e-learning-web-app-back-end.onrender.com/search"
    );
    console.log(allCourses);
    // console.log(allCourses.data.fileList)

    if (allCourses.status === 200) {
      // setGetData(allStudents)
      // console.log('json file is ',JSON.stringify(allCourses.data.fileList))
      localStorage.setItem(
        "allCourse",
        JSON.stringify(allCourses.data.fileList)
      );
      // localStorage.setItem("countCourse", JSON.stringify(allCourses.data.countListFile));
      dispatch({ type: "GET_COURSE", payload: allCourses.data });
      // dispatch({type:'COUNT_COURSE',payload:allCourses.data.countListFile})
      console.log("file list is ", fileList);
    }
  };
  const updateCourse = async () => {
    const updatedCourse = await axios.post(
      "https://e-learning-web-app-back-end.onrender.com/fileUpdate/:id"
    );
    console.log(updatedCourse);
    if (updatedCourse.ok) {
      dispatch({ action: "UPDATE_COURSE", payload: updatedCourse });
    }
  };
  const deleteCourse = async () => {
    const deletedStudent = await axios.delete(
      "https://e-learning-web-app-back-end.onrender.com/deleteFiles/:id"
    );
    console.log(deletedStudent);
    if (deletedStudent.ok) {
      dispatch({ action: "DELETE_COURSE", payload: deletedStudent });
    }
  };
  const addCourse = async (formData) => {
    console.log("......... formData ......", formData);
    const response = await axios.post(
      "https://e-learning-web-app-back-end.onrender.com/addVideos",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    console.log("file responses is  ............ .", response);
    if (response.status === 200) {
      dispatch({ action: "ADD_COURSE", payload: response });
    }
  };
  return { getCourse, updateCourse, deleteCourse, addCourse, getCourseSearch };
};

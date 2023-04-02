import {useFileContext} from '../../hooks/useFileContext'
import axios from 'axios'
import {useState} from 'react'

export const useFiles = () => {
    // const {getData,setGetData} = useState()
    // const {updateData,setUpdateData} = useState()
    // const {deleteData,setDeleteData} = useState()
    // const {addData,setAddData} = useState()


    const {dispatch} = useFileContext();
    // console.log(studentList)
    const getCourse = async ()=>{
        const allCourses = await axios.get('http://localhost:8000/getVideos')
        console.log(allCourses)
        if(allCourses.ok){
            // setGetData(allStudents)
            dispatch({action:'GET_COURSE',payload:allCourses})
        }
    }
    const updateCourse = async ()=>{
        const updatedCourse = await axios.post('http://localhost:8000/fileUpdate/:id')
        console.log(updatedCourse)
        if(updatedCourse.ok){
            dispatch({action:'UPDATE_COURSE',payload:updatedCourse})
        }
    }
    const deleteCourse = async ()=>{
        const deletedStudent =  await axios.delete('http://localhost:8000/deleteFiles/:id')
        console.log(deletedStudent)
        if(deletedStudent.ok){
            dispatch({action:'DELETE_COURSE',payload:deletedStudent})
        }
    }
    // const addCourse = async (studentname,quiz,mid,final,total)=>{
    //     const courseData = {studentname,quiz,mid,final,total}
    //     const addedCourse = await axios.post('http://localhost:8000/addVideos',studentData);
    //     console.log(addedCourse)
    //     if(addedCourse.ok){
    //         dispatch({action:'ADD_COURSE',payload:addCourse})
    //     }
    // }
    return {getCourse,updateCourse,deleteCourse};
}
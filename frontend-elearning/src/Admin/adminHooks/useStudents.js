import {useStudentContext} from '../../Context/StudentsContext'
import axios from 'axios'
import {useState} from 'react'

export const useStudents = () => {
    const {getData,setGetData} = useState()
    const {updateData,setUpdateData} = useState()
    const {deleteData,setDeleteData} = useState()
    const {addData,setAddData} = useState()


    const {dispatch} = useStudentContext();
    console.log(studentList)
    const getStudents = async ()=>{
        const allStudents = await axios.get('http://localhost:8000/getVideos')
        console.log(allStudents)
        if(allStudents.ok){
            // setGetData(allStudents)
            dispatch({action:'GET_STUDENTS',payload:allStudents})
        }
    }
    const updateStudent = async ()=>{
        const updatedStudent = await axios.post('http://localhost:8000/updateStudents/:id')
        colsole.log(updatedStudent)
        if(updatedStudent.ok){
            dispatch({action:'UPDATE_STUDENT',payload:updatedStudent})
        }
    }
    const deleteStudent = async ()=>{
        const deletedStudent =  await axios.delete('http://localhost:8000/deleteStudents/:id')
        console.log(deletedStudent)
        if(deletedStudent.ok){
            dispatch({action:'DELETE_STUDENT',payload:deletedStudent})
        }
    }
    const addStudents = async (studentname,quiz,mid,final,total)=>{
        const studentData = {studentname,quiz,mid,final,total}
        const addedStudent = await axios.post('http://localhost:8000/addStudents',studentData);
        console.log(addedStudent)
        if(addedStudent.ok){
            dispatch({action:'ADD_STUDENT',payload:addedStudent})
        }
    }
    return {getStudents,updateStudent,deleteStudent,addStudents};
}
import {useStudentContext} from '../../hooks/useStudentContext'
import axios from 'axios'
import {useState} from 'react'
import EditAss from '../AssButton/EditAss'

export const useStudents = () => {
    const {getData,setGetData} = useState()
    const {updateData,setUpdateData} = useState()
    const {deleteData,setDeleteData} = useState()
    const {addData,setAddData} = useState()


    const {dispatch,studentList} = useStudentContext();
    // console.log(studentList)
    const getStudents = async ()=>{
        const allStudents = await axios.get('http://localhost:8000/getStudents')
        console.log(allStudents)
        if(allStudents.status === 200){
            // setGetData(allStudents)
            localStorage.setItem("allStudent", JSON.stringify(allStudents.data.students));
            // localStorage.setItem("countStud", JSON.stringify(allStudents.data.countListStud));
            dispatch({type:'GET_STUDENT',payload:allStudents.data.students})
            // dispatch({type:'COUNT_STUDENT',payload:allStudents.data.countListStud})

        }
        console.log('stud list is: ',studentList)
    }
    const updateStudent = async (upstudentname,updateQuiz,upMid,upFinal,upTotal)=>{ 
        const updateData = {upstudentname,updateQuiz,upMid,upFinal,upTotal}
        const updatedStudent = await axios.post('http://localhost:8000/updateStudents/:id',updateData)
        console.log(updatedStudent)
        if(updatedStudent.ok){
            dispatch({action:'UPDATE_STUDENT',payload:updatedStudent})
        }
    }
    const deleteStudent = async (id)=>{
        const deletedStudent =  await axios.delete('http://localhost:8000/deleteStudents/'+id)
        console.log('deletedStud is :',deletedStudent)
        if(deletedStudent.statusText === 200){
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
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
    const updateStudent = async (student,studId)=>{ 
        
        const updatedStudent = await axios.patch('http://localhost:8000/updateStudents/'+studId,student)
        // console.log(updatedStudent)
        if(updatedStudent.status === 200){
            console.log('.... updated one is :',updatedStudent.data)
            localStorage.setItem("updated", JSON.stringify(updatedStudent.data));
            // dispatch({type:'UPDATE_STUDENT',payload:updatedStudent})
        }
    }
    const deleteStudent = async (id)=>{
        const deletedStudent =  await axios.delete('http://localhost:8000/deleteStudents/'+id)
        console.log('deletedStud is :',id)
        if(deletedStudent.status === 200){
            dispatch({type:'DELETE_STUDENT',payload:deletedStudent})
        }
    }
    const addStudents = async (firstname,lastname,quiz,mid,final)=>{
        const studentData = {firstname,lastname,quiz,mid,final}
        console.log('before add :',studentData)
        const addedStudent = await axios.post('http://localhost:8000/signup',studentData);
        console.log(addedStudent)
        // if(addedStudent.statusText === 200){
        //     dispatch({type:'ADD_STUDENT',payload:addedStudent})
        // }
    }
    return {getStudents,updateStudent,deleteStudent,addStudents};
}
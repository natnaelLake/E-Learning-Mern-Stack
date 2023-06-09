import { useState } from 'react';
// import { AuthContext } from '../Context/AuthContext';
import { useAuthContext } from './useAuthContext';

export const useSignUp = () => {
    const [emailError,setEmailError] = useState('');
    const [nameError,setNameError] = useState('');
    const [passError,setPassError] = useState('');
    const [depError,setDepError] = useState('');
    const [phoneError,setPhoneError] = useState('');
    const {dispatch}  = useAuthContext()
    const signUp = async (email,password,studentname,age,department,phone) =>{
        const response = await fetch('https://e-learning-web-app-back-end.onrender.com/signup',{
            method:'POST',
            body:JSON.stringify({
                studentname,
                email,
                password,
                age,
                phone,
                department
            }),
            headers:{'Content-Type':'application/json'}
          })
          let jsonRes = await response.json();
          console.log('in singup',jsonRes)
          if(response.ok){
              console.log(jsonRes)
              setNameError('')
              setEmailError('')
              setPassError('')
              setPhoneError('')
              setDepError('');
              localStorage.setItem('user',JSON.stringify(jsonRes))
              dispatch({type:'LOGIN',payload:jsonRes})
          }else{
            setNameError(jsonRes.errors.studentname)
            setEmailError(jsonRes.errors.email)
            setPassError(jsonRes.errors.password)
            setPhoneError(jsonRes.errors.phone)
            setDepError(jsonRes.errors.department)
          }
    }
    return ({nameError,passError,emailError,phoneError,depError,signUp});
}
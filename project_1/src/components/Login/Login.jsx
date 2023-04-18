import React, { useEffect, useState } from 'react'
import styled from "./Login.module.css"
import InputField from '../InputField/InputField'
import Button from '../Button/Button'
import{Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
const Login = () => {

 const[username,setUserName]= useState("")
 const[password,setPassword]= useState("")
const[userList,setUserList]=useState([])
const navigate=useNavigate()

 const handleClick=(e)=>{
  e.preventDefault()
  console.log("btnclick")
  console.log(userList)
if(username ==="" && password===""){
  alert("invalid credentials")
}else if( userList !== undefined){
const userFind =userList.find((person) => person.username===username && person.password===password)
alert(`${userFind.username} Login Successfully`)
navigate('/pricing')
}else{
  alert('please Register first')
}
 }
 useEffect(()=> {
let data=JSON.parse(localStorage.getItem('userData'))
console.log(data)
setUserList(data)
 },[])
  return (
    <div className={styled.loginContainer}>
      
      <h2>Login Now</h2>
      <form action="">
        <div className={styled.formContainer}>
     <label htmlFor="username"> Username : </label>
     <InputField type="text" placeholder="Enter Username"  value={username} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
        <label htmlFor="password"> Password : </label>
     <InputField type="password" placeholder="Enter Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
            <Button btnName="Login" onClick={handleClick}/>
        </div>
    <Link to="/register"> Don't have account <strong>Register Now</strong> </Link> 
      </form>
    </div>
  )
}

export default Login
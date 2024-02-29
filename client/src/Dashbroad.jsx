import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Createjob from './assets/compoents/createjob'

const Dashbroad = () => {
  const [success,setsuccess]=useState('')
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
useEffect(()=>{

axios.get("http://localhost:8000/dashbroad")
.then(response=>{
  if(response.data==="success"){
   setsuccess("successfull ok")
  }else{
    navigate("/login")
  }
})
.catch(err=>console.log(err))
},[])
  return (
   <div>
    <h2>dashbroad</h2>
    <Createjob/>
   </div>
  )
}

export default Dashbroad
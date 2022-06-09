import React, {useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';

export default function Register() {
  const [user,setUser]=useState("")
  const [pass,setPass]=useState("")
  const load=(e)=>{
    e.preventDefault();
  }
  return (
       
      <div className='col'>
    <div>
    <Link to="/">
        <img src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png' alt='' style={{height:"100px", width:"200px",marginLeft:"530px",marginTop:"40px"}} />
        </Link>
    </div>
    <form onSubmit="">
    <div className='logcon'>
      <h1>Register</h1>
      <h2>Email</h2>
      <br />
      <div className='inco'>
      <input type="text" className='in2' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Enter Username' /><br />
      </div>
      <h2>Password</h2>
      <br />
      <div className='inco'>
      <input type="text" className='in2' value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Enter Username' /><br />
      </div>
      <div style={{marginTop:"20px"}}>
      By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
      </div>
      <div>
        <button className='butt5' type='submit' onSubmit={load}><center><b>Register</b></center></button>
      </div>
   
    </div>
    </form>
    </div>
   

  )
}

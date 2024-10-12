import React, { Fragment, useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/firebase'

function ForgetPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage]  = useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      sendPasswordResetEmail(auth,email)
      setMessage('Password reset email sent! Check your inbox.');
    }
    catch(error){
      setMessage('Error: ' + error.message);
    }

  }
  return (
    <Fragment>
      <div style={{display:'flex', justifyContent:'center', marginTop:'30vh'}}>
      <form onSubmit={handleSubmit}  >
      <label>enter the email which you have Registered </label>
      <br/>
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <br/>

      <button type='submit'>send reset Email</button>
      </form>
      {message && <p>{message}</p>}

      </div>
        
    </Fragment>
  )
}

export default ForgetPassword
import React, { Fragment, useState } from 'react'
import { ref, uploadBytes } from 'firebase/storage'
import { firestore } from '../firebase/firebase'
import { collection, addDoc } from "firebase/firestore";


function ContactDetail() {
  const [uName, setUName] = useState('')
  const [father, setFather] = useState('')


  const handleCreateNewListing = async(e )=>{
    e.preventDefault()
    if(uName){
      await addDoc(collection(firestore, 'books'),{
        name:uName,
        father : father
      })
    }
    
  }

  return (
    <Fragment >
    <div style={{display:'flex', justifyContent:'space-between'}}>
            
            <h4>Winners Never Quite, Quiter never win</h4>
            <button>Your profile is incomplete to get job compelete it</button></div>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <h2>Contact Detail</h2>
            <button>Cancel</button>
        </div>
        <div>
            <label>Full Name:</label>
            <input type='text' value={uName} onChange={(e)=>setUName(e.target.value)}  />
            <label>Father Name:</label>
            <input type='text' value={father} onChange={(e)=>setFather(e.target.value)} />
        </div>
        <button onClick={handleCreateNewListing}>Update</button>
    </Fragment>
  )
}

export default ContactDetail
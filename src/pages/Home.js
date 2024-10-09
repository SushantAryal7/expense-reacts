import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

const clickHandler = ()=>{
      navigate('/contactdetail')
}

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <h2>Welcome to Expense Traceker Page</h2>
      <button onClick={clickHandler}>YOur Profile is incomplete</button>
    </div>
  )
}

export default Home
import React, { useState } from 'react'

function Sum() {

  const [check, setCheck] = useState(false)
  const [text, setText] = useState('');

  const handleChanges = (event) => {
    setText(event.target.value);
  };



  const handleChange = ()=>{
    setCheck(!check)
  }
 
  return(
    <div>
      <h1> Testing Basic</h1>
     

      <input 
       type="text"
       value={text}
       onChange={handleChanges}
       aria-label="text-input"
      />
      <input type='checkbox' checked={check} onChange={handleChange} />

      <button>Click</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>

      </ul>
    </div>
  )
    
    
  
}

export default Sum
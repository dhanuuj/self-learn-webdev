import React from 'react'

function Input(props) {
  return (
    <div>
        
        <input 
        type='text' 
        placeholder='Enter here...'
        value={props.text}
        onChange={(e)=>{
            props.setText(e.target.value)
        }}></input>
        
        <button onClick={()=>{
            props.setItem([...props.item, props.text])
            props.setText("")
        }}>Add</button>

    </div>
  )
}

export default Input
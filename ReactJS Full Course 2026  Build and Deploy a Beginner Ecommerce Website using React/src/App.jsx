import React, { useState } from 'react'

function App() {

  let [text, setText] = useState();

  function theText(){
    setText("func theText");
  }

  return (
    <div>

      <button onClick={()=>{
        theText();
      }}>Click Me</button>

      <h2>Click : {text}</h2>

    </div>
  )
}

export default App
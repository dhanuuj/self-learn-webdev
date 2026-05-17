import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import List from './components/List'

function App() {

  //////////////////////useState///////////////////////////////////

  // const [text, setText] = useState("");
  // const [item, setItem] = useState([]);
  // // console.log(item)

  // return(
  //   <div>
  //     <h1>ToDo List</h1>
  //     <Input text={text} setText={setText} item={item} setItem={setItem}/>
  //     <List item={item} setItem={setItem}/>
  //   </div>
  // )

  ///////////////////////////useEffect/////////////////////////////////

  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect")
  }, [count]);

  return(
    <div>

      <button onClick={()=>{
        setCount(count+1);
      }}>+</button>

      <button onClick={()=>{
        setCount(count-1);
      }}>-</button>

      <p>{count}</p>

    </div>
  )

}

export default App
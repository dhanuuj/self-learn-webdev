import React from 'react'

function List(props) {
  return (
    <div>
        {props.item.map((item)=>{
            return <div key={item} style={
                {display: "flex"}
            }>
                <p>{item}</p>

                <button onClick={()=>{
                    const filteredItems = props.item.filter((fItem)=>{
                        if (fItem !== item){
                            return true;
                        } 
                        return false;
                    })
                    props.setItem(filteredItems);
                }}>Del</button>

            </div>
        })}
    </div>
  )
}

export default List
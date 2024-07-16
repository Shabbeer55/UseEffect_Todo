import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';



const Todo = () => {
            const[inputData,setInputData] = useState('');
            const[items,setItems] = useState([]);


 const additem  =()=> {
    if(!inputData)  {

    }else {
    setItems([...items,inputData]);
    setInputData('')
}
 }      
    
//delete items

  const deleteItem =(id)=> {
    const updateitems = items.filter((elem,ind)=> {
        return ind !== id;
    });
    
    setItems(updateitems)


  }

//for removing items

  const removeAll = ()=> {
    setItems([]);
  }



  return (<>
    <div className="main-div">
        <div className="child-div">
      
        <h1>Add your list here</h1>

        <div className="addItems">
            <input type="text" placeholder="Add Items.."   value={inputData} 
            onChange={(e)=>setInputData(e.target.value)}/>
            <FontAwesomeIcon icon={faPlus} title="additem"  onClick={additem}/>
           
            </div>




            <div className="showItems">
      {
        items.map((elem, ind) => {
          return (
            <div className="eachItem" key={ind}>
              <h3>{elem}</h3>
              <FontAwesomeIcon 
                icon={faTrash} 
                title="Delete Item" 
                onClick={() => deleteItem(ind)} 
              />
            </div>
          );
        })
      }
    </div>
           



<div className="showItems">
    <button className="btn effect04" onClick={removeAll}><span>Check List</span></button>
</div>

        </div>

    </div></>
  )
}



export default Todo
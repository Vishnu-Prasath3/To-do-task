import {useContext,useState } from 'react'
import { data } from './Context';

function Todoform() {
    const{indata,setdata}=useContext(data);
    const[state,setstate]=useState([])
    let Rdata=[...state];        
    const handlsubmit=(e)=>{
    e.preventDefault();
    Rdata.push({name:e.target.name.value,desc:e.target.desc.value});
    setstate(Rdata);
    setdata(Rdata);
    e.target.name.value="";
    e.target.desc.value="";  
    }
  return (
    <>
    <div>
        <h1>My Todo</h1>
        <form onSubmit={handlsubmit}>
            <input type='text' required name='name' placeholder='To-Do-Name'></input>
            {/* <input    ></input> */}
           <textarea name='desc' type='text' required placeholder='To-Do-Description'></textarea>
            <button type='submit' >Add ToDO</button>
        </form>
    </div>
    </>
  )
}
export default Todoform;
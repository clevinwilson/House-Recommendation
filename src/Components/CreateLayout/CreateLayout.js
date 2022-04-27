import React,{useState} from 'react'
import './CreateLayout.css'
import { Link, useNavigate } from 'react-router-dom';

function CreateLayout() {
    const navigate=useNavigate();
    const [rowCount,setRowCout]=useState('')
    const [colCount,setColCount]=useState('');
    const plots=[]
    

    const createLayout=()=>{
       for(let i=0;i<=rowCount;i++){
           for(let j=0;j<=colCount;j++){
               plots.push({ id: i + "" + j, row: i, col: j, services: { house: 0, restaurant: 0, gym: 0,hospital:0}})
           }
       }
        navigate('/layout', { state:{plots: plots,row:rowCount,col:colCount} });
    }
  return (
     <div>

          <div className="indexParentDiv">
              <h5 className='text-upper'>Create layout</h5>
              <br />
             

                  <div className="col">
                      <input type="number" className="form-control index-from-input" onChange={(e) => { setRowCout(e.target.value) }} placeholder="Row" />
                  </div>
                  <br />
                  <div className="col">
                      <input type="number" className="form-control index-from-input" onChange={(e) => { setColCount(e.target.value) }} placeholder="Column" />
                  </div>
                  <br />
                  <button  class="btn btn-primary index-submit-btn" onClick={createLayout}>Submit</button>
              

          </div>
      </div>
  )
}
export default CreateLayout
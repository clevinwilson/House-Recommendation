import React,{useEffect,useState} from 'react'
import './PlotLayout.css';

function PlotLayout() {
  const [card, setCard] = useState(false)
  let plot={}
  let services = { "House": '1', "Restaurant": "2", "Gym": "3","Hospital":"4"};
  
  let App = () => {
    return (<table cellspacing="15" className='layout table-bordered'>
      {
        Array.from(Array(6), (e, i) => {
          return (<tr className='text-white' id={i} key={i}>
            {
              Array.from(Array(5), (a, j) => {

                plot[i + "" + j]={'row':i,"column":j,plot:{}}

                return (<td className='p-2 table-cell ' onClick={()=>{setCard(!card); console.log(i,j)}} id={`${i}${j}` } key={j}> <h2  className='text-center'>+</h2> </td>)
              })
            }
          </tr>)
        })
      }
    </table>)
    
  }

  return (
    <div className='layout-container'>
      <section>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h3 className='text-white layout-header'>House Recommendation</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row mt-5 m-3'>
            <div className=' col-6 col-md-3 text-center'>
              <h3 className='text-success'>House </h3>
            </div>
            <div className='col-6 col-md-3 text-center'>
              <h3 className='text-warning'>Restaurant</h3>
            </div>
            <div className='col-6 col-md-3 text-center'>
              <h3 className='text-info' >Gym</h3>
            </div>
            <div className='col-6 col-md-3 text-center'>
              <h3 className='text-danger'>Hospital</h3>
            </div>
          </div>
        </div>
      </section>
      <div className='container mt-5'>
        <div className='row mt-5'>
          <div className='col-md-12 plot-layout-box'>
            <div className='plot-container p-3'>
              <App />
            </div>
          </div>
        </div>
      </div>
     
      <div className="modal fade show" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true" style={{display:"block"}}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            {/* <div classNameName="modal-footer">
              <button type="button" classNameName="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlotLayout
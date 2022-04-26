import React from 'react'
import './PlotLayout.css'

function PlotLayout() {
  let plot={}
  // for(let i=0;i<6;i++){
  //   for(let j=0;j<5;j++){
  //     console.log(i,j);
     
  //   }
  // }
  

  let App = () => {
    return (<table cellspacing="15" className='layout table-bordered'>
      {
        Array.from(Array(6), (e, i) => {
          return (<tr className='text-white' id={i} key={i}>
            {
              Array.from(Array(5), (a, j) => {

                plot[i + "" + j]={'row':i,"column":j,plot:{}}
                
                return (<td className='p-2 table-cell ' onClick={()=>{console.log(i,j);}} id={`${i}${j}` } key={j}> <h2  className='text-center'>+</h2> </td>)
              })
            }
          </tr>)
        })
      }
    </table>)
    
  }
  console.log(plot);


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
              <h3 className='text-success'>House</h3>
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
    </div>
  )
}

export default PlotLayout
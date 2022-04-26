import React from 'react'
import './PlotLayout.css'

function PlotLayout() {
  let App = () => {
    return (<table cellspacing="15" className='layout table-bordered'>
      {
        Array.from(Array(6), (e, i) => {
          return (<tr className='text-white' key={i}>
            {
              Array.from(Array(5), (e, i) => {
                return (<td className='p-2 table-cell ' key={i}>hsfdddd</td>)
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
import React, { useEffect, useState } from 'react'
import './PlotLayout.css';
import { useLocation } from 'react-router-dom';

function PlotLayout() {
  const location = useLocation();
  const [card, setCard] = useState(false);
  const [addServices, setAddServices] = useState({});
  const [plot, setPlot] = useState([]);
  const [servicesId, seteSrvicesId]=useState('')
  let plots = {}
  let services = ["House", "Restaurant", "Gym", "Hospital"];
  let App = () => {
    return (<table cellspacing="15" className='layout table-bordered'>
      {
        Array.from(Array(parseFloat(location.state.row)), (e, i) => {
          return (<tr className='text-white' id={i} key={i}>
            {
              Array.from(Array(parseFloat(location.state.col)), (a, j) => {

                plots[i + "" + j] = { 'row': i, "column": j, plot: {} }

                return (<td className='p-2 table-cell ' onClick={() => { setCard(!card); setPlot(location.state.plots); seteSrvicesId(i + "" + j) }} id={`${i}${j}`} key={j}> <h2 className='text-center'>+</h2>
                  {
                    location.state.plots.map((obj) => {
                      return (
                        <div>
                          {obj.id == i + "" + j ?
                            <div className='row'>
                              {obj.services.house >= 0 ? <h6 className='text-success col-6'>H: {obj.services.house}</h6> : null}
                              {obj.services.restaurant >= 1 ? <h6 className='text-warning col-6'>R: {obj.services.restaurant}</h6> : null}
                              {obj.services.gym >= 1 ? <h6 className='text-info col-6'>G: {obj.services.gym}</h6> : null}
                              {obj.services.hospital >= 1 ? <h6 className='text-danger col-6'>Ho: {obj.services.hospital}</h6> : null}
                            </div>
                            :
                            null
                          }
                        </div>
                      )
                    })
                  }
                </td>)
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
              <h3 className='text-white layout-header'>House Recommendation </h3>
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

              <table>
                {/* {
                location.state.plots.map((obj)=>{
                  return(
                    
                    
                       <tbody>
                      {obj.col == location.state.col ?

                        <tr>{obj.id}</tr>

                        :
                        <td>{obj.id}</td>}
                       </tbody>
                    
                   
                    
                  )
                })
              } */}
              </table>

            </div>
          </div>
        </div>
      </div>

      <div className={card ? "card-display modal fade show" : "modal fade show card-hide"} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true"  >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Select Services</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" onClick={() => { setCard(!card) }}>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* {
                services.map((value) => {
                  return (
                    <h4 className='services-list'><input
                      onChange={() => {
                        setPlot(location.state.plots.filter((obj) => {
                          if (obj.id == 10) {
                            obj.house = 1
                          }
                          return (obj)
                        }))
                      }}
                      type="checkbox" value={value}></input> {value}</h4>
                  )
                })
              } */}
              <h4 className='services-list'><input
                onChange={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == servicesId) {
                      obj.services.house = 1
                    }
                    return (obj)
                  }))
                  console.log(location.state.plots);
                }}
                type="checkbox" ></input> House</h4>
                

              {/* <h4 className='services-list'><input
                onChange={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == 10) {
                      obj.house = 1
                    }
                    return (obj)
                  }))
                }}
                type="checkbox" ></input> Restaurant</h4>

              <h4 className='services-list'><input
                onChange={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == 10) {
                      obj.house = 1
                    }
                    return (obj)
                  }))
                }}
                type="checkbox"></input> Gym</h4>

              <h4 className='services-list'><input
                onChange={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == 10) {
                      obj.house = 1
                    }
                    return (obj)
                  }))
                }}
                type="checkbox" ></input> Hospital</h4> */}
            </div>
            <div style={{ textAlign: "center" }} classNameName="modal-footer">

              <button onClick={() => { setCard(!card) }} style={{ backgroundColor: "#5583a2", borderRadius: "7px" }} type="button" className="mb-3 btn btn-primary ">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlotLayout
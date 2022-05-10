import React, { useEffect, useState } from 'react'
import './PlotLayout.css';
import { useLocation } from 'react-router-dom';

function PlotLayout() {
  const location = useLocation();
  const [card, setCard] = useState(false);
  const [addServices, setAddServices] = useState({});
  const [plot, setPlot] = useState([]);
  const [servicesId, seteSrvicesId] = useState('');
  const [houseCount, setHouseCount] = useState(1);
  const [house, setHouse] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [gym, setGym] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [distance, setDistance] = useState(1000)
  const [preferredHouse, setPreferredHouse] = useState([]);

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

                return (<td className='p-2 table-cell ' onClick={() => { setCard(!card); setPlot(location.state.plots); seteSrvicesId(i + "" + j) }} id={`${i}${j}`} key={j}>
                  {
                    location.state.plots.map((obj) => {
                      return (
                        <div>
                          {obj.id == i + "" + j ?
                            <div className='row'>
                              {obj.services.house >= 1 ? <h6 className='service-text text-success col-6'>H {obj.services.house}</h6> : null}
                              {obj.services.restaurant >= 1 ? <h6 className='service-text text-warning col-6'>R: {obj.services.restaurant}</h6> : null}
                              {obj.services.gym >= 1 ? <h6 className='service-text text-info col-6'>G: {obj.services.gym}</h6> : null}
                              {obj.services.hospital >= 1 ? <h6 className='service-text text-danger col-6'>Ho: {obj.services.hospital}</h6> : null}
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

  const findBestHouse = () => {


    house.forEach(houses => {
      restaurant.forEach(restaurants => {
        if (houses.row == restaurants.row) {
          let restaurantDistanceCol = Math.abs(restaurants.col - houses.col);
          if (restaurantDistanceCol < distance) {
            if (preferredHouse[0]) {
              preferredHouse.filter((obj) => {
                if (obj.houseid == houses.houseid) {
                  setDistance(restaurantDistanceCol);
                  console.log(restaurantDistanceCol);
                  obj.restaurantDistance = restaurantDistanceCol
                } else {
                  setDistance(restaurantDistanceCol);
                  console.log(restaurantDistanceCol);
                  setPreferredHouse([...preferredHouse, { houseid: houses.houseid, restaurantDistance: restaurantDistanceCol }])
                }
                return (obj)
              })
            } else {
              setDistance(restaurantDistanceCol);
              console.log(restaurantDistanceCol);
              setPreferredHouse([...preferredHouse, { houseid: houses.houseid, restaurantDistance: restaurantDistanceCol }])
            }
          }
        } else if (houses.col == restaurants.col) {
          let restaurantDistanceRow = Math.abs(restaurants.row - houses.row);
          if (restaurantDistanceRow < distance) {
            if (preferredHouse[0]) {
              preferredHouse.filter((obj) => {
                if (obj.houseid == houses.houseid) {
                  setDistance(restaurantDistanceRow);
                  console.log(restaurantDistanceRow);
                  obj.restaurantDistance = restaurantDistanceRow
                } else {
                  setDistance(restaurantDistanceRow);
                  console.log(restaurantDistanceRow);
                  setPreferredHouse([...preferredHouse, { houseid: houses.houseid, restaurantDistance: restaurantDistanceRow }])
                }
                return (obj)
              })
            } else {
              setDistance(restaurantDistanceRow);
              console.log(restaurantDistanceRow);
              setPreferredHouse([...preferredHouse, { houseid: houses.houseid, restaurantDistance: restaurantDistanceRow }])
            }
          }
        }else{
          let restaurantDistanceCol = Math.abs(restaurants.col - houses.col);
          let restaurantDistanceRow = Math.abs(restaurants.row - houses.row);
          console.log(restaurantDistanceCol + restaurantDistanceRow);
          if (restaurantDistanceCol + restaurantDistanceRow < distance) {
            if (preferredHouse[0]) {
              preferredHouse.filter((obj) => {
                if (obj.houseid == houses.houseid) {
                  setDistance(restaurantDistanceCol + restaurantDistanceRow);
                  console.log(restaurantDistanceCol + restaurantDistanceRow);
                  obj.restaurantDistance = restaurantDistanceCol + restaurantDistanceRow
                } else {
                  setDistance(restaurantDistanceCol + restaurantDistanceRow);
                  console.log(restaurantDistanceCol + restaurantDistanceRow);
                  setPreferredHouse([...preferredHouse, { houseid: houses.houseid, restaurantDistance: restaurantDistanceCol + restaurantDistanceRow }])
                }
                return (obj)
              })
            } else {
              setDistance(restaurantDistanceCol + restaurantDistanceRow);
              console.log(restaurantDistanceCol + restaurantDistanceRow);
              setPreferredHouse([...preferredHouse, { houseid: houses.houseid, restaurantDistance: restaurantDistanceCol + restaurantDistanceRow }])
            }
          }
        }
      })
    });

  }
  return (
    <div className='layout-container'>
      <section>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h3 style={{ fontSize: "3.6vmin" }} className='text-white layout-header'> House Recommendation </h3>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='preferences-title text-center'>
          <h3 style={{ fontSize: "3.1vmin" }} className='text-white'>Preferences</h3>
        </div>
        <div style={{ fontSize: "2.2vmin" }} className='row text-center mt-5'>
          <div className="form-check col-6 mt-2 col-md-3">
            <input className="form-check-input" type="checkbox" value="" id="house" />
            <label className="form-check-label text-white" for="house ">House </label>
          </div>

          <div className="form-check mt-2  col-6 col-md-3">
            <input className="form-check-input" type="checkbox" value="" id="restaurant" />
            <label className="form-check-label text-white" for="restaurant ">Restaurant </label>
          </div>

          <div className="form-check mt-2 col-6 col-md-3">
            <input className="form-check-input" type="checkbox" value="" id="gym" />
            <label className="form-check-label text-white" for="gym ">Gym </label>
          </div>

          <div className="form-check mt-2 col-6 col-md-3">
            <input className="form-check-input" type="checkbox" value="" id="hospital" />
            <label className="form-check-label text-white" for="hospital ">Hospital </label>
          </div>
        </div>
      </div>
      <section>
        <div className='container'>
          <div className='row mt-5 m-3'>
            <div className=' col-6 col-md-3 text-center'>
              <h3 style={{ fontSize: "3vmin" }} className='text-success'>House </h3>
            </div>
            <div className='col-6 col-md-3 text-center'>
              <h3 style={{ fontSize: "3vmin" }} className='text-warning'>Restaurant</h3>
            </div>
            <div className='col-6 col-md-3 text-center'>
              <h3 style={{ fontSize: "3vmin" }} className='text-info' >Gym</h3>
            </div>
            <div className='col-6 col-md-3 text-center'>
              <h3 style={{ fontSize: "3vmin" }} className='text-danger'>Hospital</h3>
            </div>
          </div>
        </div>
      </section>
      <div className='container mt-5'>
        <div className='row mt-5'>
          <div style={{ textAlign: 'center' }} className='col-md-12 plot-layout-box'>
            <div className='plot-container p-3'>
              <App />

              {/* <table>
                {
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
              }
              </table> */}

            </div>
            <button onClick={findBestHouse} className='btn btn-success find-btn mt-5'>Find best house</button>
            <button onClick={() => { console.log(preferredHouse); }} >okkkk</button>
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

              <h4 className='services-list'
                onClick={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == servicesId) {

                      if (obj.services.house >= 1) {
                        return
                      }
                      setHouseCount(houseCount + 1)
                      obj.services.house = houseCount
                      obj.houseid = "h" + houseCount
                      setHouse([...house, obj])
                    }
                    return (obj)
                  }))
                  console.log(location.state.plots);
                }}> House</h4>


              <h4 className='services-list'
                onClick={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == servicesId) {
                      obj.services.restaurant = obj.services.restaurant + 1
                      setRestaurant([...restaurant, obj]);
                    }
                    return (obj)
                  }))
                }}> Restaurant</h4>

              <h4 className='services-list'
                onClick={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == servicesId) {
                      obj.services.gym = obj.services.gym + 1;
                      setGym([...gym, obj])
                    }
                    return (obj)
                  }))
                }}>  Gym</h4>

              <h4 className='services-list'
                onClick={() => {
                  setPlot(location.state.plots.filter((obj) => {
                    if (obj.id == servicesId) {
                      obj.services.hospital = obj.services.hospital + 1
                      setHospital([...hospital, obj])
                    }
                    return (obj)
                  }))
                }}> Hospital</h4>
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
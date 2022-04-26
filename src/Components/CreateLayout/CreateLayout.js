import React from 'react'
import './CreateLayout.css'

function CreateLayout() {
  return (
     <div>

          <div className="indexParentDiv">
              <h5 className='text-upper'>Create layout</h5>
              <br />
              <form>

                  <div className="col">
                      <input type="text" className="form-control index-from-input" placeholder="Row" />
                  </div>
                  <br />
                  <div className="col">
                      <input type="text" className="form-control index-from-input" placeholder="Column" />
                  </div>
                  <br />
                  <button type="submit" class="btn btn-primary index-submit-btn">Submit</button>
              </form>

          </div>
      </div>
  )
}

export default CreateLayout
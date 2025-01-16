import React from 'react'
import { CiSearch } from "react-icons/ci";


const CoursesSearch = () => {
  return (
    <div className=''>
        <div className="search-body row bg-white container rounded-2 p-3">
          <h3 className=' text-black fw-bold fs-2 pb-1'>Search for courses</h3>
          <form className='row flex-column flex-md-row gap-2'>
            <input type="text" className=' form-control col rounded-2' placeholder='What do you want to learn?'/>

            <div className="input-group position-relative col px-0 px-md-1">
              <label className="input-group-text position-absolute" for="inputGroupSelect01">Options</label>
              <select className="form-select  rounded-2" id="inputGroupSelect01">
                <option selected>--Choose--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="input-group position-relative col px-0 px-md-1">
              <label className="input-group-text position-absolute" for="inputGroupSelect01">Options</label>
              <select className="form-select rounded-2" id="inputGroupSelect01">
                <option selected>--Choose--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <button className="d-flex align-items-center column-gap-1 justify-content-center btn btn-outline-danger bg-danger-subtle text-danger col fw-semibold" type="submit ">
                Search
                <CiSearch />
            </button>
          </form>
        </div>
    </div>
  )
}

export default CoursesSearch
import React from 'react'
import { CiCalendar, CiGlobe } from "react-icons/ci";


const Explorebox = ({description, title, image, price, slash}) => {
  return (
    <div className="px-0 card mx-0 gap-0 flashcard-col col" >
        <div className='card-img-top px-0 mx-0 card-img-holder position-relative'>
            <img src={image} className="" alt="..."/>

            <div className="d-flex explore-img-text justify-content-between align-items-center position-absolute px-3 w-100 ">
                <h4 className=' bg-danger-subtle p-1 px-2 rounded-5 border border-danger d-flex align-items-center column-gap-1'> <CiGlobe className='text-danger'/>Online</h4>
                <h4 className='bg-danger-subtle p-1 px-2 rounded-5 border border-danger d-flex align-items-center column-gap-1'><CiCalendar className='text-danger'/> 12 Months</h4>
            </div>
        </div>
        
        <div className="card-body px-3 ">
            <h5 className="card-title fs-6 fw-semibold">{title}</h5>
            <p className="card-text py-1 explore-desc">{description}</p>
            <h5 className=' fw-bold text-black pb-1 fs-6'>{price}<span className=' text-decoration-line-through'>{slash}</span></h5>
            <a href="#" class="btn btn-primary bg-success w-100 border-0 shadow-lg text-white py-2 rounded-3">See course details</a>
        </div>
    </div>
  )
}

export default Explorebox
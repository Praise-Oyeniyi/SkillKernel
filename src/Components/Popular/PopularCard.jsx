import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { FaPoundSign } from "react-icons/fa";

const PopularCard = ({title, description, style}) => {
  return (
    <div className={`col bg-white rounded-3 overflow-hidden p-3 px-4 h-auto d-flex flex-column justify-content-between ${style}`}>
        <div>
            <h3 className='fs-3 fw-semibold gradient-text'>{title}</h3>
            <p>{description}</p>

            <div className='row align-items-stretch'>
                <div className="col-md-7">
                    <ul className=' list-unstyled popular-list-head d-flex flex-column row-gap-2'>
                        <li className='border border d-flex align-items-center column-gap-1 border-danger rounded-5 px-3 bg-danger-subtle text-danger py-1'>
                            <IoMdCheckmark />
                            Access to the course
                        </li>
                        <li className='border border d-flex align-items-center column-gap-1 border-danger rounded-5 px-3 bg-danger-subtle text-danger py-1'><IoMdCheckmark /> Access to library</li>
                        <li className='border border d-flex align-items-center column-gap-1 border-danger rounded-5 px-3 bg-danger-subtle text-danger py-1'><IoMdCheckmark /> Learn at your own pace</li>
                        <li className='border border d-flex align-items-center column-gap-1 border-danger rounded-5 px-3 bg-danger-subtle text-danger py-1'><IoMdCheckmark /> Tests to booost your learning</li>
                        <li className='border border d-flex align-items-center column-gap-1 border-danger rounded-5 px-3 bg-danger-subtle text-danger py-1'><IoMdCheckmark /> Digital certificate when eligible</li>
                    </ul>
                </div>
                <div className="col-auto">
                <div>
                    <h6 className='small-text text-black-50 fw-semibold'>Course starts</h6>
                    <h4 className='fs-5 fw-bold'>Anytime</h4>
                </div>

                <div>
                    <h6 className='small-text text-black-50 fw-semibold'>Completion time</h6>
                    <h4 className='fs-5 fw-bold'>2 Weeks</h4>
                </div>

                <div>
                    <h6 className='small-text text-black-50 fw-semibold'>Limited time offer</h6>
                    <h4 className='fs-5 fw-bold d-flex align-items-center column-gap-1'> <FaPoundSign />120 <span className=' text-decoration-line-through fw-normal small-text d-flex align-items-center'><FaPoundSign /> 216</span></h4>
                </div>
                </div>

                
            </div>
        </div>
        

        <button className='mt-5 align-self-end  rounded-3 text-white bg-success shadow-lg w-100 py-2'>View course details</button>
    </div>
  )
}

export default PopularCard
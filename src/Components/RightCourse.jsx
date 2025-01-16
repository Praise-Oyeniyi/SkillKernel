import React from 'react'
import RC from '../assets/1.avif'

const RightCourse = () => {
  return (
    <div className='bg-white'>
        <div className='d-flex flex-column row-gap-3 row-gap-md-0 flex-md-row justify-md-content-md-between bg-white py-5 container '>
            <div className="img-full h-auto ">
                <img src={RC} alt=""  className='rounded-3 shadow-lg'/>
            </div>

            <div className="find-courses ">
                <h3 className='fs-2 fw-bolder text-danger mb-3 py-1 gradient-text'>Find the right course for you</h3>
                <p className='fw-normal text-black fs-6'>Choose from <span className='fw-bold'>21,200 courses</span> and <span className='fw-bold'>Learning Paths,</span> dozens added each week</p>
                <div>
                    <h4 className='fs-4 fw-bold'>Popular Topics</h4>
                    <div className='d-flex btn-alot-hold column-gap-2 row-gap-2'>
                    {['Business Management', 'Health and Pschology', 'Business Law', 'Information Technology', 'Personal Development', 'Teaching and Education', 'Finance and Accounting', 'Office Productivity', 'Sales and Marketing', 'Leadership and Entrepreneurship'].map((e, index)=>(
                        <button key={index} className="btn-alot px-md-4 px-1 py-1 rounded-3 border-danger bg-danger-subtle text-danger small-text">{e}</button>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCourse
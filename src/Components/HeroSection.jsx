import React from 'react'

const HeroSection = () => {
  return (
    <div className='container hero-section my-3 py-4 py-md-5 px-4 rounded-2 bg-danger-subtle position-relative'>
        <div className=" row ">
          <div className="col text-white z-3">
            <h3><span className=' text-danger fw-bold'>Online Learning</span>  Designed For Real Life</h3>
            <p>Move your creative journey forward without putting life on hold.
              <br/>
              Our programmes will help you find inspiration that fits your routine
            </p>
            <div className="row column-gap-3 hero-s-btns">
              <button className=' bg-danger fw-semibold text-white py-2 shadow-lg col-5 rounded-2 border-0'>
                Explore all courses
              </button>
              <button className=' bg-white fw-semibold text-black py-2 shadow-lg col-5 rounded-2 border-0'>
                Login
              </button>
            </div>
          </div>

          <div className="col remove"></div>
        </div>
    </div>
  )
}

export default HeroSection
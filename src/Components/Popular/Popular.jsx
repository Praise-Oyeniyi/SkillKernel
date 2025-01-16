import React from 'react'
import PopularCard from './PopularCard'

const Popular = () => {

  const PopData = [
    {
      title:'Executive Master of Business Administration(EMBA) in Public Health',
      description:'The programme is designed to provide insights into understanding and managing the public health system',
      style:'',
    },
    {
      title:'Professional Certificate Course in Understanding Accounting Concepts Principles and Theories',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ',
      style:'remove',
    }
  ]


  return (
    <div className=''>
        <div className="search-body row mt-5 p-3 container">
          <h3 className=' text-black fw-bold fs-2 pb-1'>Popular courses</h3>

          <div id="carouselExampleIndicators" className="carousel slide position-relative">
            <div className="carousel-indicators position-absolute c-indicate">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active pop-courses">
                <div className='row column-gap-3 align-items-stretch'>
                  {PopData.map((e)=>(
                    <PopularCard style={e.style} title={e.title} description={e.description}/>
                  ))}
                  
                </div>
              </div>
              <div className="carousel-item">
                <div className='row column-gap-3 align-items-stretch'>
                  {PopData.map((e)=>(
                    <PopularCard style={e.style} title={e.title} description={e.description}/>
                  ))}
                  
                </div>
              </div>
              <div className="carousel-item">
                <div className='row column-gap-3 align-items-stretch'>
                  {PopData.map((e)=>(
                    <PopularCard style={e.style} title={e.title} description={e.description}/>
                  ))}
                  
                </div>
              </div>
            </div>
            <button className="carousel-control-prev position-absolute prev-btn " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next position-absolute next-btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <button className='w-auto mx-auto my-5 py-2 bg-white rounded-3 shadow-lg border-light-subtle px-4'>View all courses</button>
        </div>

    </div>
  )
}

export default Popular
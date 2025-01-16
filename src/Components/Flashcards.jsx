import React from 'react'

const Flashcards = ({title, description, style}) => {
  return (
    <div
        className={`col flashcard-col rounded-3 overflow-hidden  h-auto d-flex shadow-lg justify-content-between  align-items-center ${style}`}
        >
        <div className='px-md-3 px-2 flashBox d-flex flex-column justify-content-between h-100'>
            <div>
                <h4 className='fs-2 fw-bold text-capitalize '>{title}</h4>
                <p>{description}
                </p>
            </div>
            <button className='rounded-3 border-dark-subtle bg-white text-black py-2 w-100 shadow-lg'>Explore</button>
        </div>
        
    </div>
  )
}

export default Flashcards
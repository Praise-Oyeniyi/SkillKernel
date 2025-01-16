import { useEffect, useRef, useState } from 'react'
import { FaStar } from "react-icons/fa";
import Headshot from '../assets/3.avif'


const Testimonial = () => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const wrapperRef = useRef(null);
  
    const cards = [
      { id: 1, title: 'Card 1', text: 'Description for card 1' },
      { id: 2, title: 'Card 2', text: 'Description for card 2' },
      { id: 3, title: 'Card 3', text: 'Description for card 3' },
      { id: 4, title: 'Card 4', text: 'Description for card 4' },
    ];
  
    const checkScroll = () => {
      if (wrapperRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = wrapperRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };
  
    useEffect(() => {
      checkScroll();
    }, []);
  
    const scroll = (direction) => {
      if (wrapperRef.current) {
        const scrollAmount = 320; // card width + margin
        wrapperRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth'
        });
        setTimeout(checkScroll, 300);
      }
    };



  return (
    <div className=' bg-danger-subtle'>
        <div className='testi-outer position-relative py-5 container'>
            <div className='position-absolute testi-btn d-flex  column-gap-2 '>
            <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`four-pn rounded-circle bg-danger-subtle z-10 border-danger border-1 ${
                canScrollLeft
                    ? ' text-danger cursor-pointer'
                    : 'cursor-not-allowed'
                }`}
            >
                ←
            </button>
            
            <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`four-pn rounded-circle border-danger border-1 bg-danger-subtle z-10 ${
                canScrollRight
                    ? ' text-danger cursor-pointer'
                    : ' cursor-not-allowed'
                }`}
            >
                →
            </button>
            </div>

            
            <div className="testi-inner position-relative d-flex flex-column row-gap-3 row-gap-md-0 flex-md-row justify-md-content-md-between justify-content-between align-items-start">
                <div className='testi-inner-left'>
                    <h3 className='fs-1 fw-bolder text-danger position-relative my-3 py-1'>How learners like you are achieving thier goals</h3>
                    <p className='fw-normal text-black fs-6'>Participants in our courses don't just learn new skills, they enjoy the experience too.</p>
                </div>

                <div className='testi-inner-right d-flex flex-column row-gap-3 row-gap-md-0 flex-md-row justify-md-content-md-between justify-content-start column-gap-4 align-items-start '>
                    <img src={Headshot} alt="..." className='test-img rounded-circle '/>
                    <div>
                        <h3 className='fs-3 fw-bold fst-italic'>Andrew Samson</h3>
                        <h6 className='text-secondary fs-6 fw-light'>Communication Manager, Pepsi</h6>
                        <h4 className='fs-5 fw-bold'>Executive Education</h4>
                        <div className='d-flex align-items-center column-gap-2 my-1'>
                            {[1,2,3,4,5].map(()=>(
                                <FaStar className='star'/>
                            ))}
                        </div>
                    
                        <p className=' text-black-50 pe-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonial
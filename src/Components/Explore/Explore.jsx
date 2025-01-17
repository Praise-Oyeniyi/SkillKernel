import { useEffect, useRef, useState } from 'react';
import React from 'react'
import { Info } from '../../Data/ExploreData'
import Flashcards from '../Flashcards'
import Explorebox from './Explorebox';


const Explore = ({first, second}) => {
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
    <div className='py-3'>
        <div className="position-relative max-w-7xl mx-auto container px-0">
            <div className='position-absolute four-col-pn d-flex column-gap-2 '>
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
            
            <div
            className=" carousel-box"
            >
            <div className="row flex-nowrap column-gap-3 py-4 align-items-stretch">
                {first.map((e, index)=>(
                    <Flashcards title={e.title} description={e.description} style={e.style}/>
                ))}

                {second.map((e, index)=>(
                    // <div key={index} className="col">
                    <Explorebox title={e.title} description={e.description} slash={e.slash} price={e.price} image={e.image}/>
                    // </div>
                    
                ))}
                
            </div>
            </div>
        </div>


        
    </div>
  )
}

export default Explore




{/* <div
                    key={index}
                    className="col rounded-3 overflow-hidden  h-auto d-flex justify-content-center align-items-center"
                >
                    <div className='px-3 '>
                    <h4 className='fs-1 fw-bold'>Explore shorts courses</h4>
                    <p>Explore our newest programmes focused on delivering in-demand skills.
                    </p>
                    <button className='rounded-3 border-dark-subtle bg-white text-black py-2 w-100 shadow-lg'>Explore</button>
                    </div>
                    
                </div>


                <div className="px-0" >
                    <div className='card-img-top bg-danger card-img-holder position-relative'>
                    <img src="..." className="" alt="..."/>

                    <div className="d-flex justify-content-between align-items-center position-absolute px-3 w-100 ">
                        <h4>Online</h4>
                        <h4>12 Months</h4>
                    </div>
                    </div>
                    
                    <div className="card-body px-3">
                    <h5 className="card-title">Executive master of Business Administartor(EMBA) in Media and Entertainment</h5>
                    <p className="card-text py-1">The programme's objective is to equip you with a deeper understanding of entertainment management and media...</p>
                    <h5 className=' fw-semibold text-black pb-1'>E 120  <span className=' text-decoration-line-through'>E 316</span></h5>
                    <a href="#" class="btn btn-primary bg-success w-100 border-0 shadow-lg text-white py-2 rounded-3">See more details</a>
                    </div>
                </div>


                <div className="col"></div>
                <div className="col"></div>
                ))} } */}
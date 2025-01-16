import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='footer-outer bg-black py-5 '> 
        <div className='footer-inner container '>
            <div className='d-flex flex-column row-gap-3 justify-content-start row-gap-md-0 flex-md-row justify-content-md-between align-items-start w-75'>
            <div>
                <h4 className='fw-semibold text-white fs-4'>About us</h4>
                <ul className='fs-6 list-unstyled text-white-50 fw-normal'>
                <li>Our Mission and Vision</li>
                <li>Our Partners</li>
                <li>Become a Partner</li>
                <li>Contact us</li>
                <li>Reviews</li>
                </ul>
            </div>
            
            <div>
                <h4 className='fw-semibold text-white fs-4'>Popular Subjects</h4>
                <ul className='fs-6 list-unstyled text-white-50 fw-normal'>
                <li>Business Management</li>
                <li>Personal Development</li>
                <li>usiness Law</li>
                <li>Sales and Marketing</li>
                <li>Office Prodcutivity</li>
                </ul>
            </div>
            
            <div>
                <h4 className='fw-semibold text-white fs-4'>Small Prints</h4>
                <ul className='fs-6 list-unstyled text-white-50 fw-normal'>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                </ul>
            </div>
            </div>

            <div className="footer-bottom d-flex flex-column row-gap-1 justify-content-start justify-content-md-between row-gap-md-0 flex-md-row align-items-md-center my-2 py-2 py-md-0">
                <div className='py-1'>
                    <h4 className="fs-4 text-white fw-semibold">Sign up to our newsletter</h4>
                    <p className='text-white small-text'>Stay up to date with the latest news, announcements, and articles</p>
                </div>

                <form className="d-flex flex-column row-gap-3 row-gap-md-0 footer-input flex-md-row position-relative col-5" role="search">
                    <input className="form-control position-relative  py-2" type="email" placeholder="Enter your email address" aria-label="Enter your email address"/>
                    <button className="btn position-absolute search-icon bg-danger py-1 footer-btn  fw-semibold text-white shadow-lg" type="submit ">Subscribe</button>
                </form>

            </div>

            <div className="d-flex flex-md-row flex-column row-gap-3 row-row-gap-md-0 justify-content-between align-items-center">
                <div className="social-icons d-flex column-gap-2 pt-1">
                    <div className=' bg-body-secondary rounded-circle'>
                        <SlSocialFacebook className=' text-danger'/>
                    </div>
                    <div className=' bg-body-secondary rounded-circle'>
                        <SlSocialInstagram className=' text-danger'/>
                    </div>
                    <div className=' bg-body-secondary rounded-circle'>
                        <SlSocialLinkedin className=' text-danger'/>
                    </div>
                </div>

            <p className='text-white-50 text-small  fw-normal d-flex align-items-center column-gap-1'>
                <FaRegCopyright />
                SkillKernel 2023. All right reserved</p>

            </div>
            
            
        </div>
    </footer>
  )
}

export default Footer
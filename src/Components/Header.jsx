import React from 'react'
import { CiSearch } from "react-icons/ci";


const Header = () => {
  return (
    <header className="mx-auto shadow-sm">
        <nav className="container mx-auto navbar navbar-expand-lg  px-3 px-md-0 py-md-3">
          <div className="contain d-flex ps-md-0 justify-content-between align-items-center">
            <a className="navbar-brand px-md-3 ps-md-0 text-danger logo fw-semibold" href="#">SkillKernel</a>
            
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


             
            <div className="collapse navbar-collapse me-md-5" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0  col-auto fw-bold">
                <li className="nav-item dropdown mt-3 mt-md-0">
                  <a className="nav-link dropdown-toggle shadow-lg rounded-2 px-3 bg-danger text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Business</a></li>
                    <li><a className="dropdown-item" href="#">Trade</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-md-2">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Reviews</a>
                </li>
              </ul>


              <form className="d-flex col-md-5 position-relative offset-md-1" role="search">
                <input className="form-control position-relative" type="search" placeholder="What do you want to learn" aria-label="Search"/>
                <button className="btn position-absolute search-icon s-icon bg-danger rounded-5 shadow-lg text-white" type="submit "><CiSearch /></button>
              </form>


              <div className='log-btn-nav mt-3 mt-md-0 d-flex justify-content-center justify-content-md-start column-gap-3 col-md-auto offset-md-1 fw-bold'>
                <button className="btn btn-outline-success shadow-lg text-black border border-dark-subtle" type="submit">Log In</button>
                <button className="btn btn-outline-success shadow-lg border-0 bg-danger text-white" type="submit">Apply now</button>
              </div>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header
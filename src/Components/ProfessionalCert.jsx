import React from 'react'
import Flashcards from './Flashcards'

const ProfessionalCert = () => {
    const Info = [
        {
            title:'Find the Right Program For Your Career',
            description:'Explore our newest programmes focused on delivering in-demand skills.',
            style:'bg-warning py-5',
        },
        {
            title:'Learn and Gain Expertise at youe Own Pace',
            description:'Explore our newest programmes focused on delivering in-demand skills.',
            style:'bg-info py-5',
        },
        {
            title:'Earn a valuable credential',
            description:'Explore our newest programmes focused on delivering in-demand skills.',
            style:'bg-danger py-5',
        },
        {
            title:'Stand out in your field',
            description:'Explore our newest programmes focused on delivering in-demand skills.',
            style:'bg-success py-5',
        },
    ]



  return (
    <div className='py-3'>
        <div className='container'>
            <div className='px-0'>
                <h4 className='fs-2 fw-bold'>How a Professional Certificate Works</h4>
                <p className='fs-6'>Upskill, reskill or pursue a passion with short courses across every subject, whether you are a beginner or already an expert</p>
            </div>

            <div className='row column-gap-3 row-gap-3 row-gap-md-0'>
                {Info.map((e, index)=>(
                    <Flashcards title={e.title} description={e.description} style={e.style}/>
                ))}

            </div>
        </div>
    </div>
  )
}

export default ProfessionalCert
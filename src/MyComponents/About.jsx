import React from 'react'
import Common from './Common'
import web from '../images/writing.png'
import Testimonial from './Testimonial'
import { NavLink } from 'react-router-dom'
import Flash from 'react-reveal';

const About = (props) => {
    return (
        <>
        
            {/* <Common
                name="Welcome to About Page"
                imgsrc={web}
                visit="/contact"
                btname="Contact Us" /> */}
                <div className='abouts'>
                   
                <div className='container' >
                <div  className='row'>
                <div className='col-3'>
                            <div className='client'>
                                <h2  className='aboutus'><Flash>About HimSal</Flash></h2>
                            </div>

                        </div>
                </div>

                </div>

                </div>
                <div id="header" className="about">
                <div className="container">
               <div className="row aboutrow">
                   <div className="col-6 aboutcol p-45">
                <h4><span className='highlight'>WELCOME TO HIMSAL GR</span>OUP</h4>
                <p>The firm has been established in the year August, 2023 with a vision to shape
                 new standards in deliverance of services. Since then it has been synergic and as a consequence of
                  Herculean endeavours,As a partner-led business, each of our clients has their own client relationship partner.Our experienced professionals oversee all affairs in order to have a
                 clear comprehension of our customer’s needs, based on which a consistency of quality services is assured.We emphasise on maximum communication to ensure clear-cut apprehension of issues and areas of concern. Therefore, we stress on strong communication with the client and consider their feedback extremely valuable.
                  When we learn about things we could do better, we act swiftly to address this.</p>
                {/* <div className="about_btn"> */}
                {/* <NavLink to="/contact" className="btn btn-outline-primary rounded-pill startbutton">READ MORE</NavLink> */}
                {/* </div> */}
                   </div>
                   <div className="col-6">
                    <div className="img-fluid animated header-img about__image">
                    <img src={web} alt="web"/>

                    </div>
                   </div>
               </div>
               

                </div>

                </div>
               
                <Testimonial/>
        </>
    )
}
export default About

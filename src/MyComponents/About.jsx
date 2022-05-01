import React from 'react'
import Common from './Common'
import web from '../images/writing.png'
import Testimonial from './Testimonial'
import { NavLink } from 'react-router-dom'

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
                                <h2  className='aboutus'>About HimSal</h2>
                            </div>

                        </div>
                </div>

                </div>

                </div>
                <div id="header" className="about">
                <div className="container">
               <div className="row aboutrow">
                   <div className="col-6 aboutcol p-45">
                <h1>WELCOME TO HIMSAL GROUP</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
                <div className="about_btn">
                <NavLink to="/contact" className="btn btn-outline-primary rounded-pill startbutton">READ MORE</NavLink>
                </div>
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

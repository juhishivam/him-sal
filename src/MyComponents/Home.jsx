import React from 'react'
import Common from './Common'
import whyus from '../images/hands-1.png'

import web from '../images/people.png'
import CarouselContainer from './Carousel'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <CarouselContainer />
            <div id="header" className="container">
                <div className='row'>
                    <div className="col-6 aboutcol p-45">
                        <h3 className="head-line"><strong className="brand-name"> HimSal</strong></h3>
                        <h1 className="my-3 head-line2"> We are the team of tallented<span style={{ fontWeight: 500, color: "red" }}> Professionals</span></h1>
                        <div className="about_btn">
                            <NavLink to="/service" className="btn btn-outline-primary rounded-pill startbutton">READ MORE</NavLink>
                        </div>
                    </div>
                    <div className="col-5 homeimg">
                            <img src={web} className="img-fluid animated header-img order-1 order-lg-2" alt="web" />
                    </div>

                </div>
            </div>
            <div className="home2">
                <div className="container">
                    <div className="home__text">
                        <div>
                            <h1><span style={{color:'darkblue'}}>Feel Free </span>to Contact Us</h1>
                            <div className="home2__btn">
                                <NavLink to="/contact" className="btn btn-outline-primary rounded-pill startbutton">Contact Us</NavLink>
                            </div>
                        </div>

                    </div>

                </div>
            </div> 
            <div className="container">
                <div className="row aboutrow">
                    
                    <div className="col-6">
                        <div className="img-fluid animated header-img about__image">
                            <img src={whyus} alt="whyus" />

                        </div>
                    </div>
                    <div className="col-6 aboutcol p-45">
                        <h3>Why Us</h3>
                       
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem</p>
                        <div className="why_btn">
                            <NavLink to="/whyus" className="btn btn-outline-primary rounded-pill whybutton">KNOW MORE</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Home

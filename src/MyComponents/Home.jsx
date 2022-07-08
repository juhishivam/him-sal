import React, {useState,useEffect} from 'react'
import Common from './Common'
import whyus from '../images/hands-1.png'
import Typewriter from 'typewriter-effect'
import web from '../images/people.png'
import CarouselContainer from './Carousel'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Zoom from 'react-reveal/Zoom';
const Home = () => {
    const [state] = useState({
        title:"HimSal",
        titletwo:"We are the team of tallented",
        title3: " Professionals"
    })
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (
        <>
            <CarouselContainer />
            <div id="header" className="container">
                <div className='row'>
                    <div className="col-6 aboutcol p-45">
                        <h3 data-aos="fade-left" className="head-line"><strong className="brand-name"> {state.title}</strong></h3>
                        <h1 data-aos="fade-right" className="my-3 head-line2"> {state.titletwo}</h1>
                        <h1 data-aos="fade-left" className="my-3 head-line3"><span style={{ fontWeight: 500, color: "red" }}>{state.title3}</span></h1>

                        <div className='text'>
                            <Typewriter 
                            options={{
                                autoStart:true,
                                loop:true,
                                delay: 40,
                                strings:["Auditing & Assurance Services","Accounting","GST","Trust & Co-Operative"]
                           }} />
                        </div>
                        <div>
                            <NavLink to="/service" className="btn btn-outline-primary rounded-pill startbutton">Our Services</NavLink>
                        </div>
                    </div>
                    {/* <div className="col-6 homeimg"> */}
                    <div className="col-6">
                            <img src={web} className="img-fluid animated header-img order-1 order-lg-2" alt="web" />
                    </div>

                </div>
            </div>
            <div  className="home2">
                <div  data-aos="fade-left" className="container">
                    <div className="home__text">
                        <div>
                            <h1><span className='highlight' style={{color:'darkblue'}}>Feel Free </span>to Contact Us</h1>
                            <div className="home2__btn">
                                <NavLink to="/contact" className="btn btn-outline-primary rounded-pill startbutton">Contact Us</NavLink>
                            </div>
                        </div>

                    </div>

                </div>
            </div> 
            <div data-aos="fade-up" className="container">
                <div className="row aboutrow">
                    
                    <div className="col-6">
                        <div className="img-fluid animated header-img about__image">
                            <img src={whyus} alt="whyus" />

                        </div>
                    </div>
                    <div className="col-6 aboutcol p-45">
                        <h3>Why Us</h3>
                       
                        <p><Zoom left cascade>Him-Sal  is focused on creating sustainable value growth through innovative solutions and unique pathways.
                             Our values are at the heart of our business reputation and are essential to our continued success.
                             We foster an environment to instill these values in every facet of our organization.With "Quality is Priority"
                              as an ultimate aspiration....</Zoom></p>
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

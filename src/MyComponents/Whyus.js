import React from 'react'
import web from '../images/hands-2.jpg'
import { NavLink } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

const Whyus = () => {
    return (
        <div>
            <div className="container whyusrow">
                <div className="row">

                    <div className="col-6">
                        <div className="img-fluid animated header-img about__image">
                        <Pulse> <img src={web} alt="web" /></Pulse>

                        </div>
                    </div>
                    <div className="col-6 aboutcol p-45">
                        <h3>Why Us</h3>
                        <h4>WELCOME TO <span className='highlight'> HIM-SAL GR</span>OUP</h4>
                        <p><Zoom bottom cascade>Him-Sal  is focused on creating sustainable value growth through innovative solutions and unique pathways.
                             Our values are at the heart of our business reputation and are essential to our continued success.
                             We foster an environment to instill these values in every facet of our organization.With "Quality is Priority"
                              as an ultimate aspiration, Him-Sal vision is to nurture a professional firm of repute which is competitive,
                               dynamic and focused team leader in the areas of its operation, providing the best opportunity to progress
                              and grow to all those who are associated with it and also serving the best interests of the clients.</Zoom></p>
                        {/* <div className="about_btn">
                            <NavLink to="/contact" className="btn btn-outline-primary rounded-pill startbutton">READ MORE</NavLink>
                        </div> */}
                    </div>
                </div>

            </div>

            <div className='clients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='client'>
                                <h1>120</h1>
                                <p>Awesome Clients</p>

                            </div>

                        </div>
                        <div className='col-3'>
                            <div className='client'>
                                <h1>12</h1>
                                <p>Services</p>

                            </div>

                        </div>
                        <div className='col-3'>
                            <div className='client'>
                                <h1>120</h1>
                                <p>Satisfied Clients</p>

                            </div>

                        </div>
                        <div className='col-3'>
                            <div className='client'>
                                <h1>120</h1>
                                <p>Awesome Employees</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Whyus

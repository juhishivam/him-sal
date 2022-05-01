import React from 'react'
import web from '../images/hands-2.jpg'
import { NavLink } from 'react-router-dom'

const Whyus = () => {
    return (
        <div>
            <div className="container whyusrow">
                <div className="row">

                    <div className="col-6">
                        <div className="img-fluid animated header-img about__image">
                            <img src={web} alt="web" />

                        </div>
                    </div>
                    <div className="col-6 aboutcol p-45">
                        <h3>Why Us</h3>
                        <h1>WELCOME TO HIMSAL GROUP</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem</p>
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

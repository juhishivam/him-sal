import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex">
                <div className="container">
                    <div className='row'>
                        <div className='col-6 max-auto'>
                            <div className="row home-main">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center ">
                                    <h1 className="head-line">{props.name}<strong className="brand-name"> HimSal</strong></h1>
                                    <h2 className="my-3 head-line2">
                                        We are the team of tallented Developers
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-primary rounded-pill startbutton">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 ">
                                    <img src={props.imgsrc} className="img-fluid animated header-img" alt="home img" />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
export default Common

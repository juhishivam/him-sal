import React from 'react'
import { NavLink } from 'react-router-dom'
import HeadShake from 'react-reveal/HeadShake';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Spin from 'react-reveal/Spin';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';

const Footer = () => {
  return (
    <>

      <footer className="w-100 bg-dark text-center footer border-0">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4"
            style={{ marginTop: 50, marginBottom: 50, color: "white" }}
          >
            {/* <img className=" imgfuttorlogo" src={logo} alt="Logo" /> */}
            <p>
              Our Social Network
            </p>
           
              <div >
               <a target="_blank" href="" style={{margin:'10px' , fontSize:"40px"}}>
               <HeadShake><i class="fa fa-facebook"></i></HeadShake>
                </a>
              
              
                <a
                  target="_blank"
                  href=""
                >
                  <Pulse><i class="fa fa-instagram" style={{margin:'10px', fontSize:"40px"}}></i></Pulse>
                </a>
              
              
                <a target="_blank" href="">
                <Flash><i class="fa fa-whatsapp" style={{margin:'10px', fontSize:"40px"}}></i></Flash>
                </a>
              
              
                <a
                  target="_blank"
                  href=""
                >
                  <Shake><i class="fa fa-linkedin" style={{margin:'10px', fontSize:"40px"}}></i></Shake>
                </a>
              
              
                <a target="_blank" href="">
                <Spin><i class="fa fa-twitter" style={{margin:'10px', fontSize:"40px"}}></i></Spin>
                </a>
              
              
                <a
                  target="_blank"
                  href=""
                >
                 <RubberBand><i class="fa fa-google" style={{margin:'10px' , fontSize:"40px"}}></i></RubberBand> 
                </a>
                
           </div>
          </div>
          <div
            className="col-lg 4 "
            style={{ marginTop: 50, marginBottom: 50, color: "white" }}
          >
            <h4 className="h41 text-center">Quick Links</h4>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i> Accounting</NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i>Customer Support</NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i> Get your Tax Information </NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"> <i class="fa fa-check"></i>Loan Information </NavLink>
            </p>
            <p>
              <NavLink className="footerAnchor" to="/"><i class="fa fa-check"></i> GST Information </NavLink>
            </p>
          </div>
          <div
            className="col-lg 4 "
            style={{ marginTop: 50, marginBottom: 50, color: "white" }}
          >
            <h4 className="h41  text-center">INFORMATION</h4>
            <p>
              <span>
                <NavLink className="footerAnchor" to="/privacy"> <i class="fa fa-check"></i> Privacy Policy</NavLink>

              </span>
            </p>
          </div>
        </div>
      </div>
      <div> <p className='footer-p'>© 2021 HimSal. All right reserverd</p></div>
       

      </footer>
    </>
  )
}
export default Footer;
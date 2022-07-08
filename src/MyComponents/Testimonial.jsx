import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from '@material-ui/core'
import img1 from '../images/ram.jpg'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Zoom from 'react-reveal/Zoom'

const PreviousBTn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
        <ArrowBackIos style={{color:"gray", fontSize:"45px"}}/>

        </div>
    )
}
const NextBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{color:"gray", fontSize:"45px"}}/>

        </div>
    )
}

function Testimonial() {
    return (
        <div className="testimonial" style={{display:"flex", justifyContent:"center"}}>
        <Zoom><div style={{width:"50%"}}>
            <Slider 
            prevArrow={<PreviousBTn/>}
            nextArrow={<NextBtn/>}
            >
                <Card img={img1} />
                <Card img={img1} />
                <Card img={img1} />
            </Slider>
        </div></Zoom>
        </div>
    )
};
const Card = ({img}) => {
    return (
        <div style={{display:"flex", alignItems:"center", flexDirection:"column", textAlign:"center", color:"gray"}}>
            <Zoom><Avatar imgProps={{style:{borderRadius:"50%"}}} 
                    src={img} 
                    style={{width:120, height:120,border:"1px solid lightgray", padding:7}} /></Zoom>
            <p>He is a Fellow member of The Institute of Chartered Accountants of India with B.Com (Hons). He is having vast experience in the field of direct
                 & indirect taxation, Statutory Audits, Internal Audits, Stock Audits, Statutory Compliances.</p>
                <p style={{fontStyle:"italic", marginTop:25}}><span style={{fontWeight:500,color:"blue"}}>RAM SHANKAR</span>, PROFILE</p>
        </div>
    )
}

export default Testimonial

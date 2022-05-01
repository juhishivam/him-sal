import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from '@material-ui/core'
import img1 from '../images/ram.jpg'
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


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
        <div style={{width:"50%"}}>
            <Slider 
            prevArrow={<PreviousBTn/>}
            nextArrow={<NextBtn/>}
            >
                <Card img={img1} />
                <Card img={img1} />
                <Card img={img1} />
            </Slider>
        </div>
        </div>
    )
};
const Card = ({img}) => {
    return (
        <div style={{display:"flex", alignItems:"center", flexDirection:"column", textAlign:"center", color:"gray"}}>
            <Avatar imgProps={{style:{borderRadius:"50%"}}} 
                    src={img} 
                    style={{width:120, height:120,border:"1px solid lightgray", padding:7}} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem</p>
                <p style={{fontStyle:"italic", marginTop:25}}><span style={{fontWeight:500,color:"blue"}}>RAM SHANKAR</span>, PROFILE</p>
        </div>
    )
}

export default Testimonial

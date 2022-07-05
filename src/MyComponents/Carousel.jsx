import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/frame1.jpg'
import image2 from '../images/acc1.jpg'
import image3 from '../images/tax1.jpg'

 const CarouselContainer = () => {
    return (
        <Carousel controls={false} fade={true} pause={false} className="carosole">
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="textC" >
            <h3 className="textcar" >Grow Yourself with Us</h3>
            <p className="paracar"> To grow yourself, you must first discover yourself</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="textC">
            <h3 className="textcar">Start My Business</h3>
            <p className="paracar">HimSal is serving as a platform to enhance strategic cooperation and develop synergies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="textC">
            <h3 className="textcar">(GST Registration) India</h3>
            <p className="paracar"> Mandatory for manufacturer, trader and service provider in India.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default CarouselContainer

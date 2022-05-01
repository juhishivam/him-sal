import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from '../images/klc2.jpg'
import image2 from '../images/graph.jpg'
import image3 from '../images/taxes.jpg'

 const CarouselContainer = () => {
    return (
        <Carousel controls={false} fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="textC" >
            <h3 className="textcar">Grow Yourself with Us</h3>
            <p className="paracar"> To grow yourself, you must first discover yourself</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="textcar">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block imgcarosel"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="textcar">Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default CarouselContainer

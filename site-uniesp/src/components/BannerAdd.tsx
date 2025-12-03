import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg"
const BannerAdd = () => {
  return (
    <>
    <Container className="my-4 p-0" fluid>

        <Carousel fade interval={5000} controls={true} indicators={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Vestibular 2026.1"
                    style={{ borderRadius: '8px' }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img

                    className="d-lock w-100"
                    src={banner2}
                    alt="Inova uniesp 2025"
                    style={{ borderRadius: '8px' }}
                />
            </Carousel.Item>
        </Carousel>
    </Container>
    </>
  )
}

export default BannerAdd
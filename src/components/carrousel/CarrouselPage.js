import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../assets/images/image-slider1.png';
import Slider2 from '../../assets/images/image-slider2.png';
import Slider3 from '../../assets/images/image-slider3.png';
import Slider4 from '../../assets/images/image-slider4.png';

function CarrouselPage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider4}
                    alt="Four slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarrouselPage;
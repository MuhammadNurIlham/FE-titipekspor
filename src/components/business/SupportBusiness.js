import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import OurService1 from '../../assets/images/titipweb.png';
import OurService2 from '../../assets/images/titiplegal.png';

const items = [
    {
        id: 1,
        image: OurService1,
        title: 'Item 1',
    },
    {
        id: 2,
        image: OurService2,
        title: 'Item 2',
    },
    {
        id: 3,
        image: OurService1,
        title: 'Item 3',
    },
    {
        id: 4,
        image: OurService2,
        title: 'Item 4',
    },
    {
        id: 5,
        image: OurService1,
        title: 'Item 5',
    },
    {
        id: 6,
        image: OurService2,
        title: 'Item 6',
    },
    {
        id: 7,
        image: OurService1,
        title: 'Item 7',
    },
    {
        id: 8,
        image: OurService2,
        title: 'Item 8',
    },
];

function SupportBusiness() {
    return (
        <Container>
            <div className='kelasekspor d-flex justify-content-between'>
                <h3>Support Bussines</h3>
                <h6 className='text-danger'>Lihat Semua</h6>
            </div>
            <Row>
                <Col>
                    <Carousel interval={2000}>
                        {items.reduce((rows, item, index) => {
                            if (index % 3 === 0) rows.push([]);
                            rows[rows.length - 1].push(item);
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <Carousel.Item key={rowIndex}>
                                <Row className="justify-content-center">
                                    {row.map((item) => (
                                        <Col key={item.id} md={4}>
                                            <img
                                                className="d-block w-100"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <Carousel.Caption>
                                                <h5>{item.title}</h5>
                                            </Carousel.Caption>
                                        </Col>
                                    ))}
                                </Row>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default SupportBusiness;
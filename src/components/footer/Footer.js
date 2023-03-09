import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Icon from '../../assets/images/titipeksporwhite.png'

function Footer() {
    return (
        <footer className="bg-danger py-3">
            <Container>
                <Row>
                    <Col md={6}>
                        <img
                            src={Icon}
                            width="300"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h4>Tentang Kami</h4>
                        <p>Kami adalah start up logistik yang membantu para umkm atau ukm untuk ekspor ke seluruh dunia dengan teknologi dan komunitas ekspor.</p>
                    </Col>
                    <Col>
                        <h4>Layanan</h4>
                        <p>Titipweb</p>
                        <p>Titiplegal</p>
                        <p>Titipimpor</p>
                    </Col>
                    <Col>
                        <h4>Payment</h4>
                        <h6>BCA</h6>
                    </Col>
                    <Col>
                        <h4>Informasi</h4>
                        <p>FAQ</p>
                        <p>Syarat & Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                        <p>Affiliasi</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

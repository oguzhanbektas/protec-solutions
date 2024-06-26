import React from "react";
import {
    Container,
    Row,
    Col, Card, CardBody, Badge, Button,
} from "reactstrap";

import image from '../../assets/img/images/q1.jpg';
import {Link} from "react-router-dom";

class Sumsub extends React.Component {
    state = {};

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                {/*<DemoNavbar />*/}
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-250" style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'fixed',
                            backgroundSize: '100% 100% ',
                            backgroundImage: `url(${image})`
                        }}>
                            <div className="shape shape-style-1 shape-default">
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">

                                    <Row>
                                        <Col lg="12" className="overlay justify-content-center text-center mb-lg">
                                            <h1 className="display-7 text-white pt-200">
                                                Sumsub
                                            </h1>
                                            <p className="lead text-white">
                                                KYC , KYB ve KYT ürünlerimiz.
                                            </p>
                                            <Container className="pt-200">
                                                <Row className="justify-content-center">
                                                    <Col lg="12">
                                                        <Row className="row-grid">
                                                            <Col lg="4">
                                                                <Card className="card-lift--hover shadow border-0">
                                                                    <CardBody className="py-5">
                                                                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                                            <i className="ni ni-check-bold" />
                                                                        </div>
                                                                        <h6 className="text-primary text-uppercase">
                                                                            KYC
                                                                        </h6>
                                                                        <p className="description mt-3">
                                                                            KYC ürünümüzle müşterilerinizi daha hızlı daha doğru ve daha pürüzsüz
                                                                            şekilde içeri alabilirsiniz.
                                                                        </p>
                                                                        <div>
                                                                            <Badge color="primary" pill className="mr-1">
                                                                                design
                                                                            </Badge>
                                                                            <Badge color="primary" pill className="mr-1">
                                                                                system
                                                                            </Badge>
                                                                            <Badge color="primary" pill className="mr-1">
                                                                                creative
                                                                            </Badge>
                                                                        </div>
                                                                        <Button
                                                                            className="mt-4"
                                                                            color="primary"
                                                                            to="/kyc-page" tag={Link}
                                                                        >
                                                                            Tıklayınız
                                                                        </Button>
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                            <Col lg="4">
                                                                <Card className="card-lift--hover shadow border-0">
                                                                    <CardBody className="py-5">
                                                                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                                            <i className="ni ni-istanbul" />
                                                                        </div>
                                                                        <h6 className="text-success text-uppercase">
                                                                            KYT
                                                                        </h6>
                                                                        <p className="description mt-3">
                                                                            Yapay zeka teknolojilerimiz sürekli güncellenerek bugünkü haline ulaştı. Siz de bu teknolojide yerinizi alın ve riski minimize edin.
                                                                        </p>
                                                                        <div>
                                                                            <Badge color="success" pill className="mr-1">
                                                                                business
                                                                            </Badge>
                                                                            <Badge color="success" pill className="mr-1">
                                                                                vision
                                                                            </Badge>
                                                                            <Badge color="success" pill className="mr-1">
                                                                                success
                                                                            </Badge>
                                                                        </div>
                                                                        <Button
                                                                            className="mt-4"
                                                                            color="success"
                                                                            to="/kyt-page" tag={Link}
                                                                        >
                                                                            Tıklayınız
                                                                        </Button>
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                            <Col lg="4">
                                                                <Card className="card-lift--hover shadow border-0">
                                                                    <CardBody className="py-5">
                                                                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                                            <i className="ni ni-planet" />
                                                                        </div>
                                                                        <h6 className="text-warning text-uppercase">
                                                                           KYB
                                                                        </h6>
                                                                        <p className="description mt-3">
                                                                            KYC ürünümüzle müşterilerinizi daha hızlı daha doğru ve daha pürüzsüz şekilde içeri alabilirsiniz.
                                                                        </p>
                                                                        <div>
                                                                            <Badge color="warning" pill className="mr-1">
                                                                                marketing
                                                                            </Badge>
                                                                            <Badge color="warning" pill className="mr-1">
                                                                                product
                                                                            </Badge>
                                                                            <Badge color="warning" pill className="mr-1">
                                                                                launch
                                                                            </Badge>
                                                                        </div>
                                                                        <Button
                                                                            className="mt-4"
                                                                            color="warning"
                                                                            to="/kyb-page" tag={Link}
                                                                        >
                                                                            Tıklayınız
                                                                        </Button>
                                                                    </CardBody>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                    </div>
                </main>
            </>
        );
    }
}

export default Sumsub;

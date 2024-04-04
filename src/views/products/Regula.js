import React from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";

import image from '../../assets/img/images/q1.jpg';

class Regula extends React.Component {
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
                                                Regula
                                            </h1>
                                            {/*<p className="lead text-white">*/}
                                            {/*    Müşterilerinizi hızlıca onboard edin.*/}


                                            {/*</p>*/}
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
                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="7" className="overlay justify-content-center text-center mb-lg lead">
                                        Müşterilerinizi hızlıca onboard edin
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/12.jpg")}
                                            style={{width: "100%"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </main>
            </>
        );
    }
}

export default Regula;

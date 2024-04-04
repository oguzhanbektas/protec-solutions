import React from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";

import image from '../../assets/img/images/q4.jpg';


class Whistle extends React.Component {
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
                                        <Row className="justify-content-center text-center mb-lg">
                                            <Col lg="12">
                                                <h1 className="display-3 text-white">
                                                    Whistle Blowing
                                                </h1>
                                                <p className="lead text-white">
                                                    Şirket içi etik hattı için geliştirdiğimiz system ile denetçiler ve
                                                    yönetim alt kademelerdeki problemlere karşı takipte olabilir.
                                                    Herhangi bir isimsiz ihbar bu hat üzerinden işlenir, değerlendirilir
                                                    ve raporlanır.
                                                </p>
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

    export default Whistle;

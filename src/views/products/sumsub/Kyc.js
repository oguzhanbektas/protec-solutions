import React from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";

import image from '../../../assets/img/images/q1.jpg';


class Kyc extends React.Component {
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
                                            <h1 className="display-7 text-white pt-100">
                                                KYC
                                            </h1>
                                            <p className="lead text-white">
                                                KYC ürünümüzle müşterilerinizi daha hızlı daha doğru ve daha pürüzsüz
                                                şekilde içeri alabilirsiniz.
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

                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> Face Match and Liveness</b>
                                    </Col>
                                    <Col lg="7" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            Yüz eşleştirme teknolojisi ile rakiplerinizin bir adım önünde olun ve
                                            hızlıca
                                            içeri alın.

                                        </p>

                                        <ul>
                                            <li>Hızlı</li>
                                            <li>Güvenilir</li>
                                            <li>Tekrarlanabilir</li>
                                        </ul>
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/1.jpg")}
                                            style={{width: "100%"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Container>

                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> Document Check</b>
                                    </Col>
                                    <Col lg="7" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            Her türlü kimlik dolandırıcılığına karşı kendinizi koruyun.
                                        </p>

                                        <ul>
                                            <li>Her zaman güncel verilerle eğitilmiş bir yapay zeka</li>
                                            <li>Arka plan kontrolü ile şablon üzeri dolandırıcılığa karşı etkili</li>
                                            <li>Hızlı</li>
                                        </ul>
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/2.jpg")}
                                            style={{width: "100%"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Container>

                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> AML Kontrolü</b>
                                    </Col>
                                    <Col lg="7" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            İçeriye aldığınız kişileri denetleyin.

                                        </p>

                                        <ul>
                                            <li>Ölçeklenebilir</li>
                                            <li>Güvenilir</li>
                                            <li>Yönetmeliğe uygun</li>
                                        </ul>
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/3.jpg")}
                                            style={{width: "100%"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Container>

                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> Telefon ve Email Risk Skorlaması </b>
                                    </Col>
                                    <Col lg="7" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            Telefon ve e-mailden müşterilerinizi skorlayın riskli olanları yeniden
                                            inceleyin.
                                        </p>

                                        <ul>
                                            <li>Kolay Entegrasyon</li>
                                            <li>Detaylı Veri Bankası</li>
                                            <li>Üstün Risk Tespit Kapasitesi</li>
                                        </ul>
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/4.jpg")}
                                            style={{width: "100%"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Container>

                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> Yaş Tahmini </b>
                                    </Col>
                                    <Col lg="7" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            Üstün başarı ile müşterilerinizin yaşını bulun ve sistemlerle karşılaştırın.<br/>
                                            Ekstra güvenlik bariyeri ekleyin.
                                        </p>

                                        <ul>
                                            <li>Minimum hata</li>
                                            <li>Güvenilir</li>
                                            <li>Ekstra zamana ihtiyaç duymaz</li>
                                        </ul>
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/5.jpg")}
                                            style={{width: "100%"}}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Container>

                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> Bilinen Yüz Kontrolü</b>
                                    </Col>
                                    <Col lg="7" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            İçeri almak istemediğiniz kişileri ekleyin, güvenlikten emin olun.
                                        </p>

                                        <ul>
                                            <li>Başında engelleyin</li>
                                            <li>Hızlı çözüm alın</li>
                                            <li>Zincirleme dolandırıcılıkların önüne geçin</li>
                                        </ul>
                                    </Col>
                                    <Col lg="5">
                                        <img
                                            alt="..."
                                            src={require("assets/img/images/6.jpg")}
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

export default Kyc;

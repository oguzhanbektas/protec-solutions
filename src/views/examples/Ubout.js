import React from "react";
import {
    Container,
    Row,
    Col,
} from "reactstrap";

class Ubout extends React.Component {
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
                        <section className="section section-lg section-shaped pb-250">
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
                                                Hakkımızda
                                            </h1>
                                            <p className="lead text-white">
                                                Protec Solutions şirketi 2023 yılında sektörün önce gelen kişileri
                                                tarafından Levent Istanbul adresinde kurulmuştur.
                                                Misyonumuz öncelikle ülkemizde dolandırıcılığın önlenmesi, son
                                                kullanıcılara kadar gerekli eğitim sistemlerinin sağlanması yoluyla
                                                halkımızı eğitmek ve firmalara bu konuda danışmanlık sağlamaktır.
                                                Şirketimiz ürünleri son teknoloji ile donatılmış olup sektörün en iyi
                                                şirketleriyle ortaklıklar sağlamıştır. Vizyonumuz 2030 ve 2050 vizyonu
                                                olarak iki kısma ayrılmaktadır. 2030 vizyonumuzda Türkiye’de bizimle
                                                çalışan firmaların minimum seviyede dolandırıcılığa uğramasını sağlamak
                                                ve bu yönde müşterilerimize destek vermektir. 2050 vizyonumuzda ise
                                                Türkiye dışında Orta-Asya, Ortadoğu ve Avrupa bölgelerinde konusunda
                                                uzman ve öncü bir firma olarak yoluna devam etmesidir. Bizimle
                                                çalıştığınız takdirde her zaman son teknolojiye sahip olduğunuza emin
                                                olabilirsiniz.
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

export default Ubout;

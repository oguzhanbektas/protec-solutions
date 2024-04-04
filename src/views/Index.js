/*eslint-disable*/
import React from "react";

// reactstrap components
import {Col, Container, Row} from "reactstrap";

// core components

// import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
// import Hero from "./IndexSections/Hero.js";
// import Buttons from "./IndexSections/Buttons.js";
// import Inputs from "./IndexSections/Inputs.js";
// import CustomControls from "./IndexSections/CustomControls.js";
// import Menus from "./IndexSections/Menus.js";
// import Navbars from "./IndexSections/Navbars.js";
// import Tabs from "./IndexSections/Tabs.js";
// import Progress from "./IndexSections/Progress.js";
// import Pagination from "./IndexSections/Pagination.js";
// import Pills from "./IndexSections/Pills.js";
// import Labels from "./IndexSections/Labels.js";
// import Alerts from "./IndexSections/Alerts.js";
// import Typography from "./IndexSections/Typography.js";
// import Modals from "./IndexSections/Modals.js";
// import Datepicker from "./IndexSections/Datepicker.js";
// import TooltipPopover from "./IndexSections/TooltipPopover.js";
// import Carousel from "./IndexSections/Carousel.js";
// import Icons from "./IndexSections/Icons.js";
// import Login from "./IndexSections/Login.js";
// import Download from "./IndexSections/Download.js";

class Index extends React.Component {
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                {/*<DemoNavbar />*/}
                {/*<main ref="main">*/}
                {/*  <Hero/>*/}
                {/*<Buttons />*/}
                {/*<Inputs />*/}
                {/*<section className="section">*/}
                {/*  <Container>*/}
                {/*    İşletmeniz siber suçlara karşı savunmasız mı? Dolandırıcılık girişimleri hızla artıyor ve hem büyük şirketleri hem de küçük işletmeleri etkiliyor. Müşterilerinizi ve verilerinizi güvende tutmak için güçlü bir dolandırıcılık tespit ve önleme çözümüne ihtiyacınız var.*/}

                {/*    <CustomControls />*/}
                {/*    <Menus />*/}
                {/*  </Container>*/}
                {/*</section>*/}
                {/*<Navbars />*/}
                {/*<section className="section section-components">*/}
                {/*<Container>*/}
                {/*  <Tabs />*/}
                {/*  <Row className="row-grid justify-content-between align-items-center mt-lg">*/}
                {/*    <Progress />*/}
                {/*    <Pagination />*/}
                {/*  </Row>*/}
                {/*  <Row className="row-grid justify-content-between">*/}
                {/*    <Pills />*/}
                {/*    <Labels />*/}
                {/*  </Row>*/}
                {/*  <Alerts />*/}
                {/*  <Typography />*/}
                {/*  <Modals />*/}
                {/*  <Datepicker />*/}
                {/*  <TooltipPopover />*/}
                {/*</Container>*/}
                {/*</section>*/}
                {/*<Carousel />*/}
                {/*<Icons />*/}
                {/*<Login />*/}
                {/*<Download />*/}
                {/*</main>*/}
                {/*<CardsFooter />*/}
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-100">
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
                                            <img
                                                alt="..."
                                                className="img-fluid"
                                                src={require("assets/img/brand/argon-react-white.png")}
                                                style={{width: "200px"}}
                                            />
                                            {/*<h1 className="display-3 text-white">*/}
                                            {/*  Hakkımızda*/}
                                            {/*</h1>*/}
                                            <p className="lead text-white">
                                                İşletmeniz siber suçlara karşı savunmasız mı? Dolandırıcılık girişimleri
                                                hızla artıyor ve hem
                                                büyük
                                                şirketleri hem de küçük işletmeleri etkiliyor. Müşterilerinizi ve
                                                verilerinizi güvende tutmak
                                                için güçlü bir
                                                dolandırıcılık tespit ve önleme çözümüne ihtiyacınız var. <br/>
                                                <b style={{fontWeight: "bold"}}>Protec Solutions</b> olarak, benzersiz
                                                dolandırıcılık tespit ve
                                                önleme
                                                çözümleri sunuyoruz. <br/>
                                                İşletmenizi dolandırıcılığın yol açabileceği yıkıcı finansal kayıplardan
                                                ve itibar zedelenmesinden korumak için yapay zeka
                                                (AI) ve en son makine öğrenimi teknolojilerini kullanıyoruz.
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
                                        <b> Neden Protec Solutions Dolandırıcılık Tespit ve Önleme Çözümleri ?</b>
                                    </Col>
                                    <Col lg="12" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            <b style={{fontWeight: "bold"}}>Yapay Zeka ile Güçlendirilmiştir
                                                : </b> Dolandırıcı faaliyetlerini tespit
                                            etmek ve engellemek için en gelişmiş yapay zeka teknolojisini kullanıyoruz.
                                            Sistemlerimiz anormallikleri anında öğrenir ve uyarlanır, böylece işletmeniz
                                            sürekli gelişen dolandırıcılık tehditlerine karşı hazırlıklı olur.
                                        </p>

                                        <p className="justify-content-center">
                                            <b style={{fontWeight: "bold"}}> Gerçek Zamanlı Koruma : </b> Dolandırıcılık
                                            girişimlerini gerçek zamanlı
                                            olarak tespit ederek size anında müdahale etme gücü sağlarız. Bu sayede
                                            dolandırıcının başarılı olmamasını ve potansiyel zararın en aza
                                            indirilmesini sağlarız.
                                        </p>

                                        <p className="justify-content-center">
                                            <b style={{fontWeight: "bold"}}>Kişiselleştirilebilir Çözümler :</b> Her
                                            işletmenin kendine özgü
                                            dolandırıcılık risk profili vardır. İhtiyaçlarınıza göre uyarlanmış çözümler
                                            sunarak işletmenizi en iyi şekilde koruruz.
                                        </p>

                                        <p className="justify-content-center">
                                            <b style={{fontWeight: "bold"}}>Kolay Entegrasyon : </b> Sistemlerimizi
                                            mevcut sistemlerinizle sorunsuz
                                            bir şekilde entegre ediyoruz, böylece iş akışınızı bozmadan dolandırıcılık
                                            koruması ekleyebilirsiniz.
                                        </p>

                                        <p className="justify-content-center">
                                            <b style={{fontWeight: "bold"}}> 24/7 Destek : </b> Müşteri hizmetleri
                                            ekibimiz 7/24 size destek
                                            sağlamaya hazırdır. Dolandırıcılık tespit ve önleme çözümlerimiz hakkında
                                            herhangi bir sorunuz olduğunda veya yardıma ihtiyacınız olduğunda size
                                            yardımcı olmaktan mutluluk duyarız.
                                        </p>

                                    </Col>

                                </Row>
                            </div>
                        </Container>
                        <Container className="py-lg-md d-flex">
                            <div className="col px-0">
                                <Row>
                                    <Col lg="12">
                                        <b> Protec Solutions ile Dolandırıcılığın Önüne Geçin </b>
                                    </Col>
                                    <Col lg="12" className="overlay   mb-lg lead">
                                        <p className="justify-content-center">
                                            İşletmenizi dolandırıcılığa karşı koruyun ve kendinizi finansal kayıplardan
                                            ve itibar zedelenmesinden koruyun. Protec Solutions dolandırıcılık tespit ve
                                            önleme çözümleri hakkında daha fazla bilgi edinmek için bugün bizimle
                                            iletişime geçin.
                                        </p>


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

export default Index;

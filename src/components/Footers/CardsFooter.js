/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

class CardsFooter extends React.Component {
    render() {
        return (
            <>
                <footer className="footer has-cards">
                    <Container>
                        <Row className="row-grid align-items-center my-md">
                            <Col lg="6">
                                LOGO
                            </Col>
                            <Col lg="6" style={{marginBottom: 20}}>
                                <div className="info_contact">
                                    <div className="contact_link_box">
                                        <a>
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <span>   DEFTERDAR MAH. RIZA UZUN SK. A BLOK NO: 10 İÇ KAPI NO: 2 EYÜPSULTAN/ İSTANBUL</span>
                                        </a>
                                        <br/>
                                        <a href="tel:02123174780">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <span>  0212 317 47 80</span>
                                        </a>
                                        <br/>

                                        <a href="mailto:info@protecsolutionstr.com">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span>  info@protecsolutionstr.com</span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6">
                                <h3 className="text-primary font-weight-light mb-2">
                                </h3>
                                <h4 className="mb-0 font-weight-light">

                                </h4>
                            </Col>
                            <Col className="text-lg-center btn-wrapper" lg="6">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="twitter"
                                    href="https://twitter.com/creativetim"
                                    id="tooltip475038074"
                                    target="_blank"
                                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter"/>
                  </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip475038074">
                                    Follow us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    href="https://www.facebook.com/creativetim"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square"/>
                  </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip837440414">
                                    Like us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="dribbble"
                                    href="https://dribbble.com/creativetim"
                                    id="tooltip829810202"
                                    target="_blank"
                                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble"/>
                  </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip829810202">
                                    Follow us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="github"
                                    href="https://github.com/creativetimofficial"
                                    id="tooltip495507257"
                                    target="_blank"
                                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github"/>
                  </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip495507257">
                                    Star on Github
                                </UncontrolledTooltip>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="align-items-center justify-content-md-between">
                            <Col md="6">
                                <div className="copyright">
                                    © {new Date().getFullYear()}{" "}
                                    <Link to="/">

                                        Protec Solutions
                                    </Link>
                                    .
                                </div>
                            </Col>
                            {/*<Col md="6">*/}
                            {/*  <Nav className="nav-footer justify-content-end">*/}
                            {/*    <NavItem>*/}
                            {/*      <NavLink*/}
                            {/*        href="https://www.creative-tim.com?ref=adsr-footer"*/}
                            {/*        target="_blank"*/}
                            {/*      >*/}
                            {/*        Creative Tim*/}
                            {/*      </NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*    <NavItem>*/}
                            {/*      <NavLink*/}
                            {/*        href="https://www.creative-tim.com/presentation?ref=adsr-footer"*/}
                            {/*        target="_blank"*/}
                            {/*      >*/}
                            {/*        About Us*/}
                            {/*      </NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*    <NavItem>*/}
                            {/*      <NavLink*/}
                            {/*        href="http://blog.creative-tim.com?ref=adsr-footer"*/}
                            {/*        target="_blank"*/}
                            {/*      >*/}
                            {/*        Blog*/}
                            {/*      </NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*    <NavItem>*/}
                            {/*      <NavLink*/}
                            {/*        href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"*/}
                            {/*        target="_blank"*/}
                            {/*      >*/}
                            {/*        MIT License*/}
                            {/*      </NavLink>*/}
                            {/*    </NavItem>*/}
                            {/*  </Nav>*/}
                            {/*</Col>*/}
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}

export default CardsFooter;

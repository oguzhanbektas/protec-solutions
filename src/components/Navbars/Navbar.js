
import React from "react";
import {Link} from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }

    state = {
        collapseClasses: "",
        collapseOpen: false,
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out",
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: "",
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img
                                    alt="..."
                                    src={require("assets/img/brand/argon-react-white.png")}
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/brand/argon-react.png")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span/>
                                                <span/>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav to="/about-us-page" tag={Link}>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Hakkımızda</span>
                                        </DropdownToggle>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-ui-04 d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Ürünler</span>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-xl">
                                            <div className="dropdown-menu-inner">
                                                <Media
                                                    className="d-flex align-items-center"
                                                    to="/sumsub-page" tag={Link}
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                        <i className="ni ni-spaceship"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Sumsub
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            KYC,KYT ve KYB ürünlerimiz için tıklayınız.
                                                        </p>
                                                    </Media>
                                                </Media>
                                                <Media
                                                    className="d-flex align-items-center"
                                                    to="/regula-page" tag={Link}
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="ni ni-palette"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h6 className="heading text-primary mb-md-1">
                                                            Regula
                                                        </h6>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Müşterilerinizi hızlıca onboard edin.
                                                        </p>
                                                    </Media>
                                                </Media>
                                                <Media
                                                    className="d-flex align-items-center"
                                                    to="/aci-page" tag={Link}
                                                >
                                                    <div
                                                        className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="ni ni-ui-04"/>
                                                    </div>
                                                    <Media body className="ml-3">
                                                        <h5 className="heading text-warning mb-md-1">
                                                            ACI PRM
                                                        </h5>
                                                        <p className="description d-none d-md-inline-block mb-0">
                                                            Büyük ölçekteki projeleriniz için işlem izleme olanağıyla kurumsal anlamda bir adım önde olun ve teknolojiyi güvenle kullanın.
                                                        </p>
                                                    </Media>
                                                </Media>
                                            </div>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Hizmetler</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="/artificial-intelligence-page" tag={Link}>
                                                Yapay Zeka Modelleme
                                            </DropdownItem>
                                            <DropdownItem to="/smart-app-page" tag={Link}>
                                                Smart Apps
                                            </DropdownItem>
                                            <DropdownItem to="/fraud-page" tag={Link}>
                                                Fraud Danışmanlık ve Eğitim Hizmetleri
                                            </DropdownItem>
                                            <DropdownItem to="/whistle-page" tag={Link}>
                                                Whistle Blowing
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Kaynaklar</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="/landing-page" tag={Link}>
                                                Medya
                                            </DropdownItem>
                                            <DropdownItem to="/profile-page" tag={Link}>
                                                Blog
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">Kariyer</span>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem to="/landing-page" tag={Link}>
                                                Açık Pozisyonlar
                                            </DropdownItem>
                                            <DropdownItem to="/profile-page" tag={Link}>
                                                Ekibimizle Tanışın
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <UncontrolledDropdown nav>
                                        <DropdownToggle nav to="/communication-page" tag={Link}>
                                            <i className="ni ni-collection d-lg-none mr-1"/>
                                            <span className="nav-link-inner--text">İletişim</span>
                                        </DropdownToggle>
                                    </UncontrolledDropdown>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.facebook.com/creativetim"
                                            id="tooltip333589074"
                                            target="_blank"
                                        >
                                            <i className="fa fa-facebook-square"/>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip333589074">
                                            Like us on Facebook
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.instagram.com/creativetimofficial"
                                            id="tooltip356693867"
                                            target="_blank"
                                        >
                                            <i className="fa fa-instagram"/>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Follow us on Instagram
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://twitter.com/creativetim"
                                            id="tooltip184698705"
                                            target="_blank"
                                        >
                                            <i className="fa fa-twitter-square"/>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip184698705">
                                            Follow us on Twitter
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://github.com/creativetimofficial/argon-design-system-react"
                                            id="tooltip112445449"
                                            target="_blank"
                                        >
                                            <i className="fa fa-github"/>
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip112445449">
                                            Star us on Github
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    {/*<NavItem className="d-none d-lg-block ml-lg-4">*/}
                                    {/*  <Button*/}
                                    {/*    className="btn-neutral btn-icon"*/}
                                    {/*    color="default"*/}
                                    {/*    href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"*/}
                                    {/*    target="_blank"*/}
                                    {/*  >*/}
                                    {/*    <span className="btn-inner--icon">*/}
                                    {/*      <i className="fa fa-cloud-download mr-2" />*/}
                                    {/*    </span>*/}
                                    {/*    <span className="nav-link-inner--text ml-1">*/}
                                    {/*      Download*/}
                                    {/*    </span>*/}
                                    {/*  </Button>*/}
                                    {/*</NavItem>*/}
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;

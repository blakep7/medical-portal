import logo from '../assets/medical-logo.jpg';
import '../components/css/Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const NavbarComponent = ({ logout, isAuthenticated, userType }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const logoutHandler = () => {
        logout();
    }

    const guestNavbar = () => (
        <>
            <header data-bs-theme="light">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="Logo" height="30" />
                        </Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse">
                            <span className="fw-bolder fs-5 m-1">HealthSync Medical Portal</span>
                            <Nav className="navbar-nav me-auto mb-2 mb-md-0">
                                <Nav.Link className={`nav-link ${activeLink === '/' ? 'text-secondary' : 'text-black'}`} href="/">Home</Nav.Link>
                            </Nav>
                            <div className="d-flex btn-group">
                                <NavLink className={"btn btn-success"} to='/signup'>Sign Up</NavLink>
                                <NavLink className={"btn btn-primary"} to='/login'>Login</NavLink>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </nav>
            </header>
        </>
    );

    const patientNavbar = () => (
        <>
            <header data-bs-theme="light">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="Logo" height="30" />
                        </Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse">
                            <span className="fw-bolder fs-5 m-1">HealthSync Medical Portal</span>
                            <Nav className="navbar-nav me-auto mb-2 mb-md-0">
                                <Nav.Link className={`nav-link ${activeLink === '/' ? 'text-secondary' : 'text-black'}`} href="/">Home</Nav.Link>
                                <Nav.Link className={`nav-link ${activeLink === '/prescriptions' ? 'text-secondary' : 'text-black'}`} href="/prescriptions">Prescriptions</Nav.Link>
                                <Nav.Link className={`nav-link ${activeLink === '/scheduler' ? 'text-secondary' : 'text-black'}`} href="/scheduler">Appointments</Nav.Link>
                            </Nav>
                            <div className="d-flex btn-group">
                                <NavLink className={"btn btn-danger"} to='/' onClick={logoutHandler}>Logout</NavLink>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </nav>
            </header>
        </>
    );

    const doctorNavbar = () => (
        <>
            <header data-bs-theme="light">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home">
                            <img src={logo} alt="Logo" height="30" />
                        </Navbar.Brand>
                        <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse className="collapse navbar-collapse" id="navbarCollapse">
                            <span className="fw-bolder fs-5 m-1">HealthSync Medical Portal</span>
                            <Nav className="navbar-nav me-auto mb-2 mb-md-0">
                                <Nav.Link className={`nav-link ${activeLink === '/' ? 'text-secondary' : 'text-black'}`} href="/">Home</Nav.Link>
                                <Nav.Link className={`nav-link ${activeLink === '/prescriptions' ? 'text-secondary' : 'text-black'}`} href="/prescriptions_manage">Prescription Manager</Nav.Link>
                            </Nav>
                            <div className="d-flex btn-group">
                                <NavLink className={"btn btn-danger"} to='/' onClick={logoutHandler}>Logout</NavLink>
                            </div>
                        </Navbar.Collapse>
                    </div>
                </nav>
            </header>
        </>
    );

    return (
        <>
            {isAuthenticated ? (userType === 'doctor' ? doctorNavbar() : patientNavbar()) : guestNavbar()}
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user ? state.auth.user.user_type : null
});

export default connect(mapStateToProps, { logout })(NavbarComponent);

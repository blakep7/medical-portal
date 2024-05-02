import logo from '../assets/medical-logo.jpg';
import '../components/css/Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const NavbarComponent = ({ logout, isAuthenticated, userType }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const guestLinks = () => (
        <Fragment>
            {/*<div className="btn-group d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Basic mixed styles example">
                <NavLink className="btn btn-outline-dark" to="/scheduler" role="button">Book an Appointment</NavLink>
            </div>*/}
            <div className="btn-group ms-auto" role="group" aria-label="Basic mixed styles example">
                <NavLink className="btn btn-primary rounded-start-pill" to='/signup' role="button">Sign up</NavLink>
                <NavLink className="btn btn-danger rounded-end-pill" to='/login' role="button">Log In</NavLink>
            </div>
        </Fragment>
    );

    const doctorNavbar = () => (
        <Fragment>
            <div className="btn-group ms-auto" role="group" aria-label="Basic mixed styles example">
                <NavLink className="btn btn-primary rounded-pill" to='/dashboard' role="button">Dashboard</NavLink>
                <NavLink className="btn btn-primary rounded-pill" to='/appointments' role="button">Appointments</NavLink>
                <NavLink className="btn btn-primary rounded-pill" to='/prescriptions_manage' role="button">Prescription Manager</NavLink>
                <NavLink className="btn btn-primary rounded-pill" to='/' onClick={logoutHandler} role="button">Logout</NavLink>
            </div>
        </Fragment>
    );

    const patientNavbar = () => (
        <Fragment>
            <div className="btn-group d-grid gap-2 d-md-flex justify-content-md-end" role="group" aria-label="Basic mixed styles example">
                <NavLink className="btn btn-outline-dark" to="/scheduler" role="button">Book an Appointment</NavLink>
            </div>
            <div className="btn-group ms-auto" role="group" aria-label="Basic mixed styles example">
                <NavLink className="btn btn-primary rounded-pill" to='/appointments_viewer' role="button">Appointments</NavLink>
                <NavLink className="btn btn-primary rounded-pill" to='/prescriptions' role="button">Prescriptions</NavLink>
                <NavLink className="btn btn-primary rounded-pill" to='/' onClick={logoutHandler} role="button">Logout</NavLink>
            </div>
        </Fragment>
    );

    const logoutHandler = () => {
        logout();
    }

    return (
        <>
            <Navbar expand="lg">
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo" height="30" />
                    <span className="fw-bolder fs-5"> Med-Portal </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to='/' className={activeLink === '/' ? 'text-warning' : ''}>Home</Nav.Link>
                        {/* <Nav.Link href="#">Page 2</Nav.Link>
                        <Nav.Link href="#">Page 3</Nav.Link>
                        <Nav.Link href="#">Page 4</Nav.Link>
                        <Nav.Link href="#">Page 5</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown link" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {isAuthenticated ? (userType === 'doctor' ? doctorNavbar() : patientNavbar()) : guestLinks()}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user ? state.auth.user.user_type : null
});

export default connect(mapStateToProps, { logout })(NavbarComponent);

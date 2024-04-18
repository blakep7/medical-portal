import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { connect} from 'react-redux';
import backgroundImage from '../assets/background-img.jpg';
import { login } from '../actions/auth';

    const Login = ({login, isAuthenticated}) => {
        const [formData, setFormData] = useState({
            email: '',
            password: ''
        });

        const { email, password } = formData;

        const navigate = useNavigate();

        const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = async e => {
            e.preventDefault();
            
            login(email, password);
        };

        if (isAuthenticated) {
            navigate('/');
        }

        return (
            <>
                <div className="jumbotron image" style={{ backgroundImage: `url(${backgroundImage})`, background: 'linear-gradient(rgba(255, 255, 255, 0.5))', paddingTop: '150px', paddingBottom: '10px' }}>
                    <div className="container mt-5"></div> 
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 border border-3 p-4 rounded-5 bg-light">
                                <h1 className="text-center">Login</h1>
                                <div className="container mt-5"></div> 
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3 col-12">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group has-validation">
                                            <span className="input-group-text">✉</span>
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
                                            <div className="invalid-feedback">
                                                Your email is required.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" name="password" value={password}  onChange={onChange} required />
                                        <div className="invalid-feedback">
                                            Your Password is required.
                                        </div>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="mb-3 d-grid">
                                        <button type="submit" className="btn btn-primary">Log In</button>
                                    </div>
                                    <p className="text-body-secondary">
                                        Don't have an Account <Link to='/signup'>Sign up here</Link>.
                                    </p>
                                    <p className="text-body-secondary">
                                        <Link to="/reset-password">Forgotten your Password?</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="container mt-5"></div>
                    </div>
                </div>
            </>
        );
    };

    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated
    });

export default connect(mapStateToProps, {login})(Login);

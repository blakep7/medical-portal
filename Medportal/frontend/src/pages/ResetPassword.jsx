import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import backgroundImage from '../assets/background-img.jpg';
import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        navigate('/');
    }

    return (
        <>
            <div className="jumbotron image" style={{ backgroundImage: `url(${backgroundImage})`, background: 'linear-gradient(rgba(255, 255, 255, 0.5))', paddingTop: '150px', paddingBottom: '10px' }}>
                <div className="container mt-5"></div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 border border-3 p-4 rounded-5 bg-light">
                            <h3 className="text-start mb-3">Forgot your password</h3>
                            <span className="text-start mt-3">Please enter your email address associated with your account</span>
                            <div className="container mt-3"></div>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3 col-12">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">✉</span>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={e => onChange(e)} required />
                                        <div className="invalid-feedback">
                                            Your email is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary">Send Recovery Link</button>
                                </div>
                                <p className="text-center text-fs-5">
                                    <Link to='/login'>Log In here</Link>
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

export default connect(null, { reset_password })(ResetPassword);

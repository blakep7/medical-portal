import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import backgroundImage from '../assets/background-img.jpg';
import { reset_password_confirm } from '../actions/auth';

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;
    const navigate = useNavigate();
    const routeParams = useParams();
    const { uid, token } = routeParams;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        reset_password_confirm(uid, token, new_password, re_new_password);
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
                            <div className="container mt-3"></div>
                            <form onSubmit={onSubmit}>
                                <div className="mb-1">
                                    <label htmlFor="password" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="new_password" name="new_password" value={new_password} onChange={e => onChange(e)} required />
                                    <div className="invalid-feedback">
                                        Your Password is required.
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="password" className="form-label">Confirm New Password</label>
                                    <input type="password" className="form-control" id="re_new_password" name="re_new_password" value={re_new_password} onChange={e => onChange(e)} required />
                                    <div className="invalid-feedback">
                                        Your Password is required.
                                    </div>
                                </div>
                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary">Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="container mt-5"></div>
                </div>
            </div>
        </>
    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);

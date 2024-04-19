import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { connect} from 'react-redux';
import backgroundImage from '../assets/background-img.jpg';
import { signup } from '../actions/auth';

    const Signup = ({signup, isAuthenticated}) => {
        const [accountCreated, setAccountCreated] = useState(false);
        const [formData, setFormData] = useState({
            email: '',
            password: '',
            re_password: '',
            first_name: '',
            last_name: '',
            user_type: ''
        });

        const { email, password, re_password, first_name, last_name, user_type} = formData;

        const navigate = useNavigate();

        const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = async e => {
            e.preventDefault();
            
            if (password === re_password) {
                signup(email, first_name, last_name, password, re_password, user_type);
                setAccountCreated(true);
            }
        };

        if (isAuthenticated) {
            navigate('/');
        }
        if (accountCreated) {
            return navigate('/login');
        }

        return (
          <>
            <div class="jumbotron image" style={{ backgroundImage: `url(${backgroundImage})`, background: 'linear-gradient(rgba(255, 255, 255, 0.5))', paddingTop: '150px', paddingBottom: '10px' }}>
              <div class="container mt-5"></div>

              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-md-6 border border-3 p-4 rounded-5 bg-light">
                    <h1 class="text-center">Create Account</h1>
                    <div class="container mt-5"></div>
                    <form onSubmit={onSubmit}>
                      <div class="row">
                        <div class="col-md-6 mb-3">
                          <label for="firstName" class="form-label">First</label>
                          <input type="firstName" class="form-control" id="first_name" name="first_name" placeholder="John" value={first_name} onChange={e => onChange(e)} required></input>
                          <div class="invalid-feedback">
                            Your Firstname is required.
                          </div>
                        </div>
                        <div class="col-md-6 mb-3">
                          <label for="lastname" class="form-label">Last</label>
                          <input type="lastname" class="form-control" id="last_name" name="last_name" placeholder="Doe" value={last_name} onChange={e => onChange(e)} required></input>
                          <div class="invalid-feedback">
                            Your Lastname is required.
                          </div>
                        </div>
                      </div>
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
                      <div className="mb-1">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={e => onChange(e)} required />
                        <div className="invalid-feedback">
                          Your Password is required.
                        </div>
                      </div>
                      <div className="mb-1">
                        <label htmlFor="password" className="form-label">ConFirm Password</label>
                        <input type="password" className="form-control" id="re_password" name="re_password" value={re_password} onChange={e => onChange(e)} required />
                        <div className="invalid-feedback">
                          Your Password is required.
                        </div>
                      </div>
                      <select id="type" class="form-select mb-3" aria-label="Default select example" name="user_type" value={user_type} onChange={e => onChange(e)} required>
                        <option selected>Account Type</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                      </select>

                      <div class="mb-3 d-grid">
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                      </div>
                      <p class="text-body-secondary">
                        Already have an Account <Link to='/login'>Log In here</Link>.
                      </p>
                    </form>
                  </div>
                </div>
                <div class="container mt-5"></div>
              </div>
            </div>
          </>
        );
    };

    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated
    });

export default connect(mapStateToProps, {signup})(Signup);

import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { connect } from 'react-redux';
import { appointment } from '../actions/auth';
import Form from "react-bootstrap/Form";
//import AppCard from '../components/AppCard';
import backgroundImage from '../assets/background-img.jpg';

const AppointmentScheduler = ({appointment, isAuthenticated, userType}) => {
    const [appointmentCreated, setAppointmentCreated] = useState();


    const [formData, setFormData] = useState({
        doctors: '',
        date: '',
        time: '',
        reason: '',
        info: ''
    });

    const { doctors, reason, date, time, info } = formData;

    const navigate = useNavigate();

    const onSubmit = async e => {
        e.preventDefault();
        
        appointment(doctors, reason, date, time, info);
        setAppointmentCreated(true);
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    if(appointmentCreated)
    {
        return navigate('/');
    }

    return (
        <>
        
            <section className="bg-light text-dark p-4 text-center full-height">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 border border-3 p-4 rounded-5 bg-light">
                        <h1 class="text-center">Schedule Appointment</h1>
                        <div class="container mt-5"></div>
                            <form onSubmit={onSubmit}>
                            <select id="doctor" class="form-select mb-3" aria-label="Default select example" name="doctors" value={doctors} onChange={e => onChange(e)} required>
                                <option selected>Select a Doctor</option>
                                <option value="Doctor A">Doctor A</option>
                                <option value="Doctor B">Doctor B</option>
                            </select>
                            <select id="reasons" class="form-select mb-3" aria-label="Default select example" name="reason" value={reason} onChange={e => onChange(e)} required>
                                <option selected>Reason for Visit</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Check Up">Check Up</option>
                                <option value="Other">Other</option>
                            </select>
                            <div>
                                <input type="date" class="form-control" id="datepicker" name="date" value={date} onChange={e => onChange(e)} required/>
                                <div class="mb-3 d-grid"></div>
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Additional Info</span>
                                <textarea id="information" class="form-control" aria-label="With textarea" name="info" value={info} onChange={e => onChange(e)}></textarea>
                            </div>
                            <div class="mb-3 d-grid"></div>
                            <div class="mb-3 d-grid">
                                <button type="submit" class="btn btn-primary">Schedule Appointment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
    
        </>
        
        //{isAuthenticated ? (loading ? loadingPage() : (userType === 'patient' ? accessGranted() : accessDenied())) : accessDenied()}
           
    );
};

/*const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user ? state.auth.user.user_type : null,
    userID: state.auth.user ? state.auth.user.id : null,
    first_name: state.auth.user ? state.auth.user.first_name : null,
    last_name: state.auth.user ? state.auth.user.last_name : null,
    email: state.auth.user ? state.auth.user.email : null
});*/

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {appointment})(AppointmentScheduler);
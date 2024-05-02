import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import AppCard from '../components/AppCard';

const AppointmentViewer = ({ isAuthenticated, userType, userID, first_name, last_name, email }) => {


    const [appointment, setAppointment] = useState([])

    useEffect(() => {
        //setLoading(true);
        AppointmentSearch();
    }, [userID])

    const AppointmentSearch = async () => {
        try {
            const response = await axios.get(`api/appointment/?user_id=${userID}`);

            const appPromises = response.data.map(async (responseData) => {
                return axios.get(`api/drug/${responseData.drug}`);
            });
            
            const appResponses = await Promise.all(appPromises);

            const appResults = appResponses.map((response) => response.data);

            console.log(appResponses);
            console.log(appResults);

            setAppointment(appResults);
        } catch (error) {
            console.error(error);
        }
    }


    const accessDenied = () => (
        <>
        <h1>Access Denied!</h1>
        </>
    );

    const accessGranted = () => (
        <>
        <section className="bg-light text-dark p-4 text-center full-height">
        <div className="container">
            <div className="d-sm-flex">
                <img src="../assets/temp_profile_pic.jpg" alt="Selected User Profile Picture" className="img-thumbnail square mr-3" style={{ width: '100px', height: '150px' }}/>
                <div className="row align-items-end">
                    <div className="col-sm-6 text-start justify-content-start">
                        <h1 className="px-3">{ first_name } { last_name }</h1>
                        <h5 className="px-3">Height: 5' 6"</h5>
                        <h5 className="px-3">Weight: 120lbs - 210kg</h5>
                        <h5 className="px-3">Physician: Dr. Michael Bradshaw</h5>
                    </div>
                    <div className="col-sm-6 text-start justify-content-end">
                        <h5 className="px-3">DOB: 03/11/2003</h5>
                        <h5 className="px-3">Address: { email }</h5>
                        <h5 className="px-3">Phone Number: 1 (619) 555-5555</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="row align-items-end py-5">
                <h2 className="text-center">Upcoming Appointments</h2>
                <section className="bg-secondary text-dark p-2 text-sm-start" style={{height: '400px' }}>
                    {appointment.map((result) => (
                        <AppCard doctors={result.doctors} reason={result.reason} date={result.date} time={result.time}/>
                    ))}
                </section>
        </div>
        


        </section>
        </>
    );

    return (
        <>
            {isAuthenticated ? (loading ? loadingPage() : (userType === 'patient' ? accessGranted() : accessDenied())) : accessDenied()}
        </>   
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user ? state.auth.user.user_type : null,
    userID: state.auth.user ? state.auth.user.id : null,
    first_name: state.auth.user ? state.auth.user.first_name : null,
    last_name: state.auth.user ? state.auth.user.last_name : null,
    email: state.auth.user ? state.auth.user.email : null
});

export default connect(mapStateToProps)(AppointmentViewer);

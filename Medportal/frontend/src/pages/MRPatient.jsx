import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../components/css/MRPatient.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import coffeead from '../assets/coffeead.jpg';

const MRPatient = ({isAuthenticated, userType, userID, first_name, last_name, email, DOB, phone_number, physician}) => {

    const accessDenied = () => (
        <>
        <h1>Access Denied!</h1>
        </>
    );

    const accessGranted = () => (
        <>
            <div class="container-fluid">
                <main>

                    <div class="row g-3 text-center">

                        <div class="col-2 ad-box mt-5">
                        `   <img
                                src={coffeead}
                                className="featurette-image img-fluid mx-auto"
                                width="220"
                                height="720"
                                alt="Coffee Ad"
                            />
                        </div>

                        <div class="col-8">
        `                   <h2 class="medical-records-page-title"><u>Medical Records</u></h2>
                            <h5>Patient Information</h5>

                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td class="col-6 left-table-col">Medical Record Number</td>
                                        <td class="col-6">1234567890</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Full Name</td>
                                        <td>{first_name} {last_name}</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Date of Birth</td>
                                        <td>{DOB}</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Gender</td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Address Line 1</td>
                                        <td>12345 Acorn Street</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Address Line 2</td>
                                        <td>Unit 3</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Primary Phone Number</td>
                                        <td>{phone_number}</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Primary Email</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Emergency Contact Full Name</td>
                                        <td>Jill Doe</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Emergency Contact Primary Phone Number</td>
                                        <td>jilldoe@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Medical History</h5>

                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td class="col-6 left-table-col">Past Conditions</td>
                                        <td class="col-6">Diabetes</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Surgeries</td>
                                        <td>None</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Allergies</td>
                                        <td>Nuts</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Family History</td>
                                        <td>At Risk For Heart Attacks</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Current Medications</h5>

                            <ol>
                                <li>
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td class="col-6 left-table-col">Name</td>
                                                <td class="col-6">Iron Tablets</td>
                                            </tr>
                                            <tr>
                                                <td class="left-table-col">Dosage</td>
                                                <td>1mg</td>
                                            </tr>
                                            <tr>
                                                <td class="left-table-col">Frequency Taken</td>
                                                <td>2 Times A Week</td>
                                            </tr>
                                            <tr>
                                                <td class="left-table-col">Prescribing Doctor</td>
                                                <td>{physician}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </li>
                            </ol>

                        </div>

                        <div class="col-2 ad-box mt-5">
                            <img
                                src={coffeead}
                                className="featurette-image img-fluid mx-auto"
                                width="220"
                                height="720"
                                alt="Coffee Ad"
                            />
                        </div>

                    </div>

                </main>
            </div>
        </>
    );

    return (
        <>
        {isAuthenticated ? (userType === 'patient' ? accessGranted() : accessDenied()) : accessDenied()}
        </>   
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user ? state.auth.user.user_type : null,
    userID: state.auth.user ? state.auth.user.id : null,
    first_name: state.auth.user ? state.auth.user.first_name : null,
    last_name: state.auth.user ? state.auth.user.last_name : null,
    email: state.auth.user ? state.auth.user.email : null,
    DOB: state.auth.user ? state.auth.user.DOB : null,
    phone_number: state.auth.user ? state.auth.user.phone_number : null,
    physician: state.auth.user ? state.auth.user.physician : null,
});

export default connect(mapStateToProps)(MRPatient)




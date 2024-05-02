import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests
import '../components/css/MRDoctor.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import coffeead from '../assets/coffeead.jpg';

const MRDoctor = ({isAuthenticated, userType}) => {

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

`                           <h2 class="medical-records-page-title"><u>Medical Records</u></h2>
                            <hr class="my-4 mt-1 mb-1"></hr>

                            <div class="row align-items-center g-3 mb-1">
                                <div class="col-7">
                                    <h5>Search By Patient Name:</h5>
                                </div>
                                <div class="col-3">
                                    <input type="text" class="form-control" id="firstName" placeholder="John Doe" value="" required></input>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Search</button>
                                </div>
                            </div>

                            <hr class="my-4 mt-1 mb-3"></hr>

                            <div class="row align-items-center g-3 mb-1">
                                <div class="col-4"></div>
                                <div class="col-4">
                                    <h5>Patient Information</h5>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Edit</button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Save</button>
                                </div>
                            </div>

                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td class="col-6 left-table-col">Medical Record Number</td>
                                        <td class="col-6">1234567890</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Full Name</td>
                                        <td>John Doe</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Date of Birth</td>
                                        <td>10/25/2003</td>
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
                                        <td>(123) 456-789</td>
                                    </tr>
                                    <tr>
                                        <td class="left-table-col">Primary Email</td>
                                        <td>johndoe@gmail.com</td>
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

                            <div class="row align-items-center g-3 mb-1">
                                <div class="col-4"></div>
                                <div class="col-4">
                                    <h5>Medical History</h5>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Edit</button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Save</button>
                                </div>
                            </div>

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

                            <div class="row align-items-center g-3 mb-1">
                                <div class="col-4"></div>
                                <div class="col-4">
                                    <h5>Current Medications</h5>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Edit</button>
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn">Save</button>
                                </div>
                            </div>

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
                                                <td>Dr. John Hill</td>
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
        {isAuthenticated ? (userType === 'doctor' ? accessGranted() : accessDenied()) : accessDenied()}
        </>   
    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    userType: state.auth.user ? state.auth.user.user_type : null,
});

export default connect(mapStateToProps)(MRDoctor)




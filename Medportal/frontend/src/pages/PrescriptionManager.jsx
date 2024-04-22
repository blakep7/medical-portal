import React, { useState } from 'react';
import { connect } from 'react-redux';

import axios from 'axios'; // Assuming you're using Axios for HTTP requests

import DrugCard from '../components/DrugCard';

const PrescriptionManager = ({ isAuthenticated, userType }) => {

    const [drugQueryInput, setDrugQueryInput] = useState("")
    const [drugs, setDrugs] = useState([])

    const handleDrugSearch = async () => {
        try {
            const response = await axios.get(`api/drug/?drug_name=${drugQueryInput}`);
            setDrugs(response.data);
        } catch (error) {
            console.error('Error fetching search results: ', error);
        }
    }

    const accessDenied = () => (
        <>
        <h1>Access Denied!</h1>
        </>
    );

    const accessGranted = () => (
        <>
        {/* <section className="p-4">
            <section className="bg-dark p-2">
                <div className="row p-2">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input type="text" value={patientQuery} onChange={handlePatientInputChange} className="form-control" placeholder="Search for Patients"/>
                            <button className="btn btn-primary" onClick={handlePatientSearch} type="button" id="search-button">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </section> */}

        <section className="bg-dark text-light p-4 text-center full-height">
            <div className="container">
                <div className="d-sm-flex">
                    <img src="../assets/temp_profile_pic.jpg" alt="Selected User Profile Picture" className="img-thumbnail square mr-3" style={{ width: '100px', height: '150px' }}/>
                    <div className="row align-items-end">
                        <div className="col-sm-6 text-start justify-content-start">
                            <h1 className="px-3">Jennifer Aniston</h1>
                            <h5 className="px-3">Height: 5' 6"</h5>
                            <h5 className="px-3">Weight: 120lbs - 210kg</h5>
                            <h5 className="px-3">Physician: Dr. Michael Bradshaw</h5>
                        </div>
                        <div className="col-sm-6 text-start justify-content-end">
                            <h5 className="px-3">DOB: 03/11/2003</h5>
                            <h5 className="px-3">Address: 1420 MCCARTHY BLVD, NEW BERN NC 28562</h5>
                            <h5 className="px-3">Phone Number: 1 (619) 555-5555</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-end py-5">
                <div className="col-sm-6 text-start justify-content-start py-1">
                    <h2 className="text-center">Current Prescriptions</h2>
                    <section className="bg-secondary text-dark p-2" style={{ height: '55vh', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 70, bottom: 10, left: 10, right: 10, overflowY: 'auto' }}>
                            {drugs.map((result) => (
                                <DrugCard brand_name={result.brand_name} purpose={result.purpose} />
                            ))}
                        </div>
                    </section>
                </div>
                <div className="col-sm-6 text-start justify-content-start py-1">
                    <h2 className="text-center">Prescribe New</h2>
                    <section className="bg-secondary text-dark p-2" style={{ height: '55vh', position: 'relative' }}>
                        <div className="col p-2">
                            <div className="input-group">
                                <input 
                                    type="text"
                                    value={drugQueryInput}
                                    onChange={(e) => setDrugQueryInput(e.target.value)}
                                    className="form-control"
                                    placeholder="Search for Prescriptions"/>
                                <button className="btn btn-primary" onClick={handleDrugSearch} type="button" id="search-button">Search</button>
                            </div>
                        </div>

                        <div style={{ position: 'absolute', top: 70, bottom: 10, left: 10, right: 10, overflowY: 'auto' }}>
                            {drugs.map((result) => (
                                <DrugCard brand_name={result.brand_name} purpose={result.purpose} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
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
    userType: state.auth.user ? state.auth.user.user_type : null
});

export default connect(mapStateToProps)(PrescriptionManager);

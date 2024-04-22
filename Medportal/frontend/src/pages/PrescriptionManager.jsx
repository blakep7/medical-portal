import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios'; // Assuming you're using Axios for HTTP requests

import DrugCard from '../components/DrugCard';
import AssignedDrugCard from '../components/AssignedDrugCard';
import PatientCard from '../components/PatientCard';

const PrescriptionManager = ({ isAuthenticated, userType }) => {

    const [drugQueryInput, setDrugQueryInput] = useState("")
    const [drugs, setDrugs] = useState([])

    const [patientQueryInput, setPatientQueryInput] = useState("")
    const [patient, setPatient] = useState(null)

    const [prescriptions, setPrescriptions] = useState([])

    const handleDrugSearch = async () => {
        try {
            const response = await axios.get(`api/drug/?drug_name=${drugQueryInput}`);
            setDrugs(response.data);
        } catch (error) {
            console.error('Error fetching search results: ', error);
        }
    }

    const handlePatientSearch = async () => {
        try {
            const response = await axios.get(`api/user/?user_name=${patientQueryInput}`);
            setPatient(response.data.find(patient => patient.user_type === 'patient'));
            handlePrescriptionSearch();
        } catch (error) {
            console.error('Error fetching search results: ', error);
        }
    }

    useEffect(() => {
        if (patient) {
            handlePrescriptionSearch();
        }
    }, [patient]); // Run this effect whenever patient changes


    const handlePrescriptionSearch = async () => {
        if (patient) {
                try {
                    const response = await axios.get(`api/prescription/?user_id=${patient.id}`);

                    const drugPromises = response.data.map(async (responseData) => {
                        return axios.get(`api/drug/${responseData.drug}`);
                    });
                    
                    const drugResponses = await Promise.all(drugPromises);

                    const drugResults = drugResponses.map((response) => response.data);

                    console.log(drugResponses);
                    console.log(drugResults);

                    setPrescriptions(drugResults);
                } catch (error) {
                    console.error(error);
                }
            }
    }

    
    const accessDenied = () => (
        <>
        <h1>Access Denied!</h1>
        </>
    );

    const accessGranted = () => (
        <>
        <section className="p-4">
            <section className="bg-dark p-2">
                <div className="row p-2">
                    <div className="col-md-6">
                        <div className="input-group">
                            <input 
                                type="text"
                                value={patientQueryInput}
                                onChange={(e) => setPatientQueryInput(e.target.value)}
                                className="form-control"
                                placeholder="Search for Patients"
                            />
                            <button className="btn btn-primary" onClick={handlePatientSearch} type="button" id="search-button">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>

        <section className="bg-dark text-light p-4 text-center full-height">
            <div className="container">
                <div className="d-sm-flex">
                {patient && (
                    <PatientCard 
                        first_name={patient.first_name} 
                        last_name={patient.last_name} 
                        email={patient.email} 
                    />
                )}
                </div>
            </div>

            <div className="row align-items-end py-5">
                <div className="col-sm-6 text-start justify-content-start py-1">
                    <h2 className="text-center">Current Prescriptions</h2>
                    <section className="bg-secondary text-dark p-2" style={{ height: '55vh', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 70, bottom: 10, left: 10, right: 10, overflowY: 'auto' }}>
                            {prescriptions.map((result) => (
                                <AssignedDrugCard brand_name={result.brand_name} purpose={result.purpose} drug_id={result.id}/>
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
                                    placeholder="Search for Prescriptions"
                                />
                                <button className="btn btn-primary" onClick={handleDrugSearch} type="button" id="search-button">Search</button>
                            </div>
                        </div>

                        <div style={{ position: 'absolute', top: 70, bottom: 10, left: 10, right: 10, overflowY: 'auto' }}>
                            {drugs.map((result) => (
                                <DrugCard brand_name={result.brand_name} purpose={result.purpose} drug_id={result.id} patient_id={patient ? patient.id : null} triggerRefresh={handlePrescriptionSearch}/>
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

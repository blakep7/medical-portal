import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios'; // Assuming you're using Axios for HTTP requests

import DrugCard from '../components/DrugCard';
import AssignedDrugCard from '../components/AssignedDrugCard';
import PatientCard from '../components/PatientCard';

const PrescriptionViewer = ({ isAuthenticated, userType, userID, first_name, last_name, email }) => {

    // const [patientQueryInput, setPatientQueryInput] = useState("")
    // const [patient, setPatient] = useState(null)

    const [prescriptions, setPrescriptions] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        handlePrescriptionSearch();
    }, [userID])

    // const handlePatientSearch = async () => {
    //     try {
    //         const response = await axios.get(`api/user/?user_name=${patientQueryInput}`);
    //         setPatient(response.data.find(patient => patient.user_type === 'patient'));
    //         handlePrescriptionSearch();
    //     } catch (error) {
    //         console.error('Error fetching search results: ', error);
    //     }
    // }

    // useEffect(() => {
    //     handlePrescriptionSearch();
    // }, []); // Run this effect whenever patient changes


    const handlePrescriptionSearch = async () => {
        try {
            const response = await axios.get(`api/prescription/?user_id=${userID}`);

            const drugPromises = response.data.map(async (responseData) => {
                return axios.get(`api/drug/${responseData.drug}`);
            });
            
            const drugResponses = await Promise.all(drugPromises);

            const drugResults = drugResponses.map((response) => response.data);

            console.log(drugResponses);
            console.log(drugResults);

            if (drugResults) {
                setLoading(false);
            }

            setPrescriptions(drugResults);
        } catch (error) {
            console.error(error);
        }
    }

    
    const accessDenied = () => (
        <>
        <h1>Access Denied!</h1>
        </>
    );

    const loadingPage = () => (
        <>
        <h1>Loading...</h1>
        </>
    );

    const accessGranted = () => (
        <>
        <section className="bg-dark text-light p-4 text-center full-height">
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
                <h2 className="text-center">Current Prescriptions</h2>
                <section className="bg-secondary text-dark p-2 text-sm-start" style={{height: '400px' }}>
                    {prescriptions.map((result) => (
                        <AssignedDrugCard brand_name={result.brand_name} purpose={result.purpose} drug_id={result.id}/>
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

export default connect(mapStateToProps)(PrescriptionViewer);

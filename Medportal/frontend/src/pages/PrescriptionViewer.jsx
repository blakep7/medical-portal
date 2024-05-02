import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import DrugCard from '../components/DrugCard';
import AssignedDrugCard from '../components/AssignedDrugCard';
import PatientCard from '../components/PatientCard';

import defaultPic from '../assets/default.jpg';


const PrescriptionViewer = ({ isAuthenticated, userType, userID, first_name, last_name, email, height, weight, DOB, phone_number, physician, profile_picture_ref}) => {
    
    const [prescriptions, setPrescriptions] = useState([])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        handlePrescriptionSearch();
    }, [userID])

    const handlePrescriptionSearch = async () => {
        try {
            if (!userID) {
                return;
            }
            const response = await axios.get(`api/prescription/?user_id=${userID}`);

            const drugPromises = response.data.map(async (responseData) => {
                return axios.get(`api/drug/${responseData.drug}`);
            });
            
            const drugResponses = await Promise.all(drugPromises);

            const drugResults = drugResponses.map((response) => response.data);

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
        <section className="text-dark p-4 text-center full-height" style={{background: '#DEE4E7'}}>
        <div className="container p-2">
            <div className="d-sm-flex">
                <img src={defaultPic} alt="Selected User Profile Picture" className="img-thumbnail square mr-3" style={{ width: '100px', height: '150px' }}/>
                <div className="row align-items-end">
                    <div className="col-sm-6 text-start justify-content-start">
                        <h1 className="px-3">{ first_name } { last_name }</h1>
                        <h5 className="px-3">Height: { height } in</h5>
                        <h5 className="px-3">Weight: { weight } lbs</h5>
                        <h5 className="px-3">Physician: { physician }</h5>
                    </div>
                    <div className="col-sm-6 text-start justify-content-end">
                        <h5 className="px-3">DOB: { DOB }</h5>
                        <h5 className="px-3">Address: { email }</h5>
                        <h5 className="px-3">Phone Number: { phone_number }</h5>
                    </div>
                </div>
            </div>
        </div>

        <div className="row align-items-end py-5">
                <h2 className="text-center">Current Prescriptions</h2>
                <section className="border border-2 border-dark text-dark p-2 rounded" style={{height: '51vh' }}>
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
    email: state.auth.user ? state.auth.user.email : null,
    height: state.auth.user ? state.auth.user.height_in : null,
    weight: state.auth.user ? state.auth.user.weight_lb : null,
    DOB: state.auth.user ? state.auth.user.DOB : null,
    phone_number: state.auth.user ? state.auth.user.phone_number : null,
    physician: state.auth.user ? state.auth.user.physician : null,
    profile_picture_ref: state.auth.user ? state.auth.user.profile_picture_ref : null
});

export default connect(mapStateToProps)(PrescriptionViewer);

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests



const DrugCard = (props) => {

    const handleMedicationAssignment = async () => {
        try {
            const response = await axios.post('api/prescription', {
                drug: `${props.drug_id}`,
                user: `${props.patient_id}`,
                dosage: "1",
                frequency: "per day",
                refills: "1",
                start_date: "2024-04-21",
                end_date: "2024-04-25",
                notes: "None"
              }, {
                headers: {
                  
                }
            })
            console.log(response);
            props.triggerRefresh();
        } catch (error) {
            console.error('Error fetching search results: ', error);
        }
    }

    return (
        <section className="py-1"> 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ props.brand_name }</h5>
                    <p>{ props.purpose }</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                    <button className="btn btn-secondary" onClick={handleMedicationAssignment} type="button" id="search-button">Assign Medication</button>
                </div>
            </div>
        </section>
    );
};
export default DrugCard
const PatientCard = (props) => {

    return (
        <>
            <img src="../assets/temp_profile_pic.jpg" alt="Selected User Profile Picture" className="img-thumbnail square mr-3" style={{ width: '100px', height: '150px' }}/>
            <div className="row align-items-end">
                <div className="col-sm-6 text-start justify-content-start">
                    <h1 className="px-3">{props.first_name} {props.last_name}</h1>
                    <h5 className="px-3">Height: 5' 6"</h5>
                    <h5 className="px-3">Weight: 120lbs - 210kg</h5>
                    <h5 className="px-3">Physician: Dr. Michael Bradshaw</h5>
                </div>
                <div className="col-sm-6 text-start justify-content-end">
                    <h5 className="px-3">DOB: 03/11/2003</h5>
                    <h5 className="px-3">Email: {props.email}</h5>
                    <h5 className="px-3">Phone Number: 1 (619) 555-5555</h5>
                </div>
            </div>
        </>
    );
};
export default PatientCard
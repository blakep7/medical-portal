import defaultPic from '../assets/default.jpg';

const PatientCard = (props) => {

    return (
        <>
            <img src={defaultPic} alt="Selected User Profile Picture" className="img-thumbnail square mr-3" style={{ width: '100px', height: '150px' }}/>
            <div className="row align-items-end flex-fill">
                <div className="col-sm-6 text-start justify-content-start">
                    <h1 className="px-3">{props.first_name} {props.last_name}</h1>
                    <h5 className="px-3">Height: {props.height} in</h5>
                    <h5 className="px-3">Weight: {props.weight} lbs</h5>
                    <h5 className="px-3">Physician: {props.physician} </h5>
                </div>
                <div className="col-sm-6 text-start justify-content-end">
                    <h5 className="px-3">DOB: {props.DOB} </h5>
                    <h5 className="px-3">Email: {props.email}</h5>
                    <h5 className="px-3">Phone Number: {props.phone_number}</h5>
                </div>
            </div>
        </>
    );
};
export default PatientCard
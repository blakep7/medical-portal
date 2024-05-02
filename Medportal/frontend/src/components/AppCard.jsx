const AppCard = (props) => {

    return (
        <section className="py-1"> 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ props.reason }</h5>
                    <p>{ props.date } {props.time}</p>
                    <p> { props.doctors }</p>
                    <a href="#" className="btn btn-secondary">Cancel Appointment</a>
                </div>
            </div>
        </section>
    );
};
export default AppCard
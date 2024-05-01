const AssignedDrugCard = (props) => {
    return (
        <section className="py-1"> 
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{ props.brand_name }</h5>
                    <p>{ props.purpose }</p>
                    {/* <a href="#" className="btn btn-primary">Learn More</a> */}
                </div>
            </div>
        </section>
    );
};
export default AssignedDrugCard
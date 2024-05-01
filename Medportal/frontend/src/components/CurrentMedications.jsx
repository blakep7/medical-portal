const CurrentMedications = () => {
    return (
        <>
            <h1>Current Medications</h1>
            <ol>
                <li>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td className="col-6 left-table-col">Name</td>
                                <td className="col-6">Iron Tablets</td>
                            </tr>
                            <tr>
                                <td className="left-table-col">Dosage</td>
                                <td>1mg</td>
                            </tr>
                            <tr>
                                <td className="left-table-col">Frequency Taken</td>
                                <td>2 Times A Week</td>
                            </tr>
                            <tr>
                                <td className="left-table-col">Prescribing Doctor</td>
                                <td>Dr. John Hill</td>
                            </tr>
                        </tbody>
                    </table>
                </li>
            </ol>
        </>
    );
};

export default CurrentMedications
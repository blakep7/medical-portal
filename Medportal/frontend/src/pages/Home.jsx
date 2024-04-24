import React from 'react';
import '../components/css/Home.css';
import backgroundImage from '../assets/cover-page3.jpg';
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import facility from '../assets/surgeryroom.jpg';
import teammeeting from '../assets/teammeeting.jpg';
import physicaltherapy from '../assets/physicaltherapy.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url(${backgroundImage})`, height: '400px' }}>
                <div className="container">
                    <div className="bg-dark rounded p-2">
                        <h1 className="display-5 fw-bold text-light">Welcome to HealthSync</h1>
                    </div>
                </div>
            </header>

            <h1 className="display-5 fw-bold text-black text-center mt-2 pt-2">Our Team</h1>

            <div className="container marketing mt-2 pt-2">
                <div className="row">
                    <div className="col-lg-4">
                        <img
                            src={doctor1}
                            className="rounded-circle"
                            width="140"
                            height="140"
                            alt="Profile"
                        />
                        <h2 className="fw-normal">Dr. Benjamin Park</h2>
                        <h4 className="fw-normal">M.D.</h4>
                        <h6 className="fw-normal">F.A.C.P. (Fellow of the American College of Physicians)</h6>
                        <p>
                            A compassionate internal medicine specialist renowned for his innovative approach to chronic disease management.
                            With over two decades of experience, he is dedicated to providing personalized care that empowers his patients to lead healthier lives.
                        </p>
                        {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                    </div>
                    <div className="col-lg-4">
                        <img
                            src={doctor3}
                            className="rounded-circle"
                            width="140"
                            height="140"
                            alt="Profile"
                        />
                        <h2 className="fw-normal">Dr. Lauren Smith</h2>
                        <h4 className="fw-normal">M.D.</h4>
                        <h6 className="fw-normal">F.A.A.P. (Fellow of the American Academy of Pediatrics)</h6>
                        <p>
                            A dedicated pediatrician with a passion for ensuring the well-being of children from infancy through adolescence.
                            Her warm demeanor and expertise in child development make her a trusted advocate for families in her community.
                        </p>
                        {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                    </div>
                    <div className="col-lg-4">
                        <img
                            src={doctor2}
                            className="rounded-circle"
                            width="140"
                            height="140"
                            alt="Profile"
                        />
                        <h2 className="fw-normal">Dr. Marcus Stone</h2>
                        <h4 className="fw-normal">M.D.</h4>
                        <h6 className="fw-normal">F.A.C.S. (Fellow of the American College of Surgeons)</h6>
                        <p>
                            A skilled surgeon known for his precision and commitment to patient safety.
                            Specializing in minimally invasive techniques, he strives to deliver optimal surgical outcomes while minimizing discomfort and recovery time for his patients.
                        </p>
                        {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">State of the Art Facilities.</h2>
                        <p class="lead">
                            At our facility, we pride ourselves on our investment in state-of-the-art equipment and infrastructure designed to enhance the patient experience and improve treatment outcomes.
                            From advanced imaging technology to modern surgical suites, every aspect of our facility is meticulously designed to ensure patient comfort, safety, and optimal results.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img
                            src={facility}
                            className="featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            alt="Facility"
                        />
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Expert Staff.</h2>
                        <p class="lead">
                            Our facility boasts a team of highly skilled and experienced medical professionals, each recognized for their expertise in their respective fields.
                            From board-certified physicians to dedicated nurses and support staff, our team is committed to delivering the highest standard of care with compassion and precision.
                        </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img
                            src={teammeeting}
                            className="featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            alt="Team Meeting"
                        />
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Comprehensive Care Approach.</h2>
                        <p class="lead">
                            We believe in a holistic approach to healthcare that goes beyond treating symptoms to address the underlying causes of illness.
                            Our comprehensive care model integrates conventional medicine with complementary therapies, empowering patients to achieve optimal health and well-being.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img
                            src={physicaltherapy}
                            className="featurette-image img-fluid mx-auto"
                            width="500"
                            height="500"
                            alt="Physical Therapy"
                        />
                    </div>
                </div>

                <hr class="featurette-divider" />
            </div>


        </>
    )
}

export default Home
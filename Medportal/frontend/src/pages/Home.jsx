import React from 'react';
import '../components/css/Home.css';
import backgroundImage from '../assets/background-img.jpg';
import logo from '../assets/medical-logo.jpg';

const Home = () => {
  return (
    <>
        <header className="masthead" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container">
            <div className="masthead-subheading">Welcome To Our Medical Portal</div>
            <div className="masthead-heading text-uppercase">...</div>
            <a className="btn btn-primary btn-xl text-uppercase" href="#">Tell Me More</a>
            </div>
        </header>

        <div className="container">
            <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">
            <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={logo} alt="..."></img></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={logo} alt="..."></img></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={logo} alt="..."></img></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>December 2015</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={logo} alt="..."></img></div>
                <div className="timeline-panel">
                <div className="timeline-heading">
                    <h4>July 2020</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
            </li>
            </ul>
        </div>

        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={logo} alt="..."></img>
                  <h4>Steven Kourani</h4>
                  <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-dark mb-5" href="#!" title="Link 1">Link 1</a>
                      <a className="btn btn-dark mb-5" href="#!" title="Link 2">Link 2</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={logo} alt="..."></img>
                  <h4>Blake Pearson</h4>
                  <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-dark mb-5" href="#!" title="Link 1">Link 1</a>
                      <a className="btn btn-dark mb-5" href="#!" title="Link 2">Link 2</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={logo} alt="..."></img>
                  <h4>Anishvar Singram</h4>
                  <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-dark mb-5" href="#!" title="Link 1">Link 1</a>
                      <a className="btn btn-dark mb-5" href="#!" title="Link 2">Link 2</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={logo} alt="..."></img>
                  <h4>Jared Costa</h4>
                  <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-dark mb-5" href="#!" title="Link 1">Link 1</a>
                      <a className="btn btn-dark mb-5" href="#!" title="Link 2">Link 2</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
              </div>
            </div>
          </div>
      </section>

    </>
  )
}

export default Home
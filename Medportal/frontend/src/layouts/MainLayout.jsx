import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const MainLayout = (props) => {
  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
  }, []);
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default connect(null, { checkAuthenticated, load_user })(MainLayout);

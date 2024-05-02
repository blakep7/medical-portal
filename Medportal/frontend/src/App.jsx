import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import MainLayout from './layouts/MainLayout';
import PrescriptionManager from './pages/PrescriptionManager';
import PrescriptionViewer from './pages/PrescriptionViewer';
import AppointmentScheduler from './pages/AppointmentScheduler';

import { Provider } from 'react-redux';
import store from './store';
import AppointmentViewer from './pages/AppointmentViewer';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            <Route exact path="/activate/:uid/:token" element={<Activate />} />
            <Route exact path="/prescriptions_manage" element={<PrescriptionManager />} />
            <Route exact path="/prescriptions" element={<PrescriptionViewer />} />
            <Route exact path="/scheduler" element={<AppointmentScheduler />} />
            <Route exact path="/appointments_viewer" element={<AppointmentViewer />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import React from 'react';
import {AuthProvider} from '../services/auth';
import Routes from './Routes';
AuthProvider;
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
export default Providers;

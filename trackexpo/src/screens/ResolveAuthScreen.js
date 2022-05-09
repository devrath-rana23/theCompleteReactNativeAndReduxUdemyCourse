import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
// This is made to prevent glitch when switching screen between signup and home page based on token availability inside Async storage

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return null;
};

export default ResolveAuthScreen;

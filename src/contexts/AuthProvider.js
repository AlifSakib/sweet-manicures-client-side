import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  //states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create
  const create = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //update profile
  const update = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // google
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    //stop monitoring
    return () => unsubscribe();
  }, []);

  //values
  const value = {
    user,
    loading,
    create,
    login,
    logOut,
    update,
    googleSignIn,
    setLoading,
  };

  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

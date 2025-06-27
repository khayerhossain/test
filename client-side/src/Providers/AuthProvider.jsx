import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // New dashboard stats
  const [totalItems, setTotalItems] = useState(0);
  const [myItemsCount, setMyItemsCount] = useState(0);

  // Firebase Auth functions
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updatedUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('user state changed', currentUser);
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        // You can replace this with an API or Firestore query
        setTotalItems(99); // All public items
        setMyItemsCount(12);
      } else {
        setTotalItems(0);
        setMyItemsCount(0);
      }
    });

    return unsubscribe;
  }, []);

  const userInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    user,
    setUser,
    updatedUser,
    loading,
    setLoading,
    totalItems,        //accessible in Overview
    myItemsCount       //accessible in Overview
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

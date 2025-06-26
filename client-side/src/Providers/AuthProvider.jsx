import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    };

    const updatedUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const provider=new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    };

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    };

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
             console.log('user state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return unsubscribe;
    },[]);


const userInfo={
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    user,
    setUser,
    updatedUser,
    loading,
    setLoading
}
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //get user and set user on State
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,
            currentUser => {
                setUser (currentUser);
                setLoading(false);
            })
            return () => unSubscribe();
    },[])

    //Sign up with email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login with email and password
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Login With Google popup
    const googlePopUp = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const getCategory =(category) =>{
        localStorage.setItem('category', category);
    }

    //log out code
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    const allInfo = { googlePopUp, loading, user, logOut, createUser, getCategory ,signIn, updateUser };

    return (
        <div>
            <AuthContext.Provider value={allInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
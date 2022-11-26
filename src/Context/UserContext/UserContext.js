import React, { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { current } from "daisyui/src/colors";


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

    //Login With Google popup
    const googlePopUp = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //log out code
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const allInfo = { googlePopUp, loading, user, logOut };

    return (
        <div>
            <AuthContext.Provider value={allInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
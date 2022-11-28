import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const { googlePopUp, user } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGPopUp = () => {
        googlePopUp(googleProvider)
            .then(result => {
                result = result.user;
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error));
    }

    return (
        <button onClick={handleGPopUp} className='btn colorGray rounded-none btn-outline'>Sign In With Google</button>
    );
};

export default GoogleSignIn;
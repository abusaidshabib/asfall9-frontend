import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useToken from '../../../hooks/useToken';

const GoogleSignIn = () => {
    const { googlePopUp, user } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [token] = useToken(userEmail);

    if (token) {
        navigate(from, { replace: true });
    }


    const handleGPopUp = () => {
        googlePopUp(googleProvider)
            .then(result => {
                const user = result.user;
                newUser(user?.email, user?.displayName)
            })
            .catch(error => console.error(error));

    }
    const newUser = (email, name) => {
        const newreg = {
            email: email,
            name: name,
            category: "buyer"
        }
        console.log(newreg);

        fetch('https://b612-used-products-resale-server-side-abusaidshabib.vercel.app/user', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newreg)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUserEmail(email);
                    toast.success('User Logged Successfully');
                }
                else {
                    toast.success('User Logged Successfully');
                    navigate(from, { replace: true });
                }
            })
            .catch(err => console.err(err))
    }

    return (
        <>
            <button onClick={handleGPopUp} className='btn colorGray rounded-none btn-outline'>Sign In With Google</button>
            <ToastContainer />
        </>
    );
};

export default GoogleSignIn;
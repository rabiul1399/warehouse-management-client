import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/logo/google.png';
import './SocialLogin.css'

const SocialLogin = () => {
    const navigate = useNavigate(); 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate('/home')
    };

    return (
        <div>
            <div>
                <button onClick={() => signInWithGoogle()} type='button' className='btnStyle  border  btn-outline-light text-dark fw-bolder rounded-pill  w-75 d-block mx-auto my-3 fs-5'><img className='me-2' width={'45px'} src={google} alt="" /> Sign in with Google</button>
            </div>

            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>

            </div>
        </div>
    );
};

export default SocialLogin;
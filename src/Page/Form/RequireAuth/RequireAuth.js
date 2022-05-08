import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

console.log(user)

    if(loading){
        return (
            <div className='d-flex justify-content-center mt-5'>
           <Spinner animation="border" variant="danger" />
           </div>
        )
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(!user.providerData[0].providerId==="password" && !user.emailVerified){
        return <div className='text-center'>
            <h3 className='text-danger'>Your Email is not Verified!</h3>    
            <h5 className='text-success'>Please verify you email address </h5>   
            <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
     
                </div>
    }
    return children;
};

export default RequireAuth;
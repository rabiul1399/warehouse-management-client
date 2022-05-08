import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import { useCreateUserWithEmailAndPassword ,useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
    const [ agree,setAgree]  = useState(false);
        const navigate = useNavigate();
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    
    // if(user){
    //    console.log('user',user)
    // }

    const handleRegister =async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

           await createUserWithEmailAndPassword(email,password);
           await updateProfile({ displayName: name });
        //    alert('Updated profile');
           navigate('/home')
   
            
       
    }


    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center mt-2'>Register Now</h3>

            <SocialLogin></SocialLogin>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    
                    <Form.Control size="lg" ref={nameRef} type="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control size="lg" ref={emailRef} type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                   
                    <Form.Control size="lg" ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check  onClick={() =>setAgree(!agree)} name='terms' type="checkbox" label="Accept Genius Car Terms and Conditions"  className={agree ? '' : ' text-danger'} 
                    />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block" type="submit" disabled={!agree}> Register
                </Button>
            </Form>
            <p className='mt-2'>Already have an account? <Link to='/login' className='text-primary cursor pe-auto text-decoration-none ' >Login</Link></p>
         
        </div>
    );
};

export default Register;
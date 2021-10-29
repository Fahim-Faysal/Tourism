import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Login = () => {
      const { signInWithGoogle } = useAuth()
      const element = <FontAwesomeIcon icon={faGoogle} />

      return (
            <div>
                  <h2 className='text-success mt-5 mb-5'>Please Login</h2>
                  <Button className='w-25 fs-3' onClick={signInWithGoogle} variant="warning"><span className='p-3 text-white'>{element}</span>  Log In with Google</Button>

            </div>
      );
};

export default Login;
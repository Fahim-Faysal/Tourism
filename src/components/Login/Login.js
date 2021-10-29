import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
      const [user, setUser] = useState({})
      const [error, setError] = useState('')

      const location = useLocation()
      const history = useHistory()

      const uri = location?.state?.from || '/home'

      const { signInWithGoogle } = useAuth()
      const handelGoogleSignIn = () => {
            signInWithGoogle()
                  .then(result => {
                        setUser(result.user)
                        history.push(uri)

                  })
                  .catch(error => {
                        setError(error.messeage)
                  })
      }


      const element = <FontAwesomeIcon icon={faGoogle} />

      return (
            <div>
                  <h2 className='text-success mt-5 mb-5'>Please Login</h2>
                  <Button className='w-25 fs-3' onClick={handelGoogleSignIn} variant="warning"><span className='p-3 text-white'>{element}</span>  Log In with Google</Button>

            </div>
      );
};

export default Login;
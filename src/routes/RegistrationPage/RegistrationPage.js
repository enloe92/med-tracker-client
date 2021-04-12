import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default function RegistrationPage(props) {

    return (
        <div className='RegistrationPage'>
            <h2>Register</h2>
            <RegistrationForm />
            <p>
                Already have an account? <br />
                <Link to={'/login'}>Sign in</Link>
            </p>
        </div>
    )
}
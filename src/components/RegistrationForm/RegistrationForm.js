import React, { useState } from 'react';
import './RegistrationForm.css'
import AuthApiService from '../../services/auth-api-service';

export default function RegistrationForm(props) {
    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        setErrorMessage(null);

        AuthApiService.postUser({ user_name, password })
            .then(() => {
                setUser_name('');
                setPassword('');

                const { location, history } = props;
                const destination = (location.state || {}).from || '/login';
                history.push(destination);
            })
            .catch(err => {
                setErrorMessage(err.error)
            })
    }

    return (
        <form className='sign-up-form' onSubmit={e => handleSubmit(e)}>

            <div className='form-options'>
                <label htmlFor='user_name'>Username</label>
                <br />
                <input type='text' placeholder='Enter Username' name='user_name' required
                    value={user_name} onChange={e => setUser_name(e.target.value)} />
            </div>
            <div className='form-options'>
                <label htmlFor="password">Password</label>
                <br />
                <input type="password" placeholder="Enter Password" name="password" required
                    value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <br />
            <p>{errorMessage}</p>
            <br />
            <div className='box pass-requirements'>
                <p>Password must:</p>
                <ul>
                    <li>Be at least 8 characters</li>
                    <li>Contain no spaces</li>
                    <li>Contain a number and special character</li>
                </ul>
            </div>
            <button type="submit" className='myButton'
                disabled={
                    !(user_name.length > 0) ||
                    !(password.length > 0)
                }>
                Register
                </button>

        </form>
    )
}
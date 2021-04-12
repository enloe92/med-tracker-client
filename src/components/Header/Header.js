import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import enter from '../../images/icons/entry-door.png';
import exit from '../../images/icons/exit-door.png';

function Header(props) {
    const [loggedIn, setLoggedIn] = useState(props.isLoggedIn)
    useEffect(() => {
        setLoggedIn(props.isLoggedIn)
    }, [props.isLoggedIn])

    function handleLogoutClick() {
        TokenService.clearAuthToken();
        props.whenLoggedOut();
    }

    function renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link className='center'
                    onClick={handleLogoutClick}
                    to='/'>
                    <img src={exit} alt='' height='50px' />
                    <br />
                        Logout
                    </Link>
            </div>
        )
    }

    function renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <div>
                    <Link
                        to='/login'>
                        <img src={enter} alt='' height='50px' />
                        <br />
                        Log in
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <nav className='Header'>
            <Link to='/home'>
                <h1>Med Tracker</h1>
            </Link>

            {(loggedIn === true)
                ? renderLogoutLink()
                : renderLoginLink()}
        </nav>
    )
}

export default Header;
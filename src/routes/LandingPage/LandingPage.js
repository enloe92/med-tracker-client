import React from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom';
import LandingBullets from '../../components/LandingBullets/LandingBullets';

export default function LandingPage(props) {
    return (
        <div className='LandingPage'>
            <h2>Welcome to Med Tracker</h2>
            <div className='container'>
                <div className='right'>
                    <LandingBullets />
                </div>
            </div>
            <div className='centered'>
                <p>Ready to get organized?</p>
                <p>Then Sign up, and start making your own notes</p>
                <Link to='/Register'>
                    Let's get started!
                </Link>
            </div>
        </div>
    )
}
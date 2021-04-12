import React from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h2>Welcome to Med Tracker!</h2>
            <h3>What do you want to do?</h3>
            <div className='MyRules'>
                <h3>My Notes</h3>
                <p>Here's where we have stored your notes</p>
                <p>Select a medication type (We'll only display medications you have notes for)</p>
                <p>You can view and add/remove notes</p>
                <Link to='/MyRules'>
                    <button>
                        My Notes
                    </button>
                </Link>
            </div>
            <div className='search'>
                <h3>Search</h3>
                <p>Want to see what other users have added?</p>
                <p>Even better, want to <span>ADD</span> those notes?</p>
                <p>Don't worry, we got you covered</p>
                <Link to='/Search'>
                    <button>
                        Search
                    </button>
                </Link>
            </div>
        </div>
    )
}
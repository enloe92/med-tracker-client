import React from 'react';
import note from '../../images/icons/notes.png'

export default function LandingBullets(props) {
    return (
        <React.Fragment>
            
            <div className='bullet'>
                <img src={note} alt='' height='30px' />
                <p>
                    Here at Med Tracker, we understand how difficult it can be to keep everything organized
                </p>
            </div>
            <div className='bullet'>
                <img src={note} alt='' height='30px' />
                <p>
                    So Log in/get signed up, and start getting organized
                </p>
            </div>
            <div className='bullet'>
                <img src={note} alt='' height='30px' />
                <p>If you want to demo the site and see what we're about, come on in!</p>
            </div>
            <div className='bullet'>
                <img src={note} alt='' height='30px' />
                <p>username: test_man</p>
            </div>
            <div className='bullet'>
                <img src={note} alt='' height='30px' />
                <p>password: pass</p>
            </div>
        </React.Fragment>
    )
}
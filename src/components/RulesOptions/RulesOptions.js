import React from 'react';
import { Link } from 'react-router-dom';
import './RulesOptions.css'

export default function RulesOptions(props) {
    return (
        <>
            <Link to={`/Rules/${props.id}`}>
                <button className='games-button'>
                    {props.name}
                </button>
            </Link>
            {props.break && <br />}
        </>
    )
}
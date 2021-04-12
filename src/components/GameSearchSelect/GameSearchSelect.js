import React from 'react';
import { Link } from 'react-router-dom';
import './GameSearchSelect.css'

export default function GameSearchSelect(props) {
    return (
        <div className='game-select'>
            <Link to={`/Results/${props.id}`}>
                <button className='search-game'>
                    {props.game_name}
                </button>
            </Link>
        </div>
    )
}
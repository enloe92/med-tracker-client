import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import PlayPacketApiService from '../../services/playpacket-api-service';
import RulesOptions from '../RulesOptions/RulesOptions'

export default function SideBar(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        if (props.category === 'usersgames') {
            PlayPacketApiService.getUserGames()
                .then(userGames => {
                    setGames(userGames);
                })
        }
    }, [props.category])

    let gamesButtons;

    if (props.category === 'usersgames') {
        gamesButtons = games.map(game => {
            return (
                <RulesOptions key={game.id} id={game.id} name={game.game_name} break={true} />
            )
        })
    }

    return (
        <React.Fragment>
            <button onClick={props.goBack}>
                Back
            </button>
            <br />
            {gamesButtons}

            {props.category === 'search' && (
                <Link to='/Search'>
                    <button>
                        All Games
                    </button>
                </Link>
            )}
            {props.category === 'usersgames' && (
                <Link to='/Add'>
                    <button>
                        Add Game
                    </button>
                </Link>
            )}
        </React.Fragment>
    )
}
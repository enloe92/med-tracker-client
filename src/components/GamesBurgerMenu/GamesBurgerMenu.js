import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'
import './GamesBurgerMenu.css'
import PlayPacketApiService from '../../services/playpacket-api-service';
import RulesOptions from '../RulesOptions/RulesOptions'

export default function GamesBurgerMenu(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGames()
            .then(userGames => {
                setGames(userGames);
            })
    }, [])
    let gamesButtons = games.map(game => {
        return (
            <RulesOptions key={game.id} id={game.id} name={game.game_name} break={true} />
        )
    })

    return (
        <Menu>
            <Link to='/MyRules'>
                <button>
                    Back
                </button>
            </Link>
            {gamesButtons}
        </Menu >
    )
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RulesOptions from '../../components/RulesOptions/RulesOptions';
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function RulesPage(props) {
    const [games, setGames] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getUserGames()
            .then(userGames => {
                setGames(userGames);
            })
    }, [])

    const gameOptions = games.map(game => {
        return (
            <RulesOptions key={game.id} id={game.id} name={game.game_name} />
        )
    })

    return (
        <div className='RulesPage'>
            <h2>Which type of medication are you looking for?</h2>
            <div className='gameSelect'>
                {gameOptions}
            </div>
            <p>Want to add a rule to a new game? <Link to='/Add'>Click here!</Link></p>
        </div>
    )
}
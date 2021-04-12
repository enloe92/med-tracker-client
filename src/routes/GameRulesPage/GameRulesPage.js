import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';
import './GameRulesPage.css'
import AddRuleForm from '../../components/AddRuleForm/AddRuleForm';
import SideBar from '../../components/SideBar/SideBar';
import UserRule from '../../components/UserRule/UserRule';
import PlayPacketApiService from '../../services/playpacket-api-service';
import GamesBurgerMenu from '../../components/GamesBurgerMenu/GamesBurgerMenu';

export default function GamesRulesPage(props) {
    const isDesktop = useMediaQuery({ minDeviceWidth: 800 })
    //form control
    const [adding, setAdding] = useState(false);
    //Inital render
    const [name, setName] = useState('')
    const [rules, setRules] = useState([]);
    useEffect(() => {
        PlayPacketApiService.getGameName(props.match.params.gameId)
            .then(game => {
                setName(game.game_name);
            })
        PlayPacketApiService.getUserGameRules(props.match.params.gameId)
            .then(gameRules => {
                setRules(gameRules);
            })
    }, [props.match.params.gameId]);

    function afterPost(newRule) {
        const addRule = rules;
        addRule.push(newRule)
        setRules(addRule);
        setAdding(false);
    }
    const mapRules = rules.map(rule => {
        return (
            <UserRule key={rule.id} id={rule.id}
                rule_title={rule.rule_title}
                rule_description={rule.rule_description}
                handleDeleteClicked={handleDeleteClicked} />
        )
    })

    function handleDeleteClicked(rule_id) {
        PlayPacketApiService.deleteUserRule(rule_id)
            .then(() => {
                const filterRules = rules.filter(rule => rule.id !== rule_id)
                setRules(filterRules);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='GamesRulesPage'>
            {!isDesktop && (
                <div className='burger'>
                    <GamesBurgerMenu isOpen={false} category='usersgames'
                        goBack={props.history.goBack} />
                </div>
            )}
            <div className='content'>
                {isDesktop && (
                    <div className='Sidebar'>
                        <SideBar category='usersgames'
                            goBack={props.history.goBack} />
                    </div>
                )}
                <div className='userRules'>
                    <h2>Rules For: {name}</h2>
                    <button onClick={() => setAdding(!adding)}>
                        {adding === false
                            ? 'Add'
                            : 'Nevermind!'}
                    </button>

                    {adding && (
                        <AddRuleForm game_id={props.match.params.gameId}
                            afterPost={(newRule) => afterPost(newRule)} />
                    )}
                    {mapRules}
                </div>
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import plus from '../../images/icons/plus.png';
import minus from '../../images/icons/minus.png';
import AddRuleForm from '../AddRuleForm/AddRuleForm'

export default function RuleAddSelect(props) {
    const [adding, setAdding] = useState(false);

    function afterPost() {
        setAdding(false);
    }

    let imgSrc;

    (adding === false)
        ? imgSrc = plus
        : imgSrc = minus;


    return (
        <div className='RuleAddSelect'>
            <div className='flex'>
                <h4>{props.game_name}</h4>

                <img className='click-icon' src={imgSrc} alt='' height='30px'
                    onClick={() => setAdding(!adding)} />
            </div>

            { adding && (
                <AddRuleForm game_id={props.game_id}
                    afterPost={(newRule) => afterPost(newRule)} />
            )}
        </div>
    )
}
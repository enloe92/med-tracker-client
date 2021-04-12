import React, { useState } from 'react';
import './AddRuleForm.css'
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function AddRuleForm(props) {
    const [loading, setLoading] = useState(false);
    const [rule_title, setRule_title] = useState('');
    const [rule_description, setRule_description] = useState('');

    function handleRuleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        PlayPacketApiService.postUserRule(rule_title, rule_description, props.game_id)
            .then(newRule => {
                setLoading(false);
                setRule_title('');
                setRule_description('');
                props.afterPost(newRule);
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }

    return (
        <form className='AddRuleForm' onSubmit={e => handleRuleSubmit(e)}>
            <div className='form-options'>
                <label htmlFor='medication_name'>Medication</label>
                <br />
                <input type='text' placeholder='Enter Medication' name='medication_name'
                    value={rule_title} onChange={e => setRule_title(e.target.value)} />
            </div>
            <div className='form-options'>
                <label htmlFor='medication_description'>Medication Description</label>
                <br />
                <textarea placeholder='Enter Medication Note'
                    name='rule_description' required
                    value={rule_description} onChange={e => setRule_description(e.target.value)} />
            </div>
            <button type="submit"
                disabled={loading}>
                {loading
                    ? 'Hang Tight'
                    : 'Add Note'}
            </button>
        </form>
    )
}
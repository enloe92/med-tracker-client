import React, { useState } from 'react';
import './UserRule.css'
import trash from '../../images/icons/garbage.png'
import edit from '../../images/icons/edit.png'
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function UserRule(props) {
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(props.rule_title)
    const [description, setDescription] = useState(props.rule_description)
    const [editTitle, setEditTitle] = useState(title);
    const [editDesc, setEditDesc] = useState(description);
    const [error, setError] = useState(null);

    const submitChanges = e => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        PlayPacketApiService.updateUserRule(props.id, editDesc, editTitle)
            .then(() => {
                setTitle(editTitle);
                setDescription(editDesc);
                setLoading(false);
                setEditing(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false);
            })
    }

    function renderStaticItems() {
        return (
            <>
                <h3>{title}</h3>
                <p>{description}</p>
            </>
        )
    }

    function renderEditItems() {
        return (
            <>
                {error && (
                    <p>{error}</p>
                )}
                <form className='post-rule-form' onSubmit={e => submitChanges(e)}>
                    <input type='text' placeholder={title} name='rule_title'
                        value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                    <br />
                    <textarea placeholder={description} name='rule_description'
                        value={editDesc} onChange={e => setEditDesc(e.target.value)} />
                    <br />
                    <button type="submit"
                        disabled={loading}>
                        {loading
                            ? 'Woah, hang tight'
                            : 'Submit!'}
                    </button>
                </form>
            </>
        )
    }

    return (
        <div className='rule'>
            <div className='icons'>
                <img className='click-icon delete' src={trash} alt='delete' height='20px'
                    onClick={() => props.handleDeleteClicked(props.id)} />
                <img className='click-icon' src={edit} alt='edit' height='20px'
                    onClick={() => setEditing(!editing)} />
            </div>

            {(editing === true)
                ? renderEditItems()
                : renderStaticItems()}
        </div>
    )
}
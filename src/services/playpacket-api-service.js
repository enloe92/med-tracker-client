import TokenService from './token-service';
import config from '../config';

const PlayPacketApiService = {
    getUserGames() {
        return fetch(`${config.API_ENDPOINT}/games`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAllGames() {
        return fetch(`${config.API_ENDPOINT}/games/all`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getUserGameRules(game_id) {
        return fetch(`${config.API_ENDPOINT}/rules/games/${game_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getSearchResults(game_id) {
        return fetch(`${config.API_ENDPOINT}/rules/search/${game_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getGameName(game_id) {
        return fetch(`${config.API_ENDPOINT}/games/${game_id}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postUserRule(rule_title, rule_description, game_id) {
        return fetch(`${config.API_ENDPOINT}/rules`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                rule_title,
                rule_description,
                game_id
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteUserRule(rule_id) {
        return fetch(`${config.API_ENDPOINT}/rules/${rule_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    },
    updateUserRule(rule_id, rule_description, rule_title) {
        return fetch(`${config.API_ENDPOINT}/rules/${rule_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                rule_title,
                rule_description,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : undefined
            )
    },
}

export default PlayPacketApiService;
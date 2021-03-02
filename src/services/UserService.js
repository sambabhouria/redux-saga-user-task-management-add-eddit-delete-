import axios from 'axios'
import { userURl } from '../config/api'


/**
 *
 * @param {title, description} data
 */
export const addUser = creds => {
    return axios.post(userURl, creds).then(res => res.data)
}

/**
 *
 * @param {username, password} creds
 */
export const login = creds => {
    //return axios.post(loginURl, creds)
    return new Promise((resolve, reject) => {
        const { username, password } = creds

        if (username === 'admin' && password === 'admin') {
            const user = {
                username,
                token: '123abcd1234'
            }
            localStorage.setItem('user', JSON.stringify(user))
            resolve(user)
        } else {
            reject({
                msg: 'Invalid Creds'
            })
        }
    })
}

export const logout = () => {
    localStorage.removeItem('user');
}

export const checkUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

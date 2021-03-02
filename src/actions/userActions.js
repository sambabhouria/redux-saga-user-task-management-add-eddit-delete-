import * as types from '../config/actionTypes'

/**
 *
 * @param {username, password} creds
 */
export const registerUserAction = (creds) => {
    return {
        type: types.REGISTER_USER,
        creds
    }
}

/**
 *
 * @param {username, password} creds
 */
export const userRegistred = (user) => {
    return {
        type: types.USER_REGISTREDD,
        user
    }
}

/**
 *
 * @param {username, password} creds
 */
export const loginUserAction = (creds) => {
    return {
        type: types.LOGIN_USER,
        creds
    }
}

/**
 *
 * @param {username, token} user
 */
export const userLoggedIn = (user) => {
    return {
        type: types.USER_LOGGEDIN,
        user
    }
}

export const logoutUserAction = () => {
    return {
        type: types.LOGOUT_USER
    }
}

export const userLoggedOutAction = () => {
    return {
        type: types.USER_LOGGEDOUT
    }
}

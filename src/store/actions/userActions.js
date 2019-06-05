import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";
import NavigationService from "../NavigationService";


export function login() {
    return async dispatch => {
        dispatch({ type: LOGIN_SUCCESS })
        NavigationService.navigate('App');   
    }
}

export function logout() {
    return async dispatch => {
        dispatch({ type: LOGOUT_SUCCESS })
        NavigationService.navigate('Auth'); 
    }
}
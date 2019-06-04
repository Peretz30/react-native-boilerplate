import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";
import NavigationService from "../NavigationService";
import {AsyncStorage} from 'react-native'


export function login() {
    return async dispatch => {
        await AsyncStorage.setItem('userToken', 'abc');
        dispatch({ type: LOGIN_SUCCESS })
        NavigationService.navigate('App');   
    }
}

export function logout() {
    return async dispatch => {
        await AsyncStorage.clear();
        dispatch({ type: LOGOUT_SUCCESS })
        NavigationService.navigate('Auth'); 
    }
}
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes";


const initialState = {
    isLoggedIn: false
}

const userReducer = (user = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...user, isLoggedIn: true }
        case LOGOUT_SUCCESS:
            return { ...user, isLoggedIn: false }
        default:
            return user
    }
}

export default userReducer
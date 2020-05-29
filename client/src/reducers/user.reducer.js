import { CHANGE_USER } from "../actions/changeCurrentUser";
import { SHOW_AUTH_FORM } from "../actions/showAuthForm.action";

export const defaultState = {
    currentUser: null,
    showAuthForm: false,
    jwt: null,
};

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
    case CHANGE_USER:
        return {
            ...state,
            currentUser: action.user,
            jwt: action.jwt
        };
    case SHOW_AUTH_FORM:
        return {
            ...state,
            showAuthForm: action.isShow,
        };
    default:
        return state;
    }
}

import { CHANGE_USER } from "../actions/changeCurrentUser";

export const defaultState = {
    currentUser: null,
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
    default:
        return state;
    }
}

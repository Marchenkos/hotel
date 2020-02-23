import { CHANGE_MENU } from "../actions/changeMenuActions";

export const defaultState = {
    currentMenu: ["hotels", "rooms", "pool", "gallery", "restaurants"],
};

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
    case CHANGE_MENU:
        return {
            ...state,
            currentMenu: action.menu
        };
    default:
        return state;
    }
}

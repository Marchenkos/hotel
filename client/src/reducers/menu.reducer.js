import { CHANGE_MENU } from "../actions/changeMenuActions";

export const defaultState = {
    currentMenu: ["hotels", "rooms", "services", "reviews", "contacts", "gallery"],
};

export default function menuReducer(state = defaultState, action) {
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

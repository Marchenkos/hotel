import { combineReducers } from "redux";

import roomsReducer from "./rooms.reducer";
import userReducer from "./user.reducer";
import menuReducer from "./menu.reducer";

export default combineReducers({
    rooms: roomsReducer,
    user: userReducer,
    menu: menuReducer,
});

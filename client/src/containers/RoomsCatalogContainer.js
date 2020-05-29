import { connect } from "react-redux";
import { getAllRooms } from "../actions/getRooms.action";
import { setFilterRooms } from "../actions/setFilterRooms.action";

import RoomCatalog from "../components/RoomCatalog";

const mapStateToProps = state => {
    return {
        allRooms: state.rooms.allRooms,
        filterRooms: state.rooms.filterRooms,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRoomsList: rooms => dispatch(getAllRooms(rooms)),
        setFilterRoomsList: rooms => dispatch(setFilterRooms(rooms)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomCatalog);

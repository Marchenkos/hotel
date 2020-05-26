import { connect } from "react-redux";
import { getAllRooms } from "../actions/getRooms.action";

import RoomCatalog from "../components/RoomCatalog";

const mapStateToProps = state => {
    return {
        allRooms: state.rooms.allRooms
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getRoomsList: rooms => dispatch(getAllRooms(rooms)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomCatalog);

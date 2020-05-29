import { connect } from "react-redux";

import Room from "../components/Room";

const mapStateToProps = state => {
    return {
        allRooms: state.rooms.allRooms,
        currentUser: state.user.currentUser
    };
};

export default connect(mapStateToProps)(Room);

import { connect } from "react-redux";

import Room from "../components/Room";

const mapStateToProps = state => {
    return {
        allRooms: state.rooms.allRooms,
        currentUser: state.user.currentUser,
        jwt: state.user.jwt,
    };
};

export default connect(mapStateToProps)(Room);

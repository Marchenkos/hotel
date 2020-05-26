import { connect } from "react-redux";
import { setBookedRoom } from "../actions/setBookedRoom";

import BookingField from "../components/bookFields/BookingField";

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        bookedRooms: state.rooms.bookedRooms
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onBookingRooms: rooms => dispatch(setBookedRoom(rooms)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingField);

import { connect } from "react-redux";

import Room from "../components/Room";

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    };
};

export default connect(mapStateToProps)(Room);

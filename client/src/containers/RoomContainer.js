import { connect } from "react-redux";

import Room from "../components/Room";

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    };
};

export default connect(mapStateToProps)(Room);

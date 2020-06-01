import { connect } from "react-redux";

import CommentList from "../components/comments/CommentList";

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    };
};

export default connect(mapStateToProps)(CommentList);

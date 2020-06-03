import { connect } from "react-redux";

import CommentList from "../components/comments/CommentList";

const mapStateToProps = state => {
    return {
        jwt: state.user.jwt
    };
};

export default connect(mapStateToProps)(CommentList);

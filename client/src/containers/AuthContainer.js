import { connect } from "react-redux";
import { changeUser } from "../actions/changeCurrentUser";
import { showAuthForm } from "../actions/showAuthForm.action";

import AuthBlock from "../components/authentication/AuthBlock";

const mapStateToProps = state => {
    return {
        showAuthForm: state.user.showAuthForm,
        currentUser: state.user.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeUser: (user, jwt) => dispatch(changeUser(user, jwt)),
        setShowAuthForm: value => dispatch(showAuthForm(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthBlock);

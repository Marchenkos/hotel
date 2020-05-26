import { connect } from "react-redux";
import { changeMenu } from "../actions/changeMenuActions";
import { changeUser } from "../actions/changeCurrentUser";

import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        currentMenu: state.menu.currentMenu,
        currentUser: state.user.currentUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRedirect: menu => dispatch(changeMenu(menu)),
        onChangeUser: (user, jwt) => dispatch(changeUser(user, jwt))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

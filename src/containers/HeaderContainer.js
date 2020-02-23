import { connect } from "react-redux";
import { changeMenu } from "../actions/changeMenuActions";

import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        currentMenu: state.currentMenu
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRedirect: menu => dispatch(changeMenu(menu))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

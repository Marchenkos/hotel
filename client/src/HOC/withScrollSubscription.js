import React from "react";
import { constants } from "../constants";

export default function withScrollSubscription(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                isScroll: false
            };
        }

        componentDidMount() {
            window.addEventListener("scroll", this.handleChange);
        }

        componentWillUnmount() {
            window.removeChangeListener("scroll", this.handleChange);
        }

        handleChange() {
            console.log(window.innerHeight + window.pageYOffset);
            if (window.innerHeight + window.pageYOffset < 700 && this.state.isScroll) {
                this.setState({
                    isScroll: false
                });
            } else if (!this.state.isScroll) {
                this.setState({
                    isScroll: true
                });
            }
        }

        render() {
            return <WrappedComponent isScroll={this.state.isScroll} {...this.props} />;
        }
    };
}

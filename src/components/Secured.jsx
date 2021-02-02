import React, { Component } from "react";
import UserInfo from "./UserInfo";
import Logout from "./Logout";
import Keycloak from "keycloak-js";
// import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { store } from "./store";

class Secured extends Component {
  constructor(props) {
    super(props);
    this.state = { keycloak: false, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
      store.dispatch({
        type: "LOGIN",
        users: authenticated,
      });
    });
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <div>
            <p>
              This is a Keycloak-secured component of your application. You
              shouldn't be able to see this unless you've authenticated with
              Keycloak.
            </p>
            <UserInfo keycloak={this.state.keycloak} />
            <Logout keycloak={this.state.keycloak} />
          </div>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = function (store) {
  return {
    users: store,
  };
};

export default connect(mapStateToProps)(Secured);

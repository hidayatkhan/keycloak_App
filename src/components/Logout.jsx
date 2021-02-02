import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Logout extends Component {
  logout() {
    this.props.history.push("/");
    this.props.keycloak.logout();
  }

  render() {
    return (
      <Link to="/" onClick={() => this.logout()}>
        Logout
      </Link>
    );
  }
}

export default withRouter(Logout);

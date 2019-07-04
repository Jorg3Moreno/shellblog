import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userAction";

import Spinner from "../spinner";
import Fatal from "../Fatal";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  setContent = () => {
    return (
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{this.setRows()}</tbody>
      </table>
    );
  };

  setRows = () =>
    this.props.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      );
    });

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }

    return <div>{this.setContent()}</div>;
  }
}

// connect recive:
// 1. all reducers passed by provider
// 2. action creators
const mapStateToProps = reducers => {
  return reducers.userReducer;
};

export default connect(
  mapStateToProps,
  userActions
)(Users);

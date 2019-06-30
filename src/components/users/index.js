import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userAction";

class Users extends Component {
  componentDidMount() {
    this.props.getAll();
  }

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
    return (
      <div>
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
      </div>
    );
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

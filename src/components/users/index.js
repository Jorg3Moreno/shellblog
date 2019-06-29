import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Users extends Component {
  // async componentDidMount() {
  //   const req = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   this.setState({
  //     users: req.data
  //   });
  // }

  ponerFilas = () =>
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
          <tbody>{this.ponerFilas()}</tbody>
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
  {}
)(Users);

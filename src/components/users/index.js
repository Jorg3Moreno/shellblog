import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = { users: [] };

  async componentDidMount() {
    const req = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      users: req.data
    });
  }

  ponerFilas = () =>
    this.state.users.map(user => {
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

export default Users;

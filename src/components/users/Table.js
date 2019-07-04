import React from "react";
import { connect } from "react-redux";

const Table = props => {
  const setRows = () =>
    props.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
        </tr>
      );
    });

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
        <tbody>{setRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = reducers => {
  return reducers.userReducer;
};

// not needed actions 'couse userComponent is getting
export default connect(mapStateToProps)(Table);

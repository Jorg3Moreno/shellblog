import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Table = props => {
  const setRows = () =>
    props.users.map((user, key) => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.website}</td>
          <td>
            <Link to={`/pubs/${key}`} className="eye-solid2 icon" />
          </td>
        </tr>
      );
    });

  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Number</th>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../../actions/userAction";

import Table from "./Table";
import Spinner from "../spinner";
import Fatal from "../Fatal";

class Users extends Component {
  componentDidMount() {
    if (!this.props.users.lenght) {
      this.props.getAll();
    }
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }

    return (
      <div>
        <h1>Users</h1>
        <Table />
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

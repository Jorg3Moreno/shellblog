import React, { Component } from "react";
import { connect } from "react-redux";

import * as userActions from "../../actions/userAction";
import * as publicationsActions from "../../actions/publicationsActions";

const { getAll: usersGetAll } = userActions;
const { getAll: publicationsGetAll } = publicationsActions;

class Publications extends Component {
  componentDidMount() {
    if (!this.props.userReducer.users.length) {
      this.props.usersGetAll();
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.userReducer.users.name}'s Publications</h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer, publicationsReducer }) => {
  return {
    userReducer,
    publicationsReducer
  };
};

const mapDispatchToProps = {
  usersGetAll,
  publicationsGetAll
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publications);

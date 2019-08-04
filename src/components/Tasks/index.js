import React, { Component } from "react";
import { connect } from "react-redux";

import * as taskActions from "../../actions/tasksActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    console.log(this.props);
    return <div>Tasks</div>;
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(
  mapStateToProps,
  taskActions
)(Tasks);

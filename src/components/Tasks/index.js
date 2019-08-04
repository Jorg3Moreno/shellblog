import React, { Component } from "react";
import { connect } from "react-redux";

class Tasks extends Component {
  render() {
    console.log(this.props);
    return <div>Tasks</div>;
  }
}

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps)(Tasks);

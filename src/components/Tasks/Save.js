import React, { Component } from "react";
import { connect } from "react-redux";

import * as tasksActions from "../../actions/tasksActions";

class Save extends Component {
  changeUserIdHandle = event => {
    //action to prop: userIdChange
    this.props.userIdChange(event.target.value);
  };

  changeTitleHandle = event => {
    //action to prop: userIdChange
    this.props.titleChange(event.target.value);
  };

  render() {
    return (
      <div>
        <h1>Save Task</h1>
        User id:
        <input
          type="number"
          value={this.props.userId}
          onChange={this.changeUserIdHandle}
        />
        <br />
        <br />
        Title:
        <input
          type="text"
          value={this.props.title}
          onChange={this.changeTitleHandle}
        />
        <br />
        <br />
        <button>Save</button>
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(
  mapStateToProps,
  tasksActions
)(Save);

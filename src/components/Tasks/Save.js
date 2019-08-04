import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as tasksActions from "../../actions/tasksActions";

import Spinner from "../spinner";
import Fatal from "../Fatal";

class Save extends Component {
  changeUserIdHandle = event => {
    //action to prop: userIdChange
    this.props.userIdChange(event.target.value);
  };

  changeTitleHandle = event => {
    //action to prop: userIdChange
    this.props.titleChange(event.target.value);
  };

  saveTaskHandle = () => {
    const { userId, title, saveTask } = this.props;
    const newTask = {
      userId,
      title,
      completed: false
    };

    saveTask(newTask);
  };

  disabledHandle = () => {
    const { userId, title, loading } = this.props;

    if (loading) {
      return true;
    }
    if (!userId || !title) {
      return true;
    }

    return false;
  };

  showAction = () => {
    const { error, loading } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />;
    }
  };

  render() {
    return (
      <div>
        {this.props.return ? <Redirect to="/task" /> : ""}
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
        <button onClick={this.saveTaskHandle} disabled={this.disabledHandle()}>
          Save
        </button>
        {this.showAction()}
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(
  mapStateToProps,
  tasksActions
)(Save);

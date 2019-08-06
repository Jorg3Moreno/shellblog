import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as tasksActions from "../../actions/tasksActions";

import Spinner from "../spinner";
import Fatal from "../Fatal";

class Save extends Component {
  componentDidMount() {
    const {
      match: {
        params: { user_id, task_id }
      },
      tasks,
      userIdChange,
      titleChange,
      clearForm
    } = this.props;

    if (user_id && task_id) {
      const task = tasks[user_id][task_id];
      userIdChange(task.userId);
      titleChange(task.title);
    } else {
      clearForm();
    }
  }

  changeUserIdHandle = event => {
    //action to prop: userIdChange
    this.props.userIdChange(event.target.value);
  };

  changeTitleHandle = event => {
    //action to prop: userIdChange
    this.props.titleChange(event.target.value);
  };

  saveTaskHandle = () => {
    const {
      match: {
        params: { user_id, task_id }
      },
      tasks,
      userId,
      title,
      saveTask,
      editTask
    } = this.props;

    const newTask = {
      userId,
      title,
      completed: false
    };

    if (user_id && task_id) {
      const task = tasks[userId][task_id];
      const editedTask = {
        ...newTask,
        completed: task.completed,
        id: task.id
      };

      editTask(editedTask);
    } else {
      saveTask(newTask);
    }
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

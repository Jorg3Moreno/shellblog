import React, { Component } from "react";
import { connect } from "react-redux";

import * as taskActions from "../../actions/tasksActions";
import Spinner from "../spinner";
import Fatal from "../Fatal";
import { Link } from "react-router-dom";

class Tasks extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tasks).length) {
      this.props.getAll();
    }
  }

  putTasks = user_id => {
    const { tasks } = this.props;
    const byUser = {
      ...tasks[user_id]
    };

    return Object.keys(byUser).map(taskId => (
      <div key={taskId}>
        <input type="checkbox" defaultChecked={byUser[taskId].completed} />
        {byUser[taskId].title}
      </div>
    ));
  };

  showContent = () => {
    const { tasks, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={this.props.error} />;
    }

    return Object.keys(tasks).map(user_id => (
      <div key={user_id}>
        <h2>User {user_id}</h2>
        <div className="task_container">{this.putTasks(user_id)}</div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button>
          <Link to="/tasks/save">New</Link>
        </button>
        {this.showContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer;

export default connect(
  mapStateToProps,
  taskActions
)(Tasks);

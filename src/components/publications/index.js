import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "../spinner";
import Fatal from "../Fatal";
import Comments from "./Comments";

import * as userActions from "../../actions/userAction";
import * as publicationsActions from "../../actions/publicationsActions";

const { getAll: usersGetAll } = userActions;
const {
  getByUser: publicationsGetByUser,
  openClose,
  getComments
} = publicationsActions;

class Publications extends Component {
  async componentDidMount() {
    const {
      usersGetAll,
      publicationsGetByUser,
      match: {
        params: { key }
      }
    } = this.props;

    if (!this.props.userReducer.users.length) {
      await usersGetAll();
    }
    if (this.props.userReducer.error) {
      return;
    }
    if (!("publicationsKey" in this.props.userReducer.users[key])) {
      publicationsGetByUser(key);
    }
  }

  putUser = () => {
    const {
      userReducer,
      match: {
        params: { key }
      }
    } = this.props;

    if (userReducer.error) {
      return <Fatal message={userReducer.error} />;
    }
    if (!userReducer.users.length || userReducer.loading) {
      return <Spinner />;
    }

    return <h1>{this.props.userReducer.users[key].name}'s Publications</h1>;
  };

  putPublications = () => {
    const {
      userReducer,
      userReducer: { users },
      publicationsReducer,
      publicationsReducer: { publications },
      match: {
        params: { key }
      }
    } = this.props;

    if (!users.length) return;

    if (userReducer.error) return;

    if (publicationsReducer.loading) {
      return <Spinner />;
    }

    if (publicationsReducer.error) {
      return <Fatal message={publicationsReducer.error} />;
    }

    if (!publications.length) return;

    if (!("publicationsKey" in users[key])) return;

    const { publicationsKey } = users[key];

    return this.showInfo(publications[publicationsKey], publicationsKey);
  };

  showInfo = (publications, publicationsKey) =>
    publications.map((publication, commentKey) => (
      <div
        className="pub_title"
        key={publication.id}
        onClick={() =>
          this.showComments(publicationsKey, commentKey, publication.comments)
        }
      >
        <h2>{publication.title}</h2>
        <p>{publication.body}</p>
        {publication.open ? <Comments comments={publication.comments} /> : ""}
      </div>
    ));

  showComments = (publicationsKey, commentKey, comments) => {
    this.props.openClose(publicationsKey, commentKey);
    if (!comments.length) {
      this.props.getComments(publicationsKey, commentKey);
    }
  };

  render() {
    return (
      <div>
        {this.putUser()}
        {this.putPublications()}
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
  publicationsGetByUser,
  openClose,
  getComments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Publications);

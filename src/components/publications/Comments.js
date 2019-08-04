import React from "react";
import { connect } from "react-redux";

import Spinner from "../spinner";
import Fatal from "../Fatal";

const Comments = props => {
  if (props.commError) {
    console.log(props.commError);
    return <Fatal message={props.commError} />;
  }
  if (props.commLoading && !props.comments.length) {
    return <Spinner />;
  }

  const putComments = () =>
    props.comments.map(comment => (
      <li key={comment.id}>
        <b>
          <u>{comment.email}</u>
        </b>
        <br />
        <p>{comment.body}</p>
      </li>
    ));

  return <ul>{putComments()}</ul>;
};

const mapStateToProps = ({ publicationsReducer }) => publicationsReducer;

export default connect(mapStateToProps)(Comments);

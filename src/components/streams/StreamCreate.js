//Original one is StreamCreate0.js
//With component-reuse concept (using StreamForm for both edit & crete actions)
//this component refactored & cleaned up...
//StreamCreate is no longer going to show a form...
import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    //call the appropriate action creator from /src/actions/index.js
    //CREATE_STREAM accepts only "formValues"
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

//Original one is StreamEdit0.js
//With component-reuse concept (using StreamForm for both edit & crete actions)
//this component refactored & cleaned up...
//StreamEdit is no longer going to show a form...
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    //console.log(formValues);

    //call the appropriate action creator from /src/actions/index.js
    //EDIT_STREAM accepts (id, formValues) in order...
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          //initialValues={{ title: "tit", description: "desc" }}
          //initialValues={this.props.stream}
          //initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
//initialValues ("title" and "description") should have the same name with the "Fields"
//in the StreamForm component. If you check the StreamForm component, youl will see the
//two Fields with names "title" and "description"
//Video 268: Setting Initial Values
//(This is the reduxForm property...)
//initialValues={this.props.stream}: this command sends all values including id & userId fields in the formStream
//But this is not good, because onSubmit(formValues) receives these id and userId...
//So we need to restrict this and send just title & description by converting the above statement to the one below:
//initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
//Additionally, if we use lodash (_), we can do that more easily like below:
//initialValues={_.pick(this.props.stream, "title", "description")}
//IN EACH TRY OF COMMENTED "initialValues=..." ABOVE, YOU CAN SEE THE PASSED INFO TO THE ONSUBMIT BY UNCOMMENTING "console.log(formValues)"

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

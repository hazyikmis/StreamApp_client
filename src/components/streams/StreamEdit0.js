import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

/*
const StreamEdit = props => {
  //console.log(props);
  return <div>StreamEdit</div>;
};
*/

//IN const TYPE OF COMPONENT DEFINITION YOU CAN ACCESS props JUST TYPING props LIKE ABOVE
//IN class TYPE OF COMPONENT DEFINITION YOU CAN ACCESS props TYPING this.props LIKE BELOW

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    //console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

//ownProps is equal to props used above
//we can access props as ownProps in the mapStateToProps...
//actually not exactly identical: "props" above has "stream" but "ownProps" below does not have "stream"
const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);

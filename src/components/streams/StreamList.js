import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//action creator:
import { fetchStreams } from "../../actions";

/*
const StreamList = () => {
  return <div>StreamList</div>;
};
*/

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreateStreamButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to='/streams/new' className='ui button primary'>
            Create New Stream
          </Link>
        </div>
      );
    }
  }

  renderEditButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className='ui button negative'
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderEditButtons(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    //console.log(this.props.streams);
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderCreateStreamButton()}
      </div>
    );
  }
}

//Object.values: accept an object as an input, and all the values of an object pulled out and inserted an array
//like convert an object to an array
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);

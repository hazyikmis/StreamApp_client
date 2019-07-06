import React from "react";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    //this.props.fetchStream(this.props.match.params.id);
    this.props.fetchStream(id);
    /*
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:/8000/live/${id}.flv`
    });
    //BE CAREFUL: When the page first rendered, there is no "this.props.stream", so only "Loading..."
    //shown on the screen and there is NO video element. Thus, the code below throws an error...
    //Because of that all this part moved to the under if statement inside the buildPlayer function.
    player.attachMediaElement(this.videoRef.current);
    player.load();
*/
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    /*
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
*/

    //So in order to get a reference to this video element right here below we're going to
    //define our constructor method up at the top
    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls={true} />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);

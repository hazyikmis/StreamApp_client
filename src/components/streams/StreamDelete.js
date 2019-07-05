import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  //const StreamDelete = () => {

  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  /*
  //extra div causes some alignment problems on the screen...(padding & margin issues)
  const actions = (
    <div>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </div>
  );
  */

  //React.Fragment do not add any element to the DOM, it helps to group all JSX elements under a single invisible!!! parent element
  //<React.Fragment> = <>; </React.Fragment> = </>; so you can put everything between <> & </>
  /*
  renderActions() {
    return (
      <React.Fragment>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </React.Fragment>
    );
  }
*/
  renderActions() {
    //const id = this.props.match.params.id;
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className='ui button negative'
        >
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      //return <div>Loading...</div>;
      return <div>Are you sure you want to delete this stream?</div>;
    }

    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  }

  render() {
    /*
    const actions = (
      <React.Fragment>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </React.Fragment>
    );
*/
    /*
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
*/
    return (
      <Modal
        title='Delete Stream'
        //content='Are you sure deleting this stream?'
        content={this.renderContent()}
        //actions={actions}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

//ownProps <=> this.props
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

//export default StreamDelete;
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);

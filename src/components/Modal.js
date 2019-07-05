import React from "react";
import ReactDOM from "react-dom";
//import history from "../history";

const Modal = props => {
  //createPortal renders the JSX directly under the body
  //1st parameter of createPortal is the JSX code to render
  //2nd parameter of createPortal is the element which the JSX rendered under (what is the parent?)
  //So we, added another div (with id="modal") to public/index.html
  return ReactDOM.createPortal(
    <div
      className='ui dimmer modals visible active'
      //onClick={() => history.push("/")}
      onClick={props.onDismiss}
    >
      <div
        className='ui standard modal visible active'
        onClick={e => e.stopPropagation()}
      >
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

/*
        <div className='header'>Delete Stream</div>
        <div className='content'>Are you sure deleting this stream?</div>
        <div className='actions'>
          <button className='ui approve button negative'>Delete</button>
          <button className='ui cancel button'>Cancel</button>
        </div>
*/

/*
    <div
      className='ui dimmer modals visible active'
      onClick={() => history.push("/")}
    >
*/

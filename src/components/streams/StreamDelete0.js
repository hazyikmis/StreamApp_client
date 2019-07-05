import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
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
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>Delete</button>
      <button className='ui button'>Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content='Are you sure deleting this stream?'
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;

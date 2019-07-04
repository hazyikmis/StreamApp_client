import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
//action creator:
import { createStream } from "../../actions";
/*
export default function StreamCreate() {
  return (
    <div>
      return <div>StreamCreate</div>
    </div>
  );
}
*/

class StreamCreate extends React.Component {
  /*
  renderInput(formProps) {
    //console.log(formProps);
    return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
  }
*/
  /*
  renderInput({ input }) {
    return <input {...input} />;
  }
*/

  /*
//first element to renderInput is "props" as default
  renderInput({ input, label, meta }) {
    //console.log(meta);
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        <div>{meta.error && meta.touched ? meta.error : null}</div>
      </div>
    );
  }
*/

  //please check the prev version
  //renderInput({ input, label, meta }) {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  //onSubmit(formValues) {
  onSubmit = formValues => {
    //console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    //NOTE: "error" class in form classes used form to semantic ui shows errors
    //if this "error" were not added to class list, then no errors will be shown on the form
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field name='title' component={this.renderInput} label='Enter Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

//errors object must have the identical property names with the Field object names
//video 234
//const validate = formValues => {
const validateForm = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

/*
export default reduxForm({
  form: "formStreamCreate",
  //validate
  validate: validateForm
})(StreamCreate);

//if we were gave the name "validate" rather than "validateForm" the expression above:
//just "validate" rather than "validate:validateForm"
*/

/*
export default connect()(
  reduxForm({
    form: "formStreamCreate",
    validate: validateForm
  })(StreamCreate)
);
*/

const formWrapped = reduxForm({
  form: "formStreamCreate",
  //validate
  validate: validateForm
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrapped);

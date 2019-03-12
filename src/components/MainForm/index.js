import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.MainInput) {
    errors.MainInput = "Required";
  } else if (values.MainInput.length < 2 || values.MainInput.length >= 11) {
    errors.MainInput = "Minimum is 1 to 10 characters";
  } else if (!/^[a-z0-9]+$/i.test(values.MainInput)) {
    errors.MainInput = "Please enter alphanumeric value only";
  }

  return errors;
};

// const isDisabled = values => {
//   if (!values.MainInput) {
//     return true;
//   } else if (values.MainInput.length < 2 || values.MainInput.length >= 11) {
//     return true;
//   } else if (!/^[a-z0-9]+$/i.test(values.MainInput)) {
//     return true;
//   }
// };

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label className="control-label" />
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class MainForm extends React.Component {
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            name="MainInput"
            component={renderField}
            label="Write here.."
          />
        </div>

        <div className="form-group">
          <button type="submit" name="mainBtn" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
MainForm = reduxForm({
  form: "demo",
  validate
})(MainForm);

export default MainForm;

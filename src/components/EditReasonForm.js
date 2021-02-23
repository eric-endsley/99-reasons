import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditReasonForm (props) {
  const { reason } = props;

  function handleEditReasonFormSubmission(event) {
    event.preventDefault();
    props.onEditReason({
      name: event.target.name.value, 
      logic: event.target.logic.value, 
      solution: event.target.solution.value, 
      id: reason.id });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditReasonFormSubmission}
        buttonText="Update Reason" />
    </React.Fragment>
  );
}

EditReasonForm.propTypes = {
  onEditReason: PropTypes.func
};

export default EditReasonForm;

// names: name
// location: logic
// issue: solution
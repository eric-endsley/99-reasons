import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditReasonForm (props) {
  const firestore = useFirestore();
  const { reason } = props;

  function handleEditReasonFormSubmission(event) {
    event.preventDefault();
    props.onEditReason();
    const propertiesToUpdate = {  
      name: event.target.name.value, 
      logic: event.target.logic.value, 
      solution: event.target.solution.value, 
    }
    return firestore.update({collectin: 'reasons', doc: reason.id }, propertiesToUpdate)
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
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';

function NewReasonForm(props){

  function handleNewReasonFormSubmission(event) {
    event.preventDefault();
    props.onNewReasonCreation({
      name: event.target.name.value,
      logic: event.target.logic.value,
      solution: event.target.solution.value,
      id: v4(),
      // timeOpen: new Moment(),
      // formattedWaitTime: new Moment().fromNow(true)
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewReasonFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewReasonForm.propTypes = {
  onNewReasonCreation: PropTypes.func
};

export default NewReasonForm;

// names: name
// location: logic
// issue: solution
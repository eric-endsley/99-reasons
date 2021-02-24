import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import { v4 } from 'uuid';
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase';

function NewReasonForm(props){

  const firestore = useFirestore();

  function addReasonToFirestore(event) {
    event.preventDefault();
    props.onNewReasonCreation();
    return firestore.collection('reasons').add(
      {
      name: event.target.name.value,
      logic: event.target.logic.value,
      solution: event.target.solution.value
      // timeOpen: new Moment(),
      // formattedWaitTime: new Moment().fromNow(true)
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addReasonToFirestore}
        buttonText="add reason!" />
    </React.Fragment>
  );
}

NewReasonForm.propTypes = {
  onNewReasonCreation: PropTypes.func
};

export default NewReasonForm;
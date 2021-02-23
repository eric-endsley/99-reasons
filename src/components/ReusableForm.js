import React from "react";
import PropTypes from "prop-types";
import {Row} from 'react-bootstrap';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <Row>
          <input
            type='text'
            name='name'
            placeholder="What's the reason?" />
        </Row>
        <Row>
          <input
            type='text'
            name='logic'
            placeholder='Gimme your logic' />
        </Row>
        <Row>
          <textarea
            name='solution'
            placeholder="What's a better way?" />
        </Row>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

// names: name
// location: logic
// issue: solution
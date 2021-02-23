import React from "react";
import PropTypes from "prop-types";

function Reason(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenReasonClicked(props.id)}>
        <h3>{props.logic} - {props.name}</h3>
        <p><em>{props.solution}</em></p>
        {/* <p><em>{props.formattedWaitTime}</em></p> */}
      </div>
      <hr/>
    </React.Fragment>
  );
}

Reason.propTypes = {
  name: PropTypes.string,
  logic: PropTypes.string,
  solution: PropTypes.string,
  id: PropTypes.string
  // formattedWaitTime: PropTypes.string,
  // whenReasonClicked: PropTypes.func
};

export default Reason;

// name: "it tastes bad",
// logic: "it's bad coffee stored in small plastic pods",
// solution: "try a french press, drip coffee, support your local bikini barista"

// names: name
// location: logic
// issue: solution
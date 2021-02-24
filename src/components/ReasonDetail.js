import React from "react";
import PropTypes from "prop-types";

function ReasonDetail(props){
  const { reason, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Reason #{reason.num}</h1>
      <h3>{reason.logic} - {reason.location}</h3>
      <p><em>{reason.solution}</em></p>
      <button onClick={ props.onClickingEdit }>Update Reason</button>
      <button onClick={()=> onClickingDelete(reason.id) }>Close Reason</button>
      <hr/>
    </React.Fragment>
  );
}

ReasonDetail.propTypes = {
  reason: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ReasonDetail; 
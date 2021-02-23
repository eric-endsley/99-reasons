import React from "react";
import PropTypes from "prop-types";
import Reason from "./Reason";

function ReasonList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.reasonList).map((reason) => {
        return <Reason
          whenReasonClicked = { props.onReasonSelection }
          name={reason.name}
          logic={reason.logic}
          solution={reason.solution}
          // formattedWaitTime={reason.formattedWaitTime}
          id={reason.id}
          key={reason.id}/>
      })}
    </React.Fragment>
  );
}

ReasonList.propTypes = {
  reasonList: PropTypes.object,
  onReasonSelection: PropTypes.func
};

export default ReasonList;
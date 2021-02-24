import React from "react";
import PropTypes from "prop-types";
import Reason from "./Reason";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function ReasonList(props){
  useFirestoreConnect([
    { collection: 'reasons'}
  ]);
  
  const reasons = useSelector(state => state.firestore.ordered.reasons);
 

  
  if (isLoaded(reasons)) {
    const random = Math.round(Math.random() * (reasons.length - 1))
    console.log(random)
    const randomlySelectedReason = reasons[random];
    return (
      <React.Fragment>
        <hr/>
          <Reason
            whenReasonClicked = { props.onReasonSelection }
            name={randomlySelectedReason.name}
            logic={randomlySelectedReason.logic}
            solution={randomlySelectedReason.solution}
            id={randomlySelectedReason.id}
            key={randomlySelectedReason.id}
            // num={(indexVal+1)}
            />
      </React.Fragment>
    );
  } else {
    return (
      <>
        <h3>Hmm, lemme think for a SEC!...</h3>
      </>
    )
  }
}

ReasonList.propTypes = {
  // reasonList: PropTypes.object,
  onReasonSelection: PropTypes.func,
};

export default ReasonList;

// {reasons.map((reason, indexVal) => {  
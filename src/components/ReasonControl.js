import React from 'react';
import NewReasonForm from './NewReasonForm';
import ReasonList from './ReasonList';
import ReasonDetail from './ReasonDetail';
import EditReasonForm from './EditReasonForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
// import firebase from '../firebase';


class ReasonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedReason: null,
      editing: false
    };
  }

  // componentDidMount() {
  //   this.waitTimeUpdateTimer = setInterval(() =>
  //     this.updateReasonElapsedWaitTime(),
  //   60000
  //   );
  // }

  // componentWillUnmount(){
  //   clearInterval(this.waitTimeUpdateTimer);
  // }

  // updateReasonElapsedWaitTime = () => {
  //   const { dispatch } = this.props;
  //   Object.values(this.props.masterReasonList).forEach(reason => {
  //     const newFormattedWaitTime = reason.timeOpen.fromNow(true);
  //     const action = a.updateTime(reason.id, newFormattedWaitTime);
  //     dispatch(action);
  //   });
  // }

  handleClick = () => {
    if (this.state.selectedReason != null) {
      this.setState({
        selectedReason: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewReasonToList = (newReason) => {
    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedReason = (id, idNum) => {
    this.props.firestore.get({collection: 'reasons', doc: id }).then((reason) => {
      const firestoreReason = {
        name: reason.get("name"),
        logic: reason.get("logic"),
        solution: reason.get('solution'),
        id: reason.id,
        num: idNum
      }
      this.setState({selectedReason: firestoreReason });
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingReasonInList = () => {
    this.setState({
      editing: false,
      selectedReason: null
    });
  }

  handleDeletingReason = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteReason(id);
    dispatch(action);
    this.setState({selectedReason: null});
  }

  render(){

    const auth = this.props.firebase.auth();

    if (!isLoaded(auth)){
      console.log(auth)
      this.forceUpdate();
      return (
        <>
          <h1>Hmmmm...</h1>
        </>
      )
    }
    if((isLoaded(auth)) && (auth.currentUser == null)){
      console.log(auth)
      
      return (
        <>
          <h1>You gotta be signed in!</h1>
        </>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      console.log(auth.currentUser)
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing ) {      
        currentlyVisibleState = <EditReasonForm reason = {this.state.selectedReason} onEditReason = {this.handleEditingReasonInList} />
        buttonText = "Return to Reason List";
      } else if (this.state.selectedReason != null) {
        currentlyVisibleState = 
        <ReasonDetail 
          reason = {this.state.selectedReason} 
          onClickingDelete = {this.handleDeletingReason} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Reason List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewReasonForm onNewReasonCreation={this.handleAddingNewReasonToList}  />;
        buttonText = "Return to Reason List";
      } else {
        currentlyVisibleState = <ReasonList reasonList={this.props.masterReasonList} onReasonSelection={this.handleChangingSelectedReason} />;
        buttonText = "Add Reason";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

ReasonControl.propTypes = {
  masterReasonList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    // masterReasonList: state.masterReasonList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ReasonControl = connect(mapStateToProps)(ReasonControl);

export default withFirestore(ReasonControl);
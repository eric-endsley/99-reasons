import React from 'react';
import NewReasonForm from './NewReasonForm';
import ReasonList from './ReasonList';
import ReasonDetail from './ReasonDetail';
import EditReasonForm from './EditReasonForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

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
    const action = a.addReason(newReason)
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedReason = (id) => {
    const selectedReason = this.props.masterReasonList[id];
    this.setState({selectedReason: selectedReason});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingReasonInList = (reasonToEdit) => {
    const { dispatch } = this.props;
    const action = a.addReason(reasonToEdit);
    dispatch(action);
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

ReasonControl.propTypes = {
  masterReasonList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterReasonList: state.masterReasonList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ReasonControl = connect(mapStateToProps)(ReasonControl);

export default ReasonControl;
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';


class BookPanel extends Component {

  render(){
    const { showSuccessNotification } = this.props;

    const onTestClick = () => {
      console.log('click');
      showSuccessNotification('hey');
    };

    return (
      <div>
        Books

        <button onClick={onTestClick}>test</button>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
});


BookPanel = connect(mapStateToProps, actions)(BookPanel);

export default BookPanel;

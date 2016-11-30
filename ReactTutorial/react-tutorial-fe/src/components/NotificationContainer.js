import React, { Component } from 'react';
import { Notification } from 'react-notification';
import { connect } from 'react-redux';
import * as actions from '../actions';

import * as colors from '../util/colors';


let NotificationContainer = (props) => {
  let { message, notification_type } = props.notification;
  let { hideNotification } = props;
  let isActive = message ? true : false;
  let color;

  switch (notification_type) {
    case 'SUCCESS':
      color  = colors.success;
      break;
    case 'ERROR':
      color  = colors.danger;
      break;
    case 'INFO':
      color  = colors.info;
      break;
  }


  return (
    <Notification
      isActive={isActive}
      message={message?message:''}
      action="x"
      onClick={hideNotification}
      dismissAfter={2000}
      onDismiss={hideNotification}
    />
  );
};

let mapStateToProps = (state) => ({
  ...state
});

NotificationContainer = connect(mapStateToProps, actions)(NotificationContainer);

export default NotificationContainer;

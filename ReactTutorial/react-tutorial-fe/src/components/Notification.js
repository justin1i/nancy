import React, { Component } from 'react';
import { Notification } from 'react-notification';
import { connect } from 'react-redux';
import { hideNotification } from '../actions';

import * as colors from '../util/colors';

let NotificationContainer = (props) => {
  let { message, notification_type } = props.notification;
};



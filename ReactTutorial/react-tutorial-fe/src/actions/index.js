import api from '../api';
console.log('api', api);

export const showSuccessNotification = (message) => ({
  type: 'SHOW_NOTIFICATION',
  notification_type: 'SUCCESS',
  message,
});

export const hideNotification = () => ({
  type: 'CLEAR_NOTIFICATION',
});

const notification = (state={}, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      const { message, notification_type } = action;
      return ({
        ...state,
        message,
        notification_type,
      });
    case 'CLEAR_NOTIFICATION':
      return {};
  }
  return state;
};

export default notification;

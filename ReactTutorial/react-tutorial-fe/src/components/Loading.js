import React from 'react';

export default ({ isLoading  }) => {
  if (isLoading) {
    return (
      <div className="loading">Loading&#8230;</div>
    );
  }
  return null;
};
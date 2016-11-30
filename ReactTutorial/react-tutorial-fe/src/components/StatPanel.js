import React from 'react';

export default ({ bookLength, authorLength }) => (
  <div className="row">
    <div className="one-half column">
      书本数量：{bookLength}
    </div>
    <div className="one-half column">
      作者数量：{authorLength}
    </div>
  </div>
);

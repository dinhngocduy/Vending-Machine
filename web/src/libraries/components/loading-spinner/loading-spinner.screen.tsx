import React from 'react';

import './loading-spinner.scss';

function LoadingSpinnerScreen(props:any) {
  return (
    <div className={"loading-spinner " + (props.className)}></div>
  );
}

export default LoadingSpinnerScreen;

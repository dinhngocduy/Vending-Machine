import React from 'react';
import './circle-avatar.scss';
import { ICircleAvatar } from './circle-avatar.props';

function CircleAvatarScreen(props : ICircleAvatar) {

  const  { src , className , hasCursor , onClick , size } = props;

  const styleInline = { 
    backgroundImage : `url(${src})` , 
    backgroundColor:"#d7e4e2",
    minWidth: `${size}px` , 
    minHeight: `${size}px`,
    cursor: hasCursor ? "pointer" : "initial"
  };

  return (
    <>
      <div 
        className={ "circle-avatar " + (className ? className : "") } 
        style={ styleInline }
        onClick={ onClick && onClick }
      >
      </div> 
    </>
  );
}

export default CircleAvatarScreen;



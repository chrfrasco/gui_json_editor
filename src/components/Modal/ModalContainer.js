import React, {Component} from 'react';

const ModalContainer = ({ children, open }) =>
  open 
    ? <div className="modal">{children}</div> 
    : null;

export default ModalContainer;
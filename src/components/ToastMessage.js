import React from 'react';
import { Toast } from 'react-bootstrap';

const ToastMessage = ({ message }) => {
  return (
    <Toast>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;

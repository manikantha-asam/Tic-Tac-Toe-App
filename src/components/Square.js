import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes, FaCircle } from 'react-icons/fa';

const Square = ({ value, onClick }) => {
  return (
    <Button className="square" onClick={onClick}>
      {value === 'X' ? <FaTimes /> : value === 'O' ? <FaCircle /> : null}
    </Button>
  );
};

export default Square;

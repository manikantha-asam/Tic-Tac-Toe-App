import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Square from './Square';

const BOARD_SIZE = 3;

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (squares.every(square => square !== null)) {
    return 'draw';
  }

  return null;
};

const Board = ({ notifyAlreadyClicked, notifyWinner, notifyDraw }) => {
  const [squares, setSquares] = React.useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const currentPlayer = xIsNext ? 'X' : 'O';

  const handleClick = index => {
    if (squares[index]) {
      notifyAlreadyClicked();
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = index => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner === 'draw') {
    status = "It's a draw!";
    notifyDraw();
  } else if (winner) {
    status = `Winner: ${winner}`;
    notifyWinner(winner);
  } else {
    status = `Next player: ${currentPlayer}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      {[...Array(BOARD_SIZE)].map((_, i) => (
        <Row key={i} className="board-row">
          {[...Array(BOARD_SIZE)].map((_, j) => (
            <Col key={i * BOARD_SIZE + j} className="board-col">
              {renderSquare(i * BOARD_SIZE + j)}
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Board;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line
import { FaTimes, FaCircle } from 'react-icons/fa'; 
import Board from './components/Board';
import './App.css';

function App() {
  const [reset, setReset] = React.useState(false);

  const handleReset = () => {
    setReset(!reset);
  };

  const notifyAlreadyClicked = () => toast.error('This cell is already clicked!');
  
  const notifyWinner = (winner) => {
    toast.success(`Congratulations! Player ${winner} won the game!`);
  };

  const notifyDraw = () => toast.warning("It's a draw!");

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1 className="text-center mb-4">TicTacToe</h1>
          <Board key={reset} notifyAlreadyClicked={notifyAlreadyClicked} notifyWinner={notifyWinner} notifyDraw={notifyDraw} />
          <Button variant="primary" onClick={handleReset} className="restart-btn">
            Restart Game
          </Button>
        </Col>
      </Row>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Container>
  );
}

export default App;

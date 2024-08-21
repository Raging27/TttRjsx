import { useState } from 'react';
import Cell from './assets/Cell.jsx';

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("Circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const checkWinner = (newCells) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
      [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    winningCombinations.forEach((combination) => {
      const [a, b, c] = combination;
      if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
        setWinningMessage(`${newCells[a]} Wins!`);
      }
    });

    if (!newCells.includes("") && !winningMessage) {
      setWinningMessage("It's a Draw!");
    }
  };

  const message = winningMessage || `It's ${go}'s turn`;

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            checkWinner={checkWinner}
          />
        ))}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default App;

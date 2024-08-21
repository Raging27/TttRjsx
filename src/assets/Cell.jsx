const Cell = ({ id, cell, go, setGo, cells, setCells, checkWinner }) => {
	const handleClick = () => {
	  if (!cell) {
		const newCells = [...cells];
		newCells[id] = go;
		setCells(newCells);
		setGo(go === "Circle" ? "Cross" : "Circle");
		checkWinner(newCells);
	  }
	};

	return (
	  <div className="square" onClick={handleClick}>
		<div className={cell.toLowerCase()}>
		  {cell}
		</div>
	  </div>
	);
  };

  export default Cell;

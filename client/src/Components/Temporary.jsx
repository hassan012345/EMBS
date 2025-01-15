import React, { useState, useEffect } from 'react';
import { Puzzle } from 'lucide-react';

const PuzzleTile = ({ number, onDragStart, onDragOver, onDrop, draggable }) => {
  return (
    <div
      draggable={draggable}
      onDragStart={(ev) => onDragStart(ev, number)}
      onDragOver={(ev) => onDragOver(ev)}
      onDrop={(ev) => onDrop(ev, number)}
      className="flex justify-center items-center w-20 h-20 bg-blue-500 text-white font-bold text-2xl border-2 border-white hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
    >
      {number}
    </div>
  );
};

const PuzzleGameUI = () => {
  const initTiles = Array.from({ length: 9 }, (_, i) => i); // 0 represents the empty tile
  const [tiles, setTiles] = useState(initTiles);
 
  useEffect(() => {
    // Shuffle tiles initially or set up your initial state of game here
  }, []);

  const handleDragStart = (event, number) => {
    event.dataTransfer.setData("text/plain", number);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necessary for onDrop to work
  };

  const handleDrop = (event, number) => {
    event.preventDefault();
    const droppedTileNumber = event.dataTransfer.getData("text");
    if (droppedTileNumber) {
      moveTile(parseInt(droppedTileNumber, 10), number);
    }
  };

  const moveTile = (from, to) => {
    if (isValidMove(from, to)) {
      const tilesCopy = [...tiles];
      [tilesCopy[tiles.indexOf(from)], tilesCopy[tiles.indexOf(to)]] = [tilesCopy[tiles.indexOf(to)], tilesCopy[tiles.indexOf(from)]];
      setTiles(tilesCopy);
    }
  };

  const isValidMove = (from, to) => {
    const fromIndex = tiles.indexOf(from);
    const toIndex = tiles.indexOf(0); // Empty tile is always the move-to target
    const validMoves = [
      toIndex - 1, toIndex + 1, // Left and right
      toIndex - 3, toIndex + 3 // Above and below
    ];
    return validMoves.includes(fromIndex);
  };

  return (
    <div className="max-w-sm mx-auto my-10">
      <div className="mb-4 flex justify-center">
        <Puzzle size={48} className="text-blue-500" />
      </div>
      <div className="bg-gray-200 p-2 grid grid-cols-3 gap-2">
        {tiles.map((tileNumber) =>
          tileNumber === 0 ? (
            <div key={tileNumber} className="w-20 h-20 border-2 border-white" onDragOver={handleDragOver} onDrop={(event) => handleDrop(event, tileNumber)}></div>
          ) : (
            <PuzzleTile key={tileNumber} number={tileNumber} onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop} draggable={isValidMove(tileNumber, 0)} />
          )
        )}
      </div>
    </div>
  );
};

export default PuzzleGameUI;
import { useEffect, useState } from "react";
import useGameWebSocket from "../hooks/useGameWebSocket";
import Pipe from "./Pipe";

function Board() {
  const {pipes, columns, pipeCanvasSize, newLevel, getPipesMap, rotate, verifyPipe, help} = useGameWebSocket()

  return (
    <div>
      hello there!
      <button onClick={() => getPipesMap()}>map</button>
      <button onClick={() => rotate(2, 0)}>rotate</button>
      <button onClick={() => verifyPipe()}>verify</button>
      <button onClick={() => help()}>help</button>
      <button onClick={() => newLevel(1)}>NewLevel</button>
      <br></br>
      <div className="board-grid-container" style={{gridTemplateColumns: "auto ".repeat(columns)}}>
        {pipes.map((p, i) => (
          <div className="board-grid-item" style={{height: pipeCanvasSize}}>
            <Pipe
              pipeCanvasSize = {pipeCanvasSize}
              key={i}
              handleClick={() =>
                rotate(i - Math.floor(i / columns) * columns, Math.floor(i / columns))
              }
              pipe={p}
              width={pipeCanvasSize}
              height={pipeCanvasSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;

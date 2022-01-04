import { getX, getY, isPipePlugged } from "../utils/utils";
import Pipe from "./Pipe";

type boardProps = {
  pipes: string[];
  columns: number;
  pipeCanvasSize: number;
  rotatePipe: (x:number, y:number)=>void;
};

const Board = ({ pipes, columns, pipeCanvasSize, rotatePipe }: boardProps) => {
  
  return (
    <div
      className="board-grid-container"
      style={{ gridTemplateColumns: "auto ".repeat(columns) }}
    >
      {pipes.map((p, i) => {
        return (
          <Pipe
            key={i}
            className="board-grid-item"
            style={{ height: pipeCanvasSize }}
            pipeCanvasSize={pipeCanvasSize}
            handleClick={() => rotatePipe(getX(i, columns), getY(i, columns))}
            pipe={p}
            width={pipeCanvasSize}
            height={pipeCanvasSize}
            isPlugged={isPipePlugged(p, pipes, i, columns, getX(i, columns), getY(i, columns))}
          />
        );
      })}
      </div>
  );
};

export default Board;

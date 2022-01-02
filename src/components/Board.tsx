import { isPipePlugged } from "../utils/utils";
import Pipe from "./Pipe";

type boardProps = {
  pipes: string[];
  columns: number;
  pipeCanvasSize: number;
  rotatePipe: Function;
};

const Board = ({ pipes, columns, pipeCanvasSize, rotatePipe }: boardProps) => {
  const getX = (myIndex: number) => {
    return myIndex - Math.floor(myIndex / columns) * columns;
  };

  const getY = (myIndex: number) => {
    return Math.floor(myIndex / columns);
  };

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
            handleClick={() => rotatePipe(getX(i), getY(i))}
            pipe={p}
            width={pipeCanvasSize}
            height={pipeCanvasSize}
            isPlugged={isPipePlugged(p, pipes, i, columns, getX(i), getY(i))}
          />
        );
      })}
    </div>
  );
};

export default Board;

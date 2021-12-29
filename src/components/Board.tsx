import Pipe from "./Pipe";

type boardProps = {
  pipes: string[];
  columns: number;
  pipeCanvasSize: number;
  rotatePipe: Function;
};

const Board = ({ pipes, columns, pipeCanvasSize, rotatePipe }: boardProps) => {
  return (
    <div
      className="board-grid-container"
      style={{ gridTemplateColumns: "auto ".repeat(columns) }}
    >
      {pipes.map((p, i) => (
        <div
          key={i}
          className="board-grid-item"
          style={{ height: pipeCanvasSize }}
        >
          <Pipe
            pipeCanvasSize={pipeCanvasSize}
            handleClick={() =>
              rotatePipe(
                i - Math.floor(i / columns) * columns,
                Math.floor(i / columns)
              )
            }
            pipe={p}
            width={pipeCanvasSize}
            height={pipeCanvasSize}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;

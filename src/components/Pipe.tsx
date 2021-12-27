import { useCanvas } from "../hooks";

const Pipe = (props: UI.CanvasProps) => {
  const { pipe, pipeCanvasSize, handleClick, ...rest } = props;
  const drawPipe = (context: CanvasRenderingContext2D, pipe: string) => {
    const width = pipeCanvasSize;
    context.fillStyle = "#005b96 ";
    context.clearRect(0, 0, width, width);
    switch (pipe) {
      case "┏":
        context.fillRect(width * 0.375, width * 0.375, width * 0.625, width * 0.25);
        context.fillRect(width * 0.375, width * 0.375, width * 0.25, width);
        break;
      case "┓":
        context.fillRect(0, width * 0.375, width * 0.5, width * 0.25);
        context.fillRect(width * 0.375, width * 0.375, width * 0.25, width);
        break;
      case "┛":
        context.fillRect(0, width * 0.375, width * 0.5, width * 0.25);
        context.fillRect(width * 0.375, 0, width * 0.25, width * 0.625);
        break;
      case "┗":
        context.fillRect(width * 0.375, 0, width * 0.25, width * 0.625);
        context.fillRect(width * 0.375, width * 0.375, width * 0.625, width * 0.25);
        break;
      case "╸":
        context.fillRect(0, width * 0.375, width * 0.375, width * 0.25);
        break;
      case "╺":
        context.fillRect(width * 0.625, width * 0.375, width * 0.375, width * 0.25);
        break;
      case "╻":
        context.fillRect(width * 0.375, width * 0.625, width * 0.25, width * 0.375);
        break;
      case "╹":
        context.fillRect(width * 0.375, 0, width * 0.25, width * 0.375);
        break;
      case "┃":
        context.fillRect(width * 0.375, 0, width * 0.25, width);
        break;
      case "━":
        context.fillRect(0, width * 0.375, width, width * 0.25);
        break;
      case "┳":
        context.fillRect(0, width * 0.375, width, width * 0.25);
        context.fillRect(width * 0.375, width * 0.625, width * 0.25, width * 0.375);
        break;
      case "┫":
        context.fillRect(0, width * 0.375, width * 0.625, width * 0.25);
        context.fillRect(width * 0.375, 0, width * 0.25, width);
        break;
      case "┣":
        context.fillRect(width * 0.375, 0, width * 0.25, width);
        context.fillRect(width * 0.625, width * 0.375, width * 0.375, width * 0.25);
        break;
      case "┻":
        context.fillRect(width * 0.375, 0, width * 0.25, width * 0.375);
        context.fillRect(0, width * 0.375, width, width * 0.25);
        break;
      case "╋":
        context.fillRect(width * 0.375, 0, width * 0.25, width);
        context.fillRect(0, width * 0.375, width, width * 0.25);
        break;
      default:
        context.fillRect(0, 0, width, width);
        break;
    }
  };

  const canvasRef = useCanvas(drawPipe, pipe);
  return <canvas onClick={() => handleClick()} ref={canvasRef} {...rest} />;
};

export default Pipe;

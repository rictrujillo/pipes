export const drawPipe = (context: CanvasRenderingContext2D, pipe: string) => {
  console.log('aca')
  context.fillStyle = "#005b96 ";
  context.clearRect(0, 0, 80, 80);
  switch (pipe) {
    case "┏":
      context.fillRect(30, 30, 50, 20);
      context.fillRect(30, 30, 20, 80);
      break;
    case "┓":
      context.fillRect(0, 30, 40, 20);
      context.fillRect(30, 30, 20, 80);
      break;
    case "┛":
      context.fillRect(0, 30, 40, 20);
      context.fillRect(30, 0, 20, 50);
      break;
    case "┗":
      context.fillRect(30, 0, 20, 50);
      context.fillRect(30, 30, 50, 20);
      break;
    case "╸":
      context.fillRect(0, 30, 30, 20);
      break;
    case "╺":
      context.fillRect(50, 30, 30, 20);
      break;
    case "╻":
      context.fillRect(30, 50, 20, 30);
      break;
    case "╹": 
      context.fillRect(30, 0, 20, 30);
      break;
    case "┃":
      context.fillRect(30, 0, 20, 80);
      break;
    case "━":
      context.fillRect(0, 30, 80, 20);
      break;
    case "┳":
        context.fillRect(0, 30, 80, 20);
        context.fillRect(30, 50, 20, 30);
      break;
    case "┫":
        context.fillRect(0, 30, 50, 20);
        context.fillRect(30, 0, 20, 80);
      break;
    case "┣":
      context.fillRect(30, 0, 20, 80);
      context.fillRect(50, 30, 30, 20);
      break;
    case "┻":
      context.fillRect(30, 0, 20, 30);
      context.fillRect(0, 30, 80, 20);
      break;
    case "╋":
      context.fillRect(30, 0, 20, 80);
      context.fillRect(0, 30, 80, 20);        
      break;
    default:
      context.fillRect(0,0, 80, 80);
      break;
  }
};
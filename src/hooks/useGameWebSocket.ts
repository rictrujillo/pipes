import { useEffect, useState } from "react";

function useGameWebSocket() {
  const [pipes, setPipes] = useState<string[]>([]);
  const [gameSocket, setGameSocket] = useState<any>({});

  useEffect(() => {
    const ws = new WebSocket("wss://hometask.eg1236.com/game-pipes/");
    ws.onopen = (event) => {
      ws.send("new 1");
    };
    ws.onmessage = (event: Event | any) => {
      const pipeString: string = event.data;
      console.log(pipeString);
      const pipeArray = pipeString.split("");
      if (pipeArray.length > 70)
        setPipes(
          pipeArray.filter(
            (p) => p.charCodeAt(0) !== 10 && p.charCodeAt(0) > 200
          )
        );
    };
    setGameSocket(ws);
  }, []);

  const newLevel = (level: number) => {
    gameSocket.send(`new ${level}`);
  };

  const getPipesMap = () => {
    gameSocket.send("map");
  };

  const rotatePipe = (x: number, y: number) => {
    gameSocket.send(`rotate ${x} ${y}`);
  };

  const verifyPipe = () => {
    gameSocket.send(`verify`);
  };

  const help = () => {
    gameSocket.send(`help`);
  };

  const rotate = (x: number, y: number) => {
    console.log(x, y);
    rotatePipe(x, y);
    getPipesMap();
  };

  const columns = 8;
  const pipeCanvasSize = 80;

  return {pipes, columns, pipeCanvasSize, newLevel, getPipesMap, rotate, verifyPipe, help};
}

export default useGameWebSocket;

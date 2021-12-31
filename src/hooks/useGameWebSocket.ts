import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from ".";
import { updateVerifyStatus } from "../redux/gameSlice";

function useGameWebSocket() {
  const [pipes, setPipes] = useState<string[]>([]);
  const [gameSocket, setGameSocket] = useState<any>({});
  const level = useAppSelector(store=>store.game.level)
  const dispatch = useAppDispatch();


  useEffect(() => {
    const ws = new WebSocket("wss://hometask.eg1236.com/game-pipes/");
    ws.onopen = (event) => {
      ws.send("new 1");
    };
    setGameSocket(ws);
  }, []);

  gameSocket.onmessage = (event: Event | any) => {
    const pipeString: string = event.data;
    console.log(pipeString);
    const pipeArray = pipeString.split("");
    if (pipeArray.length > 70)
      setPipes(
        pipeArray.filter(
          (p) => p.charCodeAt(0) !== 10 && p.charCodeAt(0) > 200
        )
      );
    if(pipeString.includes("verify:"))
      dispatch(updateVerifyStatus(pipeString))
  };

  const newLevel = (level: number) => {
    gameSocket.send(`new ${level}`);
  };

  const getPipesMap = () => {
    gameSocket.send("map");
  };

  const rotate = (x: number, y: number) => {
    gameSocket.send(`rotate ${x} ${y}`);
  };

  const verifyPipe = () => {
    gameSocket.send(`verify`);
  };

  const help = () => {
    gameSocket.send(`help`);
  };

  const rotatePipe = (x: number, y: number) => {
    console.log(x, y);
    rotate(x, y);
    getPipesMap();
  };

  let columns = 8;
  let pipeCanvasSize = 80;
  if(level === 2){
    columns = 25;
    pipeCanvasSize = 40;
  }
  if (level === 3){
    columns = 50;
    pipeCanvasSize = 24;
  }
  if (level === 4){
    columns = 200;
    pipeCanvasSize = 16;
  }

  return {pipes, columns, pipeCanvasSize, newLevel, getPipesMap, rotatePipe, verifyPipe, help};
}

export default useGameWebSocket;

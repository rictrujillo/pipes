declare namespace UI {
  export interface CanvasProps {
    pipeCanvasSize: number;
    pipe: string;
    handleClick: Function;
    isPlugged: boolean;
    [x: string]: any;
  }
}

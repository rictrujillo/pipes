import {useRef, useEffect} from 'react'

export const useCanvas = (draw: Function, pipe: string) => {

  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{

    const canvas = canvasRef.current
    const context = canvas!.getContext('2d')
    draw(context, pipe)
    /*context!.fillStyle = "black";
    context!.textAlign = "center";
    context!.font = "30px Arial";
    context!.fillText(pipe, 20, 50);*/
  }, [draw])

  return canvasRef

}
import {useRef, useEffect} from 'react'

export const useCanvas = (draw: Function, pipe: string) => {

  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null)
  useEffect(()=>{

    const canvas = canvasRef.current
    const context = canvas!.getContext('2d')
    draw(context, pipe)
  }, [draw, pipe])

  return canvasRef

}
import { useEffect, useRef } from 'react';

import styles from './styles.module.css';

type CanvasProps = {
  height?: number;
  onDraw: (ctx: CanvasRenderingContext2D) => void;
  width?: number;
};

const Canvas = ({ height = 750, onDraw, width = 950 }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (ctx) {
      onDraw(ctx);
    }
  }, [onDraw, canvasRef]);

  return (
    <div className={styles.container}>
      <canvas
        className={styles.canvas}
        height={height}
        ref={canvasRef}
        width={width}
      />
    </div>
  );
};

export default Canvas;

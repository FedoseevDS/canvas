import { Render } from 'types';

export const configExample2: Render = ({ canvas, ctx }) => {
  const handleMouseMove = (event: MouseEvent) => {
    const x = event.offsetX;
    const y = event.offsetY;

    ctx.fillRect(x, y, 10, 10);
  };

  if (canvas) {
    canvas.onmousemove = handleMouseMove;

    return () => {
      canvas.onmousemove = null;
    };
  }
};
